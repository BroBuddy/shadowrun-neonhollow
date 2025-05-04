import { Link } from 'react-router-dom'
import { District as DistrictType, FacilityType } from '../CityType'

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
                                <figcaption>{facility.name}</figcaption>
                                <img
                                    src={`/images/city/${facility.name}.jpg`}
                                    alt={`${facility.name}`}
                                    loading="lazy"
                                    className="mx-auto"
                                />
                            </figure>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DistrictView
