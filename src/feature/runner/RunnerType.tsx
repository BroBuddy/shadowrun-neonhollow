import { Attributes } from '../metatype/MetatypeType'

type Runner = {
    id: string
    title: string
    description?: string
    attributes: Attributes
    background: string
}

export type { Runner }
