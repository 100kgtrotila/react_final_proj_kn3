import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Todo, Theme } from '@/types'
import { todoApi } from '@/features/todos/api'
import { DEFAULT_PAGE_LIMIT } from '@/shared/constants'

interface AppState {
    todos: Todo[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
    currentPage: number
    limitPerPage: number
    searchTerm: string
    theme: Theme

    addTodo: (text: string) => void
    toggleTodo: (id: number) => void
    deleteTodo: (id: number) => void
    editTodo: (id: number, text: string) => void
    setPage: (page: number) => void
    setSearch: (term: string) => void
    setLimitPerPage: (limit: number) => void
    toggleTheme: () => void
    fetchTodos: () => Promise<void>
}

export const useAppStore = create<AppState>()(
    persist(
        (set, get) => ({
            todos: [],
            status: 'idle',
            error: null,
            currentPage: 1,
            limitPerPage: DEFAULT_PAGE_LIMIT,
            searchTerm: '',
            theme: 'dark',

            addTodo: (text) => set((state) => ({
                todos: [{
                    id: Date.now(),
                    text,
                    completed: false,
                    createdAt: new Date().toISOString()
                }, ...state.todos]
            })),

            toggleTodo: (id) => set((state) => ({
                todos: state.todos.map(t =>
                    t.id === id ? { ...t, completed: !t.completed } : t
                )
            })),

            deleteTodo: (id) => set((state) => ({
                todos: state.todos.filter(t => t.id !== id)
            })),

            editTodo: (id, text) => set((state) => ({
                todos: state.todos.map(t =>
                    t.id === id ? { ...t, text } : t
                )
            })),

            setPage: (page) => set({ currentPage: page }),

            setSearch: (term) => set({ searchTerm: term, currentPage: 1 }),

            setLimitPerPage: (limit) => set({ limitPerPage: limit, currentPage: 1 }),

            toggleTheme: () => {
                const { theme } = get()
                set({ theme: theme === 'light' ? 'dark' : 'light' })
            },

            fetchTodos: async () => {
                const { todos } = get()
                if (todos.length > 0) return

                set({ status: 'loading' })
                try {
                    const apiTodos = await todoApi.fetchTodos()
                    set({ status: 'succeeded', todos: apiTodos })
                } catch (error) {
                    set({ status: 'failed', error: 'Failed to fetch tasks' })
                }
            }
        }),
        {
            name: 'app-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)