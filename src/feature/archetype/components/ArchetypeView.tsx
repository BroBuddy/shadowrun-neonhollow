import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { getArchetypeData } from '../archtypeData'
import { Archetype } from '../ArchetypeType'

function ArchetypeView() {
    const data = useMemo(() => {
        return getArchetypeData() as Archetype[]
    }, [])

    if (!data) {
        return <></>
    }

    return (
        <Card dice={1}>
            <p>
                <strong className="highlight">Archetype:</strong>
            </p>

            <p>Roll 1d6:</p>
            <ol className="list-margin">
                {data.map((item: Archetype, index: number) => (
                    <li key={index}>
                        <Link to={`/archetype/${item.tag}`}>{item.title}</Link>
                    </li>
                ))}
            </ol>
        </Card>
    )
}

export default ArchetypeView
