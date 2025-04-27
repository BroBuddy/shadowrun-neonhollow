import Headline from '@/components/Headline'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFacilityByTag } from '../facilityData'
import { Facility } from '../FacilityType'
import FacilityActions from '../components/FacilityActions'
import FacilityRolls from '../components/FacilityRolls'

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
                <div className="flex-1 basis-1/2">
                    <p>
                        <em>"{facility.description}"</em>
                    </p>
                </div>
            </div>

            {facility.rollList.length >= 1 && (
                <FacilityRolls rollList={facility.rollList} />
            )}

            <FacilityActions actionList={facility.actionList} />
        </>
    )
}

export default CityDetail
