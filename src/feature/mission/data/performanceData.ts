import { MissionPerformance as MissionPerformancesType } from '../types/MissionType'

const MissionPerformance: MissionPerformancesType[] = [
    {
        id: 1,
        title: '🔴 0 Successes',
        level: 'Fragged',
        resources: {
            Noto: +1,
        },
    },
    {
        id: 2,
        title: '🟠 1-2 Successes',
        level: 'Drek',
        resources: {
            Noto: +1,
            Nuyen: +5,
        },
    },
    {
        id: 3,
        title: '🟡 3 Successes',
        level: 'Standard',
        resources: {
            Nuyen: +10,
        },
    },
    {
        id: 4,
        title: '🟢 4-5 Successes',
        level: 'Solid',
        resources: {
            Nuyen: +20,
            Progress: +1,
        },
    },
    {
        id: 5,
        title: '🔵 6 Successes',
        level: 'Terminal',
        resources: {
            Nuyen: +30,
            Progress: +1,
            Edge: +1,
        },
    },
]

const getMissionPerformance = (): MissionPerformancesType[] => {
    return MissionPerformance
}

export { getMissionPerformance }
