import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { Metatype } from '../MetatypeType'
import { useMemo } from 'react'
import { getMetatypeData } from '../metatypeData'
import FadeIn from '@/components/FadeIn'

function MetatypeView() {
    const data = useMemo(() => {
        return getMetatypeData() as Metatype[]
    }, [])

    if (!data) {
        return <></>
    }

    return (
        <Card>
            <FadeIn>
                <p>
                    <strong className="highlight">Metatype:</strong>
                </p>
                <p>
                    <span>Roll 1d6:</span>
                </p>
                <ol className="list-margin">
                    {data.map((item: Metatype, index: number) => (
                        <li key={index}>
                            <Link to={`/metatype/${item.tag}`}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ol>
                <p>On a 6, select your Metatype.</p>
            </FadeIn>
        </Card>
    )
}

export default MetatypeView
