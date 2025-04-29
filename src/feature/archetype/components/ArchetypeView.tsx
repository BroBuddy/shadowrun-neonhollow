import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { getArchetypeData } from '../archtypeData'
import { Archetype } from '../ArchetypeType'
import Dice from '@/components/Dice'

function ArchetypeView() {
    const archetypes = useMemo(() => {
        return getArchetypeData() as Archetype[]
    }, [])

    if (!archetypes) {
        return <></>
    }

    return (
        <Card>
            <div className="flex justify-between items-center">
                <p>
                    <strong className="highlight">Archetype:</strong>
                </p>
                <div className="flex gap-2">
                    <Dice label="1d6" min={1} max={6} />
                </div>
            </div>

            <p>🎲 Roll 1d6:</p>
            <ol className="list-margin">
                {archetypes.map((item: Archetype, index: number) => (
                    <li key={index}>
                        <Link to={`/archetype/${item.tag}`}>{item.title}</Link>
                    </li>
                ))}
            </ol>
        </Card>
    )
}

export default ArchetypeView
