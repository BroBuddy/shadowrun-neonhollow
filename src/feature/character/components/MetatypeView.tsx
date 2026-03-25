import Card from '@/components/Card'
import { Metatype } from '../types/MetatypeType'
import InRow from '@/components/InRow'
import Dice from '@/components/Dice'
import { getMetatypeData } from '../services/MetatypeService'
import PopUp from '@/components/Popup'
import MetatypeDetail from './MetatypeDetail'

function MetatypeView() {
    const data = getMetatypeData() as Metatype[]

    return (
        <Card>
            <p><strong>Metatype:</strong></p>

            <InRow>
                <span>Roll</span>
                <Dice dice={1} />
            </InRow>

            <ol className="list-margin">
                {data.map((item: Metatype, index: number) => (
                    <li key={index}>
                        <PopUp title={item.title}>
                            <MetatypeDetail id={item.id} />
                        </PopUp>
                    </li>
                ))}
            </ol>
            
            <p>On a 6, select your Metatype.</p>
        </Card>
    )
}

export default MetatypeView
