import { Attributes } from '../metatype/MetatypeType'

type Equipment = {
    name: string
    attributes: Attributes
}

type Mode = {
    name: string
    resources: string[]
}

export type { Equipment, Mode }
