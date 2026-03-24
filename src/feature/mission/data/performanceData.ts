import { MissionPerformance as MissionPerformancesType } from '../types/MissionType'

const MissionPerformance: MissionPerformancesType[] = [
    {
        id: 5,
        title: '🔵 Performance +4',
        level: 'Exceptional',
        resources: {
            Nuyen: +15,
            Progress: +1,
            Edge: +1,
        },
    },
    {
        id: 4,
        title: '🟢 Performance +2',
        level: 'Impressive',
        resources: {
            Nuyen: +10,
            Progress: +1
        },
    },
    {
        id: 3,
        title: '🟡 Performance 0',
        level: 'Partial',
        resources: {
            Nuyen: +5,
        },
    },
    {
        id: 2,
        title: '🟠 Performance -2',
        level: 'Underwhelming',
        resources: {
            Noto: +1,
        },
    },
    {
        id: 1,
        title: '🔴 Performance -4',
        level: 'Disastrous',
        resources: {
            Noto: +2,
        },
    },
]

const getMissionPerformance = (): MissionPerformancesType[] => {
    return MissionPerformance
}

export { getMissionPerformance }
