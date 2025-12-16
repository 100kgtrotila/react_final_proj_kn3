import React, { useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
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
        <main className="container-custom pt-24 pb-16">
            <Link
                to="/labs"
                className="mb-8 inline-flex items-center text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Labs
            </Link>

            <div className="mb-8">
                <h1 className="heading-lg">Todo List Application</h1>
                <p className="text-muted">Redux State Management & CRUD Operations</p>
            </div>

            {allTodos.length === 0 && (
                <div className="card mb-8 border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-900/20">
                    <p className="text-blue-700 dark:text-blue-300">
                        Get started by adding a task below.
                    </p>
                </div>
            )}

            {allTodos.length > 0 && (
                <>
                    <TodoStats />
                    <div className="mt-8">
                        <Search />
                    </div>
                </>
            )}

            <div className="mt-8">
                <TodoForm />
            </div>

            <div className="mt-8">
                <TodoList
                    todos={paginatedTodos}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            </div>

            {filteredTodos.length > 0 && (
                <div className="mt-8">
                    <Pagination totalTodos={filteredTodos.length} />
                </div>
            )}
        </main>
    )
}

export default TodoPage