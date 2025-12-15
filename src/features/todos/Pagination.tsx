import React from 'react'
import { Box, Button, Select, MenuItem, FormControl, InputLabel, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setCurrentPage, setLimitPerPage } from './todosSlice'

interface PaginationProps {
    totalTodos: number
}

const Pagination: React.FC<PaginationProps> = ({ totalTodos }) => {
    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(state => state.todos.currentPage)
    const limitPerPage = useAppSelector(state => state.todos.limitPerPage)

    const totalPages = Math.ceil(totalTodos / limitPerPage)

    const handlePrevPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1))
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1))
        }
    }

    const handleLimitChange = (event: any) => {
        dispatch(setLimitPerPage(Number(event.target.value)))
    }

    if (totalTodos === 0) return null

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Button
                    variant="contained"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                <Typography>
                    Page {currentPage} of {totalPages}
                </Typography>
                <Button
                    variant="contained"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </Box>

            <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Per page</InputLabel>
                <Select value={limitPerPage} onChange={handleLimitChange} label="Per page">
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default React.memo(Pagination)
