import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import { getCityData } from '../cityData'
import { CityDistrict, CityFacility } from '../CityType'

function City() {
    const cityData = getCityData()

    return (
        <Card title="NeonHollow">
            <div className="flex gap-4">
                <div className="flex-1 basis-1/2">
                    <img src="/images/NeonHollow.jpg" alt="NeonHollow" />
                </div>
                <div className="flex-1 basis-1/2">
                    <p>
                        <strong>District Lockdowns:</strong>
                    </p>
                    {cityData.map(
                        (district: CityDistrict, index: number) =>
                            index <= 2 && (
                                <p key={index}>
                                    {district.heat} → {district.name}
                                </p>
                            )
                    )}
                </div>
            </div>
            <br />
            {cityData.map((district: CityDistrict, index: number) => (
                <div
                    className={`card ${index % 2 === 0 ? 'card-margin' : ''}`}
                    key={index}
                >
                    <p>
                        <strong>
                            {district.heat.split(' ')[0]} {district.name}
                        </strong>
                    </p>
                    <div className="flex justify-between gap-3">
                        {district.facilities.map(
                            (facility: CityFacility, i: number) => (
                                <div
                                    key={i}
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
                </div>
            ))}
        </Card>
    )
}

export default City
