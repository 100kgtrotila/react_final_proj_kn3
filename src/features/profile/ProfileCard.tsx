import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material'

interface ProfileCardProps {
    name: string
    role: string
    avatarUrl: string
    bgColor: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, avatarUrl, bgColor }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: bgColor === 'bg-black' ? 'grey.900' : 'background.paper',
                color: bgColor === 'bg-black' ? 'white' : 'text.primary',
                transition: 'transform 0.2s',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                }
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={avatarUrl}
                alt={name}
                sx={{ objectFit: 'contain', bgcolor: bgColor === 'bg-black' ? 'grey.800' : 'grey.100' }}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color={bgColor === 'bg-black' ? 'grey.300' : 'text.secondary'}>
                        {role}
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    View Profile
                </Button>
            </CardContent>
        </Card>
    )
}

export default ProfileCard
