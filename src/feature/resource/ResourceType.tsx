import { Resources } from '../character/CharacterType'

type Resource = {
    tag: string
    title: string
    rollList?: ResourceRoll[]
}

type ResourceRoll = {
    range: string
    result: string
    effects?: string[]
    resources?: Resources
}

export type { Resource, ResourceRoll }
