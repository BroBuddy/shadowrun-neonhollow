import Card from '@/components/Card'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/city/safehouse')
        }, 1000)

        return () => clearTimeout(timeout)
    }, [navigate])

    return (
        <>
            <Card>
                <p>
                    <strong className="highlight">Critial Glitch</strong>
                </p>
                <p>Reload the app to wake up in your secured hideout.</p>
            </Card>
        </>
    )
}

export default Error
