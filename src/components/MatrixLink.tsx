import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MatrixLink = ({ prefix, label }: { prefix: string; label: string }) => {
    const [link, setLink] = useState<string>('')

    const generateNumber = () => {
        return Math.floor(Math.random() * 6) + 2
    }

    const generateLink = () => {
        setLink(prefix + generateNumber() + generateNumber())
    }

    useEffect(() => {
        generateLink()
    }, [])

    return (
        <Link className="mt-2" to={`/${link}`} onClick={generateLink}>
            {label}
        </Link>
    )
}

export default MatrixLink
