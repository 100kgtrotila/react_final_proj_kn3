import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { MapPin, GraduationCap, Code2, Database, Gamepad2 } from 'lucide-react'

const Home: React.FC = () => {
    return (
        <div className="space-y-12">
            <section className="space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    About me
                </h1>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            <span className="font-semibold text-foreground">Hello, I'm Danylo Marynych.</span>
                        </p>
                        <p>
                            I am a Backend Developer and Computer Science student driven by minimalism and clarity.
                            My goal is to build efficient, scalable systems without unnecessary complexity.
                            I value clean architecture and pragmatic solutions.
                        </p>
                    </div>

                    <Card>
                        <CardContent className="pt-6 space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                                <div>
                                    <h3 className="font-semibold">Location</h3>
                                    <p className="text-sm text-muted-foreground">Ukraine, Rivne</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <GraduationCap className="h-5 w-5 text-muted-foreground mt-1" />
                                <div>
                                    <h3 className="font-semibold">Education</h3>
                                    <p className="text-sm text-muted-foreground">
                                        The National University of Ostroh Academy
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Code2 className="h-5 w-5" /> Frontend
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>React, TypeScript</li>
                                <li>Zustand State Management</li>
                                <li>Tailwind CSS</li>
                                <li>Vite</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Database className="h-5 w-5" /> Backend
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>.NET, C#</li>
                                <li>Entity Framework</li>
                                <li>PostgreSQL</li>
                                <li>REST API</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Gamepad2 className="h-5 w-5" /> Game Dev
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Unity</li>
                                <li>C#</li>
                                <li>Game Design</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}

export default Home