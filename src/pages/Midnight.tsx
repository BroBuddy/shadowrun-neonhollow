import Card from '@/components/Card'
import FadeIn from '@/components/FadeIn'
import Headline from '@/components/Headline'
import PopUp from '@/components/Popup'
import { Event } from '@/feature/event/types/EventType'
import EventDetail from '@/feature/event/pages/EventDetail'
import { getEventById } from '@/feature/event/services/EventService'
import useResourceStore from '@/feature/resource/store/resourceStore'
import { rollDice } from '@/lib/helper'
import { useState } from 'react'

function Midnight() {
    const modifyResources = useResourceStore((state) => state.modifyResources)
    const [randomEvent, setRandomEvent] = useState<Event | null>(null)

    const onRandomEvent = () => {
        const firstRoll = rollDice(1)
        const secondRoll = rollDice(1)
        const result = `${firstRoll}${secondRoll}`
        setRandomEvent(getEventById(result as string) as Event)
    }

    return (
        <>
            <Headline>Midnight</Headline>

            <FadeIn>
                <div className="flex gap-5 p-4">
                    <div className="flex-1 basis-2/5">
                        <img
                            src="/images/city/Midnight.png"
                            alt="Midnight"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex-1 basis-3/5">
                        <p>
                            <em>
                                "At midnight, the cycle resets and steps are completed and the city holds its breath."
                            </em>
                        </p>
                    </div>
                </div>
            </FadeIn>

            <Card>
                <p>
                    <strong>Midnight Steps:</strong>
                </p>

                <ol className="list-margin">
                    <li>
                        {!randomEvent && (
                            <a
                                className="cursor-pointer"
                                onClick={onRandomEvent}
                            >
                                Random Event
                            </a>
                        )}

                        {randomEvent && (
                            <>
                                <PopUp title={randomEvent.title}>
                                    <EventDetail id={randomEvent.id} />
                                </PopUp>
                            </>
                        )}
                    </li>

                    <li>
                        Lose <strong>Health</strong> and <strong>Energy</strong> equal to your current <strong>Noto</strong> level.
                    </li>

                    <li>
                        Increase
                        <span className="mx-1">&#8594;</span>
                        <span className='font-bold highlight cursor-pointer'
                            onClick={() => modifyResources({ Days: 1 })}>
                                Day counter
                            </span>
                    </li>
                </ol>

                <p>When midnight passes, the city wakes again. Head back to the streets and start your next day.</p>
            </Card>
        </>
    )
}

export default Midnight
