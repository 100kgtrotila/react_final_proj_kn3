import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="container-custom flex min-h-[70vh] items-center justify-center">
            <div className="text-center">
                <h1 className="mb-4 text-[10rem] font-bold opacity-20">404</h1>

                <h2 className="heading-lg mb-4">Page Not Found</h2>

                <p className="text-muted mb-8">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="btn btn-primary"
                    >
                        <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Back to Home
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-outline"
                    >
                        <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound