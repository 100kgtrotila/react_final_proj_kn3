import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { toggleTodo, deleteTodo, editTodo } from '../features/todos/todosSlice'
import { useTodos } from '../features/todos/useTodos'
import TodoList from '../features/todos/TodoList'
import TodoForm from '../features/todos/TodoForm'
import Pagination from '../features/todos/Pagination'
import Search from '../features/todos/Search'
import TodoStats from '../features/todos/TodoStats'
import { Button } from '../components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { Alert, AlertDescription } from '../components/ui/alert'

const TodoPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const { paginatedTodos, filteredCount, allTodosCount } = useTodos()

    const handleToggle = useCallback((id: number) => {
        dispatch(toggleTodo(id))
    }, [dispatch])

    const handleDelete = useCallback((id: number) => {
        dispatch(deleteTodo(id))
    }, [dispatch])

    const handleEdit = useCallback((id: number, text: string) => {
        dispatch(editTodo({ id, text }))
    }, [dispatch])

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
                <Link to="/labs">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Labs
                </Link>
            </Button>

            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Todo List Application</h1>
                <p className="text-muted-foreground">
                    Advanced state management with Redux Toolkit, LocalStorage persistence, and CRUD operations.
                </p>
            </div>

            {allTodosCount === 0 && (
                <Alert className="bg-blue-50/50 text-blue-900 border-blue-200 dark:bg-blue-900/20 dark:text-blue-200 dark:border-blue-900">
                    <AlertDescription>
                        Your list is empty! Get started by adding a new task below.
                    </AlertDescription>
                </Alert>
            )}

            <div className="space-y-6">
                {allTodosCount > 0 && (
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <TodoStats />
                        <div className="w-full sm:w-72">
                            <Search />
                        </div>
                    </div>
                )}

                <TodoForm />

                <TodoList
                    todos={paginatedTodos}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
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