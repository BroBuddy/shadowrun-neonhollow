import Headline from '@/components/Headline'
import GearView from '../components/GearView'
import ArchetypeView from '../components/ArchetypeView'
import MetatypeView from '../components/MetatypeView'
import ModeView from '../components/ModeView'
import Card from '@/components/Card'
import NameView from '../components/NameView'
import { Link } from 'react-router-dom'

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
                <p>Before you hit the streets — <Link to="/rules" className="highlight font-bold">read the rules</Link>.</p>
            </Card>
        </>
    )
}

export default Character
