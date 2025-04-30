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
        resources: ['15.000 ¥', '10 Health', '10 Energy', '2 Edge'],
    },
    {
        name: 'Medium Mode',
        resources: ['10.000 ¥', '8 Health', '8 Energy', '1 Edge'],
    },
    {
        name: 'Hard Mode',
        resources: ['5.000 ¥', '6 Health', '6 Energy'],
    },
]

export const getCharacterEquipments = () => characterEquipments
export const getCharacterModes = () => characterModes
