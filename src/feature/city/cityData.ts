import { District, Facility } from './CityType'

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
        heat: '🟠 Heat 2',
        facilities: [
            {
                name: 'BioCare',
                link: '/city/biocare',
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

const facilityData: Facility[] = [
    {
        tag: 'neuralnexus',
        title: 'NeuralNexus',
        rollList: [
            { roll: '2', text: 'System Anomaly', link: '/R471' },
            { roll: '3-4', text: 'Unapproved Experiment → +1 Heat' },
            { roll: '5-6', text: 'Research Malfunctions → -1 Health' },
            { roll: '7', text: 'Standard → No Effect' },
            { roll: '8-9', text: 'Unexpected Discovery → +1 Energy' },
            { roll: '10-11', text: 'Laboratory Breakthrough → +1 Intel' },
            { roll: '12', text: 'Mysterious Encounter', link: '/R481' },
        ],
        actionList: [
            {
                title: '💡 Code Decryption:',
                steps: [
                    { text: 'Pay 6.000 ¥ → Roll 2d6 → +2' },
                    { text: 'Add Logic or Intuition' },
                    { text: 'Gain Intel', link: '/R305' },
                ],
            },
            {
                title: '🔋 Neural Sync Boost:',
                steps: [
                    { text: 'Pay 4.000 ¥ → Roll 2d6' },
                    { text: 'Add Logic or Charisma' },
                    { text: 'Gain Energy', link: '/R302' },
                ],
            },
            {
                title: '🧠 Logic Refinement:',
                steps: [
                    { text: 'Pay 1.000 ¥ per point of Logic' },
                    { text: 'Roll 2d6 → Add 10 → Subtract Logic' },
                    { text: 'Improve Attribute', link: '/R306' },
                ],
            },
        ],
    },
    {
        tag: 'patrolhub',
        title: 'PatrolHub',
        rollList: [
            { roll: '2', text: 'Patrol Check', link: '/R472' },
            { roll: '3-4', text: 'Security Breach → +1 Heat' },
            { roll: '5-6', text: 'False Accusation → -1 Reputation' },
            { roll: '7', text: 'Standard → No Effect' },
            { roll: '8-9', text: 'Backup Support → +1 Energy' },
            { roll: '10-11', text: 'Friendly Recognition → -1 Heat' },
            { roll: '12', text: 'Security Clearance Boost → +1 Reputation' },
        ],
        actionList: [
            {
                title: '🔥 Silence the Badge:',
                steps: [
                    { text: 'Pay 6.000 ¥ → Roll 2d6 → +2' },
                    { text: 'Add Strength or Charisma' },
                    { text: 'Reduce Heat', link: '/R304' },
                ],
            },
            {
                title: '💰 Bounty Pursuit:',
                steps: [
                    { text: 'Spend 3 Health → Roll 2d6 → +2' },
                    { text: 'Add Strength or Intuition' },
                    { text: 'Gain Nuyen', link: '/R303' },
                ],
            },
        ],
    },
    {
        tag: 'biocare',
        title: 'BioCare',
        rollList: [
            { roll: '2', text: 'Medical Malfunction', link: '/R473' },
            { roll: '3-4', text: 'Uncooperative Patient → +1 Heat' },
            { roll: '5-6', text: 'Unsettling Diagnosis → -1 Health' },
            { roll: '7', text: 'Standard → No Effect' },
            { roll: '8-9', text: 'Energy Boost → +1 Energy' },
            { roll: '10-11', text: 'Public Assistance → +1 Reputation' },
            { roll: '12', text: 'Mysterious Encounter', link: '/R483' },
        ],
        actionList: [
            {
                title: '❤️ Nano Restoration:',
                steps: [
                    { text: 'Pay 6.000 ¥ → Roll 2d6 → +2' },
                    { text: 'Add Strength or Agility' },
                    { text: 'Gain Health', link: '/R301' },
                ],
            },
            {
                title: '💰 Donate Plasma:',
                steps: [
                    { text: 'Spend 2 Health → Roll 2d6' },
                    { text: 'Add Agility or Reaction' },
                    { text: 'Gain Nuyen', link: '/R303' },
                ],
            },
            {
                title: '💪 Agility Recalibration:',
                steps: [
                    { text: 'Pay 1.000 ¥ per point of Agility' },
                    { text: 'Roll 2d6 → Add 10 → Subtract Agility' },
                    { text: 'Improve Attribute', link: '/R306' },
                ],
            },
        ],
    },
]

const getCityData = (): District[] => {
    return cityData
}

const getFacilityByTag = (tagId: string): Facility => {
    return facilityData.find(
        (facility: Facility) => facility.tag === tagId
    ) as Facility
}

export { getCityData, getFacilityByTag }
