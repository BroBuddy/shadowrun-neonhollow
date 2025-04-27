import Card from '@/components/Card'
import { Link } from 'react-router-dom'
import { Archetype } from '../CharacterType'

const archetypes: Archetype[] = [
    { name: 'Street Samurai', link: '/rule/R041' },
    { name: 'Decker', link: '/rule/R042' },
    { name: 'Rigger', link: '/rule/R043' },
    { name: 'Mage', link: '/rule/R044' },
    { name: 'Face', link: '/rule/R045' },
    { name: 'Shaman', link: '/rule/R046' },
]

function NameView() {
    return (
        <Card>
            <p>
                <strong className="highlight">(Optional) Name:</strong>
            </p>
            <p>Each archetype has its own name pool:</p>
            <ul className="list-margin">
                {archetypes.map((archetype: Archetype, index: number) => (
                    <li key={index}>
                        <Link to={archetype.link}>{archetype.name}</Link>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default NameView
