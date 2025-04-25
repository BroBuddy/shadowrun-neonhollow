import { ResourceRoll } from '../resource/ResourceType'

type District = {
    heat?: number
    name: string
    facilities: string[]
}

type Step = {
    text?: string
    link?: string
    resource?: string
}

type Action = {
    name: string
    steps: Step[][]
}

type Facility = {
    tag: string
    name: string
    quote?: string
    description?: string
    rolls: ResourceRoll[]
    actions: Action[]
}

export type { District, Facility, Action, Step }
