import React, { useState, useCallback } from 'react'
import type { Todo } from '../../types'
import { Checkbox } from '../../components/ui/checkbox'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Card } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Pencil, Trash2, Check, X, CalendarDays } from 'lucide-react'
import { cn } from '../../lib/utils'

interface TodoItemProps {
    todo: Todo
    onToggle: (id: number) => void
    onDelete: (id: number) => void
    onEdit: (id: number, text: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    const handleSave = useCallback(() => {
        if (editText.trim()) {
            onEdit(todo.id, editText)
            setIsEditing(false)
        }
    }, [onEdit, todo.id, editText])

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSave()
        else if (e.key === 'Escape') {
            setEditText(todo.text)
            setIsEditing(false)
        }
    }, [handleSave, todo.text])

    return (
        <Card className={cn(
            "group flex items-center gap-4 p-4 transition-all duration-300 hover:shadow-md",
            todo.completed ? "bg-muted/50" : "bg-card"
        )}>
            <Checkbox
                checked={todo.completed}
                onCheckedChange={() => onToggle(todo.id)}
                className="h-6 w-6 rounded-full border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />

            <div className="flex-1 min-w-0">
                {isEditing ? (
                    <div className="flex items-center gap-2">
                        <Input
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="h-8"
                            autoFocus
                        />
                    </div>
                ) : (
                    <div className="space-y-1">
                        <p className={cn(
                            "font-medium leading-none transition-all",
                            todo.completed && "text-muted-foreground line-through decoration-muted-foreground/50"
                        )}>
                            {todo.text}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CalendarDays className="h-3 w-3" />
                            {new Date(todo.createdAt).toLocaleDateString('uk-UA')}
                            {todo.completed && (
                                <Badge variant="secondary" className="h-5 px-1.5 text-[10px] font-normal">
                                    Done
                                </Badge>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                {isEditing ? (
                    <>
                        <Button size="icon" variant="ghost" onClick={handleSave} className="h-8 w-8 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/30">
                            <Check className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" onClick={() => setIsEditing(false)} className="h-8 w-8 text-muted-foreground">
                            <X className="h-4 w-4" />
                        </Button>
                    </>
                ) : (
                    <>
                        <Button size="icon" variant="ghost" onClick={() => setIsEditing(true)} className="h-8 w-8 text-primary/80 hover:text-primary">
                            <Pencil className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" onClick={() => onDelete(todo.id)} className="h-8 w-8 text-destructive/80 hover:text-destructive hover:bg-destructive/10">
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </>
                )}
            </div>
        </Card>
    )
}

export default React.memo(TodoItem)