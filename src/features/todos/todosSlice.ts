import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Todo, TodosState } from '../../types'
import { safeLocalStorage } from '../../shared/lib/localStorage'

const initialState: TodosState = {
    items: JSON.parse(safeLocalStorage.getItem('todos') || '[]'),
    status: 'idle',
    error: null,
    currentPage: 1,
    limitPerPage: 10,
    searchTerm: '',
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: Date.now() + Math.random(),
                text: action.payload,
                completed: false,
                createdAt: new Date().toISOString(),
            }
            state.items.unshift(newTodo)
            safeLocalStorage.setItem('todos', JSON.stringify(state.items))
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.items.find(t => t.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
                safeLocalStorage.setItem('todos', JSON.stringify(state.items))
            }
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(t => t.id !== action.payload)
            safeLocalStorage.setItem('todos', JSON.stringify(state.items))
        },
        editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
            const todo = state.items.find(t => t.id === action.payload.id)
            if (todo) {
                todo.text = action.payload.text
                safeLocalStorage.setItem('todos', JSON.stringify(state.items))
            }
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setLimitPerPage: (state, action: PayloadAction<number>) => {
            state.limitPerPage = action.payload
            state.currentPage = 1
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload
            state.currentPage = 1
        },
    },
})

export const {
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    setCurrentPage,
    setLimitPerPage,
    setSearchTerm
} = todosSlice.actions

export default todosSlice.reducer
