import Card from '@/components/Card'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Name } from '../NameType'
import { getNameData } from '../nameData'

function NameView() {
    const names = useMemo(() => {
        return getNameData() as Name[]
    }, [])

    if (!names) {
        return <></>
    }

    return (
        <Card>
            <p>
                <strong className="highlight">(Optional) Name:</strong>
            </p>
            <p>Each archetype has its own name pool:</p>
            <ul className="list-margin">
                {names.map((item: Name, index: number) => (
                    <li key={index}>
                        <Link to={`/name/${item.tag}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default NameView
