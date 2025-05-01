import { Resource } from './ResourceType'

export const resourceData: Resource[] = [
    {
        tag: 'nuyen',
        title: 'Gain Nuyen',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+2 Heat'] },
            {
                range: '6-8',
                result: 'Failure',
                effects: ['+1 Heat', '+3.000 ¥'],
            },
            { range: '9-11', result: 'Standard', effects: ['+6.000 ¥'] },
            { range: '12-14', result: 'Good', effects: ['+9.000 ¥'] },
            {
                range: '15-17',
                result: 'Great',
                effects: ['+12.000 ¥', '+1 Edge'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+15.000 ¥', '+2 Edge'],
            },
        ],
    },
    {
        tag: 'health',
        title: 'Gain Health',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+2 Heat'] },
            {
                range: '6-8',
                result: 'Failure',
                effects: ['+1 Heat', '+2 Health'],
            },
            { range: '9-11', result: 'Standard', effects: ['+4 Health'] },
            { range: '12-14', result: 'Good', effects: ['+6 Health'] },
            {
                range: '15-17',
                result: 'Great',
                effects: ['+8 Health', '+1 Edge'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+10 Health', '+2 Edge'],
            },
        ],
    },
    {
        tag: 'energy',
        title: 'Gain Energy',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+2 Heat'] },
            {
                range: '6-8',
                result: 'Failure',
                effects: ['+1 Heat', '+2 Health'],
            },
            { range: '9-11', result: 'Standard', effects: ['+4 Energy'] },
            { range: '12-14', result: 'Good', effects: ['+6 Energy'] },
            {
                range: '15-17',
                result: 'Great',
                effects: ['+8 Energy', '+1 Edge'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+10 Energy', '+2 Edge'],
            },
        ],
    },
    {
        tag: 'intel',
        title: 'Gain Intel',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+2 Heat'] },
            { range: '6-8', result: 'Failure', effects: ['+1 Heat'] },
            { range: '9-11', result: 'Standard', effects: ['+1 Intel'] },
            { range: '12-14', result: 'Good', effects: ['+2 Intel'] },
            {
                range: '15-17',
                result: 'Great',
                effects: ['+2 Intel', '+1 Edge'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+3 Intel', '+2 Edge'],
            },
        ],
    },
    {
        tag: 'heat',
        title: 'Reduce Heat',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+2 Heat'] },
            { range: '6-8', result: 'Failure', effects: ['+1 Heat'] },
            { range: '9-11', result: 'Standard', effects: ['-1 Heat'] },
            { range: '12-14', result: 'Good', effects: ['-2 Heat'] },
            {
                range: '15-17',
                result: 'Great',
                effects: ['-2 Heat', '+1 Edge'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['-3 Heat', '+2 Edge'],
            },
        ],
    },
    {
        tag: 'runner',
        title: 'Hire Runner',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+2 Heat'] },
            {
                range: '6-8',
                result: 'Failure',
                effects: ['+1 Heat', '+1 Attribute Temporary'],
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
                effects: ['+2 Attributes', '+1 Edge'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+2 Attributes', '+2 Edge'],
            },
        ],
    },
    {
        tag: 'attribute',
        title: 'Improve Attribute',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+2 Heat'] },
            { range: '6-8', result: 'Failure', effects: ['+1 Heat'] },
            {
                range: '9-11',
                result: 'Standard',
                effects: ['+1 to Attribute Temporary'],
            },
            { range: '12-14', result: 'Good', effects: ['+1 to Attribute'] },
            {
                range: '15-17',
                result: 'Great',
                effects: [
                    '+1 to Attribute',
                    '+1 to Attribute Temporary',
                    '+1 Edge',
                ],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+2 to Attribute', '+2 Edge'],
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
