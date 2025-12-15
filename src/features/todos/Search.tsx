import React from 'react'
import { TextField } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setSearchTerm } from './todosSlice'

const Search: React.FC = () => {
    const dispatch = useAppDispatch()
    const searchTerm = useAppSelector(state => state.todos.searchTerm)

    return (
        <TextField
            fullWidth
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            placeholder="Search tasks..."
            variant="outlined"
            size="small"
            slotProps={{
                input: {
                    startAdornment: <SearchIcon sx={{ mr: 1, color: 'action.active' }} />
                }
            }}
        />
    )
}

export default React.memo(Search)
