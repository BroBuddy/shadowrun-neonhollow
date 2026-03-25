import { eventData } from "../data/eventData"
import { Event } from "../types/EventType"

const eventMap = new Map(eventData.map((event: Event) => [event.id, event]))

const getEventById = (id: string): Event | undefined => {
    return eventMap.get(id)
}

export { getEventById }