import { BrowserRouter } from 'react-router-dom'
import MainLayout from './shared/Layout/MainLayout'
import AppRouter from './app/AppRouter'
import { ThemeProvider } from './theme/ThemeProvider'

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <MainLayout>
                    <AppRouter />
                </MainLayout>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App