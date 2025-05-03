import { Equipment, Mode } from './CharacterType'

const characterEquipments: readonly Equipment[] = [
    {
        name: 'Power Gauntlets',
        attributes: { Strength: 1 },
    },
    {
        name: 'Nano-Tread Boots',
        attributes: { Agility: 1 },
    },
    {
        name: 'Enhancer Implant',
        attributes: { Reaction: 1 },
    },
    {
        name: 'Interface Headset',
        attributes: { Logic: 1 },
    },
    {
        name: 'Synaptic Amplifier',
        attributes: { Intuition: 1 },
    },
    {
        name: 'Holo-Disguise Mask',
        attributes: { Charisma: 1 },
    },
]

const characterModes: readonly Mode[] = [
    {
        name: 'Easy Mode',
        stats: {
            Nuyen: 15,
            Health: 10,
            Energy: 10,
            Edge: 2,
        },
    },
    {
        name: 'Medium Mode',
        stats: {
            Nuyen: 10,
            Health: 8,
            Energy: 8,
            Edge: 1,
        },
    },
    {
        name: 'Hard Mode',
        stats: {
            Nuyen: 5,
            Health: 6,
            Energy: 6,
            Edge: 0,
        },
    },
]

export const getCharacterEquipments = () => characterEquipments
export const getCharacterModes = () => characterModes
