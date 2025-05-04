import Headline from '@/components/Headline'
import { useParams } from 'react-router-dom'
import { getFacilityByTag } from '../facilityData'
import { Facility } from '../FacilityType'
import ActionsView from '../components/ActionsView'
import RollsView from '../components/RollsView'
import Card from '@/components/Card'

function CityDetail() {
    const { tag } = useParams()
    const data = getFacilityByTag(tag as string) as Facility

    if (!tag || !data) {
        return <p>No resource data available.</p>
    }

    return (
        <>
            <Headline>{data.title}</Headline>
            <Card>
                <div className="flex gap-5">
                    <div className="flex-1 basis-2/5">
                        <img
                            src={`/images/${data.title}.jpg`}
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
            </Card>

            {data.rollList.length > 0 && <RollsView rollList={data.rollList} />}

            {data.actionList?.length > 0 && (
                <ActionsView actionList={data.actionList} />
            )}
        </>
    )
}

export default CityDetail
