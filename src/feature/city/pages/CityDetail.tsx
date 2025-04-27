import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { Link, useParams } from 'react-router-dom'
import { ActionStep, Facility, FacilityAction, FacilityRoll } from '../CityType'
import { getFacilityByTag } from '../cityData'
import { useEffect, useState } from 'react'

function CityDetail() {
    const { facilityTag } = useParams()
    const [facility, setFacility] = useState<Facility | null>(null)

    useEffect(() => {
        const missionItem = getFacilityByTag(facilityTag as string)
        setFacility(missionItem as Facility)
    }, [facilityTag])

    if (!facility) {
        return <></>
    }

    return (
        <>
            <Headline>{facility.title}</Headline>
            <div className="flex gap-4 mb-4 mx-5">
                <div className="flex-1 basis-1/2">
                    <img
                        src={`/images/${facility.title}.jpg`}
                        alt={facility.title}
                    />
                </div>
                <div className="flex-1 basis-1/2"></div>
            </div>

            <Card>
                <p>
                    <strong className="violet">
                        🏃 Enter &#8594; Roll 2d6:
                    </strong>
                </p>

                <ul>
                    {facility.rollList.map(
                        (item: FacilityRoll, index: number) => (
                            <li key={index}>
                                {item.roll}:{' '}
                                {item.link ? (
                                    <Link to={item.link}>{item.text}</Link>
                                ) : (
                                    <strong>{item.text}</strong>
                                )}
                            </li>
                        )
                    )}
                </ul>
            </Card>
            <Card>
                {facility.actionList &&
                    facility.actionList.map(
                        (action: FacilityAction, actionIndex: number) => (
                            <div key={actionIndex}>
                                <p>
                                    <strong className="violet">
                                        {action.title}
                                    </strong>
                                </p>
                                <ul className="list-margin">
                                    {action.steps.map(
                                        (
                                            step: ActionStep,
                                            stepIndex: number
                                        ) => (
                                            <li key={stepIndex}>
                                                {step.link ? (
                                                    <Link to={step.link}>
                                                        {step.text}
                                                    </Link>
                                                ) : (
                                                    <>{step.text}</>
                                                )}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )
                    )}
            </Card>
        </>
    )
}

export default CityDetail
