import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import Headline from '@/components/Headline'
import { getMissionData } from '../missionData'
import { useMemo } from 'react'
import { Mission as MissionType } from '../MissionType'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'
import PopUp from '@/components/Popup'
import MissionRules from './MissionRules'
import ResourceDetail from '@/feature/resource/pages/ResourceDetail'

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
            <Card>
                <div className="flex gap-5">
                    <div className="flex-1 basis-2/5">
                        <img src="/images/MrJohnson.jpg" alt="MrJohnson" />
                    </div>
                    <div className="flex-1 basis-3/5">
                        <p>
                            <em>
                                "Mr. Johnson—the polished voice of the shadows.
                                Deals are made, trust is tested, and the job
                                always pays… for those who survive."
                            </em>
                        </p>
                    </div>
                </div>
            </Card>

            <Card>
                <div className="mb-4">
                    Before your run begins
                    <span className="mx-1">&#8594;</span>
                    <PopUp title="Mission Rules">
                        <MissionRules />
                    </PopUp>
                </div>
                <p>
                    <strong className="highlight">Accept a mission:</strong>
                </p>
                <ol className="list-margin">
                    <li>
                        <strong>Spend:</strong> 3 Intel &#8594; Negotiate hazard
                        pay
                    </li>
                    <li>
                        <InRow>
                            <strong>Roll:</strong>
                            <Dice dice={2} />
                            <span>&#8594;</span>
                            <span>Add Charisma</span>
                        </InRow>
                    </li>
                    <li>
                        <PopUp title="Gain Nuyen">
                            <ResourceDetail tag="nuyen" />
                        </PopUp>
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
