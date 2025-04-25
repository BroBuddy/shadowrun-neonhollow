import { District, Facility } from './TownTypes'

const TownData: District[] = [
    {
        heat: 1,
        name: 'Quantum',
        facilities: ['MegaCorp', 'NeuralNexus', 'PatrolHub'],
    },
    {
        heat: 2,
        name: 'Serenity',
        facilities: ['BioCare', 'EchoGarden', 'DreamSphere'],
    },
    {
        heat: 3,
        name: 'Vortex ',
        facilities: ['HoloLounge', 'IronGym', 'ZeroZone'],
    },
    {
        name: 'Undercity ',
        facilities: ['SmugglerDen', 'SafeHouse', ''],
    },
]

const FacilityData: Facility[] = [
    {
        tag: 'megacorp',
        name: 'MegaCorp',
        quote: 'Order. Control. Perfection.',
        description: '',
        rolls: [],
        actions: [],
    },
    {
        tag: 'neuralnexus',
        name: 'NeuralNexus',
        quote: 'Where minds meet machines.',
        rolls: [
            {
                range: '2',
                title: 'Power Surge',
                resources: ['+1 Hour'],
            },
            {
                range: '3-4',
                title: 'Unapproved Experiment',
                resources: ['+1 Heat'],
            },
            {
                range: '5-6',
                title: 'Research Malfunctions',
                resources: ['-1 Health'],
            },
            {
                range: '7',
                title: 'Standard',
                resources: ['No Effect'],
            },
            {
                range: '8-9',
                title: 'Unexpected Discovery',
                resources: ['+1 Energy'],
            },
            {
                range: '10-11',
                title: "Professor's Favor",
                resources: ['+1 Reputation'],
            },
            {
                range: '12',
                title: 'Laboratory Breakthrough',
                resources: ['+1 Intel'],
            },
        ],
        actions: [
            {
                name: 'Code Decryption',
                steps: [
                    [
                        { text: 'Spend:' },
                        { resource: '-3 Energy' },
                        { text: ' → Roll 2d6 → +2' },
                    ],
                    [
                        { text: 'Add ' },
                        { text: 'Logic' },
                        { text: ' or ' },
                        { text: 'Intuition' },
                    ],
                    [{ text: 'Gain ' }, { link: 'Intel' }],
                ],
            },
            {
                name: 'Neural Sync Boost',
                steps: [
                    [
                        { text: 'Spend:' },
                        { resource: '-4000 ¥' },
                        { text: ' → Roll 2d6' },
                    ],
                    [
                        { text: 'Add ' },
                        { text: 'Logic' },
                        { text: ' or ' },
                        { text: 'Charisma' },
                    ],
                    [{ text: 'Gain ' }, { link: 'Energy' }],
                ],
            },
            {
                name: 'Logic Refinement',
                steps: [
                    [
                        { text: 'Spend:' },
                        { resource: '-1000 ¥' },
                        { text: ' per point of Logic' },
                    ],
                    [{ text: 'Roll 2d6 → Add 10 → Subtract Logic' }],
                    [{ text: 'Improve ' }, { link: 'Attribute' }],
                ],
            },
        ],
    },
]

const getFacilityByTag = (facilityTag: string) => {
    return FacilityData.find(
        (facility: Facility) => facility.tag === facilityTag
    )
}

export { TownData, getFacilityByTag }
