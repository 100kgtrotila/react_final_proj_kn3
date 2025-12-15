import React from 'react'
import { List, Paper, Typography } from '@mui/material'
import type { Todo } from '../../types'
import TodoItem from './TodoItem'

interface TodoListProps {
    todos: Todo[]
    onToggle: (id: number) => void
    onDelete: (id: number) => void
    onEdit: (id: number, text: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onEdit }) => {
    if (todos.length === 0) {
        return (
            <Paper sx={{ p: 3, mt: 2, textAlign: 'center' }}>
                <Typography variant="body1" color="text.secondary">
                    No tasks yet. Add one!
                </Typography>
            </Paper>
        )
    }

    return (
        <List sx={{ mt: 2 }}>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </List>
    )
}

export default React.memo(TodoList, (prevProps, nextProps) => {
    if (prevProps.todos.length !== nextProps.todos.length) return false
    if (prevProps.onToggle !== nextProps.onToggle) return false
    if (prevProps.onDelete !== nextProps.onDelete) return false
    if (prevProps.onEdit !== nextProps.onEdit) return false

    for (let i = 0; i < prevProps.todos.length; i++) {
        if (prevProps.todos[i].id !== nextProps.todos[i].id) return false
        if (prevProps.todos[i].text !== nextProps.todos[i].text) return false
        if (prevProps.todos[i].completed !== nextProps.todos[i].completed) return false
    }

    return true
})
