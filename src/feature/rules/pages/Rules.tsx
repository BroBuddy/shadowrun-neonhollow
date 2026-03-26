import Card from '../../../components/Card'
import Headline from '@/components/Headline'
import RuleMechanic from '../components/RuleMechanic'
import Settings from '@/pages/Settings'

const Rules = () => {

    return (
        <>
            <Headline>Rules</Headline>
            
            <Card>
                <RuleMechanic />
                <Settings />
            </Card>
        </>
    )
}

export default Rules
