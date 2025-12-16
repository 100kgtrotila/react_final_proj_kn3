import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setSearchTerm } from './todosSlice'

const Search: React.FC = () => {
    const dispatch = useAppDispatch()
    const searchTerm = useAppSelector(state => state.todos.searchTerm)

    return (
        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                placeholder="Search tasks..."
                className="w-full rounded-xl border-2 border-slate-300 bg-white py-3 pl-10 pr-4 transition-all focus:border-slate-500 focus:outline-none focus:ring-4 focus:ring-slate-500/20 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:border-neutral-500"
            />
        </div>
    )
}

export default React.memo(Search)
