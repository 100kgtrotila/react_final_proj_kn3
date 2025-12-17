import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks'
import { setTheme } from '../../features/theme/themeSlice'
import { Button } from '../../components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { Moon, Sun } from "lucide-react"

const Header: React.FC = () => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/labs', label: 'Labs' },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <span className="bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                        DM
                    </span>
                    <span className="hidden sm:inline-block text-foreground">Portfolio</span>
                </Link>

                <nav className="flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-primary ${
                                location.pathname === link.path ? 'text-foreground' : 'text-muted-foreground'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="h-9 w-9 border-muted-foreground/20">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => dispatch(setTheme('light'))}>
                                <Sun className="mr-2 h-4 w-4" /> Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => dispatch(setTheme('dark'))}>
                                <Moon className="mr-2 h-4 w-4" /> Dark
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
            </div>
        </header>
    )
}

export default Header