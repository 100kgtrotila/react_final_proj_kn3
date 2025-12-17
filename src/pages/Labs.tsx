import React from 'react'
import { Link } from 'react-router-dom'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent
} from '../components/ui/card'
import { ArrowRight, Atom, Palette, CheckSquare } from 'lucide-react'

interface Lab {
    id: number
    title: string
    description: string
    icon: React.ReactNode
    link: string
    color: string
}

const Labs: React.FC = () => {
    const labs: Lab[] = [
        {
            id: 1,
            title: 'Lab 1',
            description: 'React Basics — project setup, file structure, and components.',
            icon: <Atom className="h-8 w-8" />,
            link: '/labs/lab1',
            color: 'text-blue-500',
        },
        {
            id: 2,
            title: 'Lab 2',
            description: 'Components & Styling — creating reusable UI components.',
            icon: <Palette className="h-8 w-8" />,
            link: '/labs/lab2',
            color: 'text-purple-500',
        },
        {
            id: 3,
            title: 'Todo List App',
            description: 'Redux State Management, CRUD operations, pagination, and search.',
            icon: <CheckSquare className="h-8 w-8" />,
            link: '/labs/todo',
            color: 'text-green-500',
        },
    ]

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Laboratory Works</h1>
                <p className="text-xl text-muted-foreground">
                    A collection of completed projects for the web development course.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {labs.map((lab) => (
                    <Link key={lab.id} to={lab.link} className="block h-full">
                        <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                            <CardHeader>
                                <div className={`mb-4 ${lab.color}`}>
                                    {lab.icon}
                                </div>
                                <CardTitle>{lab.title}</CardTitle>
                                <CardDescription className="text-base mt-2">
                                    {lab.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center text-sm font-medium text-primary">
                                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-12">
                <Card className="text-center p-6">
                    <div className="text-3xl font-bold">3</div>
                    <div className="text-sm text-muted-foreground">Completed Labs</div>
                </Card>
                <Card className="text-center p-6">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm text-muted-foreground">TypeScript Coverage</div>
                </Card>
                <Card className="text-center p-6">
                    <div className="text-3xl font-bold">React 18</div>
                    <div className="text-sm text-muted-foreground">Framework Version</div>
                </Card>
            </div>
        </div>
    )
}

export default Labs