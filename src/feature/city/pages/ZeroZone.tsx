import Headline from '@/components/Headline'
import { getFacilityByTag } from '../facilityData'
import { Facility } from '../FacilityType'
import FadeIn from '@/components/FadeIn'
import Card from '@/components/Card'
import RollView from '../components/RollView'
import RunnerView from '@/feature/runner/components/RunnerView'
import useResourceStore from '@/feature/resource/store/resourceStore'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'
import { useState } from 'react'

const ATTR_MAP: string[] = ['Strength', 'Agility', 'Reaction', 'Logic', 'Intuition', 'Charisma']

function ZeroZone() {
    const data = getFacilityByTag('zerozone') as Facility
    const modifyResources = useResourceStore((state) => state.modifyResources)
    const [rolledAttr, setRolledAttr] = useState<string | null>(null)

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
                    <strong className='highlight'>💰 Place a Bet:</strong>
                </p>

                <ul className='list-margin'>
                    <li>
                        <InRow>
                            <span>What's the fight?</span>
                            <Dice dice={1} onRoll={(n) => setRolledAttr(ATTR_MAP[n - 1])} />
                            {rolledAttr && (
                                <>
                                    <span>&#8594;</span>
                                    <span>{rolledAttr}</span>
                                </>
                            )}
                        </InRow>
                    </li>
                    <li>See Challenger <span>&#8594;</span> <RunnerView /></li>
                    <li>
                        <span className='font-bold highlight cursor-pointer' onClick={() => handleModify('Nuyen', -5)}>
                            Pay 5k Nuyen
                        </span>
                        <span className='mx-1'>&#8594;</span>
                        Will the Challenger win or lose?
                    </li>
                    <li>See Champion <span>&#8594;</span> <RunnerView /></li>
                    <li>
                        Right Bet
                        <span className='mx-1'>&#8594;</span>
                        <span className='font-bold highlight cursor-pointer' onClick={() => handleModify('Nuyen', 10)}>
                            Gain 10k Nuyen
                        </span>
                    </li>
                </ul>
            </Card>

            <Card>
                <p>
                    <strong className='highlight'>⚔️ Challenge a Runner:</strong>
                </p>

                <ul className='list-margin'>
                    <li>Pick your strongest attribute</li>
                    <li>Enemy <span>&#8594;</span> <RunnerView /></li>
                    <li>Compare matching attributes — the difference is the gap</li>
                    <li>Lost? &#8594; Lose Health equal to the gap</li>
                    <li>Won? <span>&#8594;</span>
                        <span className='font-bold highlight cursor-pointer mx-1'
                            onClick={() => handleModify('Edge', 2)}>Gain 2 Edge</span>
                    </li>
                </ul>
            </Card>
        </>
    )
}

export default ZeroZone
