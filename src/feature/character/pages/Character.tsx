import Headline from '@/components/Headline'
import GearView from '../components/GearView'
import ArchetypeView from '../components/ArchetypeView'
import MetatypeView from '../components/MetatypeView'
import ModeView from '../components/ModeView'
import Card from '@/components/Card'
import NameView from '../components/NameView'

function Character() {
    return (
        <>
            <Headline>Character Creation</Headline>
            <MetatypeView />
            <ArchetypeView />
            <GearView />
            <NameView />
            <ModeView />

            <Card>
                <p><strong>System Online:</strong></p>
                <p>Day one begins. Step into the <strong>streets</strong> and make your name.</p>
            </Card>
        </>
    )
}

export default Character
