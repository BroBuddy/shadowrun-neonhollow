import { District } from '../types/CityType'

export const cityData: District[] = [
    {
        id: 1,
        name: 'Skyline',
        noto: 1,
        icon: '🔴',
        facilities: [
            {
                name: 'MegaCorp',
                link: '/city/megacorp',
            },
            {
                name: 'CyberLab',
                link: '/city/cyberlab',
            },
            {
                name: 'VitalClinic',
                link: '/city/vitalclinic',
            },
        ]
    },
    {
        id: 2,
        name: 'Central',
        noto: 2,
        icon: '🟠',
        facilities: [
            {
                name: 'SecurityHub',
                link: '/city/securityhub',
            },
            {
                name: 'PulseBar',
                link: '/city/pulsebar',
            },
            {
                name: 'DreamHaven',
                link: '/city/dreamhaven',
            },
        ],
    },
    {
        id: 3,
        name: 'Quarter',
        noto: 3,
        icon: '🟡',
        facilities: [
            {
                name: 'EchoGarden',
                link: '/city/echogarden',
            },
            {
                name: 'IronGym',
                link: '/city/irongym',
            },
            {
                name: 'ZeroZone',
                link: '/city/zerozone',
            },
        ],
    },
    {
        id: 4,
        name: 'Depths',
        noto: 4,
        icon: '🟢',
        facilities: [
            {
                name: 'SmugglerDen',
                link: '/city/smugglerden',
            },
            {
                name: 'SafeHouse',
                link: '/city/safehouse',
            },
        ],
    },
]