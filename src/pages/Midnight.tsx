import Card from '@/components/Card'
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
            <Card>
                <p>
                    When midnight strikes, a new day begins—but first, several
                    steps must be completed:
                </p>
            </Card>
            <Card>
                <ol className="list-margin">
                    <li>
                        <a className="cursor-pointer" onClick={onRandomEvent}>
                            Get random Event
                        </a>

                        {randomEvent && (
                            <>
                                <span className="mx-1">&#8594;</span>
                                <PopUp title={randomEvent.title}>
                                    <EventDetail id={randomEvent.id} />
                                </PopUp>
                            </>
                        )}
                    </li>
                    <li>
                        <a
                            className="cursor-pointer"
                            onClick={resetTemporaryAttributes}
                        >
                            Reset Temporary Attributes
                        </a>
                    </li>
                    <li>
                        Advance the 🕒 day counter by 1 — unless it's the final
                        day.
                    </li>
                    <li>Reset hours to 0, marking the start of a fresh day.</li>
                </ol>
            </Card>
        </>
    )
}

export default Midnight
