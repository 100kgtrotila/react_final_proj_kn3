import { Routes, Route } from 'react-router-dom'
import MainLayout from './shared/Layout/MainLayout'
import Home from './pages/Home'
import TodoPage from './pages/TodoPage'
import Lab1 from './pages/Lab1'
import Lab2 from './pages/Lab2'
import Labs from './pages/Labs'

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo-list" element={<TodoPage />} />
                <Route path="/labs" element={<Labs />} />
                <Route path="/lab1" element={<Lab1 />} />
                <Route path="/lab2" element={<Lab2 />} />
            </Routes>
        </MainLayout>
    )
}

export default App
