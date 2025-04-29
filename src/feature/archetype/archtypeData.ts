import { Archetype } from './ArchetypeType'

const ATTRIBUTES: Record<string, string> = {
    STRENGTH: '+1 Strength',
    AGILITY: '+1 Agility',
    REACTION: '+1 Reaction',
    LOGIC: '+1 Logic',
    INTUITION: '+1 Intuition',
    CHARISMA: '+1 Charisma',
}

const archetypeData: Archetype[] = [
    {
        tag: 'streetsamurai',
        title: 'Street Samurai',
        description:
            'A master of combat, both physical and ranged. Often a hired gun or mercenary, the Street Samurai relies on strength and agility to survive in the harsh world of the shadows.',
        bonusAttributes: [ATTRIBUTES.STRENGTH, ATTRIBUTES.AGILITY],
    },
    {
        tag: 'decker',
        title: 'Decker',
        description:
            "The digital cowboy. A Decker navigates the Matrix, hacking and controlling systems with a mix of tech skills and speed. They're often the go-to for gathering information or manipulating digital environments.",
        bonusAttributes: [ATTRIBUTES.REACTION, ATTRIBUTES.LOGIC],
    },
    {
        tag: 'rigger',
        title: 'Rigger',
        description:
            'Riggers specialize in controlling drones, vehicles, and machinery. Their physical prowess allows them to take charge of mechanical and robotic assets, making them versatile in combat and exploration.',
        bonusAttributes: [ATTRIBUTES.AGILITY, ATTRIBUTES.LOGIC],
    },
    {
        tag: 'mage',
        title: 'Mage',
        description:
            'The wielder of magical powers. Mages use their abilities to manipulate the elements, enchant objects, and protect themselves from harm. They rely heavily on their mental attributes to tap into their magical forces.',
        bonusAttributes: [ATTRIBUTES.INTUITION, ATTRIBUTES.CHARISMA],
    },
    {
        tag: 'face',
        title: 'Face',
        description:
            'The social expert, often the face of the team. Faces specialize in negotiations, deception, and influence. They rely on charisma to manipulate others and can charm or intimidate their way through various situations.',
        bonusAttributes: [ATTRIBUTES.REACTION, ATTRIBUTES.CHARISMA],
    },
    {
        tag: 'shaman',
        title: 'Shaman',
        description:
            "A spiritual leader and practitioner of magic. Shamans are deeply connected to the natural world and communicate with spirits to enhance their abilities. They're more attuned to nature and can summon and control spirits.",
        bonusAttributes: [ATTRIBUTES.STRENGTH, ATTRIBUTES.INTUITION],
    },
]

const validTags = archetypeData.map(({ tag }) => tag)
const isTagValid = (tagId: string): boolean => validTags.includes(tagId)

const getArchetypeData = (): Pick<Archetype, 'tag' | 'title'>[] => {
    return archetypeData.map(({ tag, title }) => ({ tag, title }))
}

const getArchetypeByTag = (tag: string): Archetype | undefined => {
    if (!isTagValid(tag)) {
        throw new Error(`Invalid tag: ${tag}`)
    }
    return archetypeData.find((item: Archetype) => item.tag === tag)
}

export { getArchetypeData, getArchetypeByTag }
