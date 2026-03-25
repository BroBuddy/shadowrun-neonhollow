import { useMemo } from 'react'
import { Event, SkillCheck as SkillCheckType } from '../types/EventType'
import SkillCheck from '../components/SkillCheck'
import { getEventById } from '../services/EventService'
import BonusAttribute from '../components/BonusAttribute'

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
    const data: Event = useMemo(() => {
        try {
            return getEventById(id as string) ?? defaultEvent
        } catch (error) {
            console.error('Error fetching event data:', error)
            return defaultEvent
        }
    }, [id])

    if (!id) {
        return <p>No event ID provided.</p>
    }

    if (!data) {
        return <p>No event data available.</p>
    }

    return (
        <>
            <p>{data.description}</p>

            {data.bonus && <BonusAttribute bonus={data.bonus} />}

            {data.skillChecks && (
                <>
                    <p><em>"How do you want to handle this, chummer?"</em></p>

                    {data.skillChecks.map(
                        (item: SkillCheckType, index: number) => (
                            <SkillCheck key={index} skillCheck={item} hidden={false} />
                        )
                    )}
                </>
            )}
        </>
    )
}

export default EventDetail
