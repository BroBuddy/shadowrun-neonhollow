import { Obstacle } from './ObstacleType'

const obstacleData: Obstacle[] = [
    {
        id: '1',
        title: 'Laser Grid',
        description: 'Precision needed to bypass laser grid.',
        skillChecks: [
            { attribute: 'Agility', icon: '💪' },
            { attribute: 'Intuition', icon: '🧠' },
        ],
    },
    {
        id: '2',
        title: 'Encrypted Lock',
        description: 'Hack lock without triggering an alarm.',
        skillChecks: [
            { attribute: 'Logic', icon: '🧠' },
            { attribute: 'Charisma', icon: '🧠' },
        ],
    },
    {
        id: '3',
        title: 'Guard Patrol',
        description: 'Sneak past patrol without being seen.',
        skillChecks: [
            { attribute: 'Agility', icon: '💪' },
            { attribute: 'Reaction', icon: '💪' },
        ],
    },
    {
        id: '4',
        title: "Hacker's Maze",
        description: 'Break through a high-security firewall.',
        skillChecks: [
            { attribute: 'Logic', icon: '🧠' },
            { attribute: 'Intuition', icon: '🧠' },
        ],
    },
    {
        id: '5',
        title: 'Security Camera',
        description: 'Time movements to avoid detection.',
        skillChecks: [
            { attribute: 'Reaction', icon: '💪' },
            { attribute: 'Charisma', icon: '🧠' },
        ],
    },
    {
        id: '6',
        title: 'Strengthened Door',
        description: 'Break through reinforced entrance.',
        skillChecks: [
            { attribute: 'Strength', icon: '💪' },
            { attribute: 'Agility', icon: '💪' },
        ],
    },
    {
        id: '7',
        title: 'Poisonous Gas',
        description: 'Find a way to clear toxic fumes.',
        skillChecks: [
            { attribute: 'Strength', icon: '💪' },
            { attribute: 'Intuition', icon: '🧠' },
        ],
    },
    {
        id: '8',
        title: 'Barred Window',
        description: 'Remove bars to escape through window.',
        skillChecks: [
            { attribute: 'Strength', icon: '💪' },
            { attribute: 'Charisma', icon: '🧠' },
        ],
    },
    {
        id: '9',
        title: 'Data Corruption',
        description: 'Recover lost mission files.',
        skillChecks: [
            { attribute: 'Logic', icon: '🧠' },
            { attribute: 'Reaction', icon: '💪' },
        ],
    },
    {
        id: '10',
        title: 'Tactical Distraction',
        description: 'Create diversion to mislead enemies.',
        skillChecks: [
            { attribute: 'Charisma', icon: '🧠' },
            { attribute: 'Intuition', icon: '🧠' },
        ],
    },
    {
        id: '11',
        title: 'Muddy Terrain',
        description: 'Move carefully to avoid slipping.',
        skillChecks: [
            { attribute: 'Reaction', icon: '💪' },
            { attribute: 'Strength', icon: '💪' },
        ],
    },
    {
        id: '12',
        title: 'Magnetic Lock',
        description: 'Disable lock without alarms.',
        skillChecks: [
            { attribute: 'Logic', icon: '🧠' },
            { attribute: 'Agility', icon: '💪' },
        ],
    },
    {
        id: '13',
        title: 'Stealth Approach',
        description: 'Move silently through guarded halls.',
        skillChecks: [
            { attribute: 'Agility', icon: '💪' },
            { attribute: 'Charisma', icon: '🧠' },
        ],
    },
    {
        id: '14',
        title: 'Overloaded Circuit',
        description: 'Reroute power before system crashes.',
        skillChecks: [
            { attribute: 'Reaction', icon: '💪' },
            { attribute: 'Intuition', icon: '🧠' },
        ],
    },
    {
        id: '15',
        title: 'Data Breach',
        description: 'Stop the data leak before it spreads.',
        skillChecks: [
            { attribute: 'Strength', icon: '💪' },
            { attribute: 'Logic', icon: '🧠' },
        ],
    },
]

export { obstacleData }

const getObstacleData = (): Pick<Obstacle, 'id' | 'title'>[] => {
    return obstacleData.map(({ id, title }) => ({ id, title }))
}

const getObstacleById = (id: string): Obstacle => {
    return obstacleData.find((item: Obstacle) => item.id === id) as Obstacle
}

const getRandomObstacles = (): Obstacle[] => {
    const shuffled = [...obstacleData].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 3)
}

export { getObstacleData, getObstacleById, getRandomObstacles }
