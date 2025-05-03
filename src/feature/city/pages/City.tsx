import { getCityData } from '../cityData'
import { District as DistrictType } from '../CityType'
import Headline from '@/components/Headline'
import DistrictView from '../components/DistrictView'
import { useMemo } from 'react'
import Card from '@/components/Card'
import CityHeader from '../components/CityHeader'

function City() {
    const cityData = useMemo(() => getCityData(), [])

    return (
        <>
            <Headline>NeonHollow</Headline>
            <CityHeader cityData={cityData} />

            <Card>
                {cityData.map((district: DistrictType, index: number) => (
                    <DistrictView key={index} district={district} />
                ))}
            </Card>
        </>
    )
}

export default City
