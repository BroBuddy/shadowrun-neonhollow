import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getEventById } from '../eventData'
import { Event, SkillCheck } from '../EventType'

const defaultEvent: Event = {
    id: '',
    title: '',
    description: '',
    skillChecks: [],
}

function EventDetail() {
    const { id } = useParams()
    const data: Event = useMemo(
        () => getEventById(id as string) ?? defaultEvent,
        [id]
    )

    if (!data) {
        return <></>
    }

    return (
        <>
            <Headline>{data.title}</Headline>
            <Card>
                <p>{data.description}</p>

                {data.skillChecks.map((item: SkillCheck, index: number) => (
                    <div key={index}>
                        <p>
                            <strong className="highlight">
                                {item.attribute} (DC {item.dc}):
                            </strong>
                            <br />
                            {item.description}
                        </p>
                        <ul className="list-margin">
                            <li>
                                <strong>Success:</strong> {item.success}
                            </li>
                            <li>
                                <strong>Fail:</strong> {item.fail}
                            </li>
                        </ul>
                    </div>
                ))}
            </Card>
        </>
    )
}

export default EventDetail
