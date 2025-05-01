type Facility = {
    tag: string
    title: string
    description: string
    rollList: FacilityRoll[]
    actionList: FacilityAction[]
}

type FacilityRoll = {
    roll: string
    text: string
    id?: string
}

type FacilityAction = {
    title: string
    steps: ActionStep[]
}

type ActionStep = {
    text: string
    tag?: string
}

export type { Facility, FacilityRoll, FacilityAction, ActionStep }
