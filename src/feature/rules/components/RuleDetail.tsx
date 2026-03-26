import { getRuleByTag } from '../services/RuleService'

type RuleDetailProps = {
    tag?: string
}

function RuleDetail({ tag }: RuleDetailProps) {
    if (!tag) {
        return <p>No rule selected.</p>
    }

    const data = getRuleByTag(tag)

    if (!data) {
        return <p>Rule not found.</p>
    }

    return (
        <>
            <p>{data.description}</p>
            
            <ul className="list-margin">
                {data.list.map((item: string) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default RuleDetail
