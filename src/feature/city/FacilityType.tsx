import { Resources } from '../character/CharacterType'

type Facility = {
    id: number
    tag: string
    title: string
    description: string
    rollList: FacilityRoll[]
    actionList: FacilityAction[]
}

type FacilityRoll = {
    id?: string
    roll: string
    text: string
    resource?: Resources
}

type FacilityAction = {
    title: string
    steps: ActionStep[]
}

type ActionStep = {
    text: string
    tag?: string
    resource?: Resources
}

export type { Facility, FacilityRoll, FacilityAction, ActionStep }
