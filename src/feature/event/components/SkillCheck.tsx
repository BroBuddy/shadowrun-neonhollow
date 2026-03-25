import { useState } from 'react'
import { SkillCheck as SkillCheckType } from '../types/EventType'
import useResourceStore from '@/feature/resource/store/resourceStore'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'
import SkillCheckResult from './SkillCheckResult'
import Arrow from '@/components/Arrow'

type SkillCheckProps = {
    skillCheck: SkillCheckType
    hidden: boolean
}

const SkillCheck = ({ skillCheck, hidden }: SkillCheckProps) => {
    const modifyResources = useResourceStore((state) => state.modifyResources)
    const [revealed, setRevealed] = useState(false)

    const handleResultClick = (resource: { [key: string]: number }) => {
        modifyResources(resource)
    }

    if (hidden) return null

    if (!revealed) {
        return (
            <div className="mt-4">
                <span className="text-sm">{skillCheck.description}</span>
                <Arrow className='mx-1' />
                <button
                    className="cursor-pointer font-bold highlight"
                    onClick={() => { setRevealed(true); }}
                >
                    {skillCheck.icon} {skillCheck.attribute}
                </button>
            </div>
        )
    }

    return (
        <div className="mt-4">
            <p>
                <strong>
                    {skillCheck.icon}
                    <span className="mx-1">{skillCheck.attribute}</span>
                    (DC {skillCheck.dc}):
                </strong>
            </p>
            
            <InRow>
                <span>Roll</span>
                <Dice dice={2} />
            </InRow>

            <SkillCheckResult
                icon="✅"
                text={skillCheck.success.text}
                resource={skillCheck.success.resource}
                onClick={handleResultClick}
            />
            <SkillCheckResult
                icon="❌"
                text={skillCheck.fail.text}
                resource={skillCheck.fail.resource}
                onClick={handleResultClick}
            />
        </div>
    )
}

export default SkillCheck