import { Attributes } from '../metatype/MetatypeType'

type Archetype = {
    id: number
    title: string
    description: string
    attributes: Attributes
}

type Background = {
    id: string
    title: string
    description: string
    attributes: Attributes
}

export type { Archetype, Background }
