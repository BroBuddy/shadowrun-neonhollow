import Card from '@/components/Card'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Name } from '../types/NameType'
import { getNameData } from '../services/NameService'

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
                <strong>(Optional) Name:</strong>
            </p>
            
            <p>Each archetype has its own name pool:</p>

            <ul className="list-margin">
                {names.map((item: Name, index: number) => (
                    <li key={index}>
                        <Link to={`/character/name/${item.tag}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default NameView
