import { rollDice } from '@/lib/helper'
import { useState } from 'react'
import PopUp from '@/components/Popup'
import RunnerDetail from '../pages/RunnerDetail'
import { getRunnerById } from '../services/RunnerService'
import { Runner } from '../types/RunnerType'

function RunnerView() {
    const [randomRunner, setRandomRunner] = useState<Runner | null>(null)

    const onRandomRunner = () => {
        const firstRoll = rollDice(1)
        const secondRoll = rollDice(1)
        const result = String(`${firstRoll}${secondRoll}`)
        const runner = getRunnerById(result)
        if (runner) setRandomRunner(runner)
    }

    return (
        <>
            {!randomRunner && (
                <a className="cursor-pointer" onClick={onRandomRunner}>
                    Random Runner
                </a>
            )}

            {randomRunner && (
                <>
                    <PopUp title={randomRunner.title}>
                        <RunnerDetail id={randomRunner.id} />
                    </PopUp>
                </>
            )}
        </>
    )
}

export default RunnerView
