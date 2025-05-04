import { Link } from 'react-router-dom'
import { District as DistrictType } from '../CityType'

type FacilityType = Record<string, string>

type DistrictProps = {
    district: DistrictType
}

function DistrictView({ district }: DistrictProps) {
    if (!district.facilities || district.facilities.length === 0) {
        return <p>No facilities available in this district.</p>
    }

    return (
        <>
            <p>
                <strong>
                    {district.icon} {district.name}
                </strong>
            </p>

            <div className="flex justify-between gap-10 mb-3">
                {district.facilities.map((facility: FacilityType) => (
                    <div
                        key={facility.name}
                        className="flex-1 basis-1/3 text-center"
                    >
                        <Link to={facility.link}>
                            <figure>
                                <img
                                    src={facility.image}
                                    alt={`Image of ${facility.name}`}
                                    className="mx-auto"
                                />
                                <figcaption>{facility.name}</figcaption>
                            </figure>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DistrictView
