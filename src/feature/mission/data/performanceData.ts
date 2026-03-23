import { MissionPerformance as MissionPerformancesType } from '../types/MissionType'

const MissionPerformance: MissionPerformancesType[] = [
    {
        id: 1,
        title: '🔴 Performance -4',
        level: 'Disastrous',
        resources: {
            Heat: +2,
        },
    },
    {
        id: 2,
        title: '🟠 Performance -2',
        level: 'Underwhelming',
        resources: {
            Heat: +1,
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
        id: 4,
        title: '🟢 Performance +2',
        level: 'Impressive',
        resources: {
            Nuyen: +10,
            Edge: +1,
            Progress: +1
        },
    },
    {
        id: 5,
        title: '🔵 Performance +4',
        level: 'Exceptional',
        resources: {
            Nuyen: +15,
            Edge: +1,
            Progress: +2
        },
    },
]

const getMissionPerformance = (): MissionPerformancesType[] => {
    return MissionPerformance
}

export { getMissionPerformance }
