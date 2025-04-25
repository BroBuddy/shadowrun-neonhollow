import { ResourceType } from './ResourceType'

const ResourceData: ResourceType[] = [
    {
        tag: 'health',
        title: 'Gain: Health',
        description:
            'The number determines the outcome of the healing process.',
        rolls: [
            {
                range: '2-5',
                title: 'Critical Failure',
                description: 'The treatment backfires, causing harm.',
                resources: ['+1 Heat'],
            },
            {
                range: '6-8',
                title: 'Failure',
                description:
                    'Healing stalls. You’re patched, but need more time.',
                resources: ['No Effect'],
            },
            {
                range: '9-11',
                title: 'Standard',
                description: 'Treatment kicks in slowly, stabilizing you.',
                resources: ['+2 Health', '+1 Energy'],
            },
            {
                range: '12-14',
                title: 'Good',
                description: 'Cells respond well, and you feel stronger.',
                resources: ['+4 Health', '+2 Energy'],
            },
            {
                range: '15-17',
                title: 'Great',
                description: 'Nanites accelerate healing, and you gain energy.',
                resources: ['+6 Health', '+3 Energy', '+1 Reputation'],
            },
            {
                range: '18+',
                title: 'Exceptional',
                description: 'Perfect recovery. You feel better than ever.',
                resources: ['+8 Health', '+4 Energy', '+1 Reputation'],
            },
        ],
    },
    {
        tag: 'nuyen',
        title: 'Gain: Nuyen',
        description: 'The number determines the outcome of the action.',
        rolls: [
            {
                range: '2-5',
                title: 'Critical Failure',
                description:
                    'Things went wrong, and the payout is nonexistent.',
                resources: ['+1 Heat'],
            },
            {
                range: '6-8',
                title: 'Failure',
                description:
                    'You earned something, but it`s barely worth the effort.',
                resources: ['+3000 ¥'],
            },
            {
                range: '9-11',
                title: 'Standard',
                description: 'A modest payout, nothing extravagant.',
                resources: ['+6000 ¥'],
            },
            {
                range: '12-14',
                title: 'Good',
                description: 'A smooth outcome with fair compensation.',
                resources: ['+9000 ¥'],
            },
            {
                range: '15-17',
                title: 'Great',
                description: 'A smooth outcome with fair compensation.',
                resources: ['+12000 ¥', '+1 Reputation'],
            },
            {
                range: '18+',
                title: 'Exceptional',
                description:
                    'Flawless execution, and the money is well worth it.',
                resources: ['+5000 ¥', '+1 Reputation'],
            },
        ],
    },
    {
        tag: 'energy',
        title: 'Gain: Energy',
        description:
            'The number determines the outcome of the energy restoration process.',
        rolls: [
            {
                range: '2-5',
                title: 'Critical Failure',
                description:
                    'The treatment leaves you feeling more drained than before.',
                resources: ['+1 Heat'],
            },
            {
                range: '6-8',
                title: 'Failure',
                description:
                    'The process does little to restore your energy, but you feel slightly better.',
                resources: ['No Effect'],
            },
            {
                range: '9-11',
                title: 'Standard',
                description:
                    'You start to regain some energy, though not at full capacity.',
                resources: ['+2 Energy', '+1 Health'],
            },
            {
                range: '12-14',
                title: 'Good',
                description:
                    'The treatment has a noticeable effect, and you feel more refreshed.',
                resources: ['+4 Energy', '+2 Health'],
            },
            {
                range: '15-17',
                title: 'Great',
                description:
                    'Your energy is fully restored, and you feel recharged.',
                resources: ['+6 Energy', '+3 Health', '+1 Reputation'],
            },
            {
                range: '18+',
                title: 'Exceptional',
                description:
                    'You feel fully revitalized, bursting with energy and vitality.',
                resources: ['+8 Energy', '+4 Health', '+1 Reputation'],
            },
        ],
    },
    {
        tag: 'heat',
        title: 'Reduce: Heat',
        description:
            'The number determines the outcome of the action to reduce heat.',
        rolls: [
            {
                range: '2-5',
                title: 'Critical Failure',
                description:
                    'Your actions attract major attention from the authorities.',
                resources: ['+1 Heat'],
            },
            {
                range: '6-8',
                title: 'Failure',
                description: 'You leave behind traces that raise suspicion.',
                resources: ['No Effect'],
            },
            {
                range: '9-11',
                title: 'Standard',
                description:
                    'You keep a low profile, but eyes are still on you.',
                resources: ['-1 Heat'],
            },
            {
                range: '12-14',
                title: 'Good',
                description:
                    'You take extra precautions and shake off pursuit.',
                resources: ['-2 Heat'],
            },
            {
                range: '15-17',
                title: 'Great',
                description:
                    'You reroute your trail and erase your digital footprint.',
                resources: ['-3 Heat', '+1 Reputation'],
            },
            {
                range: '18+',
                title: 'Exceptional',
                description:
                    'Your actions are so clean, you’re mistaken for a civilian.',
                resources: ['-4 Heat', '+1 Reputation'],
            },
        ],
    },
    {
        tag: 'intel',
        title: 'Gain: Intel',
        description: 'The number determines the outcome of the action.',
        rolls: [
            {
                range: '2-5',
                title: 'Critical Failure',
                description: 'Your attempt to gather intel fails miserably.',
                resources: ['+1 Heat'],
            },
            {
                range: '6-8',
                title: 'Failure',
                description: 'You recover minor insight, but it’s not enough.',
                resources: ['No Effect'],
            },
            {
                range: '9-11',
                title: 'Standard',
                description: 'You gather basic intel that may be useful.',
                resources: ['+1 Intel'],
            },
            {
                range: '12-14',
                title: 'Good',
                description: 'The intel you collect is solid.',
                resources: ['+2 Intel'],
            },
            {
                range: '15-17',
                title: 'Great',
                description: 'Your intel collection goes exceptionally well.',
                resources: ['+3 Intel', '+1 Reputation'],
            },
            {
                range: '18+',
                title: 'Exceptional',
                description:
                    'You uncover crucial and highly valuable intelligence.',
                resources: ['+4 Intel', '+1 Reputation'],
            },
        ],
    },
    {
        tag: 'attribute',
        title: 'Improve: Attribute',
        description: 'The number determines the outcome of the action.',
        rolls: [
            {
                range: '2-5',
                title: 'Critical Failure',
                description: 'Your system rejects the implant violently.',
                resources: ['+1 Heat'],
            },
            {
                range: '6-8',
                title: 'Failure',
                description:
                    'The enhancement doesn’t sync well with your body.',
                resources: ['No Effect'],
            },
            {
                range: '9-11',
                title: 'Standard',
                description: 'The enhancement settles in properly.',
                resources: ['+1 to Attribute Temporary'],
            },
            {
                range: '12-14',
                title: 'Good',
                description: 'You feel sharp, fast, and focused.',
                resources: ['+1 to Attribute'],
            },
            {
                range: '15-17',
                title: 'Great',
                description:
                    'Your body and mind align perfectly with the upgrade.',
                resources: [
                    '+1 to Attribute',
                    '+1 to Attribute Temporary',
                    '+1 Reputation',
                ],
            },
            {
                range: '18+',
                title: 'Exceptional',
                description: 'The upgrade merges seamlessly with your essence.',
                resources: ['+2 to Attribute', '+1 Reputation'],
            },
        ],
    },
    {
        tag: 'runner',
        title: 'Hire: Runner',
        description: 'The number determines the outcome of the action.',
        rolls: [
            {
                range: '2-7',
                title: 'Standard',
                description:
                    'The runner’s skill set is solid, but they’re not exactly cheap.',
                resources: ['+2 Attributes Temporary'],
            },
            {
                range: '8-12',
                title: 'Good',
                description:
                    "The runner's price is what you would expect for their skill level.",
                resources: ['+2 Attributes Temporary', '+2000 ¥'],
            },
            {
                range: '13-17',
                title: 'Great',
                description:
                    'You’ve managed to secure a solid deal for this runner.',
                resources: [
                    '+2 Attributes Temporary',
                    '+4000 ¥',
                    '+1 Reputation',
                ],
            },
            {
                range: '18+',
                title: 'Exceptional',
                description:
                    'You’ve managed to convince the runner to work for less than their usual rate.',
                resources: [
                    '+2 Attributes Temporary',
                    '+6000 ¥',
                    '+1 Reputation',
                ],
            },
        ],
    },
]

const getResourceByTag = (resourceTag: string) => {
    return ResourceData.find(
        (resource: ResourceType) => resource.tag === resourceTag
    )
}

export { getResourceByTag }
