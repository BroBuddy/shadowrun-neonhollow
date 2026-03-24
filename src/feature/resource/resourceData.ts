import { Resource } from './ResourceType'

export const resourceData: Resource[] = [
    {
        tag: 'nuyen',
        title: 'Gain Nuyen',
        rollList: [
            {
                range: '2-5',
                result: 'Fragged',
                resources: { Nuyen: -4 },
            },
            {
                range: '6-8',
                result: 'Drek',
            },
            { range: '9-11', result: 'Standard', resources: { Nuyen: +4 } },
            { range: '12-14', result: 'Solid', resources: { Nuyen: +8 } },
            {
                range: '15+',
                result: 'Terminal',
                resources: { Nuyen: +12, Edge: +1 },
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
]

const getResourceData = (): Resource[] => {
    return resourceData.map(({ tag, title }) => ({ tag, title }))
}

const getResourceByTag = (tag: string): Resource => {
    return resourceData.find((item: Resource) => item.tag === tag) as Resource
}

export { getResourceData, getResourceByTag }
