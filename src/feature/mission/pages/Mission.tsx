import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import Headline from '@/components/Headline'
import { getMissionData } from '../missionData'
import { useMemo } from 'react'
import { Mission as MissionType } from '../MissionType'

function Mission() {
    const data = useMemo(() => {
        return getMissionData() as MissionType[]
    }, [])

    if (!data) {
        return <></>
    }

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

            <Card dice={2}>
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
                        <Link to="/resource/nuyen">Nuyen</Link>
                    </li>
                </ol>
            </Card>

            <Card>
                <p>
                    <strong>Missions Overview:</strong>
                </p>
                <ol className="list-margin">
                    {data.map((item: MissionType, index: number) => (
                        <li key={index}>
                            <Link to={`/mission/${item.id}`}>{item.title}</Link>
                        </li>
                    ))}
                </ol>
            </Card>
        </>
    )
}

export default Mission
