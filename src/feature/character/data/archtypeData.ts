import { Archetype } from "../types/ArchetypeType"

export const archetypeData: readonly Archetype[] = [
    {
        id: 1,
        title: 'Street Samurai',
        description:
            'Chrome and muscle, that is all you need. The Street Sam is a blade in the dark, a mercenary of the old school. Shoot, hit, survive.',
        attributes: {
            Strength: 1,
            Agility: 1,
        },
    },
    {
        id: 2,
        title: 'Decker',
        description:
            'Ghost in the machine. While others run and gun, the Decker dances through the Matrix. Hacks systems, steals data, wipes traces.',
        attributes: {
            Reaction: 1,
            Logic: 1,
        },
    },
    {
        id: 3,
        title: 'Rigger',
        description:
            'Eyes everywhere, hands in everything. The Rigger is merged with drones and vehicles. His mind flies, drives and fights all at once.',
        attributes: {
            Agility: 1,
            Logic: 1,
        },
    },
    {
        id: 4,
        title: 'Mage',
        description:
            'Magic is power and the Mage knows it. He bends reality, hurls spells and laughs at your bulletproof vest. The astral plane is his turf.',
        attributes: {
            Intuition: 1,
            Charisma: 1,
        },
    },
    {
        id: 5,
        title: 'Face',
        description:
            'Words are his weapon. The Face talks his way in, out and through. Corp lobby or underworld bar, he owns every room. Charm or threat, he chooses.',
        attributes: {
            Reaction: 1,
            Charisma: 1,
        },
    },
    {
        id: 6,
        title: 'Shaman',
        description:
            'The spirits listen to him. The Shaman walks between worlds, calls on ancient powers and sets them loose. Nature and magic rolled into one.',
        attributes: {
            Strength: 1,
            Intuition: 1,
        },
    },
]