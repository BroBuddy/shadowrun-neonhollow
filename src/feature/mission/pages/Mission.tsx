import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import Headline from '@/components/Headline'

type MissionType = { title: string; link: string }

const missions: MissionType[] = [
    { title: 'Recon the Facility', link: '/mission/R610' },
    { title: 'Crash Security Systems', link: '/mission/R620' },
    { title: 'Confront the CEO', link: '/mission/R630' },
    { title: 'Unveil the Truth', link: '/mission/R640' },
]

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
                        <strong>Spend:</strong> 3 Intel &#8594; Negotiate hazard
                        pay
                    </li>
                    <li>
                        <strong>Roll:</strong> 2d6 &#8594; Add{' '}
                        <strong>Charisma</strong>
                    </li>
                    <li>
                        <strong>Gain:</strong>{' '}
                        <Link to="/resource/R303">Nuyen</Link>
                    </li>
                </ol>
            </Card>

            <Card>
                <p>
                    <strong>Missions Overview:</strong>
                </p>
                <ol className="list-margin">
                    {missions.map((mission: MissionType, index: number) => (
                        <li key={index}>
                            <Link to={mission.link}>{mission.title}</Link>
                        </li>
                    ))}
                </ol>
            </Card>
        </>
    )
}

export default Mission
