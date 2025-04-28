import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import { District as DistrictType } from '../CityType'

type DistrictProps = {
    district: DistrictType
}

function DistrictView({ district }: DistrictProps) {
    return (
        <Card>
            <p>
                <strong>
                    {district.heat.split(' ')[0]} {district.name}
                </strong>
            </p>
            <div className="flex justify-between gap-3">
                {district.facilities.map(
                    (
                        facility: Record<string, string>,
                        facilityIndex: number
                    ) => (
                        <div
                            key={facilityIndex}
                            className="flex-1 basis-1/3 text-center"
                        >
                            <Link to={facility.link}>
                                <p>
                                    {facility.name}
                                    <img
                                        src={facility.image}
                                        alt={facility.name}
                                        className="mx-auto"
                                    />
                                </p>
                            </Link>
                        </div>
                    )
                )}
            </div>
        </Card>
    )
}

export default DistrictView
