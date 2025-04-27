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
                        <em>
                            "Mr. Johnson—the polished voice of the shadows.
                            Deals are made, trust is tested, and the job always
                            pays… for those who survive."
                        </em>
                    </p>
                </div>
            </div>

            <Card>
                <p>
                    Focus on mastering both{' '}
                    <Link to="/mission/rules">Rules</Link> and{' '}
                    <Link to="/mission/performance">Performance</Link>.
                </p>
                <p>
                    <strong className="highlight">Accept a mission:</strong>
                </p>
                <ol className="list-margin">
                    <li>
                        Spend <strong>3 Intel</strong> &#8594; Negotiate hazard
                        pay
                    </li>
                    <li>
                        Roll 2d6 &#8594; Add <strong>Charisma</strong>
                    </li>
                    <li>
                        <Link to="/resource/R303">Gain Nuyen</Link>
                    </li>
                </ol>
            </Card>

            <Card>
                <p>
                    <strong>Missions Overview:</strong>
                </p>
                <ol className="list-margin">
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
            </Card>
        </>
    )
}

export default Mission
