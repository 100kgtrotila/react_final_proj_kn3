import React from 'react'
import { Link } from 'react-router-dom'

const Lab1: React.FC = () => {
    const features = [
        'Налаштування Vite + React + TypeScript',
        'Структура проєкту з Feature-Sliced Design',
        'Конфігурація ESLint та Prettier',
        'Інтеграція Tailwind CSS',
        'Система маршрутизації з React Router',
    ]

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

            <div className="card mb-8">
                <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-3xl">
                        ⚛️
                    </div>
                    <div>
                        <h1 className="heading-lg">Лабораторна робота №1</h1>
                        <p className="text-muted">Розгортання React проєкту</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h2 className="heading-md mb-3">Опис</h2>
                        <p className="text-muted leading-relaxed">
                            Перша лабораторна робота присвячена розгортанню сучасного React проєкту
                            з використанням найкращих практик 2025 року. Проєкт включає налаштування
                            інструментів розробки, систему збірки та базову структуру файлів.
                        </p>
                    </div>

                    <div>
                        <h2 className="heading-md mb-3">Реалізовані можливості</h2>
                        <ul className="space-y-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-slate-700 dark:text-neutral-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="heading-md mb-3">Використані технології</h2>
                        <div className="flex flex-wrap gap-2">
                            {['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-neutral-800 dark:text-neutral-300"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Lab1
