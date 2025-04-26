import { Link } from 'react-router-dom'
import Card from '../../components/Card'

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
                            See{' '}
                            <Link to="/R303" className="a">
                                R303
                            </Link>{' '}
                            &#8594; Nuyen
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
                <p>
                    1.{' '}
                    <Link to="/mission/R610" className="a">
                        Recon the Facility
                    </Link>
                </p>
                <p>
                    2.{' '}
                    <Link to="/mission/R620" className="a">
                        Crash Security Systems
                    </Link>
                </p>
                <p>
                    3.{' '}
                    <Link to="/mission/R630" className="a">
                        Confront the CEO
                    </Link>
                </p>
                <p>
                    4.{' '}
                    <Link to="/mission/R640" className="a">
                        Unveil the Truth
                    </Link>
                </p>
            </div>
            <p>
                Focus on mastering both{' '}
                <Link to="/mission/rules" className="a">
                    Rules
                </Link>{' '}
                and{' '}
                <Link to="/mission/performance" className="a">
                    Performance
                </Link>
            </p>
        </Card>
    )
}

export default Mission
