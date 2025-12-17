import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { addTodo } from './todosSlice'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { PlusCircle } from 'lucide-react'

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
        <form onSubmit={handleSubmit} className="flex w-full items-center gap-4">
            <Input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="What needs to be done?"
                className="h-12 text-base"
            />
            <Button type="submit" size="lg" className="h-12 gap-2">
                <PlusCircle className="h-5 w-5" />
                Add
            </Button>
        </form>
    )
}

export default React.memo(TodoForm)