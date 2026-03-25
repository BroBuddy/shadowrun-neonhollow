import Headline from '@/components/Headline'
import { Facility } from '../types/FacilityType'
import ActionView from '../components/ActionView'
import Card from '@/components/Card'
import PopUp from '@/components/Popup'
import useResourceStore from '@/feature/resource/store/resourceStore'
import { getFacilityByTag } from '../services/FacilityService'

function MegaCorp() {
    const data = getFacilityByTag('megacorp') as Facility
    const resources = useResourceStore((state) => state.resources)
    const progress = resources.Progress
    const isUnlocked = progress >= 5

    return (
        <>
            <Headline>{data.title}</Headline>

            <div className="flex gap-5 p-4">
                <div className="flex-1 basis-2/5">
                    <img
                        src={`/images/city/${data.title}.jpg`}
                        alt={data.title}
                        loading="lazy"
                    />
                </div>

                <div className="flex-1 basis-3/5">
                    <p><em>"{data.description}"</em></p>
                </div>
            </div>

            {data.actionList?.length > 0 && (
                <ActionView actionList={data.actionList} />
            )}

            <Card>
                <p><strong>💥 Corporate Collapse:</strong></p>

                {isUnlocked ? (
                    <ul className='list-margin'>
                        <li>
                            <PopUp title='Mission Efficiency Rating'>
                                <p>🔵 <strong className='highlight'>3 Days</strong> → Ghost</p>
                                <p>🟢 <strong className='highlight'>4–5 Days</strong> → Prime Runner</p>
                                <p>🟡 <strong className='highlight'>6–7 Days</strong> → Shadow Asset</p>
                                <p>🟠 <strong className='highlight'>8-9 Days</strong> → Street Noise</p>
                                <p>🔴 <strong className='highlight'>10+ Days</strong> → Data Trash</p>
                            </PopUp>
                        </li>
                    </ul>
                ) : (
                    <p className="opacity-50 mt-2">🔒 Requires 5 Progress</p>
                )}
            </Card>
        </>
    )
}

export default MegaCorp
