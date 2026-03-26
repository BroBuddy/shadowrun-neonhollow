import Card from '@/components/Card'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const REDIRECT_DELAY: number = 1000
const FALLBACK_ROUTE: string = '/city/safehouse'

function Error() {
    const navigate = useNavigate()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate(FALLBACK_ROUTE, { replace: true })
        }, REDIRECT_DELAY)

        return () => clearTimeout(timeoutId)
    }, [navigate])

    return (
        <>
            <Card>
                <p>
                    <strong className="highlight">Critical Glitch</strong>
                </p>
                
                <p>Reload the app to wake up in your secured hideout.</p>
            </Card>
        </>
    )
}

export default Error
