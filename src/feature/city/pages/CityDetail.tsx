import Headline from '@/components/Headline'
import { useParams } from 'react-router-dom'
import { Facility } from '../types/FacilityType'
import ActionView from '../components/ActionView'
import EnterTable from '../components/EnterTable'
import { getFacilityByTag } from '../services/FacilityService'
import PageHeader from '@/components/PageHeader'

function CityDetail() {
    const { tag } = useParams()
    const data = getFacilityByTag(tag as string) as Facility

    if (!tag || !data) {
        return <p>No resource data available.</p>
    }

    return (
        <>
            <Headline>{data.title}</Headline>

            <PageHeader
                title={data.title}
                image={`/images/city/${data.title}.jpg`}>
                <p><em>"{data.description}"</em></p>
            </PageHeader>

            {data.rollList.length > 0 && <EnterTable rollList={data.rollList} />}

            {data.actionList?.length > 0 && (
                <ActionView actionList={data.actionList} />
            )}
        </>
    )
}

export default CityDetail
