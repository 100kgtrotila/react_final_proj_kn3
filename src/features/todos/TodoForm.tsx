import React, { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'
import { useAppDispatch } from '../../app/hooks'
import { addTodo } from './todosSlice'

const TodoForm: React.FC = () => {
    const [inputText, setInputText] = useState('')
    const dispatch = useAppDispatch()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputText.trim()) {
            dispatch(addTodo(inputText))
            setInputText('')
        }
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <TextField
                fullWidth
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Add a new task..."
                variant="outlined"
                size="medium"
            />
            <Button type="submit" variant="contained" size="large">
                Add
            </Button>
        </Box>
    )
}

export default React.memo(TodoForm)
