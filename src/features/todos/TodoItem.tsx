import React, { useState, useCallback } from 'react'
import type { Todo } from '../../types'

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
        if (e.key === 'Enter') {
            handleSave()
        } else if (e.key === 'Escape') {
            setEditText(todo.text)
            setIsEditing(false)
        }
    }, [handleSave, todo.text])

    return (
        <div className="card flex items-center gap-3">
            {/* Checkbox */}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="h-5 w-5 cursor-pointer rounded border-gray-300 text-slate-600 focus:ring-2 focus:ring-slate-500 focus:ring-offset-0 dark:border-neutral-600 dark:bg-neutral-800"
            />

            {/* Text or Input */}
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 rounded-lg border-2 border-slate-300 bg-white px-3 py-2 focus:border-slate-500 focus:outline-none focus:ring-4 focus:ring-slate-500/20 dark:border-neutral-700 dark:bg-neutral-900"
                    autoFocus
                />
            ) : (
                <div className="flex-1">
                    <p className={`font-medium ${todo.completed ? 'line-through opacity-50' : ''}`}>
                        {todo.text}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-neutral-400">
                        {new Date(todo.createdAt).toLocaleDateString('uk-UA')}
                    </p>
                </div>
            )}

            {/* Completed Badge */}
            {todo.completed && !isEditing && (
                <span className="rounded-lg bg-green-100 px-3 py-1 text-sm font-semibold text-green-600 dark:bg-green-900/30 dark:text-green-400">
          ✓ Done
        </span>
            )}

            {/* Actions */}
            <div className="flex gap-2">
                {isEditing ? (
                    <>
                        <button
                            onClick={handleSave}
                            className="rounded-lg p-2 text-green-600 transition-colors hover:bg-green-50 dark:hover:bg-green-900/20"
                            title="Save"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => {
                                setEditText(todo.text)
                                setIsEditing(false)
                            }}
                            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                            title="Cancel"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="rounded-lg p-2 text-blue-600 transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
                            title="Edit"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </button>
                        <button
                            onClick={() => onDelete(todo.id)}
                            className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                            title="Delete"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default React.memo(TodoItem, (prevProps, nextProps) => {
    return (
        prevProps.todo.id === nextProps.todo.id &&
        prevProps.todo.text === nextProps.todo.text &&
        prevProps.todo.completed === nextProps.todo.completed &&
        prevProps.onToggle === nextProps.onToggle &&
        prevProps.onDelete === nextProps.onDelete &&
        prevProps.onEdit === nextProps.onEdit
    )
})
