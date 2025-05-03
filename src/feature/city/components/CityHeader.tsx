import Card from '@/components/Card'
import { District as DistrictType } from '../CityType'

type CityHeaderProps = {
    cityData: DistrictType[]
}

const CityHeader = ({ cityData }: CityHeaderProps) => {
    return (
        <Card>
            <div className="flex gap-5">
                <div className="flex-1 basis-2/5">
                    <img src="/images/NeonHollow.jpg" alt="NeonHollow" />
                </div>
                <div className="flex-1 basis-3/5">
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
                </div>
            </div>
        </Card>
    )
}

export default CityHeader
