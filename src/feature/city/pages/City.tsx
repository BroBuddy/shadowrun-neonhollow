import { getCityData } from '../cityData'
import { District as DistrictType } from '../CityType'
import Headline from '@/components/Headline'
import DistrictView from '../components/DistrictView'
import { useMemo } from 'react'
import FadeIn from '@/components/FadeIn'
import Card from '@/components/Card'

function City() {
    const cityData = useMemo(() => getCityData(), [])

    return (
        <>
            <Headline>NeonHollow</Headline>
            <div className="flex gap-4 mb-4 mx-5">
                <div className="flex-1 basis-1/2">
                    <img src="/images/NeonHollow.jpg" alt="NeonHollow" />
                </div>
                <div className="flex-1 basis-1/2">
                    <FadeIn>
                        <p>
                            <strong>District Lockdowns:</strong>
                        </p>
                        {cityData.map(
                            (district: DistrictType, index: number) =>
                                index <= 2 && (
                                    <p key={index}>
                                        {district.icon} {district.heat} →{' '}
                                        {district.name}
                                    </p>
                                )
                        )}
                    </FadeIn>
                </div>
            </div>

            <Card>
                <FadeIn>
                    {cityData.map((district: DistrictType, index: number) => (
                        <DistrictView key={index} district={district} />
                    ))}
                </FadeIn>
            </Card>
        </>
    )
}

export default City
