import React, { useState, useCallback } from 'react'
import {
    ListItem,
    ListItemText,
    IconButton,
    Checkbox,
    TextField,
    Box,
    Chip,
    Tooltip,
} from '@mui/material'
import { Edit, Delete, Save, Cancel } from '@mui/icons-material'
import type { Todo } from '../../types'

interface TodoItemProps {
    todo: Todo
    onToggle: (id: number) => void
    onDelete: (id: number) => void
    onEdit: (id: number, text: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    const handleToggle = useCallback(() => {
        onToggle(todo.id)
    }, [onToggle, todo.id])

    const handleDelete = useCallback(() => {
        onDelete(todo.id)
    }, [onDelete, todo.id])

    const handleEditToggle = useCallback(() => {
        setIsEditing(prev => !prev)
        if (!isEditing) {
            setEditText(todo.text)
        }
    }, [isEditing, todo.text])

    const handleSave = useCallback(() => {
        if (editText.trim()) {
            onEdit(todo.id, editText)
            setIsEditing(false)
        }
    }, [onEdit, todo.id, editText])

    const handleCancel = useCallback(() => {
        setEditText(todo.text)
        setIsEditing(false)
    }, [todo.text])

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (editText.trim()) {
                onEdit(todo.id, editText)
                setIsEditing(false)
            }
        } else if (e.key === 'Escape') {
            setEditText(todo.text)
            setIsEditing(false)
        }
    }, [onEdit, todo.id, editText, todo.text])

    return (
        <ListItem
            sx={{
                bgcolor: 'background.paper',
                mb: 1,
                borderRadius: 1,
                border: 1,
                borderColor: 'divider',
                transition: 'all 0.2s',
                '&:hover': {
                    bgcolor: 'action.hover',
                    borderColor: 'primary.main',
                },
            }}
        >
            <Tooltip title={todo.completed ? "Mark as incomplete" : "Mark as complete"}>
                <Checkbox checked={todo.completed} onChange={handleToggle} />
            </Tooltip>

            {isEditing ? (
                <TextField
                    fullWidth
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    variant="standard"
                    size="small"
                />
            ) : (
                <ListItemText
                    primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {todo.text}
                            {todo.completed && (
                                <Chip label="Completed" color="success" size="small" />
                            )}
                        </Box>
                    }
                    secondary={new Date(todo.createdAt).toLocaleDateString('uk-UA')}
                    sx={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        opacity: todo.completed ? 0.6 : 1,
                    }}
                />
            )}

            <Box sx={{ display: 'flex', gap: 0.5 }}>
                {isEditing ? (
                    <>
                        <Tooltip title="Save">
                            <IconButton edge="end" onClick={handleSave} color="primary" size="small">
                                <Save />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Cancel">
                            <IconButton edge="end" onClick={handleCancel} size="small">
                                <Cancel />
                            </IconButton>
                        </Tooltip>
                    </>
                ) : (
                    <>
                        <Tooltip title="Edit task">
                            <IconButton edge="end" onClick={handleEditToggle} size="small">
                                <Edit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete task">
                            <IconButton edge="end" onClick={handleDelete} color="error" size="small">
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </>
                )}
            </Box>
        </ListItem>
    )
}

export default React.memo(TodoItem, (prevProps, nextProps) => {
    return (
        prevProps.todo.id === nextProps.todo.id &&
        prevProps.todo.text === nextProps.todo.text &&
        prevProps.todo.completed === nextProps.todo.completed &&
        prevProps.onToggle === nextProps.onToggle &&
        prevProps.onDelete === nextProps.onDelete &&
        prevProps.onEdit === nextProps.onEdit
    )
})
