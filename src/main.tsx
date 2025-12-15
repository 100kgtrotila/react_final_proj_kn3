import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { store } from './app/store'
import App from './App'
import { useAppSelector } from './app/hooks'
import { selectThemeMode } from './features/theme/themeSlice'
import { getTheme } from './shared/ui/theme'

const ThemedApp = () => {
    const mode = useAppSelector(selectThemeMode)
    const theme = React.useMemo(() => getTheme(mode), [mode])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemedApp />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
