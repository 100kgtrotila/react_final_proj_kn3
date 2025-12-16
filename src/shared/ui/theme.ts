import { createTheme } from '@mui/material/styles';

// Світла тема з градієнтами
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#6366f1', // indigo
            light: '#818cf8',
            dark: '#4f46e5',
        },
        secondary: {
            main: '#ec4899', // pink
            light: '#f472b6',
            dark: '#db2777',
        },
        background: {
            default: '#f8fafc',
            paper: 'rgba(255, 255, 255, 0.8)',
        },
        text: {
            primary: '#0f172a',
            secondary: '#64748b',
        },
        divider: 'rgba(148, 163, 184, 0.2)',
    },
    typography: {
        fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 800,
            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        h2: { fontWeight: 700 },
        h4: { fontWeight: 700 },
        h5: { fontWeight: 600 },
        button: { fontWeight: 600, textTransform: 'none' },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                    backgroundAttachment: 'fixed',
                    minHeight: '100vh',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 48px rgba(0, 0, 0, 0.15)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    fontWeight: 600,
                    textTransform: 'none',
                    padding: '10px 24px',
                },
                contained: {
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    color: '#ffffff',
                    boxShadow: '0 4px 16px rgba(99, 102, 241, 0.4)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                        boxShadow: '0 6px 24px rgba(99, 102, 241, 0.5)',
                        transform: 'translateY(-2px)',
                    },
                },
                outlined: {
                    borderColor: '#6366f1',
                    color: '#6366f1',
                    borderWidth: '2px',
                    '&:hover': {
                        borderWidth: '2px',
                        borderColor: '#4f46e5',
                        background: 'rgba(99, 102, 241, 0.1)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        '& fieldset': {
                            borderColor: 'rgba(99, 102, 241, 0.3)',
                            borderWidth: '2px',
                        },
                        '&:hover fieldset': {
                            borderColor: '#6366f1',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#6366f1',
                            boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.1)',
                        },
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    fontWeight: 600,
                },
                outlined: {
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderWidth: '2px',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    marginBottom: '8px',
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.8)',
                        transform: 'translateX(4px)',
                    },
                },
            },
        },
    },
});

// Темна тема з неоновими акцентами
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#818cf8',
            light: '#a5b4fc',
            dark: '#6366f1',
        },
        secondary: {
            main: '#f472b6',
            light: '#f9a8d4',
            dark: '#ec4899',
        },
        background: {
            default: '#0f172a',
            paper: 'rgba(30, 41, 59, 0.8)',
        },
        text: {
            primary: '#f1f5f9',
            secondary: '#94a3b8',
        },
        divider: 'rgba(148, 163, 184, 0.2)',
    },
    typography: lightTheme.typography,
    shape: lightTheme.shape,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e293b 100%)',
                    backgroundAttachment: 'fixed',
                    minHeight: '100vh',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'rgba(30, 41, 59, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 48px rgba(129, 140, 248, 0.3)',
                        border: '1px solid rgba(129, 140, 248, 0.4)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: 'rgba(30, 41, 59, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    fontWeight: 600,
                    textTransform: 'none',
                    padding: '10px 24px',
                },
                contained: {
                    background: 'linear-gradient(135deg, #818cf8 0%, #a855f7 100%)',
                    color: '#ffffff',
                    boxShadow: '0 4px 16px rgba(129, 140, 248, 0.4)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #6366f1 0%, #9333ea 100%)',
                        boxShadow: '0 6px 24px rgba(129, 140, 248, 0.6)',
                        transform: 'translateY(-2px)',
                    },
                },
                outlined: {
                    borderColor: '#818cf8',
                    color: '#818cf8',
                    borderWidth: '2px',
                    '&:hover': {
                        borderWidth: '2px',
                        borderColor: '#a5b4fc',
                        background: 'rgba(129, 140, 248, 0.1)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        background: 'rgba(30, 41, 59, 0.6)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        '& fieldset': {
                            borderColor: 'rgba(129, 140, 248, 0.3)',
                            borderWidth: '2px',
                        },
                        '&:hover fieldset': {
                            borderColor: '#818cf8',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#818cf8',
                            boxShadow: '0 0 0 4px rgba(129, 140, 248, 0.2)',
                        },
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    fontWeight: 600,
                },
                outlined: {
                    background: 'rgba(30, 41, 59, 0.6)',
                    backdropFilter: 'blur(10px)',
                    borderWidth: '2px',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(129, 140, 248, 0.2)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    marginBottom: '8px',
                    background: 'rgba(30, 41, 59, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: 'rgba(30, 41, 59, 0.8)',
                        transform: 'translateX(4px)',
                        border: '1px solid rgba(129, 140, 248, 0.4)',
                    },
                },
            },
        },
    },
});

export const getTheme = (mode: 'light' | 'dark') =>
    mode === 'dark' ? darkTheme : lightTheme;
