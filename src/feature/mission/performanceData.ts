import { MissionPerformance as MissionPerformancesType } from './MissionType'

const MissionPerformance: MissionPerformancesType[] = [
    {
        id: 1,
        title: '🔴 Performance -2',
        level: 'Disastrous',
        resources: {
            Heat: +2,
        },
    },
    {
        id: 2,
        title: '🟠 Performance -1',
        level: 'Underwhelming',
        resources: {
            Heat: +1,
            Intel: +1,
        },
    },
    {
        id: 3,
        title: '🟡 Performance 0',
        level: 'Partial',
        resources: {
            Nuyen: +4,
            Intel: +2,
        },
    },
    {
        id: 4,
        title: '🟢 Performance +1',
        level: 'Impressive',
        resources: {
            Nuyen: +8,
            Edge: +1,
        },
    },
    {
        id: 5,
        title: '🔵 Performance +2',
        level: 'Exceptional',
        resources: {
            Nuyen: +12,
            Edge: +2,
        },
    },
]

const getMissionPerformance = (): MissionPerformancesType[] => {
    return MissionPerformance
}

export { getMissionPerformance }
