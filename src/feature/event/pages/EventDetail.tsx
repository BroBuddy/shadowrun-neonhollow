import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getEventById } from '../eventData'
import { Event, SkillCheck as SkillCheckType } from '../EventType'
import FadeIn from '@/components/FadeIn'
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
            <Headline>{data.title}</Headline>
            <Card>
                <FadeIn>
                    <p>{data.description}</p>

                    {data.bonus && (
                        <>
                            <p>
                                <strong>Bonus Attribute:</strong>
                            </p>
                            <ul className="list-margin">
                                <li>{data.bonus}</li>
                            </ul>
                        </>
                    )}

                    {data.skillChecks && (
                        <>
                            <div className="mb-5 flex justify-center items-center">
                                <span className="text-2xl mr-2">&#8595;</span>
                                <span className="mt-1">Choose</span>
                            </div>

                            {data.skillChecks.map(
                                (item: SkillCheckType, index: number) => (
                                    <SkillCheck key={index} skillCheck={item} />
                                )
                            )}
                        </>
                    )}
                </FadeIn>
            </Card>
        </>
    )
}

export default EventDetail
