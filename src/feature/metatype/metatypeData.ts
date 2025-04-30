import { Metatype } from './MetatypeType'

const metatypeData: Metatype[] = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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

const validIds = metatypeData.map(({ id }) => id)
const isValidMetatype = (id: number): boolean => validIds.includes(id)

const getMetatypeData = (): Pick<Metatype, 'id' | 'title'>[] => {
    return metatypeData.map(({ id, title }) => ({ id, title }))
}

const getMetatypeById = (id: number): Metatype | undefined => {
    return metatypeData.find((item: Metatype) => item.id === id) as Metatype
}

export { getMetatypeData, getMetatypeById, isValidMetatype }
