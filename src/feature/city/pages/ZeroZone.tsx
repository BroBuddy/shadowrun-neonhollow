import Headline from '@/components/Headline'
import { getFacilityByTag } from '../facilityData'
import { Facility } from '../FacilityType'
import FadeIn from '@/components/FadeIn'
import Card from '@/components/Card'
import RollView from '../components/RollView'
import RunnerView from '@/feature/runner/components/RunnerView'
import useResourceStore from '@/feature/resource/store/resourceStore'

function ZeroZone() {
    const data = getFacilityByTag('zerozone') as Facility
    const modifyResources = useResourceStore((state) => state.modifyResources)

    const handleModify = (resource: string, value: number) => {
        modifyResources({ [resource]: value })
    }

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

            {data.rollList.length > 0 && <RollView rollList={data.rollList} />}

            <Card>
                <p>
                    <strong className='highlight'>⚔️ Challenge a Runner:</strong>
                </p>

                <p>
                    <strong>Type:</strong>
                </p>

                <ul className='list-margin'>
                    <li><strong>Physical Brawl:</strong> Strength, Agility, Reaction</li>
                    <li><strong>Mental Clash:</strong> Logic, Intuition, Charisma</li>
                </ul>

                <p>
                    <strong>Battle:</strong>
                </p>

                <ul className='list-margin'>
                    <li>Total your attributes based on the chosen type</li>
                    <li>Enemy <span>&#8594;</span> <RunnerView /></li>
                    <li>Deduct the opponent’s matching attribute values</li>
                </ul>

                <p>
                    <strong>Aftermath:</strong>
                </p>

                <ul className='list-margin'>
                    <li>Lost? <span>&#8594;</span> Lose Health equal to the gap</li>
                    <li>Won? <span className='mr-1'>&#8594;</span> 
                        <span className='font-bold highlight cursor-pointer'
                            onClick={() => handleModify('Nuyen', 15)}>Gain 15k Nuyen</span>
                    </li>
                </ul>
            </Card>
        </>
    )
}

export default ZeroZone
