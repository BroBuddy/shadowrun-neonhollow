import { useState } from 'react'
import { getCityData } from '../cityData'
import { District as DistrictType } from '../CityType'
import Headline from '@/components/Headline'
import DistrictView from '../components/DistrictView'
import Card from '@/components/Card'
import CityHeader from '../components/CityHeader'
import useResourceStore from '@/feature/resource/store/resourceStore'

function City() {
    const cityData = getCityData()   
     const noto = useResourceStore((state) => state.resources.Noto)

     console.log('noto', noto)

    const [openId, setOpenId] = useState<number | null>(
        cityData[cityData.length - 1]?.id ?? null
    )

    if (!cityData || cityData.length === 0) {
        return <p>No city data available.</p>
    }

    return (
        <>
            <Headline>NeonHollow</Headline>
            <CityHeader cityData={cityData} />

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