import Headline from '@/components/Headline'
import ModeView from '../components/ModeView'
import NameView from '../../name/components/NameView'
import GearView from '../components/GearView'
import ArchetypeView from '../../archetype/components/ArchetypeView'
import MetatypeView from '../../metatype/components/MetatypeView'

function Character() {
    return (
        <>
            <Headline>Character Creation</Headline>
            <MetatypeView />
            <ArchetypeView />
            <GearView />
            <NameView />
        </>
    )
}

export default Character
