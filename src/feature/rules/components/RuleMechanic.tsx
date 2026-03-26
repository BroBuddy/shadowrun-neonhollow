import PopUp from '@/components/Popup'
import RuleDetail from './RuleDetail'
import { Rule } from '../types/RuleType'
import { getRuleData } from '../services/RuleService'

function RuleMechanic() {
    const data = getRuleData() as Rule[]

    return (
        <section>
            <p><strong>Know the Basics:</strong></p>
            <p><em>"Tap any highlighted text to apply its effect."</em></p>

            <ul className="list-margin">
                {data.map((item: Rule, index: number) => (
                    <li key={index}>
                        <PopUp title={item.title}>
                            <RuleDetail tag={item.tag} />
                        </PopUp>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default RuleMechanic
