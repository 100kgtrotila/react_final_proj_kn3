import React, { useMemo, useCallback } from 'react'
import { Typography, Box, Stack, Divider, Alert } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { toggleTodo, deleteTodo, editTodo } from '../features/todos/todosSlice'
import TodoList from '../features/todos/TodoList'
import TodoForm from '../features/todos/TodoForm'
import Pagination from '../features/todos/Pagination'
import Search from '../features/todos/Search'
import TodoStats from '../features/todos/TodoStats'

const TodoPage: React.FC = () => {
    const dispatch = useAppDispatch()

    const allTodos = useAppSelector(state => state.todos.items)
    const searchTerm = useAppSelector(state => state.todos.searchTerm)
    const currentPage = useAppSelector(state => state.todos.currentPage)
    const limitPerPage = useAppSelector(state => state.todos.limitPerPage)

    const handleToggle = useCallback((id: number) => {
        dispatch(toggleTodo(id))
    }, [dispatch])

    const handleDelete = useCallback((id: number) => {
        dispatch(deleteTodo(id))
    }, [dispatch])

    const handleEdit = useCallback((id: number, text: string) => {
        dispatch(editTodo({ id, text }))
    }, [dispatch])

    const filteredTodos = useMemo(() => {
        if (!searchTerm.trim()) {
            return allTodos
        }
        return allTodos.filter(todo =>
            todo.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [allTodos, searchTerm])

    const paginatedTodos = useMemo(() => {
        const startIndex = (currentPage - 1) * limitPerPage
        const endIndex = startIndex + limitPerPage
        return filteredTodos.slice(startIndex, endIndex)
    }, [filteredTodos, currentPage, limitPerPage])

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
            <Stack spacing={3}>
                <Typography variant="h3">
                    Todo List
                </Typography>

                {allTodos.length === 0 && (
                    <Alert severity="info">
                        Welcome! Start by adding your first task below.
                    </Alert>
                )}

                <TodoForm />

                <Divider />

                {allTodos.length > 0 && (
                    <>
                        <Search />
                        <TodoStats />
                        <TodoList
                            todos={paginatedTodos}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                        <Pagination totalTodos={filteredTodos.length} />
                    </>
                )}
            </Stack>
        </Box>
    )
}

export default TodoPage
