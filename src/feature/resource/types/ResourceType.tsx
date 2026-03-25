import { Resources } from "../../character/types/CharacterType"

type Resource = {
    tag: string
    title: string
    rollList?: ResourceRoll[]
}

type ResourceRoll = {
    range: string
    result: string
    resources?: Resources
}

export type { Resource, ResourceRoll }
