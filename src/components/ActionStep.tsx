import { Step } from '@/features/town/TownTypes'
import { Link } from 'react-router-dom'

type ActionStepProps = {
    steps: Step[][]
    updateResource: (resource: string) => void
}

const ActionStep = ({ steps, updateResource }: ActionStepProps) => {
    return (
        <ul>
            {steps.map((stepLine: Step[], index: number) => (
                <li key={index}>
                    {stepLine.map((segment: Step, idx: number) => {
                        if (segment.resource) {
                            return (
                                <span key={idx}>
                                    <strong
                                        className="v-1 cursor-pointer"
                                        onClick={() =>
                                            updateResource(segment.resource!)
                                        }
                                    >
                                        {segment.resource}
                                    </strong>
                                </span>
                            )
                        }

                        if (segment.link) {
                            return (
                                <span key={idx}>
                                    <Link
                                        to={`/resource/${segment.link.toLowerCase()}`}
                                    >
                                        {segment.link}
                                    </Link>
                                </span>
                            )
                        }

                        if (segment.text) {
                            return <span key={idx}>{segment.text} </span>
                        }

                        return null
                    })}
                </li>
            ))}
        </ul>
    )
}

export default ActionStep
