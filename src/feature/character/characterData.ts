import { Equipment, Mode } from './CharacterType'

const characterEquipments: readonly Equipment[] = [
    { name: 'Power Gauntlets', bonus: '+1 Strength' },
    { name: 'Nano-Tread Boots', bonus: '+1 Agility' },
    { name: 'Enhancer Implant', bonus: '+1 Reaction' },
    { name: 'Interface Headset', bonus: '+1 Logic' },
    { name: 'Synaptic Amplifier', bonus: '+1 Intuition' },
    { name: 'Holo-Disguise Mask', bonus: '+1 Charisma' },
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
