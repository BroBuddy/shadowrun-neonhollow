import { Metatype } from './MetatypeType'

const metatypeData: Metatype[] = [
    {
        tag: 'human',
        title: 'Human',
        description:
            'The most adaptable and versatile race, humans have the ability to excel in nearly every environment. They may not possess the natural enhancements of the other races, but their drive and determination make them a powerful force in any situation.',
        startingAttributes: {
            Strength: 3,
            Agility: 3,
            Reaction: 3,
            Logic: 3,
            Intuition: 3,
            Charisma: 3,
        },
    },
    {
        tag: 'elf',
        title: 'Elf',
        description:
            'Graceful, elegant, and with a keen intellect, elves are often seen as the aristocrats of the Shadowrun world. Their natural agility and charisma make them invaluable in both social and combat situations.',
        startingAttributes: {
            Strength: 2,
            Agility: 4,
            Reaction: 3,
            Logic: 3,
            Intuition: 2,
            Charisma: 4,
        },
    },
    {
        tag: 'dwarf',
        title: 'Dwarf',
        description:
            'Dwarves are the embodiment of endurance and resilience. Shorter in stature but larger in presence, they are known for their strength, toughness, and unyielding determination. They’re often the reliable backbone of any crew.',
        startingAttributes: {
            Strength: 4,
            Agility: 2,
            Reaction: 2,
            Logic: 4,
            Intuition: 3,
            Charisma: 3,
        },
    },
    {
        tag: 'ork',
        title: 'Ork',
        description:
            'With a natural inclination toward physical power and aggression, orks are often misunderstood as brutish, but they have a strong sense of loyalty and honor. Their towering frames and raw strength make them formidable in any fight.',
        startingAttributes: {
            Strength: 4,
            Agility: 3,
            Reaction: 3,
            Logic: 2,
            Intuition: 4,
            Charisma: 2,
        },
    },
    {
        tag: 'troll',
        title: 'Troll',
        description:
            'Trolls are intimidating giants, known for their immense physical strength and natural toughness. While their appearance often causes fear, trolls are also capable of deep loyalty and fierce protection for those they care about.',
        startingAttributes: {
            Strength: 4,
            Agility: 2,
            Reaction: 4,
            Logic: 3,
            Intuition: 3,
            Charisma: 2,
        },
    },
]

const validTags = metatypeData.map(({ tag }) => tag)
const isValidMetatype = (tag: string): boolean => validTags.includes(tag)

const getMetatypeData = (): Pick<Metatype, 'tag' | 'title'>[] => {
    return metatypeData.map(({ tag, title }) => ({ tag, title }))
}

const getMetatypeByTag = (tag: string): Metatype | undefined => {
    return metatypeData.find((item: Metatype) => item.tag === tag) as Metatype
}

export { getMetatypeData, getMetatypeByTag, isValidMetatype }
