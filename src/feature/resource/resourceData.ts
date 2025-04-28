import { Resource } from './ResourceType'

export const resourceData: Resource[] = [
    {
        tag: 'health',
        title: 'Gain Health',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+1 Heat'] },
            { range: '6-8', result: 'Failure', effects: ['+1 Heat'] },
            { range: '9-11', result: 'Standard', effects: ['+5 Health'] },
            { range: '12-14', result: 'Good', effects: ['+6 Health'] },
            {
                range: '15-17',
                result: 'Great',
                effects: ['+7 Health', '+1 Edge'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+8 Health', '+2 Edge'],
            },
        ],
    },
    {
        tag: 'energy',
        title: 'Gain Energy',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+1 Heat'] },
            { range: '6-8', result: 'Failure', effects: ['+1 Heat'] },
            { range: '9-11', result: 'Standard', effects: ['+5 Energy'] },
            { range: '12-14', result: 'Good', effects: ['+6 Energy'] },
            {
                range: '15-17',
                result: 'Great',
                effects: ['+7 Energy', '+1 Edge'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+8 Energy', '+2 Edge'],
            },
        ],
    },
    {
        tag: 'nuyen',
        title: 'Gain Nuyen',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+2 Heat'] },
            { range: '6-8', result: 'Failure', effects: ['+1 Heat'] },
            { range: '9-11', result: 'Standard', effects: ['+4.000 ¥'] },
            { range: '12-14', result: 'Good', effects: ['+8.000 ¥'] },
            {
                range: '15-17',
                result: 'Great',
                effects: ['+12.000 ¥', '+1 Edge'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+16.000 ¥', '+2 Edge'],
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
                effects: ['+3 Intel', '+1 Edge'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+4 Intel', '+2 Edge'],
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
                effects: ['+1 Heat'],
            },
            {
                range: '9-11',
                result: 'Standard',
                effects: ['+2 Attributes Temporary'],
            },
            {
                range: '12-14',
                result: 'Good',
                effects: ['+1 Attributes', '+2.000 ¥'],
            },
            {
                range: '15-17',
                result: 'Great',
                effects: [
                    '+1 Attributes',
                    '+1 Attributes Temporary',
                    '+4.000 ¥',
                    '+1 Edge',
                ],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+2 Attributes Temporary', '+6.000 ¥', '+2 Edge'],
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
