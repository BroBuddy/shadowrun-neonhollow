import { MissionPerformance } from "../data/performanceData"
import { MissionPerformance as MissionPerformancesType } from '../types/MissionType'

const getMissionPerformance = (): MissionPerformancesType[] => {
    return MissionPerformance
}

export { getMissionPerformance }