import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setSearchTerm } from './todosSlice'
import { Input } from '../../components/ui/input'
import { Search as SearchIcon } from 'lucide-react'

const Search: React.FC = () => {
    const dispatch = useAppDispatch()
    const searchTerm = useAppSelector(state => state.todos.searchTerm)

    return (
        <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                type="text"
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                placeholder="Search tasks..."
                className="pl-10"
            />
        </div>
    )
}

export default React.memo(Search)