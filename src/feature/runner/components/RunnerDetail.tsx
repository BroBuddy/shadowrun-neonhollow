import { getRunnerById } from '../services/RunnerService'
import { Runner } from '../types/RunnerType'

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
    const data: Runner = id ? getRunnerById(id) ?? defaultRunner : defaultRunner

    if (!id || !data.id) {
        return <p>Runner not found.</p>
    }

    return (
        <section>
            <p>{data.description}</p>
            <p className="highlight"><strong>Background:</strong></p>
            <p>{data.background}</p>
        </section>
    )
}

export default RunnerDetail