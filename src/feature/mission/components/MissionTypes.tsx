import { Link } from 'react-router-dom'
import { Mission as MissionType } from '../MissionType'
import Card from '@/components/Card'

type MissionTypesProps = {
    data: MissionType[]
}

const MissionTypes = ({ data }: MissionTypesProps) => {
    return (
        <Card>
            <p>
                <strong className="highlight">Mission Types:</strong>
            </p>
            <ul className="list-margin">
                {data.map((item: MissionType, index: number) => (
                    <li key={index}>
                        <Link to={`/mission/${item.id}`}>{item.title}</Link>
                        <span className="mx-1">&#8594;</span>({item.attributes})
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default MissionTypes
