import Card from '@/components/Card'
import Dice from '@/components/Dice'
import InRow from '@/components/InRow'
import { getArchetypeData } from '../services/ArchetypeService'
import { Archetype } from '../types/ArchetypeType'
import ArchetypeDetail from './ArchetypeDetail'
import PopUp from '@/components/Popup'

function ArchetypeView() {
    const data = getArchetypeData() as Archetype[]

    return (
        <Card>
            <p><strong>Archetype &amp; Background:</strong></p>

            <InRow>
                <span>Roll</span>
                <Dice dice={1} />
            </InRow>

            <ol className="list-margin">
                {data.map((item: Archetype, index: number) => (
                    <li key={index}>
                        <PopUp title={item.title}>
                            <ArchetypeDetail id={item.id} />
                        </PopUp>
                    </li>
                ))}
            </ol>
        </Card>
    )
}

export default ArchetypeView
