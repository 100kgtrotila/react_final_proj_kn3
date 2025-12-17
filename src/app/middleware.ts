import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import { addTodo, toggleTodo, deleteTodo, editTodo } from '../features/todos/todosSlice'
import { toggleTheme, setTheme } from '../features/theme/themeSlice'
import type { RootState } from './store'
import { safeLocalStorage } from '../shared/lib/localStorage'

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    matcher: isAnyOf(addTodo, toggleTodo, deleteTodo, editTodo),
    effect: (_, listenerApi) => {
        const state = listenerApi.getState() as RootState
        safeLocalStorage.setItem('todos', JSON.stringify(state.todos.items))
    },
})

listenerMiddleware.startListening({
    matcher: isAnyOf(toggleTheme, setTheme),
    effect: (_, listenerApi) => {
        const state = listenerApi.getState() as RootState
        const mode = state.theme.mode

        const root = document.documentElement
        if (mode === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }

        safeLocalStorage.setItem('theme', mode)
    },
})