import PopUp from '@/components/Popup'
import RuleDetail from './RuleDetail'
import { getRuleData } from '../services/RuleService'

function RuleMechanic() {
    const data = getRuleData()

    if (!data || data.length === 0) {
        return <p>No rules available.</p>
    }

    return (
        <section>
            <p><strong>Know the Basics:</strong></p>
            <p><em>"Tap any highlighted text to apply its effect."</em></p>

            <ul className="list-margin">
                {data.map((item, index) => (
                    <li key={`${item.title}-${index}`}>
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