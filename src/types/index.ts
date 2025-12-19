export interface Todo {
    id: number
    text: string
    completed: boolean
    createdAt: string
}

export interface ApiTodo {
    id: number
    todo: string
    completed: boolean
    userId: number
}

export interface TodosState {
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
    toggleTheme: () => void
    fetchTodos: () => Promise<void>
}

export type Theme = 'light' | 'dark'