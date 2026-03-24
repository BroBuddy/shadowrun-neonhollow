import { extractionRun } from "./extractionData";
import { Mission } from "../types/MissionType";
import { assassinationRun } from "./assassinationData";
import { smugglingRun } from "./smugglingData";
import { sabotageRun } from "./sabotageData";
import { espionageRun } from "./espionageData";
import { infiltrationRun } from "./infiltrationData";

const missionData: Mission[] = [
    extractionRun,
    assassinationRun,
    smugglingRun,
    sabotageRun,
    espionageRun,
    infiltrationRun
];

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