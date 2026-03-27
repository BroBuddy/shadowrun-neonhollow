import { Resource } from "../types/ResourceType"

export const resourceData: Resource[] = [
    {
        tag: 'nuyen',
        title: 'Gain Nuyen',
        rollList: [
            {
                range: '2-5',
                result: 'Fragged',
                resources: { Noto: +1 },
            },
            {
                range: '6-8',
                result: 'Drek',
            },
            { range: '9-11', result: 'Standard', resources: { Nuyen: +5 } },
            { range: '12-14', result: 'Solid', resources: { Nuyen: +10 } },
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
                    Noto: -2,
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