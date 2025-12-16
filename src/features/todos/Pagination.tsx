import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setCurrentPage, setLimitPerPage } from './todosSlice'

interface PaginationProps {
    totalTodos: number
}

const Pagination: React.FC<PaginationProps> = ({ totalTodos }) => {
    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(state => state.todos.currentPage)
    const limitPerPage = useAppSelector(state => state.todos.limitPerPage)

    const totalPages = Math.ceil(totalTodos / limitPerPage)

    const handlePrevPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1))
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1))
        }
    }

    if (totalTodos === 0) return null

    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="btn btn-outline disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-muted px-4">
          Page {currentPage} of {totalPages}
        </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="btn btn-outline disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-slate-700 dark:text-neutral-300">
                    Per page:
                </label>
                <select
                    value={limitPerPage}
                    onChange={(e) => dispatch(setLimitPerPage(Number(e.target.value)))}
                    className="rounded-lg border-2 border-slate-300 bg-white px-3 py-2 transition-colors focus:border-slate-500 focus:outline-none focus:ring-4 focus:ring-slate-500/20 dark:border-neutral-700 dark:bg-neutral-900"
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>
        </div>
    )
}

export default React.memo(Pagination)
