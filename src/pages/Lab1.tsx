import React from 'react'
import { Typography, Paper, Box } from '@mui/material'

const Lab1: React.FC = () => {
    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
                Лабораторна робота №1
            </Typography>

            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Тема: Розгорнути проєкт
                </Typography>
            </Paper>
        </Box>
    )
}

export default Lab1
