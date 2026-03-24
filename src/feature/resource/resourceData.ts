import { Resource } from './ResourceType'

export const resourceData: Resource[] = [
    {
        tag: 'nuyen',
        title: 'Gain Nuyen',
        rollList: [
            {
                range: '2-5',
                result: 'Fragged',
                resources: { Nuyen: -5 },
            },
            {
                range: '6-8',
                result: 'Drek',
            },
            { range: '9-11', result: 'Standard', resources: { Nuyen: +5 } },
            { range: '12-14', result: 'Good', resources: { Nuyen: +10 } },
            {
                range: '15+',
                result: 'Terminal',
                resources: { Nuyen: +15, Edge: +1 },
            },
        ],
    },
    {
        tag: 'health',
        title: 'Gain Health',
        rollList: [
            {
                range: '2-5',
                result: 'Fragged',
                resources: {
                    Health: -3,
                },
            },
            {
                range: '6-8',
                result: 'Drek',
            },
            {
                range: '9-11',
                result: 'Standard',
                resources: {
                    Health: +3,
                },
            },
            {
                range: '12-14',
                result: 'Solid',
                resources: {
                    Health: +6,
                },
            },
            {
                range: '15+',
                result: 'Terminal',
                resources: {
                    Health: +9,
                    Edge: +1,
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
                result: 'Fragged',
                resources: {
                    Energy: -3,
                },
            },
            {
                range: '6-8',
                result: 'Drek',
            },
            {
                range: '9-11',
                result: 'Standard',
                resources: {
                    Energy: +3,
                },
            },
            {
                range: '12-14',
                result: 'Solid',
                resources: {
                    Energy: +6,
                },
            },
            {
                range: '15+',
                result: 'Terminal',
                resources: {
                    Energy: +9,
                    Edge: +1,
                },
            },
        ],
    },
    {
        tag: 'karma',
        title: 'Gain Karma',
        rollList: [
            {
                range: '2-5',
                result: 'Fragged',
                resources: {
                    Karma: -2,
                },
            },
            {
                range: '6-8',
                result: 'Drek',
            },
            {
                range: '9-11',
                result: 'Standard',
                resources: {
                    Karma: +2,
                },
            },
            {
                range: '12-14',
                result: 'Solid',
                resources: {
                    Karma: +4,
                },
            },
            {
                range: '15+',
                result: 'Terminal',
                resources: {
                    Karma: +6,
                    Edge: +1,
                },
            },
        ],
    },
    {
        tag: 'noto',
        title: 'Reduce Noto',
        rollList: [
            {
                range: '2-5',
                result: 'Fragged',
                resources: {
                    Noto: +1,
                },
            },
            {
                range: '6-8',
                result: 'Drek',
            },
            {
                range: '9-11',
                result: 'Standard',
                resources: {
                    Noto: -1,
                },
            },
            {
                range: '12-14',
                result: 'Solid',
                resources: {
                    Noto: -1,
                    Edge: +1,
                },
            },
            {
                range: '15+',
                result: 'Terminal',
                resources: {
                    Noto: -2,
                    Edge: +1,
                },
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
                    Noto: +2,
                },
            },
            {
                range: '6-8',
                result: 'Failure',
                resources: {
                    Noto: +1,
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
