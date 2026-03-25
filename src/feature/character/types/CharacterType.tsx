import { Attributes } from "@/feature/metatype/MetatypeType"

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
    Karma?: number
    Noto?: number
    Progress?: number
}

export type { Equipment, Mode, Resources }
