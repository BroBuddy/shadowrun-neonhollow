import { CityDistrict } from './CityType'

const cityData: CityDistrict[] = [
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
        heat: '🟠 Heat 2',
        facilities: [
            {
                name: 'BioCare',
                link: '/R130',
                image: '/images/BioCare.jpg',
            },
            {
                name: 'EchoGarden',
                link: '/R160',
                image: '/images/EchoGarden.jpg',
            },
            {
                name: 'DreamSphere',
                link: '/R150',
                image: '/images/DreamSphere.jpg',
            },
        ],
    },
    {
        name: 'Vortex',
        heat: '🟡 Heat 3',
        facilities: [
            {
                name: 'HoloLounge',
                link: '/R140',
                image: '/images/HoloLounge.jpg',
            },
            {
                name: 'IronGym',
                link: '/R170',
                image: '/images/IronGym.jpg',
            },
            {
                name: 'ZeroZone',
                link: '/R200',
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
                link: '/R190',
                image: '/images/SmugglerDen.jpg',
            },
            {
                name: 'SafeHouse',
                link: '/R210',
                image: '/images/SafeHouse.jpg',
            },
        ],
    },
]

const getCityData = () => {
    return cityData
}

export { getCityData }
