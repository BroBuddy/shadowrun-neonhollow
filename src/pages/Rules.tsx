import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Rules = () => {
    return (
        <Card title="Rules">
            <div className="card">
                <p>
                    <strong>Your first Steps:</strong>
                </p>
                <p>Grab 2d6, a pen, and something to write on.</p>
                <p>
                    <strong>Know the Mechanics:</strong>
                </p>
                <ul>
                    <li>
                        <Link to="/R003">Time</Link>
                    </li>
                    <li>
                        <Link to="/R004">Nuyen</Link>
                    </li>
                    <li>
                        <Link to="/R005">Health</Link>
                    </li>
                    <li>
                        <Link to="/R006">Energy</Link>
                    </li>
                    <li>
                        <Link to="/R007">Reputation</Link>
                    </li>
                    <li>
                        <Link to="/R008">Heat</Link>
                    </li>
                    <li>
                        <Link to="/R009">Intel</Link>
                    </li>
                    <li>
                        <Link to="/R010">Dice</Link>
                    </li>
                    <li>
                        <Link to="/R011">Matrix</Link>
                    </li>
                </ul>
                <p>
                    <strong>Start your Adventure:</strong>
                </p>
                <ul>
                    <li>
                        <Link to="/R012">Character Creation</Link>
                    </li>
                </ul>
            </div>
        </Card>
    )
}

export default Rules
