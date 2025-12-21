import { Todo } from '@/types'
import { API_URL } from '@/shared/constants'

interface ApiTodoResponse {
    todos: {
        id: number
        todo: string
        completed: boolean
        userId: number
    }[]
    total: number
    skip: number
    limit: number
}

export const todoApi = {
    fetchTodos: async (limit: number = 5): Promise<Todo[]> => {
        const response = await fetch(`${API_URL}?limit=${limit}`)

        if (!response.ok) {
            throw new Error('Failed to fetch todos')
        }

        const data: ApiTodoResponse = await response.json()

        return data.todos.map((t) => ({
            id: t.id,
            text: t.todo,
            completed: t.completed,
            createdAt: new Date().toISOString()
        }))
    }
}