import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { Archetype } from '../CharacterType'

const archetypes: Archetype[] = [
    { name: 'Street Samurai', link: '/rule/R031' },
    { name: 'Decker', link: '/rule/R032' },
    { name: 'Rigger', link: '/rule/R033' },
    { name: 'Mage', link: '/rule/R034' },
    { name: 'Face', link: '/rule/R035' },
    { name: 'Shaman', link: '/rule/R036' },
]

function ArchetypeView() {
    return (
        <Card>
            <p>
                <strong className="highlight">Archetype:</strong>
            </p>
            <p>Roll 1d6:</p>
            <ol className="list-margin">
                {archetypes.map((archetype: Archetype, index: number) => (
                    <li key={index}>
                        <Link to={archetype.link}>{archetype.name}</Link>
                    </li>
                ))}
            </ol>
        </Card>
    )
}

export default ArchetypeView
