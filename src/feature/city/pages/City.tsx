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
            <Card>
                <div className="flex gap-5">
                    <div className="flex-1 basis-2/5">
                        <img src="/images/NeonHollow.jpg" alt="NeonHollow" />
                    </div>
                    <div className="flex-1 basis-3/5">
                        <FadeIn>
                            <p>
                                <strong className="highlight">
                                    District Lockdowns:
                                </strong>
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
            </Card>

            <Card>
                {cityData.map((district: DistrictType, index: number) => (
                    <DistrictView key={index} district={district} />
                ))}
            </Card>
        </>
    )
}

export default City
