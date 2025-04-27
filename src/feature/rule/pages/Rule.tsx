import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import Headline from '@/components/Headline'

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
                <ul>
                    <li>
                        <Link to="/rule/R003">Time</Link>
                    </li>
                    <li>
                        <Link to="/rule/R004">Nuyen</Link>
                    </li>
                    <li>
                        <Link to="/rule/R005">Health</Link>
                    </li>
                    <li>
                        <Link to="/rule/R006">Energy</Link>
                    </li>
                    <li>
                        <Link to="/rule/R007">Reputation</Link>
                    </li>
                    <li>
                        <Link to="/rule/R008">Heat</Link>
                    </li>
                    <li>
                        <Link to="/rule/R009">Intel</Link>
                    </li>
                    <li>
                        <Link to="/rule/R010">Dice</Link>
                    </li>
                    <li>
                        <Link to="/rule/R011">Matrix</Link>
                    </li>
                    <li>
                        <Link to="/resource">Resources</Link>
                    </li>
                </ul>
                <p>
                    <strong>Start your Adventure:</strong>
                </p>
                <ul>
                    <li>
                        <Link to="/rule/character">Character Creation</Link>
                    </li>
                </ul>
            </Card>
        </>
    )
}

export default Rule
