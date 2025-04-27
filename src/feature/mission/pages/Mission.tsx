import { Link } from 'react-router-dom'
import Card from '../../../components/Card'

function Mission() {
    return (
        <Card title="Mr. Johnson">
            <div className="flex gap-4">
                <div className="flex-1 basis-1/2">
                    <img src="/images/MrJohnson.jpg" alt="MrJohnson" />
                </div>
                <div className="flex-1 basis-1/2">
                    <p>
                        <strong>How to Begin a Mission:</strong>
                    </p>
                    <ol>
                        <li>
                            Spend <strong>3 Intel</strong>
                        </li>
                        <li>Roll 2d6</li>
                        <li>
                            Add <strong>Charisma</strong>
                        </li>
                        <li>
                            See <Link to="/R303">R303</Link> &#8594; Nuyen
                        </li>
                    </ol>
                </div>
            </div>
            <div className="card card-margin">
                <p>
                    <em>"Start with the first mission."</em>
                </p>
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
            </div>
        </Card>
    )
}

export default Mission
