import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Mission as MissionType } from '../MissionType'
import Card from '@/components/Card'
import { getMissionData } from '../missionData'

const MissionTypes = () => {
    const data = useMemo(() => {
        return getMissionData() as MissionType[]
    }, [])

    if (!data) {
        return <></>
    }

    return (
        <Card>
            <p>
                <strong>Select a Run:</strong>
            </p>
            <ul className="list-margin">
                {data.map((item: MissionType, index: number) => (
                    <li key={index}>
                        <Link to={`/mission/${item.id}`}>{item.title}:</Link>
                        <span className="mx-1">(Focus: {item.attributes})</span>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default MissionTypes
