import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <h1 className="text-[8rem] font-bold leading-none text-muted-foreground/20">404</h1>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">Page Not Found</h2>
            <p className="mt-2 text-muted-foreground max-w-md">
                Sorry, the page you are looking for doesn't exist or has been moved to another URL.
            </p>

            <div className="mt-8 flex gap-4">
                <Button onClick={() => navigate('/')} size="lg">
                    <Home className="mr-2 h-4 w-4" />
                    Back to Home
                </Button>
                <Button onClick={() => navigate(-1)} variant="outline" size="lg">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Go Back
                </Button>
            </div>
        </div>
    )
}

export default NotFound