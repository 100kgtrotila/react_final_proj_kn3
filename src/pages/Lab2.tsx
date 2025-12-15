import React from 'react'
import { Typography, Box } from '@mui/material'
import Grid from '@mui/material/Grid2'
import ProfileCard from '../features/profile/ProfileCard'

interface Developer {
    id: number
    name: string
    role: string
    bgColor: string
}

const Lab2: React.FC = () => {
    const developers: Developer[] = [
        { id: 1, name: 'robot1', role: 'Creator of the Earth', bgColor: 'bg-black' },
        { id: 2, name: 'robot2', role: 'React Developer', bgColor: 'bg-white' },
        { id: 3, name: 'robot3', role: 'Fullstack', bgColor: 'bg-black' },
        { id: 4, name: 'robot4', role: 'Beatmaker', bgColor: 'bg-white' },
        { id: 5, name: 'robot6', role: 'King of the graveyard', bgColor: 'bg-black' }
    ]

    const avatarStyle = 'bottts'

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h3" sx={{ mb: 4 }}>
                Лабораторна робота #2: Компоненти React
            </Typography>

            <Typography variant="h5" sx={{ mb: 3 }}>
                Team Profiles
            </Typography>

            <Grid container spacing={3}>
                {developers.map((dev) => (
                    <Grid key={dev.id} size={{ xs: 12, sm: 6, md: 4 }}>
                        <ProfileCard
                            name={dev.name}
                            role={dev.role}
                            avatarUrl={`https://api.dicebear.com/9.x/${avatarStyle}/svg?seed=${dev.name}`}
                            bgColor={dev.bgColor}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Lab2
