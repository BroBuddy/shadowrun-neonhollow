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
