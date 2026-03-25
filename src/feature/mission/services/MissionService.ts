import { missionData } from "../data/missionData"
import { Mission } from "../types/MissionType"

const getMissionData = (): Pick<Mission, 'id' | 'title' | 'focus' | 'description'>[] => {
    return missionData.map(({ id, title, focus, description }) => ({
        id,
        title,
        focus,
        description,
    }))
}

const getMissionById = (id: string): Mission => {
    return missionData.find((item: Mission) => item.id === id) as Mission
}

export { getMissionData, getMissionById }