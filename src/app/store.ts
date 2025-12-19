import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { TodosState, ApiTodo } from '../types'

export const useAppStore = create<TodosState>()(
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

            toggleTheme: () => {
                const { theme } = get()
                set({ theme: theme === 'light' ? 'dark' : 'light' })
            },

            fetchTodos: async () => {
                const { todos } = get()
                if (todos.length > 0) return

                set({ status: 'loading' })
                try {
                    const response = await fetch('https://dummyjson.com/todos?limit=5')
                    if (!response.ok) throw new Error('Server Error')
                    const data = await response.json()

                    const apiTodos = data.todos.map((t: ApiTodo) => ({
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
        }
    )
)