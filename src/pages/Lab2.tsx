import React from 'react'
import { Link } from 'react-router-dom'
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
        { id: 3, name: 'robot3', role: 'Fullstack Engineer', bgColor: 'bg-black' },
        { id: 4, name: 'robot4', role: 'Beatmaker & Producer', bgColor: 'bg-white' },
        { id: 5, name: 'robot6', role: 'King of the Graveyard', bgColor: 'bg-black' },
    ]

    const avatarStyle = 'bottts'

    return (
        <main className="container-custom pt-24 pb-16">
            <Link
                to="/labs"
                className="mb-8 inline-flex items-center text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Назад до Labs
            </Link>

            <div className="mb-8">
                <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-3xl">
                        🎨
                    </div>
                    <div>
                        <h1 className="heading-lg">Лабораторна робота №2</h1>
                        <p className="text-muted">Компоненти React та стилізація</p>
                    </div>
                </div>

                <div className="card mb-8">
                    <h2 className="heading-md mb-3">Опис</h2>
                    <p className="text-muted leading-relaxed">
                        Друга лабораторна робота фокусується на створенні переиспользуваних компонентів
                        та їх стилізації. Демонстрація компонентного підходу через ProfileCard компонент,
                        який відображає профілі команди розробників.
                    </p>
                </div>
            </div>

            <h2 className="heading-md mb-6">Team Profiles</h2>

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

            <div className="card mt-8">
                <h2 className="heading-md mb-3">Ключові концепції</h2>
                <ul className="space-y-2">
                    {[
                        'Props та TypeScript інтерфейси',
                        'Переиспользування компонентів',
                        'Responsive Grid Layout',
                        'Динамічна генерація аватарів через API',
                        'Tailwind CSS для стилізації',
                    ].map((concept, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <svg className="mt-1 h-5 w-5 flex-shrink-0 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-slate-700 dark:text-neutral-300">{concept}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Lab2
