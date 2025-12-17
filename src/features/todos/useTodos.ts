import { useMemo } from 'react'
import { useAppSelector } from '../../app/hooks'
import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

const selectTodos = (state: RootState) => state.todos.items
const selectSearchTerm = (state: RootState) => state.todos.searchTerm
const selectPagination = (state: RootState) => ({
    currentPage: state.todos.currentPage,
    limitPerPage: state.todos.limitPerPage
})

const selectFilteredTodos = createSelector(
    [selectTodos, selectSearchTerm],
    (items, searchTerm) => {
        if (!searchTerm.trim()) {
            return items
        }
        return items.filter(todo =>
            todo.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }
)

export const useTodos = () => {
    const filteredTodos = useAppSelector(selectFilteredTodos)
    const { currentPage, limitPerPage } = useAppSelector(selectPagination)
    const allTodosCount = useAppSelector(state => state.todos.items.length)

    const paginatedTodos = useMemo(() => {
        const startIndex = (currentPage - 1) * limitPerPage
        const endIndex = startIndex + limitPerPage
        return filteredTodos.slice(startIndex, endIndex)
    }, [filteredTodos, currentPage, limitPerPage])

    return {
        paginatedTodos,
        filteredCount: filteredTodos.length,
        allTodosCount,
    }
}