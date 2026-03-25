import Headline from '@/components/Headline'
import { Facility } from '../types/FacilityType'
import Card from '@/components/Card'
import EnterTable from '../components/EnterTable'
import RunnerView from '@/feature/runner/components/RunnerView'
import useResourceStore from '@/feature/resource/store/resourceStore'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'
import { useState } from 'react'
import { getFacilityByTag } from '../services/FacilityService'
import PageHeader from '@/components/PageHeader'
import Arrow from '@/components/Arrow'

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

            <PageHeader
                title={data.title}
                image={`/images/city/${data.title}.jpg`}>
                <p><em>"{data.description}"</em></p>
            </PageHeader>

            {data.rollList.length > 0 && <EnterTable rollList={data.rollList} />}

            <Card>
                <p><strong className='highlight'>💰 Place a Bet:</strong></p>

                <ul className='list-margin'>
                    <li>
                        <InRow>
                            <span>What's the fight?</span>
                            <Dice dice={1} onRoll={(n) => setRolledAttr(ATTR_MAP[n - 1])} />
                            {rolledAttr && (
                                <>
                                    <Arrow />
                                    <span>{rolledAttr}</span>
                                </>
                            )}
                        </InRow>
                    </li>
                    <li>Challenger <Arrow /> <RunnerView /></li>
                    <li>
                        Win or lose?
                        <Arrow className='mx-1' />
                        <span className='font-bold highlight cursor-pointer' onClick={() => handleModify('Nuyen', -5)}>
                            Pay 5k Nuyen
                        </span>
                    </li>
                    <li>Champion <Arrow /> <RunnerView /></li>
                    <li>
                        Tie counts as a loss
                        <Arrow className='mx-1' />
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
                    <li>Enemy <Arrow /> <RunnerView /></li>
                    <li>Compare matching attributes</li>
                    <li>Lost? <Arrow /> Lose Health equal to the gap</li>
                    <li>Won? <Arrow />
                        <span className='font-bold highlight cursor-pointer mx-1'
                            onClick={() => handleModify('Edge', 2)}>Gain 2 Edge</span>
                    </li>
                </ul>
            </Card>
        </>
    )
}

export default ZeroZone
