type Resource = {
    tag: string
    title: string
    rollList?: ResourceRoll[]
}

type ResourceRoll = {
    range: string
    result: string
    effects: string[]
}

export type { Resource, ResourceRoll }
