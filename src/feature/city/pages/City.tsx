import { getCityData } from '../cityData'
import { District as DistrictType } from '../CityType'
import Headline from '@/components/Headline'
import DistrictView from '../components/DistrictView'
import Card from '@/components/Card'
import CityHeader from '../components/CityHeader'

function City() {
    const cityData = getCityData()

    if (!cityData || cityData.length === 0) {
        return <p>No city data available.</p>
    }

    return (
        <>
            <Headline>NeonHollow</Headline>
            <CityHeader cityData={cityData} />

            <Card>
                {cityData.map((district: DistrictType) => (
                    <DistrictView key={district.name} district={district} />
                ))}
            </Card>
        </>
    )
}

export default City
