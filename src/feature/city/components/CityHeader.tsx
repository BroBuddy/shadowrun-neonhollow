import { District as DistrictType } from '../CityType'
import FadeIn from '@/components/FadeIn'

type CityHeaderProps = {
    cityData: DistrictType[]
}

const CityHeader = ({ cityData }: CityHeaderProps) => {
    if (!cityData || cityData.length === 0) {
        return <div>No districts available.</div>
    }

    return (
        <FadeIn>
            <div className="flex gap-5 p-4">
                <div className="flex-1 basis-2/5">
                    <img
                        src="/images/city/NeonHollow.jpg"
                        alt="NeonHollow"
                        loading="lazy"
                    />
                </div>
                <div className="flex-1 basis-3/5">
                    <p>
                        <strong className="highlight" role="heading">
                            District Lockdowns:
                        </strong>
                    </p>
                    {cityData.slice(0, 3).map((district) => (
                        <div key={district.name}>
                            {district.icon} Heat {district.heat} →{' '}
                            {district.name}
                        </div>
                    ))}
                </div>
            </div>
        </FadeIn>
    )
}

export default CityHeader
