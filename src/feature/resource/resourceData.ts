import { Resource } from './ResourceType'

export const resourceData: Resource[] = [
    {
        tag: 'nuyen',
        title: 'Gain Nuyen',
        rollList: [
            {
                range: '2-5',
                result: 'Critical Failure',
                resources: {
                    Heat: +2,
                },
            },
            {
                range: '6-8',
                result: 'Failure',
                resources: {
                    Heat: +1,
                    Nuyen: +3,
                },
            },
            { range: '9-11', result: 'Standard', resources: { Nuyen: +6 } },
            { range: '12-14', result: 'Good', resources: { Nuyen: +9 } },
            {
                range: '15-17',
                result: 'Great',
                resources: { Nuyen: +12, Edge: +1 },
            },
            {
                range: '18+',
                result: 'Exceptional',
                resources: { Nuyen: +15, Edge: +2 },
            },
        ],
    },
    {
        tag: 'health',
        title: 'Gain Health',
        rollList: [
            {
                range: '2-5',
                result: 'Critical Failure',
                resources: {
                    Heat: +2,
                },
            },
            {
                range: '6-8',
                result: 'Failure',
                resources: {
                    Heat: +1,
                    Health: +2,
                },
            },
            {
                range: '9-11',
                result: 'Standard',
                resources: {
                    Health: +4,
                },
            },
            {
                range: '12-14',
                result: 'Good',
                resources: {
                    Health: +6,
                },
            },
            {
                range: '15-17',
                result: 'Great',
                resources: {
                    Health: +8,
                    Edge: +1,
                },
            },
            {
                range: '18+',
                result: 'Exceptional',
                resources: {
                    Health: +10,
                    Edge: +2,
                },
            },
        ],
    },
    {
        tag: 'energy',
        title: 'Gain Energy',
        rollList: [
            {
                range: '2-5',
                result: 'Critical Failure',
                resources: {
                    Heat: +2,
                },
            },
            {
                range: '6-8',
                result: 'Failure',
                resources: {
                    Heat: +1,
                    Energy: +2,
                },
            },
            {
                range: '9-11',
                result: 'Standard',
                resources: {
                    Energy: +4,
                },
            },
            {
                range: '12-14',
                result: 'Good',
                resources: {
                    Energy: +6,
                },
            },
            {
                range: '15-17',
                result: 'Great',
                resources: {
                    Energy: +8,
                    Edge: +1,
                },
            },
            {
                range: '18+',
                result: 'Exceptional',
                resources: {
                    Energy: +10,
                    Edge: +2,
                },
            },
        ],
    },
    {
        tag: 'intel',
        title: 'Gain Intel',
        rollList: [
            {
                range: '2-5',
                result: 'Critical Failure',
                resources: {
                    Heat: +2,
                },
            },
            {
                range: '6-8',
                result: 'Failure',
                resources: {
                    Heat: +1,
                },
            },
            {
                range: '9-11',
                result: 'Standard',
                resources: {
                    Intel: +1,
                },
            },
            {
                range: '12-14',
                result: 'Good',
                resources: {
                    Intel: +2,
                },
            },
            {
                range: '15-17',
                result: 'Great',
                resources: {
                    Intel: +2,
                    Edge: +1,
                },
            },
            {
                range: '18+',
                result: 'Exceptional',
                resources: {
                    Intel: +3,
                    Edge: +2,
                },
            },
        ],
    },
    {
        tag: 'heat',
        title: 'Reduce Heat',
        rollList: [
            {
                range: '2-5',
                result: 'Critical Failure',
                resources: {
                    Heat: +2,
                },
            },
            {
                range: '6-8',
                result: 'Failure',
                resources: {
                    Heat: +1,
                },
            },
            {
                range: '9-11',
                result: 'Standard',
                resources: {
                    Heat: -1,
                },
            },
            {
                range: '12-14',
                result: 'Good',
                resources: {
                    Heat: -2,
                },
            },
            {
                range: '15-17',
                result: 'Great',
                resources: {
                    Heat: -2,
                    Edge: +1,
                },
            },
            {
                range: '18+',
                result: 'Exceptional',
                resources: {
                    Heat: -3,
                    Edge: +2,
                },
            },
        ],
    },
    {
        tag: 'runner',
        title: 'Hire Runner',
        rollList: [
            {
                range: '2-5',
                result: 'Critical Failure',
                resources: {
                    Heat: +2,
                },
            },
            {
                range: '6-8',
                result: 'Failure',
                resources: {
                    Heat: +1,
                },
                effects: ['+1 Attribute Temporary'],
            },
            {
                range: '9-11',
                result: 'Standard',
                effects: ['+1 Attribute'],
            },
            {
                range: '12-14',
                result: 'Good',
                effects: ['+1 Attribute', '+1 Attribute Temporary'],
            },
            {
                range: '15-17',
                result: 'Great',
                resources: {
                    Edge: +1,
                },
                effects: ['+2 Attributes'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                resources: {
                    Edge: +2,
                },
                effects: ['+2 Attributes'],
            },
        ],
    },
    {
        tag: 'attribute',
        title: 'Improve Attribute',
        rollList: [
            {
                range: '2-5',
                result: 'Critical Failure',
                resources: {
                    Heat: +2,
                },
            },
            {
                range: '6-8',
                result: 'Failure',
                resources: {
                    Heat: +1,
                },
            },
            {
                range: '9-11',
                result: 'Standard',
                effects: ['+1 to Attribute Temporary'],
            },
            { range: '12-14', result: 'Good', effects: ['+1 to Attribute'] },
            {
                range: '15-17',
                result: 'Great',
                resources: {
                    Edge: +1,
                },
                effects: ['+1 to Attribute', '+1 to Attribute Temporary'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                resources: {
                    Edge: +2,
                },
                effects: ['+2 to Attribute'],
            },
        ],
    },
]

const getResourceData = (): Resource[] => {
    return resourceData.map(({ tag, title }) => ({ tag, title }))
}

const getResourceByTag = (tag: string): Resource => {
    return resourceData.find((item: Resource) => item.tag === tag) as Resource
}

export { getResourceData, getResourceByTag }
