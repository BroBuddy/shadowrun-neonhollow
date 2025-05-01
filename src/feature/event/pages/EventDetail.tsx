import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getEventById } from '../eventData'
import { Event, SkillCheck as SkillCheckType } from '../EventType'
import SkillCheck from '../components/SkillCheck'

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
            <Headline>Event</Headline>
            <Card>
                <p>
                    <strong className="highlight">{data.title}:</strong>
                </p>
                <p>{data.description}</p>

                {data.bonus && (
                    <>
                        <p>
                            <strong className="highlight">
                                Bonus Attribute:
                            </strong>
                        </p>
                        <ul className="list-margin">
                            <li>{data.bonus}</li>
                        </ul>
                    </>
                )}
            </Card>

            {data.skillChecks && (
                <Card>
                    <>
                        {data.skillChecks.map(
                            (item: SkillCheckType, index: number) => (
                                <SkillCheck key={index} skillCheck={item} />
                            )
                        )}
                    </>
                </Card>
            )}
        </>
    )
}

export default EventDetail
