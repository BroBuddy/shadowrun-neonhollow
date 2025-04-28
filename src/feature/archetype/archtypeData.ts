import { Archetype } from './ArchetypeType'

const archetypeData: Archetype[] = [
    {
        tag: 'streetsamurai',
        title: 'Street Samurai',
        description:
            'A master of combat, both physical and ranged. Often a hired gun or mercenary, the Street Samurai relies on strength and agility to survive in the harsh world of the shadows.',
        bonusAttributes: ['+1 Strength', '+1 Agility'],
    },
    {
        tag: 'decker',
        title: 'Decker',
        description:
            "The digital cowboy. A Decker navigates the Matrix, hacking and controlling systems with a mix of tech skills and speed. They're often the go-to for gathering information or manipulating digital environments.",
        bonusAttributes: ['+1 Reaction', '+1 Logic'],
    },
    {
        tag: 'rigger',
        title: 'Rigger',
        description:
            'Riggers specialize in controlling drones, vehicles, and machinery. Their physical prowess allows them to take charge of mechanical and robotic assets, making them versatile in combat and exploration.',
        bonusAttributes: ['+1 Agility', '+1 Logic'],
    },
    {
        tag: 'mage',
        title: 'Mage',
        description:
            'The wielder of magical powers. Mages use their abilities to manipulate the elements, enchant objects, and protect themselves from harm. They rely heavily on their mental attributes to tap into their magical forces.',
        bonusAttributes: ['+1 Intuition', '+1 Charisma'],
    },
    {
        tag: 'face',
        title: 'Face',
        description:
            'The social expert, often the face of the team. Faces specialize in negotiations, deception, and influence. They rely on charisma to manipulate others and can charm or intimidate their way through various situations.',
        bonusAttributes: ['+1 Reaction', '+1 Charisma'],
    },
    {
        tag: 'shaman',
        title: 'Shaman',
        description:
            "A spiritual leader and practitioner of magic. Shamans are deeply connected to the natural world and communicate with spirits to enhance their abilities. They're more attuned to nature and can summon and control spirits.",
        bonusAttributes: ['+1 Strength', '+1 Intuition'],
    },
]

const getArchetypeData = (): Pick<Archetype, 'tag' | 'title'>[] => {
    return archetypeData.map(({ tag, title }) => ({ tag, title }))
}

const getArchetypeByTag = (tagId: string): Archetype => {
    return archetypeData.find(
        (archetype: Archetype) => archetype.tag === tagId
    ) as Archetype
}

export { getArchetypeData, getArchetypeByTag }
