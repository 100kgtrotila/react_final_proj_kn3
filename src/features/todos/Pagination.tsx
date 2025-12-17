import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setCurrentPage, setLimitPerPage } from './todosSlice'
import { Button } from '../../components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"

interface PaginationProps {
    totalTodos: number
}

const Pagination: React.FC<PaginationProps> = ({ totalTodos }) => {
    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(state => state.todos.currentPage)
    const limitPerPage = useAppSelector(state => state.todos.limitPerPage)

    const totalPages = Math.ceil(totalTodos / limitPerPage)

    const handlePrevPage = () => {
        if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1))
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) dispatch(setCurrentPage(currentPage + 1))
    }

    if (totalTodos === 0) return null

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <ChevronLeft className="h-4 w-4 mr-1" /> Prev
                </Button>

                <span className="text-sm font-medium text-muted-foreground min-w-[100px] text-center">
                  Page {currentPage} of {totalPages}
                </span>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Rows per page:</span>
                <Select
                    value={String(limitPerPage)}
                    onValueChange={(val) => dispatch(setLimitPerPage(Number(val)))}
                >
                    <SelectTrigger className="w-[70px] h-8">
                        <SelectValue placeholder={limitPerPage} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default React.memo(Pagination)