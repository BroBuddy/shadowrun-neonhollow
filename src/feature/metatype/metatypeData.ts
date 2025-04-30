import { Metatype } from './MetatypeType'

const metatypeData: Metatype[] = [
    {
        tag: 'human',
        title: 'Human',
        description:
            'Adaptable and versatile, humans excel in any environment through drive and determination.',
        attributes: {
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
            'Elegant and intellectual, elves shine with natural agility and charisma in social and combat settings.',
        attributes: {
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
            'Resilient and tough, dwarves boast strength and determination, making them reliable allies.',
        attributes: {
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
            'Powerful and loyal, orks bring raw strength and honor despite being often misunderstood.',
        attributes: {
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
            'Physically mighty, trolls combine toughness with fierce loyalty and protective instincts.',
        attributes: {
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
