export interface Todo {
    id: number
    text: string
    completed: boolean
    createdAt: string
}

export interface TodosState {
    items: Todo[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
    currentPage: number
    limitPerPage: number
    searchTerm: string
}
