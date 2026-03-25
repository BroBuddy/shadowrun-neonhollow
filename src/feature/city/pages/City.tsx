import { useState } from 'react'
import { District as DistrictType } from '../types/CityType'
import Headline from '@/components/Headline'
import DistrictView from '../components/DistrictView'
import Card from '@/components/Card'
import useResourceStore from '@/feature/resource/store/resourceStore'
import { getCityData } from '../services/CityService'
import PageHeader from '@/components/PageHeader'
import Arrow from '@/components/Arrow'

function City() {
    const cityData = getCityData()   
    const noto = useResourceStore((state) => state.resources.Noto)

    const [openId, setOpenId] = useState<number | null>(
        cityData[cityData.length - 1]?.id ?? null
    )

    if (!cityData || cityData.length === 0) {
        return <p>No city data available.</p>
    }

    return (
        <>
            <Headline>NeonHollow</Headline>

            <PageHeader
                title='NeonHollow'
                image='/images/city/NeonHollow.jpg'>
                <p>
                    <strong className="highlight" role="heading">
                        District Lockdowns:
                    </strong>
                </p>

                {cityData.slice(0, 3).map((district) => (
                    <div key={district.name}>
                        {district.icon} {district.name}
                        <Arrow className='mx-1' />
                        👁️ {district.noto}
                    </div>
                ))}
            </PageHeader>

            <Card>
                {cityData.map((district: DistrictType) => {
                    const isLocked = district.noto !== undefined && noto >= district.noto

                    return (
                        <DistrictView
                            key={district.id}
                            district={district}
                            isOpen={openId === district.id}
                            isLocked={isLocked}
                            onToggle={() => {
                                if (!isLocked) setOpenId(openId === district.id ? null : district.id ?? null)
                            }}
                        />
                    )
})}
            </Card>
        </>
    )
}

export default City