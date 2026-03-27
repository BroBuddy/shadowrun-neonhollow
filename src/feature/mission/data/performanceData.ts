import { MissionPerformance as MissionPerformancesType } from '../types/MissionType'

export const MissionPerformance: MissionPerformancesType[] = [
    {
        id: 1,
        title: '🔴 0 Successes',
        level: 'Fragged',
        resources: {
            Nuyen: +4,
            Noto: +2,
        },
    },
    {
        id: 2,
        title: '🟠 1-2 Successes',
        level: 'Drek',
        resources: {
            Nuyen: +8,
            Noto: +1,
        },
    },
    {
        id: 3,
        title: '🟡 3 Successes',
        level: 'Standard',
        resources: {
            Nuyen: +12,
            Karma: +1,
        },
    },
    {
        id: 4,
        title: '🟢 4-5 Successes',
        level: 'Solid',
        resources: {
            Nuyen: +16,
            Karma: +1,
            Progress: +1,
        },
    },
    {
        id: 5,
        title: '🔵 6 Successes',
        level: 'Terminal',
        resources: {
            Nuyen: +20,
            Karma: +2,
            Progress: +1,
            Edge: +1,
        },
    },
]