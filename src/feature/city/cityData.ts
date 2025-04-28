import { District } from './CityType'

const cityData: District[] = [
    {
        name: 'Quantum',
        heat: '🔴 Heat 1',
        facilities: [
            {
                name: 'MegaCorp',
                link: '/city/megacorp',
                image: '/images/MegaCorp.jpg',
            },
            {
                name: 'CyberLab',
                link: '/city/cyberlab',
                image: '/images/CyberLab.jpg',
            },
            {
                name: 'SecurityHub',
                link: '/city/securityhub',
                image: '/images/SecurityHub.jpg',
            },
        ],
    },
    {
        name: 'Serenity',
        heat: '🟠 Heat 2',
        facilities: [
            {
                name: 'VitalClinic',
                link: '/city/vitalclinic',
                image: '/images/VitalClinic.jpg',
            },
            {
                name: 'EchoGarden',
                link: '/city/echogarden',
                image: '/images/EchoGarden.jpg',
            },
            {
                name: 'DreamHaven',
                link: '/city/dreamhaven',
                image: '/images/DreamHaven.jpg',
            },
        ],
    },
    {
        name: 'Vortex',
        heat: '🟡 Heat 3',
        facilities: [
            {
                name: 'PulseBar',
                link: '/city/pulsebar',
                image: '/images/PulseBar.jpg',
            },
            {
                name: 'IronGym',
                link: '/city/irongym',
                image: '/images/IronGym.jpg',
            },
            {
                name: 'ZeroZone',
                link: '/city/zerozone',
                image: '/images/ZeroZone.jpg',
            },
        ],
    },
    {
        name: 'Undercity',
        heat: '🟢 Heat 4',
        facilities: [
            {
                name: 'SmugglerDen',
                link: '/city/smugglerden',
                image: '/images/SmugglerDen.jpg',
            },
            {
                name: 'SafeHouse',
                link: '/city/safehouse',
                image: '/images/SafeHouse.jpg',
            },
        ],
    },
]

const getCityData = (): District[] => {
    return cityData
}

export { getCityData }
