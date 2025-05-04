import Card from '@/components/Card'
import { District as DistrictType } from '../CityType'

type CityHeaderProps = {
    cityData: DistrictType[]
}

const CityHeader = ({ cityData }: CityHeaderProps) => {
    const renderDistricts = () => {
        if (!cityData || cityData.length === 0) {
            return <p>No districts available.</p>
        }

        return cityData.slice(0, 3).map((district: DistrictType) => (
            <p key={district.name}>
                {district.icon} Heat {district.heat} → {district.name}
            </p>
        ))
    }

    return (
        <Card>
            <div className="flex gap-5">
                <div className="flex-1 basis-2/5">
                    <img src="/images/city/NeonHollow.jpg" alt="NeonHollow" />
                </div>
                <div className="flex-1 basis-3/5">
                    <p>
                        <strong className="highlight">
                            District Lockdowns:
                        </strong>
                    </p>
                    {renderDistricts()}
                </div>
            </div>
        </Card>
    )
}

export default CityHeader
