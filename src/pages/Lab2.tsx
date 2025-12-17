import React from 'react'
import { Link } from 'react-router-dom'
import ProfileCard from '../features/profile/ProfileCard'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { ChevronLeft, Palette, Check } from 'lucide-react'

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
        { id: 3, name: 'robot3', role: 'Fullstack Engineer', bgColor: 'bg-black' },
        { id: 4, name: 'robot4', role: 'Beatmaker & Producer', bgColor: 'bg-white' },
        { id: 5, name: 'robot6', role: 'King of the Graveyard', bgColor: 'bg-black' },
    ]

    const avatarStyle = 'bottts'

    return (
        <div className="space-y-8">
            <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
                <Link to="/labs">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Labs
                </Link>
            </Button>

            <div className="flex items-center gap-4 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                    <Palette className="h-7 w-7" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Laboratory Work №2</h1>
                    <p className="text-muted-foreground">Components & Styling</p>
                </div>
            </div>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight">Team Profiles Component</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {developers.map((dev) => (
                        <ProfileCard
                            key={dev.id}
                            name={dev.name}
                            role={dev.role}
                            avatarUrl={`https://api.dicebear.com/7.x/${avatarStyle}/svg?seed=${dev.name}`}
                            bgColor={dev.bgColor as 'bg-black' | 'bg-white'}
                        />
                    ))}
                </div>
            </section>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>Key Concepts Learned</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="grid gap-3 sm:grid-cols-2">
                        {[
                            'Props & TypeScript Interfaces',
                            'Component Reusability',
                            'Responsive Grid Layout',
                            'Dynamic Avatar Generation',
                            'Tailwind CSS Styling',
                        ].map((concept, index) => (
                            <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                <Check className="h-4 w-4 text-purple-500" />
                                {concept}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

export default Lab2