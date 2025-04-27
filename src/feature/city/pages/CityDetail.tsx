import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFacilityByTag } from '../facilityData'
import {
    Facility,
    FacilityRoll,
    FacilityAction,
    ActionStep,
} from '../FacilityType'

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

            {facility.rollList.length >= 1 && (
                <Card>
                    <p>
                        <strong className="highlight">
                            🏃 Enter &#8594; Roll 2d6:
                        </strong>
                    </p>

                    <ul>
                        {facility.rollList.map(
                            (item: FacilityRoll, index: number) => (
                                <li key={index}>
                                    {item.roll}: &#8594;{' '}
                                    {item.link ? (
                                        <Link to={`/rule${item.link}`}>
                                            {item.text}
                                        </Link>
                                    ) : (
                                        <>{item.text}</>
                                    )}
                                </li>
                            )
                        )}
                    </ul>
                </Card>
            )}
            <Card>
                {facility.actionList &&
                    facility.actionList.map(
                        (action: FacilityAction, actionIndex: number) => (
                            <div key={actionIndex}>
                                <p>
                                    <strong className="highlight">
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
                                                    <Link
                                                        to={`/resource${step.link}`}
                                                    >
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
