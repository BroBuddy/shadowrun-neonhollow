import { Event } from '@/feature/event/types/EventType'
import EventDetail from '@/feature/event/pages/EventDetail'
import { getEventById } from '@/feature/event/services/EventService'
import PopUp from '@/components/Popup'
import { rollDice } from '@/lib/helper'
import { useState } from 'react'

const RandomEvent = () => {
    const [event, setEvent] = useState<Event | null>(null)

    const handleRoll = () => {
        const result = `${rollDice(1)}${rollDice(1)}`
        setEvent(getEventById(result) as Event)
    }

    if (!event) {
        return <a className="cursor-pointer" onClick={handleRoll}>Random Event</a>
    }

    return (
        <PopUp title={event.title}>
            <EventDetail id={event.id} />
        </PopUp>
    )
}

export default RandomEvent