import Headline from '@/components/Headline'
import { useParams } from 'react-router-dom'
import { getFacilityByTag } from '../facilityData'
import { Facility, FacilityRoll } from '../FacilityType'
import ActionsView from '../components/ActionsView'
import RollsView from '../components/RollsView'
import { useMemo } from 'react'
import Card from '@/components/Card'
import RunnerView from '@/feature/runner/components/RunnerView'

function CityDetail() {
    const { tag } = useParams()
    const data = useMemo(() => {
        return getFacilityByTag(tag as string) as Facility
    }, [tag])
    const inZeroZone = tag === 'zerozone'

    if (!data) {
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

            {data.rollList.length >= 1 && (
                <RollsView
                    rollList={data.rollList.map((item: FacilityRoll) => ({
                        ...item,
                        key: item.roll,
                    }))}
                />
            )}

            <ActionsView actionList={data.actionList} />

            {inZeroZone && (
                <Card>
                    <RunnerView />
                </Card>
            )}
        </>
    )
}

export default CityDetail
