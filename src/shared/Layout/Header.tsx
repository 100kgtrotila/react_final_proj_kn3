import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleTheme, selectThemeMode } from '../../features/theme/themeSlice'

const Header: React.FC = () => {
    const dispatch = useAppDispatch()
    const mode = useAppSelector(selectThemeMode)

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Student Portfolio - Маринич Данило, КН-3
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/todo-list">
                        Todo List
                    </Button>
                    <Button color="inherit" component={Link} to="/labs">
                        Labs
                    </Button>
                    <IconButton color="inherit" onClick={() => dispatch(toggleTheme())}>
                        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
