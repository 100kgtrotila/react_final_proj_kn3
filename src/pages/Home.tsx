import React from 'react'

const Home: React.FC = () => {
    const skills = {
        frontend: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Vite'],
        backend: ['.NET', 'C#', 'Entity Framework', 'PostgreSQL', 'REST API'],
        gameDev: ['Unity', 'C#', 'Game Design', 'Animation Systems'],
    }

    return (
        <main className="mx-auto max-w-6xl px-6 sm:px-8 md:px-10">
            <section id="about-main" className="pb-12 pt-24 md:pb-16">
                <div className="container-custom">
                    <h1 className="heading-xl mb-8">Про мене</h1>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                        <div className="space-y-6 text-lg leading-relaxed text-slate-700 md:col-span-2 dark:text-neutral-400">
                            <p>
                <span className="font-medium text-slate-900 dark:text-neutral-100">
                  Привіт! Я Данило.
                </span>{' '}
                                Я студент спеціальності Комп'ютерні науки, захоплений розробкою
                                веб-додатків та ігор з використанням сучасних технологій.
                            </p>
                            <p>
                                Мій підхід зосереджений на мінімалізмі та чіткості. Мені подобається
                                створювати досвід, який поважає увагу користувача, поєднуючи чисту
                                естетику з надійною функціональністю.
                            </p>
                            <p>
                                Коли я не кодую, ви можете знайти мене за дослідженням нових технологічних
                                стеків або створенням музики.
                            </p>
                        </div>

                        <div className="space-y-8 md:col-span-1">
                            <div>
                                <div className="mb-2 flex items-center gap-2 text-slate-500 dark:text-neutral-500">
                                    <svg
                                        className="size-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <h3 className="text-xs font-semibold uppercase tracking-wider">
                                        Локація
                                    </h3>
                                </div>
                                <p className="text-base font-medium text-slate-900 dark:text-neutral-200">
                                    Україна
                                </p>
                            </div>

                            <div>
                                <div className="mb-2 flex items-center gap-2 text-slate-500 dark:text-neutral-500">
                                    <svg
                                        className="size-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        />
                                    </svg>
                                    <h3 className="text-xs font-semibold uppercase tracking-wider">
                                        Освіта
                                    </h3>
                                </div>
                                <p className="text-base font-medium text-slate-900 dark:text-neutral-200">
                                    Група КН-3
                                </p>
                            </div>

                            <div>
                                <div className="mb-2 flex items-center gap-2 text-slate-500 dark:text-neutral-500">
                                    <svg
                                        className="size-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <h3 className="text-xs font-semibold uppercase tracking-wider">
                                        Статус
                                    </h3>
                                </div>
                                <p className="text-base font-medium text-slate-900 dark:text-neutral-200">
                                    Відкритий до проєктів
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-custom section-padding">
                <section id="skills">
                    <h2 className="heading-lg">Tech Stack</h2>
                    <p className="mt-1 text-muted">
                        Ось мій поточний улюблений стек, який використовую щодня.
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="card">
                                <h3 className="mb-4 text-lg font-semibold capitalize text-slate-900 dark:text-neutral-100">
                                    {category === 'frontend' && '💻 Frontend'}
                                    {category === 'backend' && '🗄️ Backend'}
                                    {category === 'gameDev' && '🎮 Game Dev'}
                                </h3>
                                <ul className="space-y-2">
                                    {items.map((skill) => (
                                        <li
                                            key={skill}
                                            className="text-slate-700 dark:text-neutral-400"
                                        >
                                            • {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Home
