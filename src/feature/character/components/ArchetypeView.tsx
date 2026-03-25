import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'
import { getArchetypeData } from '../services/ArchetypeService'
import { Archetype } from '../types/ArchetypeType'

function ArchetypeView() {
    const data = useMemo(() => {
        return getArchetypeData() as Archetype[]
    }, [])

    if (!data) {
        return <></>
    }

    return (
        <Card>
            <p>
                <strong>
                    Archetype &amp; Background:
                </strong>
            </p>

            <InRow>
                <span>Roll</span>
                <Dice dice={1} />
            </InRow>

            <ol className="list-margin">
                {data.map((item: Archetype, index: number) => (
                    <li key={index}>
                        <Link to={`/character/archetype/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ol>
        </Card>
    )
}

export default ArchetypeView
