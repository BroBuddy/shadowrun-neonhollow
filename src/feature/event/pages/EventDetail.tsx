import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getEventById } from '../eventData'
import { Event, SkillCheck as SkillCheckType } from '../EventType'
import SkillCheck from '../components/SkillCheck'
import FadeIn from '@/components/FadeIn'

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
                <div className="flex gap-5">
                    <div className="flex-1 basis-2/5">
                        <img
                            src={
                                data.location
                                    ? `/images/${data.location}.jpg`
                                    : '/images/NeonHollow.jpg'
                            }
                            alt={data.location ? data.location : 'NeonHollow'}
                        />
                    </div>
                    <div className="flex-1 basis-3/5">
                        <FadeIn>
                            <p>
                                <em>"{data.description}"</em>
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </Card>

            {data.bonus && (
                <Card>
                    <p>
                        <strong className="highlight">Bonus Attribute:</strong>
                    </p>
                    <ul className="list-margin">
                        <li>{data.bonus}</li>
                    </ul>
                </Card>
            )}

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
