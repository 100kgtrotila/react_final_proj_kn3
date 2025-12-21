import { useMemo } from 'react'
import { useAppStore } from '@/app/store.ts'

export const useTodos = () => {
    const todos = useAppStore((state) => state.todos)
    const searchTerm = useAppStore((state) => state.searchTerm)
    const currentPage = useAppStore((state) => state.currentPage)
    const limitPerPage = useAppStore((state) => state.limitPerPage)

    const filteredTodos = useMemo(() => {
        return todos.filter(todo =>
            todo.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [todos, searchTerm])

    const totalPages = Math.ceil(filteredTodos.length / limitPerPage)

    const paginatedTodos = useMemo(() => {
        const startIndex = (currentPage - 1) * limitPerPage
        return filteredTodos.slice(startIndex, startIndex + limitPerPage)
    }, [filteredTodos, currentPage, limitPerPage])

    return {
        paginatedTodos,
        filteredCount: filteredTodos.length,
        allTodosCount: todos.length,
        totalPages
    }
}