import Headline from '@/components/Headline'
import { useParams } from 'react-router-dom'
import { getFacilityByTag } from '../facilityData'
import { Facility, FacilityRoll } from '../FacilityType'
import FacilityActions from '../components/FacilityActions'
import FacilityRolls from '../components/FacilityRolls'
import { useMemo } from 'react'

function CityDetail() {
    const { facilityTag } = useParams()
    const facility = useMemo(() => {
        return getFacilityByTag(facilityTag as string) as Facility
    }, [facilityTag])

    if (!facility) {
        return <p>No resource data available.</p>
    }

    return (
        <>
            <Headline>{facility.title}</Headline>
            <div className="flex gap-4 mb-4 mx-5">
                <div className="flex-1 basis-1/2">
                    <img
                        src={`/images/${facility.title}.jpg`}
                        alt={facility.title}
                        loading="lazy"
                    />
                </div>
                <div className="flex-1 basis-1/2">
                    <p>
                        <em>"{facility.description}"</em>
                    </p>
                </div>
            </div>

            {facility.rollList.length >= 1 && (
                <FacilityRolls
                    rollList={facility.rollList.map((item: FacilityRoll) => ({
                        ...item,
                        key: item.roll,
                    }))}
                />
            )}

            <FacilityActions actionList={facility.actionList} />
        </>
    )
}

export default CityDetail
