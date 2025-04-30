import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { getArchetypeData } from '../archtypeData'
import { Archetype } from '../ArchetypeType'
import FadeIn from '@/components/FadeIn'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'

function ArchetypeView() {
    const data = useMemo(() => {
        return getArchetypeData() as Archetype[]
    }, [])

    if (!data) {
        return <></>
    }

    return (
        <FadeIn>
            <Card>
                <p>
                    <strong className="highlight">
                        Archetype &amp; Background:
                    </strong>
                </p>

                <InRow>
                    <span>Roll:</span>
                    <Dice dice={1} />
                </InRow>

                <ol className="list-margin">
                    {data.map((item: Archetype, index: number) => (
                        <li key={index}>
                            <Link to={`/archetype/${item.id}`}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ol>
            </Card>
        </FadeIn>
    )
}

export default ArchetypeView
