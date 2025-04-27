import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import Headline from '@/components/Headline'

type Mechanic = {
    link: string
    name: string
}

const mechanics: Mechanic[] = [
    { link: '/rule/R003', name: 'Time' },
    { link: '/rule/R004', name: 'Nuyen' },
    { link: '/rule/R005', name: 'Health' },
    { link: '/rule/R006', name: 'Energy' },
    { link: '/rule/R007', name: 'Reputation' },
    { link: '/rule/R008', name: 'Heat' },
    { link: '/rule/R009', name: 'Intel' },
    { link: '/rule/R010', name: 'Dice' },
    { link: '/rule/R011', name: 'Matrix' },
    { link: '/resource', name: 'Resources' },
]

const Rule = () => {
    return (
        <>
            <Headline>Rules</Headline>
            <Card>
                <p>
                    <strong>Your first Steps:</strong>
                </p>
                <p>Grab 2d6, a pen, and something to write on.</p>
                <p>
                    <strong>Know the Mechanics:</strong>
                </p>
                <ul className="list-margin">
                    {mechanics.map((mechanic: Mechanic, index: number) => (
                        <li key={index}>
                            <Link to={mechanic.link}>{mechanic.name}</Link>
                        </li>
                    ))}
                </ul>
                <p>
                    <strong>Start your Adventure:</strong>
                </p>
                <ul className="list-margin">
                    <li>
                        <Link to="/character">Character Creation</Link>
                    </li>
                </ul>
            </Card>
        </>
    )
}

export default Rule
