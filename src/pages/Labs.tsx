import React from 'react'
import { Link } from 'react-router-dom'

interface Lab {
    id: number
    title: string
    description: string
    icon: string
    link: string
    color: string
}

const Labs: React.FC = () => {
    const labs: Lab[] = [
        {
            id: 1,
            title: 'Лабораторна робота №1',
            description: 'Основи React - розгортання проєкту, структура файлів, компоненти',
            icon: '⚛️',
            link: '/labs/lab1',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            id: 2,
            title: 'Лабораторна робота №2',
            description: 'Компоненти та стилізація - створення переиспользуваних компонентів',
            icon: '🎨',
            link: '/labs/lab2',
            color: 'from-purple-500 to-pink-500',
        },
        {
            id: 3,
            title: 'Todo List Application',
            description: 'Redux, State Management, CRUD операції, пагінація та пошук',
            icon: '✅',
            link: '/labs/todo',
            color: 'from-green-500 to-emerald-500',
        },
    ]

    return (
        <main className="container-custom pt-24 pb-16">
            <div className="mb-12">
                <h1 className="heading-xl mb-4">Лабораторні роботи</h1>
                <p className="text-muted max-w-2xl text-lg">
                    Колекція завершених лабораторних робіт з курсу веб-розробки.
                    Кожна робота демонструє різні аспекти React екосистеми.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {labs.map((lab) => (
                    <Link
                        key={lab.id}
                        to={lab.link}
                        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
                    >
                        {/* Gradient Background */}
                        <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${lab.color} opacity-10 blur-2xl transition-all group-hover:scale-150`} />

                        {/* Icon */}
                        <div className="relative mb-4 text-5xl">{lab.icon}</div>

                        {/* Content */}
                        <div className="relative">
                            <h3 className="mb-2 text-xl font-semibold text-slate-900 group-hover:text-slate-700 dark:text-neutral-100 dark:group-hover:text-neutral-300">
                                {lab.title}
                            </h3>
                            <p className="text-muted text-sm leading-relaxed">
                                {lab.description}
                            </p>
                        </div>

                        {/* Arrow Icon */}
                        <div className="relative mt-4 flex items-center text-sm font-medium text-slate-600 dark:text-neutral-400">
                            <span className="mr-2">Відкрити</span>
                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="card text-center">
                    <div className="mb-2 text-3xl font-bold text-slate-900 dark:text-neutral-100">3</div>
                    <p className="text-muted">Завершених робіт</p>
                </div>
                <div className="card text-center">
                    <div className="mb-2 text-3xl font-bold text-slate-900 dark:text-neutral-100">100%</div>
                    <p className="text-muted">TypeScript покриття</p>
                </div>
                <div className="card text-center">
                    <div className="mb-2 text-3xl font-bold text-slate-900 dark:text-neutral-100">React 18</div>
                    <p className="text-muted">Версія фреймворку</p>
                </div>
            </div>
        </main>
    )
}

export default Labs
