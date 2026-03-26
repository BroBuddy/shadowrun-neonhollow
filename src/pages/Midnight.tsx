import Card from '@/components/Card'
import Headline from '@/components/Headline'
import useResourceStore from '@/feature/resource/store/resourceStore'
import PageHeader from '@/components/PageHeader'
import RandomEvent from '@/feature/event/components/RandomEvent'
import Arrow from '@/components/Arrow'
import { useCallback } from 'react'

function Midnight() {
    const modifyResources = useResourceStore((state) => state.modifyResources)

    const handleIncreaseDay = useCallback(() => {
        modifyResources({ Days: 1 })
    }, [modifyResources])

    return (
        <>
            <Headline>Midnight</Headline>

            <PageHeader
                title='Midnight'
                image='/images/city/Midnight.png'>
                    <p>
                        <em>
                            "At midnight, the cycle resets and steps are completed and the city holds its breath."
                        </em>
                    </p>
            </PageHeader>

            <Card>
                <p><strong>Midnight Steps:</strong></p>

                <ol className="list-margin">
                    <li>Roll <Arrow /> <RandomEvent /></li>

                    <li>
                        Lose <strong>Health</strong> and <strong>Energy</strong> equal to your current <strong>Noto</strong> level.
                    </li>

                    <li>
                        Increase <Arrow className='mr-1' />
                        <button
                            type="button"
                            onClick={handleIncreaseDay}
                            className="font-bold highlight cursor-pointer"
                        >
                            Day counter
                        </button>
                    </li>
                </ol>

                <p>When midnight passes, the city wakes again. Head back to the streets and start your next day.</p>
            </Card>
        </>
    )
}

export default Midnight
