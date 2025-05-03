import { Mission } from './MissionType'

const missionData: Mission[] = [
    {
        id: '1',
        title: 'Extraction',
        attributes: 'Strength, Agility',
        client: 'Dax Mercer',
        briefing:
            'MegaCorp is hiding advanced surveillance tech. Break in, extract data, and vanish before alarms go off.',
        twist: {
            description:
                'You find encrypted blueprints for cybernetic enhancements.',
            skillChecks: [
                {
                    attribute: 'Strength',
                    dc: 14,
                    description: 'Break open reinforced access panels.',
                },
                {
                    attribute: 'Agility',
                    dc: 14,
                    description: 'Navigate through laser grids undetected.',
                },
            ],
        },
    },
    {
        id: '2',
        title: 'Assassination',
        attributes: 'Agility, Reaction',
        client: 'Nyx Holloway',
        briefing:
            "MegaCorp's AI manipulates dreams. You must slip in, delete its core, and disappear before alarms sound.",
        twist: {
            description: 'A backup AI starts a full-system lockdown.',
            skillChecks: [
                {
                    attribute: 'Agility',
                    dc: 14,
                    description: 'Evade security drones patrolling the halls.',
                },
                {
                    attribute: 'Reaction',
                    dc: 14,
                    description: "Counter the AI's rapid system shutdown.",
                },
            ],
        },
    },
    {
        id: '3',
        title: 'Smuggling',
        attributes: 'Reaction, Strength',
        client: 'Juno Voss',
        briefing:
            'A black-market shipment must reach its buyer. Avoid corporate roadblocks and rivals hunting for your cargo.',
        twist: {
            description:
                'The shipment contains hidden tech more valuable than expected.',
            skillChecks: [
                {
                    attribute: 'Reaction',
                    dc: 14,
                    description:
                        'Quickly reroute when chased by rival smugglers.',
                },
                {
                    attribute: 'Strength',
                    dc: 14,
                    description:
                        'Physically secure the cargo in unstable terrain.',
                },
            ],
        },
    },
    {
        id: '4',
        title: 'Sabotage',
        attributes: 'Logic, Intuition',
        client: 'Rook Everhart',
        briefing:
            "MegaCorp's deepest secrets are stored offline. Break in, leak their crimes, and collapse their network.",
        twist: {
            description: 'The vault is rigged with a timed security wipe.',
            skillChecks: [
                {
                    attribute: 'Logic',
                    dc: 14,
                    description: 'Bypass the encryption wipe sequence.',
                },
                {
                    attribute: 'Intuition',
                    dc: 14,
                    description: 'Anticipate security patrol shifts.',
                },
            ],
        },
    },
    {
        id: '5',
        title: 'Espionage',
        attributes: 'Intuition, Charisma',
        client: 'Liora Black',
        briefing:
            'Infiltrate a high-society gala. Gather intel, avoid exposure, and manipulate power plays to your advantage.',
        twist: {
            description: 'A rival spy recognizes you mid-operation.',
            skillChecks: [
                {
                    attribute: 'Intuition',
                    dc: 14,
                    description:
                        'Sense the rival spy’s intentions before acting.',
                },
                {
                    attribute: 'Charisma',
                    dc: 14,
                    description: 'Convince them that you’re an invited guest.',
                },
            ],
        },
    },
    {
        id: '6',
        title: 'Infiltration',
        attributes: 'Charisma, Logic',
        client: 'Veyna Strix',
        briefing:
            'Pose as a corporate insider. Enter deep into enemy territory and feed false data while remaining undetected.',
        twist: {
            description: 'Your cover identity is flagged as suspicious.',
            skillChecks: [
                {
                    attribute: 'Charisma',
                    dc: 14,
                    description: 'Persuade the security lead that you belong.',
                },
                {
                    attribute: 'Logic',
                    dc: 14,
                    description: 'Forge clearance documents before they check.',
                },
            ],
        },
    },
]

const getMissionData = (): Pick<Mission, 'id' | 'title' | 'attributes'>[] => {
    return missionData.map(({ id, title, attributes }) => ({
        id,
        title,
        attributes,
    }))
}

const getMissionById = (id: string): Mission => {
    return missionData.find((item: Mission) => item.id === id) as Mission
}

export { getMissionData, getMissionById }
