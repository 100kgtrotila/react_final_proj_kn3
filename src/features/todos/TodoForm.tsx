import React, { useState } from 'react'
import { useAppStore } from '@/app/store.ts'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { PlusCircle } from 'lucide-react'

const TodoForm: React.FC = () => {
    const [text, setText] = useState('')
    const addTodo = useAppStore((state) => state.addTodo)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (text.trim()) {
            addTodo(text)
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full items-center gap-4">
            <Input
                type="text"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="h-12 text-base flex-1" // Збільшена висота та шрифт
            />
            <Button type="submit" size="lg" className="h-12 gap-2 text-base"> {/* Збільшена кнопка та шрифт */}
                <PlusCircle className="h-5 w-5" />
                Add Task
            </Button>
        </form>
    )
}

export default React.memo(TodoForm)