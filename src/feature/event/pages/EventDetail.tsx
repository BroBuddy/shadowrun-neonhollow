import Card from '@/components/Card'
import { useMemo } from 'react'
import { getEventById } from '../eventData'
import { Event, SkillCheck as SkillCheckType } from '../EventType'
import SkillCheck from '../components/SkillCheck'

const defaultEvent: Event = {
    id: '',
    title: '',
    description: '',
    skillChecks: [],
}

type EventDetailProps = {
    id?: string
}

function EventDetail({ id }: EventDetailProps) {
    const data: Event = useMemo(
        () => getEventById(id as string) ?? defaultEvent,
        [id]
    )

    if (!data) {
        return <></>
    }

    return (
        <>
            <p>{data.description}</p>

            {data.bonus && (
                <>
                    <p>
                        <strong className="highlight">Bonus Attribute:</strong>
                    </p>
                    <ul className="list-margin">
                        <li>{data.bonus}</li>
                    </ul>
                </>
            )}

            {data.skillChecks && (
                <>
                    {data.skillChecks.map(
                        (item: SkillCheckType, index: number) => (
                            <SkillCheck key={index} skillCheck={item} />
                        )
                    )}
                </>
            )}
        </>
    )
}

export default EventDetail
