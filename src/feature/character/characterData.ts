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
        icon: '🟢',
        resources: {
            Health: 10,
            Energy: 10,
            Nuyen: 20,
            Edge: 2,
        },
    },
    {
        name: 'Medium Mode',
        icon: '🟡',
        resources: {
            Health: 10,
            Energy: 10,
            Nuyen: 10,
            Edge: 1,
        },
    },
    {
        name: 'Hard Mode',
        icon: '🔴',
        resources: {
            Health: 10,
            Energy: 10,
        },
    },
]

export const getCharacterEquipments = () => characterEquipments
export const getCharacterModes = () => characterModes
