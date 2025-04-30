import { Archetype } from './ArchetypeType'

const archetypeData: readonly Archetype[] = [
    {
        id: 1,
        title: 'Street Samurai',
        description:
            'A master of combat, both physical and ranged. Often a hired gun or mercenary, the Street Samurai relies on strength and agility to survive in the harsh world of the shadows.',
        attributes: {
            Strength: 1,
            Agility: 1,
        },
    },
    {
        id: 2,
        title: 'Decker',
        description:
            "The digital cowboy. A Decker navigates the Matrix, hacking and controlling systems with a mix of tech skills and speed. They're often the go-to for gathering information or manipulating digital environments.",
        attributes: {
            Reaction: 1,
            Logic: 1,
        },
    },
    {
        id: 3,
        title: 'Rigger',
        description:
            'Riggers specialize in controlling drones, vehicles, and machinery. Their physical prowess allows them to take charge of mechanical and robotic assets, making them versatile in combat and exploration.',
        attributes: {
            Agility: 1,
            Logic: 1,
        },
    },
    {
        id: 4,
        title: 'Mage',
        description:
            'The wielder of magical powers. Mages use their abilities to manipulate the elements, enchant objects, and protect themselves from harm. They rely heavily on their mental attributes to tap into their magical forces.',
        attributes: {
            Intuition: 1,
            Charisma: 1,
        },
    },
    {
        id: 5,
        title: 'Face',
        description:
            'The social expert, often the face of the team. Faces specialize in negotiations, deception, and influence. They rely on charisma to manipulate others and can charm or intimidate their way through various situations.',
        attributes: {
            Reaction: 1,
            Charisma: 1,
        },
    },
    {
        id: 6,
        title: 'Shaman',
        description:
            "A spiritual leader and practitioner of magic. Shamans are deeply connected to the natural world and communicate with spirits to enhance their abilities. They're more attuned to nature and can summon and control spirits.",
        attributes: {
            Strength: 1,
            Intuition: 1,
        },
    },
]

const validIds = archetypeData.map(({ id }) => id)
const isValidArchetype = (id: number): boolean => validIds.includes(id)

const getArchetypeData = (): Pick<Archetype, 'id' | 'title'>[] => {
    return archetypeData.map(({ id, title }) => ({ id, title }))
}

const getArchetypeById = (id: number): Archetype | undefined => {
    return archetypeData.find((item: Archetype) => item.id === id)
}

export { getArchetypeData, getArchetypeById, isValidArchetype }
