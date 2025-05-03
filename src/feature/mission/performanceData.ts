import { MissionPerformance as MissionPerformancesType } from './MissionType'

const MissionPerformance: MissionPerformancesType[] = [
    {
        id: 1,
        title: '🔴 Performance 1',
        level: 'Disastrous',
        effects: [{ description: '+2 Heat' }],
    },
    {
        id: 2,
        title: '🟠 Performance 3',
        level: 'Underwhelming',
        effects: [
            { description: '+1 Heat' },
            {
                description: '+1 Intel',
            },
        ],
    },
    {
        id: 3,
        title: '🟡 Performance 5',
        level: 'Partial',
        effects: [
            {
                description: '+4.000 ¥',
            },
            {
                description: '+2 Intel',
            },
        ],
    },
    {
        id: 4,
        title: '🟢 Performance 7',
        level: 'Impressive',
        effects: [
            {
                description: '+8.000 ¥',
            },
            { description: '+1 Edge' },
            { description: 'Next Mission available' },
        ],
    },
    {
        id: 5,
        title: '🔵 Performance 9',
        level: 'Exceptional',
        effects: [
            {
                description: '+12.000 ¥',
            },
            { description: '+2 Edge' },
            { description: 'Next Mission available' },
        ],
    },
]

const getMissionPerformance = (): MissionPerformancesType[] => {
    return MissionPerformance
}

export { getMissionPerformance }
