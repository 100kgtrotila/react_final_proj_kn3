import { Routes, Route } from 'react-router-dom'
import MainLayout from './shared/Layout/MainLayout'
import Home from './pages/Home'
import Labs from './pages/Labs'
import Lab1 from './pages/Lab1'
import Lab2 from './pages/Lab2'
import TodoPage from './pages/TodoPage'
import NotFound from './pages/NotFound'

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/labs" element={<Labs />} />
                <Route path="/labs/lab1" element={<Lab1 />} />
                <Route path="/labs/lab2" element={<Lab2 />} />
                <Route path="/labs/todo" element={<TodoPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </MainLayout>
    )
}

export default App
