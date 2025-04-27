import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import { getCityData } from '../cityData'
import { District } from '../CityType'
import Headline from '@/components/Headline'

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
                        (district: District, index: number) =>
                            index <= 2 && (
                                <p key={index}>
                                    {district.heat} → {district.name}
                                </p>
                            )
                    )}
                </div>
            </div>
            {cityData.map((district: District, index: number) => (
                <Card key={index}>
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
            ))}
        </>
    )
}

export default City
