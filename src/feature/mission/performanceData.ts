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
        title: '🔴 Performance 3',
        level: 'Underwhelming',
        effects: [
            { description: '+1 Heat' },
            {
                description: 'Roll 2d6 → +2 → Gain Intel',
                link: '/intel',
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
                description: 'Roll 2d6 → +4 → Gain Intel',
                link: '/intel',
            },
        ],
    },
    {
        id: 4,
        title: '🟢 Performance 7',
        level: 'Impressive',
        effects: [
            { description: '+1 Edge' },
            {
                description: '+8.000 ¥',
            },
            { description: 'Next Mission available' },
        ],
    },
    {
        id: 5,
        title: '🟢 Performance 9',
        level: 'Exceptional',
        effects: [
            { description: '+2 Edge' },
            {
                description: '+12.000 ¥',
            },
            { description: 'Next Mission available' },
        ],
    },
]

const getMissionPerformance = (): MissionPerformancesType[] => {
    return MissionPerformance
}

export { getMissionPerformance }
