import Card from '@/components/Card'
import Headline from '@/components/Headline'
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
            <Headline>Critial Glitch</Headline>
            <Card>
                <p>You will be sent to your SafeHouse automatically.</p>
            </Card>
        </>
    )
}

export default Error
