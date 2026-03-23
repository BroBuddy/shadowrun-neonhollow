import Headline from '@/components/Headline'
import { getFacilityByTag } from '../facilityData'
import { Facility } from '../FacilityType'
import ActionView from '../components/ActionView'
import FadeIn from '@/components/FadeIn'
import Card from '@/components/Card'
import PopUp from '@/components/Popup'

function MegaCorp() {
    const data = getFacilityByTag('megacorp') as Facility

    return (
        <>
            <Headline>{data.title}</Headline>
            <FadeIn>
                <div className="flex gap-5 p-4">
                    <div className="flex-1 basis-2/5">
                        <img
                            src={`/images/city/${data.title}.jpg`}
                            alt={data.title}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-1 basis-3/5">
                        <p>
                            <em>"{data.description}"</em>
                        </p>
                    </div>
                </div>
            </FadeIn>

            {data.actionList?.length > 0 && (
                <ActionView actionList={data.actionList} />
            )}

            <Card>
                <p><strong>The Reckoning:</strong></p>
                <p className="mt-2">Once you have reached <strong>5 Progress</strong>, consult your final rating below.</p>
                
                <span className='mr-1'>&#8594;</span>
                <PopUp title='Final Rating'>
                    <p>How Fast Did You Burn It Down?</p>
                    <p>🟣 <strong className='highlight'>3 Days</strong> → Legendary</p>
                    <p>🔵 <strong className='highlight'>4–5 Days</strong> → Exceptional</p>
                    <p>🟢 <strong className='highlight'>6–7 Days</strong> → Impressive</p>
                    <p>🟡 <strong className='highlight'>8-9 Days</strong> → Survivor</p>
                    <p>🔴 <strong className='highlight'>10+ Days</strong> → Barely Made It</p>
                </PopUp>
            </Card>
        </>
    )
}

export default MegaCorp
