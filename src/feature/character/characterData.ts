import { Equipment, Mode } from './CharacterType'

const characterEquipments: Equipment[] = [
    { name: 'Power Gauntlets', bonus: '+1 Strength' },
    { name: 'Nano-Tread Boots', bonus: '+1 Agility' },
    { name: 'Enhancer Implant', bonus: '+1 Reaction' },
    { name: 'Interface Headset', bonus: '+1 Logic' },
    { name: 'Synaptic Amplifier', bonus: '+1 Intuition' },
    { name: 'Holo-Disguise Mask', bonus: '+1 Charisma' },
]

const characterModes: Mode[] = [
    {
        name: 'Easy Mode',
        attributes: ['15.000 ¥', '10 Health', '10 Energy', '2 Reputation'],
    },
    {
        name: 'Medium Mode',
        attributes: ['10.000 ¥', '8 Health', '8 Energy', '1 Reputation'],
    },
    {
        name: 'Hard Mode',
        attributes: ['5.000 ¥', '6 Health', '6 Energy'],
    },
]

const getCharacterEquipments = (): Equipment[] => {
    return characterEquipments
}

const getCharacterModes = (): Mode[] => {
    return characterModes
}

export { getCharacterEquipments, getCharacterModes }
