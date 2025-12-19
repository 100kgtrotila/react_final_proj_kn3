import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Todo, Theme } from '@/types'

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
            limitPerPage: 5,
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
                const newTheme = theme === 'light' ? 'dark' : 'light'
                const root = window.document.documentElement
                root.classList.remove('light', 'dark')
                root.classList.add(newTheme)
                set({ theme: newTheme })
            },

            fetchTodos: async () => {
                const { todos } = get()
                if (todos.length > 0) return

                set({ status: 'loading' })
                try {
                    const response = await fetch('https://dummyjson.com/todos?limit=5')
                    if (!response.ok) throw new Error('Server Error')
                    const data = await response.json()

                    const apiTodos = data.todos.map((t: any) => ({
                        id: t.id,
                        text: t.todo,
                        completed: t.completed,
                        createdAt: new Date().toISOString()
                    }))

                    set({ status: 'succeeded', todos: apiTodos })
                } catch (error) {
                    set({ status: 'failed', error: 'Failed to fetch' })
                }
            }
        }),
        {
            name: 'app-storage',
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: () => (state) => {
                if (state) {
                    const root = window.document.documentElement
                    root.classList.remove('light', 'dark')
                    root.classList.add(state.theme)
                }
            }
        }
    )
)