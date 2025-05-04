import { Attributes } from '../metatype/MetatypeType'

type Equipment = {
    name: string
    attributes: Attributes
}

type Mode = {
    name: string
    icon: string
    resources: Resources
}

type Resources = {
    Nuyen?: number
    Health?: number
    Energy?: number
    Edge?: number
    Intel?: number
    Heat?: number
}

export type { Equipment, Mode, Resources }
