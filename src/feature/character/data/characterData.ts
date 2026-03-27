import { Equipment, Mode } from "../types/CharacterType"

export const characterModes: readonly Mode[] = [
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
            Nuyen: 0,
            Edge: 0,
        },
    },
]