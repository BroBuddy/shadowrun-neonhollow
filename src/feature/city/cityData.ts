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
                name: 'NeuralNexus',
                link: '/city/neuralnexus',
                image: '/images/NeuralNexus.jpg',
            },
            {
                name: 'PatrolHub',
                link: '/city/patrolhub',
                image: '/images/PatrolHub.jpg',
            },
        ],
    },
    {
        name: 'Serenity',
        heat: '🟠 Heat 3',
        facilities: [
            {
                name: 'BioCare',
                link: '/city/biocare',
                image: '/images/BioCare.jpg',
            },
            {
                name: 'EchoGarden',
                link: '/city/echogarden',
                image: '/images/EchoGarden.jpg',
            },
            {
                name: 'DreamSphere',
                link: '/city/dreamsphere',
                image: '/images/DreamSphere.jpg',
            },
        ],
    },
    {
        name: 'Vortex',
        heat: '🟡 Heat 5',
        facilities: [
            {
                name: 'HoloLounge',
                link: '/city/hololounge',
                image: '/images/HoloLounge.jpg',
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
