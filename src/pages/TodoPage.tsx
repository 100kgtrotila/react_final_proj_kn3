import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppStore } from '../app/store'
import { useTodos } from '../features/todos/useTodos'
import TodoList from '../features/todos/TodoList'
import TodoForm from '../features/todos/TodoForm'
import Pagination from '../features/todos/Pagination'
import Search from '../features/todos/Search'
import TodoStats from '../features/todos/TodoStats'
import { Button } from '../components/ui/button'
import { ChevronLeft, Loader2 } from 'lucide-react'
import { Alert, AlertDescription } from '../components/ui/alert'
import { PAGINATION_LIMITS } from '@/shared/constants'

const TodoPage: React.FC = () => {
    const { paginatedTodos, filteredCount, allTodosCount } = useTodos()

    const fetchTodos = useAppStore((state) => state.fetchTodos)
    const status = useAppStore((state) => state.status)
    const toggleTodo = useAppStore((state) => state.toggleTodo)
    const deleteTodo = useAppStore((state) => state.deleteTodo)
    const editTodo = useAppStore((state) => state.editTodo)

    const limitPerPage = useAppStore((state) => state.limitPerPage)
    const setLimitPerPage = useAppStore((state) => state.setLimitPerPage)

    useEffect(() => {
        fetchTodos()
    }, [fetchTodos])

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
                <Link to="/labs">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Labs
                </Link>
            </Button>

            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Todo List</h1>
            </div>

            {status === 'loading' && allTodosCount === 0 && (
                <div className="flex justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            )}

            {status === 'failed' && (
                <Alert variant="destructive">
                    <AlertDescription>Failed to load tasks.</AlertDescription>
                </Alert>
            )}

            {allTodosCount === 0 && status !== 'loading' && (
                <Alert className="bg-blue-50/50 text-blue-900 border-blue-200 dark:bg-blue-900/20 dark:text-blue-200 dark:border-blue-900">
                    <AlertDescription>Your list is empty!</AlertDescription>
                </Alert>
            )}

            <div className="space-y-6">
                {allTodosCount > 0 && (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <TodoStats />
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <Search />
                                <select
                                    className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    value={limitPerPage}
                                    onChange={(e) => setLimitPerPage(Number(e.target.value))}
                                >
                                    {PAGINATION_LIMITS.map(limit => (
                                        <option key={limit} value={limit}>
                                            {limit} per page
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                <TodoForm />

                <TodoList
                    todos={paginatedTodos}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                />

                {filteredCount > 0 && (
                    <div className="pt-4 border-t">
                        <Pagination totalTodos={filteredCount} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default TodoPage