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
    if (!id) {
        return <p>No event ID provided.</p>
    }

    const data: Event = getEventById(id) ?? defaultEvent

    if (!data) {
        return <p>No event data available.</p>
    }

    return (
        <>
            <p>{data.description}</p>

            {data.bonus && <BonusAttribute bonus={data.bonus} />}

            {data.skillChecks && (
                <>
                    <p><strong>Your move:</strong></p>

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
