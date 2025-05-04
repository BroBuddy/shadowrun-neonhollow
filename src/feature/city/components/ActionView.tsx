import Card from '@/components/Card'
import { FacilityAction } from '../FacilityType'
import ActionItem from './ActionItem'

type FacilityActionsProps = {
    actionList: FacilityAction[]
}

const ActionView = ({ actionList }: FacilityActionsProps) => {
    if (!actionList || actionList.length === 0) {
        return <p>No actions available.</p>
    }

    return (
        <Card>
            {actionList.map((action: FacilityAction, actionIndex: number) => (
                <ActionItem key={actionIndex} action={action} />
            ))}
        </Card>
    )
}

export default ActionView
