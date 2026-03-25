import { Mission } from "../types/MissionType";
import { extractionRun } from "./extractionData";
import { assassinationRun } from "./assassinationData";
import { smugglingRun } from "./smugglingData";
import { sabotageRun } from "./sabotageData";
import { espionageRun } from "./espionageData";
import { infiltrationRun } from "./infiltrationData";

export const missionData: Mission[] = [
    extractionRun,
    assassinationRun,
    smugglingRun,
    sabotageRun,
    espionageRun,
    infiltrationRun
];
