import Card from '@/components/Card'
import { Link } from 'react-router-dom'

function PatrolHub() {
    return (
        <Card title="PatrolHub">
            <div className="flex gap-4">
                <div className="flex-1 basis-1/2">
                    <img src="/images/PatrolHub.jpg" alt="PatrolHub" />
                </div>
                <div className="flex-1 basis-1/2"></div>
            </div>

            <div className="card card-margin">
                <p>
                    <strong className="violet">
                        🏃 Enter &#8594; Roll 2d6:
                    </strong>
                </p>
                <ul>
                    <li>
                        2: <Link to="/R472">Patrol Check</Link>
                    </li>
                    <li>
                        3-4: <strong>Security Breach</strong> &#8594; +1 Heat
                    </li>
                    <li>
                        5-6: <strong>False Accusation</strong> &#8594; -1
                        Reputation
                    </li>
                    <li>
                        7: <strong>Standard</strong> &#8594; No Effect
                    </li>
                    <li>
                        8-9: <strong>Backup Support</strong> &#8594; +1 Energy
                    </li>
                    <li>
                        10-11: <strong>Friendly Recognition</strong> &#8594; -1
                        Heat
                    </li>
                    <li>
                        12: <strong>Security Clearance Boost</strong> &#8594; +1
                        Reputation
                    </li>
                </ul>
            </div>

            <div className="card">
                <p>
                    <strong className="violet">🔥 Silence the Badge:</strong>
                </p>
                <ul>
                    <li>
                        Pay <strong>6.000 ¥</strong> &#8594; Roll 2d6 &#8594;{' '}
                        <strong>+2</strong>
                    </li>
                    <li>
                        Add <strong>Strength</strong> or{' '}
                        <strong>Charisma</strong>
                    </li>
                    <li>
                        Reduce &#8594; <Link to="/R304">Heat</Link>
                    </li>
                </ul>
                <p>
                    <strong className="violet">💰 Bounty Pursuit:</strong>
                </p>
                <ul>
                    <li>
                        Spend <strong>3 Health</strong> &#8594; Roll 2d6 &#8594;{' '}
                        <strong>+2</strong>
                    </li>
                    <li>
                        Add <strong>Strength</strong> or{' '}
                        <strong>Intuition</strong>
                    </li>
                    <li>
                        Gain &#8594; <Link to="/R303">Nuyen</Link>
                    </li>
                </ul>
            </div>
        </Card>
    )
}

export default PatrolHub
