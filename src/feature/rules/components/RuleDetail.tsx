import { getRuleByTag } from '../services/RuleService'
import { Rule } from '../types/RuleType'

type RuleDetailProps = {
    tag?: string
}

function RuleDetail({ tag }: RuleDetailProps) {
    const data = getRuleByTag(tag as string) as Rule

    return (
        <>
            <p>{data.description}</p>
            
            <ul className="list-margin">
                {data.list.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default RuleDetail
