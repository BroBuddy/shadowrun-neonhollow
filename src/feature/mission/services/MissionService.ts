import { missionData } from "../data/missionData"
import { Mission } from "../types/MissionType"

const getMissionData = (): Pick<Mission, 'id' | 'icon' | 'title' | 'focus' | 'description'>[] => {
    return missionData.map(({ id, icon, title, focus, description }) => ({
        id,
        icon,
        title,
        focus,
        description,
    }))
}

const getMissionById = (id: number): Mission => {
    return missionData.find((item: Mission) => item.id === id) as Mission
}

export { getMissionData, getMissionById }