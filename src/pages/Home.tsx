import React from 'react'
import {
    Typography,
    Paper,
    Box,
    Card,
    CardContent,
    Avatar,
    Divider,
    Stack,
    Chip
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Code, Storage, SportsEsports } from '@mui/icons-material'

const Home: React.FC = () => {
    return (
        <Box sx={{ p: 4 }}>
            <Paper elevation={3} sx={{ p: 4, mb: 4, textAlign: 'center' }}>
                <Avatar
                    sx={{
                        width: 100,
                        height: 100,
                        mx: 'auto',
                        mb: 2,
                        bgcolor: 'primary.main',
                        fontSize: '3rem'
                    }}
                >
                    ДМ
                </Avatar>
                <Typography variant="h2" sx={{ mb: 2 }}>
                    Маринич Данило
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
                    Студент групи КН-3
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
                    <Chip label="React Developer" color="primary" />
                    <Chip label=".NET Backend" color="secondary" />
                    <Chip label="Unity Game Dev" color="success" />
                </Stack>
            </Paper>

            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    Про мене
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Привіт! Я студент КН-3, спеціалізуюся на розробці веб-додатків
                    та ігор. Маю досвід з React, TypeScript, .NET, Unity та
                    сучасними підходами до архітектури ПЗ.
                </Typography>
            </Paper>

            <Typography variant="h4" sx={{ mb: 3 }}>
                Мої навички
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                                    <Code />
                                </Avatar>
                                <Typography variant="h5">
                                    Frontend
                                </Typography>
                            </Box>
                            <Divider sx={{ mb: 2 }} />
                            <Stack spacing={1}>
                                <Chip label="React" size="small" />
                                <Chip label="TypeScript" size="small" />
                                <Chip label="Material UI" size="small" />
                                <Chip label="Redux Toolkit" size="small" />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                                    <Storage />
                                </Avatar>
                                <Typography variant="h5">
                                    Backend
                                </Typography>
                            </Box>
                            <Divider sx={{ mb: 2 }} />
                            <Stack spacing={1}>
                                <Chip label=".NET / C#" size="small" color="secondary" />
                                <Chip label="REST API" size="small" color="secondary" />
                                <Chip label="PostgreSQL" size="small" color="secondary" />
                                <Chip label="Entity Framework" size="small" color="secondary" />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar sx={{ bgcolor: 'success.main', mr: 2 }}>
                                    <SportsEsports />
                                </Avatar>
                                <Typography variant="h5">
                                    Game Dev
                                </Typography>
                            </Box>
                            <Divider sx={{ mb: 2 }} />
                            <Stack spacing={1}>
                                <Chip label="Unity" size="small" color="success" />
                                <Chip label="C#" size="small" color="success" />
                                <Chip label="Game Mechanics" size="small" color="success" />
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home