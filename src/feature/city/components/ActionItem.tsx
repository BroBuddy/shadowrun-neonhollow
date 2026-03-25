import Arrow from '@/components/Arrow'
import { ActionStep as ActionStepType, FacilityAction } from '../types/FacilityType'

import ActionStep from './ActionStep'

type ActionItemProps = {
    action: FacilityAction
}

const ActionItem = ({ action }: ActionItemProps) => (
    <div className='mb-4'>
        <p><strong>{action.title}</strong></p>
        
        <div className="flex flex-wrap items-center gap-1">
            {action.steps.map((step: ActionStepType, stepIndex: number) => (
                <>
                    <ActionStep key={stepIndex} step={step} />
                    {stepIndex < action.steps.length - 1 && (
                        <Arrow />
                    )}
                </>
            ))}
        </div>
    </div>
)

export default ActionItem
