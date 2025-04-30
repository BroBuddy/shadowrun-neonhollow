type Metatype = {
    tag: string
    title: string
    description: string
    attributes: Attributes
}

type Attributes = {
    Strength?: number
    Agility?: number
    Reaction?: number
    Logic?: number
    Intuition?: number
    Charisma?: number
}

export type { Metatype, Attributes }
