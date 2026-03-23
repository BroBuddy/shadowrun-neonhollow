import { Mechanic } from './MechanicType'

const mechanicData: Mechanic[] = [
    {
        tag: 'dice',
        title: '🎲 Dice Rolling',
        description:
            'Roll Dice to determine outcomes and navigate chance-based scenarios.',
        list: [
            'Roll 1d6 for a result between 1 and 6.',
            'Roll 2d6 to add results together.',
            'Rolling double ones escalate the heat level by one.',
            'Rolling double sixes rewards you with 1 Intel.',
        ],
    },
    {
        tag: 'time',
        title: '🕒 Day & Night',
        description:
            'Each day runs in three phases. There is no time limit — but your final rating depends on how few days it takes to bring MegaCorp down.',
        list: [
            'Streets — Hit up to 3 locations. Each action can only be burned once per day.',
            'Run — Take the contract. Work through all 6 steps. Don\'t get caught.',
            'Midnight — The city resets. Roll for the encounter, burn off your temp boosts, and mark another day gone.',
        ],
    },
    {
        tag: 'nuyen',
        title: '💰 Nuyen',
        description:
            'Money talks in NeonHollow. Earn it, spend it, don\'t run out.',
        list: [
            'Nuyen is the currency of the Shadowrun universe.',
            'Most location actions require Nuyen.',
            'Run contracts and city locations offer opportunities to earn Nuyen.',
        ],
    },
    {
        tag: 'health',
        title: '❤️ Health',
        description:
            'Stay alive. Everything else is secondary.',
        list: [
            'Health ranges from 0 to 10 and cannot exceed these limits.',
            'If Health reaches 0, the game is over.',
            'At Midnight, lose Health equal to half your current Heat level.',
            'Restored at: VitalClinic, IronGym, SafeHouse.',
        ],
    },
    {
        tag: 'energy',
        title: '🔋 Energy',
        description:
            'You can\'t run the shadows on empty. Keep your Energy up.',
        list: [
            'Energy ranges from 0 to 10 and cannot exceed these limits.',
            'Each point below 0 costs 1 Health point.',
            'At Midnight, lose Energy equal to half your current Heat level.',
            'Restored at: DreamHaven, CyberLab, EchoGarden.',
        ],
    },
    {
        tag: 'Edge',
        title: '⭐ Edge',
        description:
            'The difference between walking away and not.',
        list: [
            'Edge ranges from 0 to 3 and cannot exceed these limits.',
            'Spend 1 Edge during a skill check to gain an additional roll.',
            'Spend 3 Edge at MegaCorp to advance your lifetime goal.',
            'Earned through successful runs and city events.',
        ],
    },
    {
        tag: 'intel',
        title: '💡 Intel',
        description:
            'Information is leverage. Gather Intel during the Streets phase to gain an edge on your runs.',
        list: [
            'Intel ranges from 0 to 6 and cannot exceed these limits.',
            'Spend Intel before a roll to add +2 to the result per Intel spent.',
            'Gathered at: CyberLab, PulseBar, SmugglerDen.',
        ],
    },
    {
        tag: 'heat',
        title: '🔥 Heat',
        description:
            'The hotter you burn, the harder they hunt.',
        list: [
            'Heat ranges from 0 to 6 and cannot exceed these limits.',
            'At Midnight, lose Health and Energy each equal to half your Heat level.',
            'More Heat locks down districts and restricts access to locations.',
            'Reduced at: SecurityHub, EchoGarden, SafeHouse.',
        ],
    },
    {
        tag: 'attributes',
        title: 'Attributes',
        description:
            'Your character is defined by three 💪 physical and three 🧠 mental attributes.',
        list: [
            'Physical Attributes: Strength, Agility, Reaction',
            'Mental Attributes: Logic, Intuition, Charisma',
            'Each attribute is limited to a maximum of six, excluding temporary boosts.',
            'To succeed at a skill check, you must select one of your attributes and incorporate it into a targeted roll.',
            'No need to track your attributes — they’re fully implemented in the header.',
        ],
    },
    {
        tag: 'sheet',
        title: 'Player Sheet',
        description: 'Which values do you need to track? Check the list below:',
        list: [
            'Time: Track days (0–6) and hours (0–6)',
            'Health & Energy: Each ranges from 0 to 10',
            'Edge & Intel : Each ranges from 0 to 6',
            'Heat: Ranges from 0 to 6',
        ],
    },
]

const getMechanicData = (): Pick<Mechanic, 'tag' | 'title'>[] => {
    return mechanicData.map(({ tag, title }) => ({ tag, title }))
}

const getMechanicByTag = (tag: string): Mechanic => {
    return mechanicData.find((item: Mechanic) => item.tag === tag) as Mechanic
}

export { getMechanicData, getMechanicByTag }
