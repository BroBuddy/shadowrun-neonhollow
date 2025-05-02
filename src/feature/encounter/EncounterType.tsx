type Encounter = {
    tag: string
    title: string
    description: string
    options: EncounterOption[]
}

type EncounterOption = {
    title: string
    reward: string[]
}

export type { Encounter, EncounterOption }
