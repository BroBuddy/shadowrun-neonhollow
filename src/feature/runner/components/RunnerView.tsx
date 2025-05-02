import { rollDice } from '@/lib/helper'
import { useState } from 'react'
import { getRunnerById } from '../runnerData'
import { Runner } from '../RunnerType'
import PopUp from '@/components/Popup'
import RunnerDetail from '../pages/RunnerDetail'

function RunnerView() {
    const [randomRunner, setRandomRunner] = useState<Runner | null>(null)

    const onRandomRunner = () => {
        const firstRoll = rollDice(1)
        const secondRoll = rollDice(1)
        const result = `${firstRoll}${secondRoll}`
        setRandomRunner(getRunnerById(result as string) as Runner)
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
