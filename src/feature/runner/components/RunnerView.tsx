import { rollDice } from '@/lib/helper'
import { useState } from 'react'
import PopUp from '@/components/Popup'
import RunnerDetail from './RunnerDetail'
import { getRunnerById } from '../services/RunnerService'
import { Runner } from '../types/RunnerType'

function RunnerView() {
    const [runner, setRunner] = useState<Runner | null>(null)

    const getRandomRunnerId = (): string => {
        const first = rollDice(1)
        const second = rollDice(1)
        return `${first}${second}`
    }

    const handleRandomRunner = () => {
        const runnerId = getRandomRunnerId()
        const selectedRunner = getRunnerById(runnerId)
        if (selectedRunner) setRunner(selectedRunner)
    }

    if (!runner) {
        return (
            <button
                type="button"
                onClick={handleRandomRunner}
                className="cursor-pointer font-bold highlight"
            >
                Random Runner
            </button>
        )
    }

    return (
        <PopUp title={runner.title}>
            <RunnerDetail id={runner.id} />
        </PopUp>
    )
}

export default RunnerView