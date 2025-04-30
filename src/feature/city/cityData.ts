import { District } from './CityType'

const cityData: District[] = [
    {
        name: 'Skyline',
        heat: 'Heat 2',
        icon: '🔴',
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
                name: 'VitalClinic',
                link: '/city/vitalclinic',
                image: '/images/VitalClinic.jpg',
            },
        ],
    },
    {
        name: 'Central',
        heat: 'Heat 4',
        icon: '🟠',
        facilities: [
            {
                name: 'SecurityHub',
                link: '/city/securityhub',
                image: '/images/SecurityHub.jpg',
            },
            {
                name: 'PulseBar',
                link: '/city/pulsebar',
                image: '/images/PulseBar.jpg',
            },
            {
                name: 'DreamHaven',
                link: '/city/dreamhaven',
                image: '/images/DreamHaven.jpg',
            },
        ],
    },
    {
        name: 'Quarter',
        heat: 'Heat 6',
        icon: '🟡',
        facilities: [
            {
                name: 'EchoGarden',
                link: '/city/echogarden',
                image: '/images/EchoGarden.jpg',
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
        name: 'Depths',
        heat: 'Heat 8',
        icon: '🟢',
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
            {
                name: '',
                link: '',
                image: '',
            },
        ],
    },
]

const getCityData = (): District[] => {
    return cityData
}

export { getCityData }
