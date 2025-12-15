import React, { useMemo } from 'react'
import { Chip, Stack } from '@mui/material'
import { CheckCircle, RadioButtonUnchecked, Filter } from '@mui/icons-material'
import { useAppSelector } from '../../app/hooks'

const TodoStats: React.FC = () => {
    const allTodos = useAppSelector(state => state.todos.items)

    const stats = useMemo(() => ({
        total: allTodos.length,
        completed: allTodos.filter(t => t.completed).length,
        active: allTodos.filter(t => !t.completed).length,
    }), [allTodos])

    return (
        <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
            <Chip
                icon={<Filter />}
                label={`Total: ${stats.total}`}
                color="primary"
                variant="outlined"
            />
            <Chip
                icon={<CheckCircle />}
                label={`Completed: ${stats.completed}`}
                color="success"
                variant="outlined"
            />
            <Chip
                icon={<RadioButtonUnchecked />}
                label={`Active: ${stats.active}`}
                color="warning"
                variant="outlined"
            />
        </Stack>
    )
}

export default React.memo(TodoStats)
