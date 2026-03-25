import PageHeader from '@/components/PageHeader'
import MissionRules from '../components/MissionRules'
import MissionSelection from '../components/MissionSelection'
import Headline from '@/components/Headline'

function Mission() {
    return (
        <>
            <Headline>Mr. Johnson</Headline>

            <PageHeader
                title="MrJohnson"
                image="/images/MrJohnson.jpg">
                    <p>
                        <em>
                            "Mr. Johnson—the polished voice of the shadows.
                            He never asks twice. The job pays… if you make it back."
                        </em>
                    </p>
            </PageHeader>

            <MissionRules />
            
            <MissionSelection />
        </>
    )
}

export default Mission
