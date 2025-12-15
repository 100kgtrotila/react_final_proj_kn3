import React from 'react'
import { Typography, Paper, Box, List, ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

const Labs: React.FC = () => {
    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
                Лабораторні роботи
            </Typography>

            <Paper elevation={2} sx={{ p: 2 }}>
                <List>
                    <ListItem
                        component={Link}
                        to="/lab1"
                        sx={{
                            '&:hover': { bgcolor: 'action.hover' },
                            borderRadius: 1,
                        }}
                    >
                        <ListItemText
                            primary="Лабораторна робота №1"
                            secondary="Основи React"
                        />
                    </ListItem>

                    <ListItem
                        component={Link}
                        to="/lab2"
                        sx={{
                            '&:hover': { bgcolor: 'action.hover' },
                            borderRadius: 1,
                        }}
                    >
                        <ListItemText
                            primary="Лабораторна робота №2"
                            secondary="Компоненти та стилізація"
                        />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    )
}

export default Labs
