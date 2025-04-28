import { Name } from './NameType'

const nameData: Name[] = [
    {
        tag: 'streetsamurai',
        title: 'Names for a Street Samurai',
        firstNames: ['Kaito', 'Hana', 'Ryo', 'Takashi', 'Mei', 'Kenji'],
        lastNames: ['Blade', 'Wraith', 'Tiger', 'Ghost', 'Steel', 'Ronin'],
    },
    {
        tag: 'decker',
        title: 'Names for a Decker',
        firstNames: ['Ray', 'Lex', 'Nova', 'Jax', 'Zero', 'Kai'],
        lastNames: ['Circuit', 'Byte', 'Shock', 'Pulse', 'Code', 'Grid'],
    },
    {
        tag: 'rigger',
        title: 'Names for a Rigger',
        firstNames: ['Rusty', 'Max', 'Sasha', 'Quinn', 'Juno', 'Flint'],
        lastNames: ['Gear', 'Iron', 'Switch', 'Drive', 'Pilot', 'Mechanic'],
    },
    {
        tag: 'mage',
        title: 'Names for a Mage',
        firstNames: ['Ash', 'Vesper', 'Nox', 'Zephyr', 'Luna', 'Orion'],
        lastNames: ['Flame', 'Star', 'Warden', 'Spell', 'Void', 'Arcane'],
    },
    {
        tag: 'face',
        title: 'Names for a Face',
        firstNames: ['Rio', 'Cole', 'Ava', 'Zara', 'Damon', 'Lex'],
        lastNames: ['Charm', 'Blare', 'Silver', 'Blade', 'Vibe', 'Verve'],
    },
    {
        tag: 'shaman',
        title: 'Names for a Shaman',
        firstNames: ['Tala', 'Soren', 'Freya', 'Bastian', 'Naya', 'Zane'],
        lastNames: ['Spirit', 'Wolf', 'Storm', 'Wind', 'Sky', 'Shadow'],
    },
]

const getNameData = (): Pick<Name, 'tag' | 'title'>[] => {
    return nameData.map(({ tag, title }) => ({ tag, title }))
}

const getNameByTag = (tagId: string): Name => {
    return nameData.find((item: Name) => item.tag === tagId) as Name
}

export { getNameData, getNameByTag }
