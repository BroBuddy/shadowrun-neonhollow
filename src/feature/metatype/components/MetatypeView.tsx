import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { Metatype } from '../MetatypeType'
import { useMemo } from 'react'
import { getMetatypeData } from '../metatypeData'
import InRow from '@/components/InRow'
import Dice from '@/components/Dice'

function MetatypeView() {
    const data = useMemo(() => {
        return getMetatypeData() as Metatype[]
    }, [])

    if (!data) {
        return <></>
    }

    return (
        <Card>
            <p>
                <strong className="highlight">Metatype:</strong>
            </p>

            <InRow>
                <span>Roll</span>
                <Dice dice={1} />
            </InRow>

            <ol className="list-margin">
                {data.map((item: Metatype, index: number) => (
                    <li key={index}>
                        <Link to={`/metatype/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ol>
            <p>On a 6, select your Metatype.</p>
        </Card>
    )
}

export default MetatypeView
