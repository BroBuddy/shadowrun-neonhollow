import { Attributes } from "@/feature/character/types/MetatypeType"

type Runner = {
    id: string
    title: string
    description?: string
    attributes: Attributes
    background: string
}

export type { Runner }
