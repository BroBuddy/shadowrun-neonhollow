type ResourceRoll = {
    range: string
    title: string
    description?: string
    resources: string[]
}

type ResourceType = {
    tag: string
    title: string
    description: string
    rolls: ResourceRoll[]
}

export type { ResourceRoll, ResourceType }
