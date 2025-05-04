import { District } from './CityType'

const cityData: District[] = [
    {
        id: 1,
        name: 'Skyline',
        heat: '2',
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
        ],
    },
    {
        id: 2,
        name: 'Central',
        heat: '4',
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
        heat: '6',
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
        heat: '8',
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

const getCityData = (): District[] => {
    return cityData
}

export { getCityData }
