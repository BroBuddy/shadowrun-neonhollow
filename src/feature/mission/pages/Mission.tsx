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
                        <li>
                            Roll 2d6 &#8594; <strong>+Charisma</strong>
                        </li>
                        <li>
                            <Link to="/R303">Gain Nuyen</Link>
                        </li>
                    </ol>
                </div>
            </div>

            <Card>
                <p>
                    <strong>Missions Overview:</strong>
                </p>
                <ol>
                    <li>
                        <Link to="/mission/R610">Recon the Facility</Link>
                    </li>
                    <li>
                        <Link to="/mission/R620">Crash Security Systems</Link>
                    </li>
                    <li>
                        <Link to="/mission/R630">Confront the CEO</Link>
                    </li>
                    <li>
                        <Link to="/mission/R640">Unveil the Truth</Link>
                    </li>
                </ol>
                <p>
                    Focus on mastering both{' '}
                    <Link to="/mission/rules">Rules</Link> and{' '}
                    <Link to="/mission/performance">Performance</Link>
                </p>
            </Card>
        </>
    )
}

export default Mission
