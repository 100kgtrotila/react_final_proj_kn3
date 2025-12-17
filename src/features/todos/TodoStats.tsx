import React, { useMemo } from 'react'
import { useAppSelector } from '../../app/hooks'
import { Badge } from '../../components/ui/badge'

const TodoStats: React.FC = () => {
    const allTodos = useAppSelector((state) => state.todos.items)

    const stats = useMemo(() => ({
        total: allTodos.length,
        completed: allTodos.filter((t) => t.completed).length,
        active: allTodos.filter((t) => !t.completed).length,
    }), [allTodos])

    return (
        <div className="flex gap-3">
            <Badge variant="outline" className="px-3 py-1 text-sm">
                Total: {stats.total}
            </Badge>
            <Badge variant="default" className="px-3 py-1 text-sm bg-green-600 hover:bg-green-700">
                Completed: {stats.completed}
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 text-sm">
                Active: {stats.active}
            </Badge>
        </div>
    )
}

export default TodoStats