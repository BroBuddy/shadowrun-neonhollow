import Headline from '@/components/Headline'
import { useParams } from 'react-router-dom'
import { getFacilityByTag } from '../facilityData'
import { Facility } from '../FacilityType'
import ActionView from '../components/ActionView'
import RollView from '../components/RollView'
import FadeIn from '@/components/FadeIn'

function CityDetail() {
    const { tag } = useParams()
    const data = getFacilityByTag(tag as string) as Facility

    if (!tag || !data) {
        return <p>No resource data available.</p>
    }

    return (
        <>
            <Headline>{data.title}</Headline>
            <FadeIn>
                <div className="flex gap-5 p-4">
                    <div className="flex-1 basis-2/5">
                        <img
                            src={`/images/city/${data.title}.jpg`}
                            alt={data.title}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-1 basis-3/5">
                        <p>
                            <em>"{data.description}"</em>
                        </p>
                    </div>
                </div>
            </FadeIn>

            {data.rollList.length > 0 && <RollView rollList={data.rollList} />}

            {data.actionList?.length > 0 && (
                <ActionView actionList={data.actionList} />
            )}
        </>
    )
}

export default CityDetail
