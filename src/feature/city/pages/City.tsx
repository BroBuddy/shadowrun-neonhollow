import { getCityData } from '../cityData'
import { District as DistrictType } from '../CityType'
import Headline from '@/components/Headline'
import District from '../components/District'

function City() {
    const cityData = getCityData()

    return (
        <>
            <Headline>NeonHollow</Headline>
            <div className="flex gap-4 mb-4 mx-5">
                <div className="flex-1 basis-1/2">
                    <img src="/images/NeonHollow.jpg" alt="NeonHollow" />
                </div>
                <div className="flex-1 basis-1/2">
                    <p>
                        <strong>District Lockdowns:</strong>
                    </p>
                    {cityData.map(
                        (district: DistrictType, index: number) =>
                            index <= 2 && (
                                <p key={index}>
                                    {district.heat} → {district.name}
                                </p>
                            )
                    )}
                </div>
            </div>
            {cityData.map((district: DistrictType, index: number) => (
                <District key={index} district={district} />
            ))}
        </>
    )
}

export default City
