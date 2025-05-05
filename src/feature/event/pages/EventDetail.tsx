import { useMemo } from 'react'
import { getEventById } from '../eventData'
import { Event, SkillCheck as SkillCheckType } from '../EventType'
import SkillCheck from '../components/SkillCheck'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'

const defaultEvent: Event = {
    id: '',
    title: '',
    description: '',
    skillChecks: [],
}

type EventDetailProps = {
    id?: string
}

const BonusAttributes = ({ bonus }: { bonus: string }) => (
    <>
        <p>
            <strong className="highlight">Bonus Attribute:</strong>
        </p>
        <ul className="list-margin">
            <li>{bonus}</li>
        </ul>
    </>
)

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

            {data.bonus && <BonusAttributes bonus={data.bonus} />}

            {data.skillChecks && (
                <>
                    <InRow>
                        <span>Roll</span>
                        <Dice dice={2} />
                    </InRow>

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
