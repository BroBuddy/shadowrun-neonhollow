import { Resource } from './ResourceType'

export const resourceData: Resource[] = [
    {
        tag: 'R301',
        title: 'Gain Health',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+1 Heat'] },
            { range: '6-8', result: 'Failure', effects: ['+2 Health'] },
            { range: '9-11', result: 'Standard', effects: ['+4 Health'] },
            { range: '12-14', result: 'Good', effects: ['+5 Health'] },
            {
                range: '15-17',
                result: 'Great',
                effects: ['+7 Health', '+1 Reputation'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+8 Health', '+1 Reputation'],
            },
        ],
    },
    {
        tag: 'R302',
        title: 'Gain Energy',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+1 Heat'] },
            { range: '6-8', result: 'Failure', effects: ['+2 Energy'] },
            { range: '9-11', result: 'Standard', effects: ['+4 Energy'] },
            { range: '12-14', result: 'Good', effects: ['+5 Energy'] },
            {
                range: '15-17',
                result: 'Great',
                effects: ['+7 Energy', '+1 Reputation'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+8 Energy', '+1 Reputation'],
            },
        ],
    },
    {
        tag: 'R303',
        title: 'Gain Nuyen',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+1 Heat'] },
            { range: '6-8', result: 'Failure', effects: ['+3.000 ¥'] },
            { range: '9-11', result: 'Standard', effects: ['+6.000 ¥'] },
            { range: '12-14', result: 'Good', effects: ['+9.000 ¥'] },
            {
                range: '15-17',
                result: 'Great',
                effects: ['+12.000 ¥', '+1 Reputation'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+15.000 ¥', '+1 Reputation'],
            },
        ],
    },
    {
        tag: 'R305',
        title: 'Gain Intel',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+2 Heat'] },
            { range: '6-8', result: 'Failure', effects: ['+1 Heat'] },
            { range: '9-11', result: 'Standard', effects: ['+1 Intel'] },
            { range: '12-14', result: 'Good', effects: ['+2 Intel'] },
            {
                range: '15-17',
                result: 'Great',
                effects: ['+2 Intel', '+1 Reputation'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+3 Intel', '+1 Reputation'],
            },
        ],
    },
    {
        tag: 'R304',
        title: 'Reduce Heat',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+2 Heat'] },
            { range: '6-8', result: 'Failure', effects: ['+1 Heat'] },
            { range: '9-11', result: 'Standard', effects: ['-1 Heat'] },
            { range: '12-14', result: 'Good', effects: ['-2 Heat'] },
            {
                range: '15-17',
                result: 'Great',
                effects: ['-2 Heat', '+1 Reputation'],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['-3 Heat', '+1 Reputation'],
            },
        ],
    },
    {
        tag: 'R307',
        title: 'Hire Runner',
        rollList: [
            { range: '2-5', result: 'Critical Failure', effects: ['+2 Heat'] },
            {
                range: '6-8',
                result: 'Failure',
                effects: ['+1 Attributes Temporary'],
            },
            {
                range: '9-11',
                result: 'Standard',
                effects: ['+2 Attributes Temporary'],
            },
            {
                range: '12-14',
                result: 'Good',
                effects: ['+2 Attributes Temporary', '+2.000 ¥'],
            },
            {
                range: '15-17',
                result: 'Great',
                effects: [
                    '+2 Attributes Temporary',
                    '+4.000 ¥',
                    '+1 Reputation',
                ],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: [
                    '+2 Attributes Temporary',
                    '+6.000 ¥',
                    '+1 Reputation',
                ],
            },
        ],
    },
    {
        tag: 'R306',
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
                    '+1 Reputation',
                ],
            },
            {
                range: '18+',
                result: 'Exceptional',
                effects: ['+2 to Attribute', '+1 Reputation'],
            },
        ],
    },
]

const getResourceData = (): Resource[] => {
    return resourceData.map(({ tag, title }) => ({ tag, title }))
}

const getResourceByTag = (tagId: string): Resource => {
    return resourceData.find(
        (resource: Resource) => resource.tag === tagId
    ) as Resource
}

export { getResourceData, getResourceByTag }
