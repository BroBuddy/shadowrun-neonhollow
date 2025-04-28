import { Mechanic } from './MechanicType'

const mechanicData: Mechanic[] = [
    {
        tag: 'time',
        title: 'Time Mechanic',
        description:
            'Manage your 🕒 Time wisely to achieve objectives within a limited framework.',
        list: [
            '7 Days to dismantle the system, with 7 Hours per cycle.',
            'Start at your private SafeHouse.',
            'Moving costs 1 Energy and 1 Hour.',
            'Actions cost 1 Hour and can only be performed once per day.',
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
            "If Health reaches 0, you're effectively dead.",
            'Service Providers: BioCare, IronGym, SafeHouse.',
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
            'Service Providers: DreamSphere, NeuralNexus, EchoGarden.',
        ],
    },
    {
        tag: 'reputation',
        title: 'Reputation Mechanic',
        description:
            'Use ⭐ Reputation to gain advantages and influence outcomes in skill checks.',
        list: [
            'Reputation ranges from 0 to 6 and cannot exceed these limits.',
            'Spend 1 Reputation during a skill check to gain an additional roll.',
            'Service Providers: Skill Checks, Town Events, Mr. Johnson.',
        ],
    },
    {
        tag: 'heat',
        title: 'Heat Mechanic',
        description:
            'Manage 🔥 Heat to avoid being hunted and losing access to services.',
        list: [
            'Heat ranges from 0 to 3 and cannot exceed these limits.',
            "Higher Heat levels cause the Corp's special ops to hunt you down.",
            'Lose Health and Energy equal to your current Heat level.',
            'More Heat locks down town districts and restricts services.',
            'Service Providers: PatrolHub, EchoGarden, SafeHouse.',
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
            'Service Providers: NeuralNexus, HoloLounge, SmugglerDen.',
        ],
    },
    {
        tag: 'dice',
        title: 'Dice Mechanic',
        description:
            'Roll 🎲 Dice to determine outcomes and navigate chance-based scenarios.',
        list: [
            'Roll 1d6 for a result between 1 and 6.',
            'Roll 2d6 to add results together.',
            'Rolling double ones triggers a critical glitch.',
            'Rolling double sixes rewards you with 1 Intel.',
        ],
    },
    {
        tag: 'matrix',
        title: 'Matrix Mechanic',
        description:
            'Decode matrix IDs to progress through challenges and unlock possibilities.',
        list: [
            'Roll 2d6 – one die for tens, the other for ones.',
            'Combine the two rolls to form a two-digit number.',
            'Use the number rolled to locate the ID on the matrix.',
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
