import Card from '@/components/Card'
import FadeIn from '@/components/FadeIn'
import Headline from '@/components/Headline'
import PopUp from '@/components/Popup'
import useAttributeStore from '@/feature/attribute/store/attributeStore'
import { getEventById } from '@/feature/event/eventData'
import { Event } from '@/feature/event/EventType'
import EventDetail from '@/feature/event/pages/EventDetail'
import { rollDice } from '@/lib/helper'
import { useState } from 'react'

function Midnight() {
    const [randomEvent, setRandomEvent] = useState<Event | null>(null)
    const resetTemporaryAttributes = useAttributeStore(
        (state) => state.resetTemporaryAttributes
    )

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
                                "At midnight, the cycle resets — steps are
                                completed, and temporary bonuses fade away."
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
                        Reset
                        <span className="mx-1">&#8594;</span>
                        <a
                            className="cursor-pointer"
                            onClick={resetTemporaryAttributes}
                        >
                            Temporary Attributes
                        </a>
                    </li>
                    <li>
                        Increase
                        <span className="mx-1">&#8594;</span> Day counter by 1
                    </li>
                    <li>
                        Reset
                        <span className="mx-1">&#8594;</span>Hours back to 0
                    </li>
                </ol>
            </Card>
        </>
    )
}

export default Midnight
