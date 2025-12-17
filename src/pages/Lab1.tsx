import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { ChevronLeft, Check, Atom } from 'lucide-react'
import { Button } from '../components/ui/button'

const Lab1: React.FC = () => {
    const features = [
        'Налаштування Vite + React + TypeScript',
        'Структура проєкту з Feature-Sliced Design',
        'Конфігурація ESLint та Prettier',
        'Інтеграція Tailwind CSS',
        'Система маршрутизації з React Router',
    ]

    return (
        <div className="space-y-8">
            <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
                <Link to="/labs">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Labs
                </Link>
            </Button>

            <Card>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                        <Atom className="h-8 w-8" />
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-bold">Laboratory Work №1</CardTitle>
                        <CardDescription className="text-lg">React Project Setup & Architecture</CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold tracking-tight">Description</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            The first laboratory work focuses on deploying a modern React project using
                            best practices of 2025. The project includes development tools setup,
                            build system configuration, and a scalable Feature-Sliced Design file structure.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold tracking-tight">Implemented Features</h3>
                        <ul className="grid gap-3 sm:grid-cols-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 rounded-lg border p-3 text-sm text-muted-foreground shadow-sm">
                                    <Check className="h-5 w-5 text-green-500" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold tracking-tight">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'].map((tech) => (
                                <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Lab1