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
        title: '🔴 Performance 2',
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
        title: '🟡 Performance 3',
        level: 'Partial',
        effects: [
            {
                description: 'Roll 2d6 → +4 → Gain Intel',
                link: '/intel',
            },
            {
                description: 'Roll 2d6 → +2 → Gain Nuyen',
                link: '/nuyen',
            },
        ],
    },
    {
        id: 4,
        title: '🟢 Performance 4',
        level: 'Impressive',
        effects: [
            { description: 'Next Mission available' },
            {
                description: 'Roll 2d6 → +4 → Gain Nuyen',
                link: '/nuyen',
            },
        ],
    },
    {
        id: 5,
        title: '🟢 Performance 5',
        level: 'Exceptional',
        effects: [
            { description: 'Next Mission available' },
            {
                description: 'Roll 2d6 → +6 → Gain Nuyen',
                link: '/nuyen',
            },
        ],
    },
]

const getMissionPerformance = (): MissionPerformancesType[] => {
    return MissionPerformance
}

export { getMissionPerformance }
