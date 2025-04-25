import { ResourceRoll } from '@/features/resource/ResourceType'
import { HighlightClass } from '@/lib/Highlight'

type ActionRollProps = {
    rolls: ResourceRoll[]
    updateResource: (resource: string) => void
}

const ActionRoll = ({ rolls, updateResource }: ActionRollProps) => {
    return (
        <>
            <p>
                <strong>Enter &#8594; Roll 2d6:</strong>
            </p>

            <ul>
                {rolls.map((roll: ResourceRoll, index: number) => (
                    <li key={index}>
                        {roll.range}: <strong>{roll.title}</strong> &#8594;{' '}
                        {roll.resources.length === 1 &&
                        roll.resources[0] !== 'No Effect' ? (
                            <strong
                                onClick={() =>
                                    updateResource(roll.resources[0]!)
                                }
                                className={`${HighlightClass(roll.resources[0])}`}
                            >
                                {roll.resources[0]}
                            </strong>
                        ) : (
                            roll.resources[0]
                        )}
                        {roll.resources.length > 1 && (
                            <span>{roll.description}</span>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ActionRoll
