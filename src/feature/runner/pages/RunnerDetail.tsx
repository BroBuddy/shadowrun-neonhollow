import { useMemo } from 'react'
import { Runner } from '../RunnerType'
import { getRunnerById } from '../runnerData'

const defaultRunner: Runner = {
    id: '',
    title: '',
    description: '',
    attributes: {
        Strength: 0,
        Agility: 0,
        Reaction: 0,
        Logic: 0,
        Intuition: 0,
        Charisma: 0,
    },
    background: '',
}

type RunnerDetailProps = {
    id?: string
}

function RunnerDetail({ id }: RunnerDetailProps) {
    const data: Runner = useMemo(
        () => getRunnerById(id as string) ?? defaultRunner,
        [id]
    )

    if (!data) {
        return <></>
    }

    return (
        <>
            <p>{data.description}</p>
            <p>
                <strong className="highlight">Attributes:</strong>
            </p>
            <ul className="list-margin">
                {Object.entries(data.attributes).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>
            <p>
                <strong className="highlight">Background:</strong>
            </p>
            <p>{data.background}</p>
        </>
    )
}

export default RunnerDetail
