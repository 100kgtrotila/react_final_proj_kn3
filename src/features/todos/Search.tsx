import React from 'react'
import { useAppStore } from '@/app/store.ts'
import { Input } from '../../components/ui/input'
import { Search as SearchIcon } from 'lucide-react'

const Search: React.FC = () => {
    const searchTerm = useAppStore((state) => state.searchTerm)
    const setSearch = useAppStore((state) => state.setSearch)

    return (
        <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                type="text"
                placeholder="Search tasks..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default React.memo(Search)