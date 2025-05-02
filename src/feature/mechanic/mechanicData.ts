import { Mechanic } from './MechanicType'

const mechanicData: Mechanic[] = [
    {
        tag: 'dice',
        title: 'Dice Rolling',
        description:
            'Roll 🎲 Dice to determine outcomes and navigate chance-based scenarios.',
        list: [
            'Roll 1d6 for a result between 1 and 6.',
            'Roll 2d6 to add results together.',
            'Rolling double ones escalate the heat level by one.',
            'Rolling double sixes rewards you with 1 Intel.',
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
        tag: 'time',
        title: 'Time Mechanic',
        description:
            'Manage your 🕒 Time wisely to achieve objectives within a limited framework.',
        list: [
            '6 days to dismantle the system, with 6 hours per cycle.',
            'In total, only thirty-six actions to be allocated thoughtfully.',
            'Each action consumes 1 hour and may only be performed once daily, except when at a SafeHouse.',
            'Roll on the Event Matrix at the end of the day.',
        ],
    },
    {
        tag: 'nuyen',
        title: 'Nuyen Mechanic',
        description:
            'Earn, save, and spend 💰 Nuyen to progress through various challenges.',
        list: [
            'Nuyen is the currency of the Shadowrun universe.',
            'Most facility actions require Nuyen.',
            'Facilities offer opportunities to earn Nuyen.',
        ],
    },
    {
        tag: 'health',
        title: 'Health Mechanic',
        description:
            'Maintain your ❤️ Health to survive in the harsh environments of the game.',
        list: [
            'Health ranges from 0 to 10 and cannot exceed these limits.',
            'If Health reaches 0, the game is over. 💀',
            'Service Providers: VitalClinic, IronGym, SafeHouse.',
        ],
    },
    {
        tag: 'energy',
        title: 'Energy Mechanic',
        description:
            'Balance 🔋 Energy to avoid consequences and keep moving forward.',
        list: [
            'Energy ranges from 0 to 10 and cannot exceed these limits.',
            'Each point below 0 costs 1 Health point.',
            'Service Providers: DreamHaven, CyberLab, EchoGarden.',
        ],
    },
    {
        tag: 'Edge',
        title: 'Edge Mechanic',
        description:
            'Use ⭐ Edge to gain advantages and influence outcomes in skill checks.',
        list: [
            'Edge ranges from 0 to 6 and cannot exceed these limits.',
            'Spend 1 Edge during a skill check to gain an additional roll.',
            'Spend 1 Edge before a roll to add your current Edge level as a bonus to that check.',
            'Service Providers: Skill Checks, Town Events, Mr. Johnson.',
        ],
    },
    {
        tag: 'heat',
        title: 'Heat Mechanic',
        description:
            'Manage 🔥 Heat to avoid being hunted and losing access to services.',
        list: [
            'Heat ranges from 0 to 6 and cannot exceed these limits.',
            "Higher Heat levels cause the Corp's special ops to hunt you down.",
            'Lose Health and Energy equal to your current Heat level.',
            'More Heat locks down town districts and restricts services.',
            'Service Providers: SecurityHub, EchoGarden, SafeHouse.',
        ],
    },
    {
        tag: 'intel',
        title: 'Intel Mechanic',
        description:
            'Gather 💡 Intel to unlock missions and bring down adversaries strategically.',
        list: [
            'Intel ranges from 0 to 6 and cannot exceed these limits.',
            "You'll need Intel to fund missions from Mr. Johnson.",
            'Service Providers: CyberLab, PulseBar, SmugglerDen.',
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
