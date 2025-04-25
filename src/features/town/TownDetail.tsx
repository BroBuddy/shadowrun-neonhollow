import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'
import { useParams } from 'react-router-dom'
import { getFacilityByTag } from './townData'
import ActionStep from '@/components/ActionStep'
import { Action } from './TownTypes'
import useResourceStore from '../resource/resourceStore'
import ActionRoll from '@/components/ActionRoll'

function TownDetail() {
    const { facilityTag } = useParams()
    const updateResource = useResourceStore((state) => state.updateResource)
    const [facility, setFacility] = useState<any | null>(null)

    useEffect(() => {
        const facilityData = getFacilityByTag(facilityTag as string)
        setFacility(facilityData ?? null)
    }, [facilityTag])

    if (!facility) return <></>

    return (
        <Card title={facility.name}>
            <p className="flex items-center justify-center">
                <img src={`/images/${facility.name}.jpg`} alt={facility.name} />
            </p>
            {facility.quote && (
                <p>
                    <em>"{facility.quote}"</em>
                </p>
            )}
            {facility.description && <p>{facility.description}</p>}

            {facility.rolls && (
                <>
                    <ActionRoll
                        rolls={facility.rolls}
                        updateResource={updateResource}
                    />
                    <hr />
                </>
            )}

            {facility.actions.map((action: Action, index: number) => (
                <React.Fragment key={index}>
                    {action.name && (
                        <p>
                            <strong>{action.name}:</strong>
                        </p>
                    )}
                    <ActionStep
                        steps={action.steps}
                        updateResource={updateResource}
                    />
                </React.Fragment>
            ))}
        </Card>
    )
}

export default TownDetail
