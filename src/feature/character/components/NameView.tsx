import Card from '@/components/Card'
import { useMemo } from 'react'
import { Name } from '../types/NameType'
import { getNameData } from '../services/NameService'
import GenerateNames from './GenerateNames'
import PopUp from '@/components/Popup'

function NameView() {
    const names = useMemo(() => {
        return getNameData() as Name[]
    }, [])

    if (!names) {
        return <></>
    }

    return (
        <Card>
            <p>
                <strong>(Optional) Name:</strong>
            </p>

            <p>Each archetype has its own name pool:</p>

            <ul className="list-margin">
                {names.map((item: Name, index: number) => (
                    <li key={index}>
                        <PopUp title={item.title}>
                            <GenerateNames tag={item.tag} />
                        </PopUp>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default NameView
