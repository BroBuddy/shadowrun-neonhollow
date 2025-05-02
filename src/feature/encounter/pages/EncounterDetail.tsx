import { useMemo, useState } from 'react'
import { getEncounterByTag } from '../encounterData'
import { Encounter, EncounterOption } from '../EncounterType'

type EncounterDetailProps = {
    tag?: string
}

function EncounterDetail({ tag }: EncounterDetailProps) {
    const [selectedOption, setSelectedOption] = useState<number | null>(null)
    const data = useMemo(() => {
        return getEncounterByTag(tag as string) as Encounter
    }, [tag])

    if (!data) {
        return <></>
    }

    return (
        <>
            <p>{data.description}</p>
            <p>
                <strong>Choose one:</strong>
            </p>
            <ol className="list-margin">
                {data.options.map((option: EncounterOption, index: number) => (
                    <li
                        key={index}
                        onClick={() => {
                            if (selectedOption === null) {
                                setSelectedOption(index)
                            }
                        }}
                        style={{
                            cursor:
                                selectedOption === null
                                    ? 'pointer'
                                    : 'not-allowed',
                            opacity:
                                selectedOption === null ||
                                selectedOption === index
                                    ? 1
                                    : 0.5,
                        }}
                    >
                        <a>{option.title}</a>

                        {selectedOption === index && (
                            <ul className="list-margin">
                                {option.reward.map(
                                    (reward: string, rewardIndex: number) => (
                                        <li key={rewardIndex}>{reward}</li>
                                    )
                                )}
                            </ul>
                        )}
                    </li>
                ))}
            </ol>
        </>
    )
}

export default EncounterDetail
