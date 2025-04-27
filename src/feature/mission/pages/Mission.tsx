import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import Headline from '@/components/Headline'

function Mission() {
    return (
        <>
            <Headline>Mr. Johnson</Headline>
            <div className="flex gap-4 mb-4 mx-5">
                <div className="flex-1 basis-1/2">
                    <img src="/images/MrJohnson.jpg" alt="MrJohnson" />
                </div>
                <div className="flex-1 basis-1/2">
                    <p>
                        <strong>Accept a mission:</strong>
                    </p>
                    <ol>
                        <li>
                            Spend <strong>3 Intel</strong>
                        </li>
                        <li>Negotiate hazard pay</li>
                        <li>Roll 2d6</li>
                        <li>
                            Add <strong>Charisma</strong>
                        </li>
                        <li>
                            <Link to="/resource/R303">Gain Nuyen</Link>
                        </li>
                    </ol>
                </div>
            </div>

            <Card>
                <p>
                    Focus on mastering both{' '}
                    <Link to="/mission/rules">Rules</Link> and{' '}
                    <Link to="/mission/performance">Performance</Link>.
                </p>
                <p>
                    <strong>Missions Overview:</strong>
                </p>
                <ul>
                    <li>
                        <Link to="/mission/R610">Recon the Facility</Link>
                        <ol>
                            <li>Infiltrate the Outer Perimeter</li>
                            <li>Gather Intel on Security Systems</li>
                            <li>Extract Critical Data from the Server</li>
                        </ol>
                    </li>
                    <li>
                        <Link to="/mission/R620">Crash Security Systems</Link>
                        <ol>
                            <li>Overload the Firewall</li>
                            <li>Disable Security Bots</li>
                            <li>Take Down the AI Core</li>
                        </ol>
                    </li>
                    <li>
                        <Link to="/mission/R630">Confront the CEO</Link>
                        <ol>
                            <li>Reach the Executive Elevator</li>
                            <li>Bypass CEO’s Personal Guard</li>
                            <li>Deliver the Threat</li>
                        </ol>
                    </li>
                    <li>
                        <Link to="/mission/R640">Unveil the Truth</Link>
                        <ol>
                            <li>Infiltrate the Vault</li>
                            <li>Extract the Sensitive Files</li>
                            <li>Leak the Files to the Public</li>
                        </ol>
                    </li>
                </ul>
            </Card>
        </>
    )
}

export default Mission
