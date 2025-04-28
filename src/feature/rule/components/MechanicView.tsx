import { Link } from 'react-router-dom'

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

function MechanicView() {
    return (
        <>
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
        </>
    )
}

export default MechanicView
