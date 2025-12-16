import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { addTodo } from './todosSlice'

const TodoForm: React.FC = () => {
    const [inputText, setInputText] = useState('')
    const dispatch = useAppDispatch()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputText.trim()) {
            dispatch(addTodo(inputText))
            setInputText('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-3">
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 rounded-xl border-2 border-slate-300 bg-white px-4 py-3 transition-all focus:border-slate-500 focus:outline-none focus:ring-4 focus:ring-slate-500/20 dark:border-neutral-700 dark:bg-neutral-900"
            />
            <button
                type="submit"
                className="btn btn-primary whitespace-nowrap px-8"
            >
                Add Task
            </button>
        </form>
    )
}

export default React.memo(TodoForm)
