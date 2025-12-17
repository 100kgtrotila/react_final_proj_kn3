import React from 'react'
import Header from './Header'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
            <Header />
            {/* Додаємо container і центрування */}
            <main className="flex-1 container mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    )
}

export default MainLayout