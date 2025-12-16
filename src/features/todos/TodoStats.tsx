import React, { useMemo } from 'react'
import { useAppSelector } from '../../app/hooks'

const TodoStats: React.FC = () => {
    const allTodos = useAppSelector((state) => state.todos.items)

    const stats = useMemo(() => ({
        total: allTodos.length,
        completed: allTodos.filter((t) => t.completed).length,
        active: allTodos.filter((t) => !t.completed).length,
    }), [allTodos])

    return (
        <div className="flex flex-wrap gap-3">
            <div className="rounded-lg border-2 border-slate-300 bg-white px-4 py-2 font-semibold dark:border-neutral-700 dark:bg-neutral-900">
                📊 Total: {stats.total}
            </div>
            <div className="rounded-lg border-2 border-green-300 bg-white px-4 py-2 font-semibold text-green-600 dark:border-green-700 dark:bg-neutral-900 dark:text-green-400">
                ✓ Completed: {stats.completed}
            </div>
            <div className="rounded-lg border-2 border-blue-300 bg-white px-4 py-2 font-semibold text-blue-600 dark:border-blue-700 dark:bg-neutral-900 dark:text-blue-400">
                ○ Active: {stats.active}
            </div>
        </div>
    )
}

export default TodoStats
