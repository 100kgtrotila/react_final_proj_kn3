import React from 'react'
import { useAppStore } from '@/app/store.ts'
import { Button } from '../../components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
    totalTodos: number
}

const Pagination: React.FC<PaginationProps> = ({ totalTodos }) => {
    const currentPage = useAppStore((state) => state.currentPage)
    const limitPerPage = useAppStore((state) => state.limitPerPage)
    const setPage = useAppStore((state) => state.setPage)

    const totalPages = Math.ceil(totalTodos / limitPerPage)

    if (totalPages <= 1) return null

    return (
        <div className="flex items-center justify-center gap-2">
            <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">
                Page {currentPage} of {totalPages}
            </span>
            <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}

export default React.memo(Pagination)