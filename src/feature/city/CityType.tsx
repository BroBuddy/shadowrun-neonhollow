type District = {
    name: string
    heat: string
    facilities: Record<string, string>[]
}

type Facility = {
    tag: string
    title: string
    rollList: FacilityRoll[]
    actionList: FacilityAction[]
}

type FacilityRoll = {
    roll: string
    text: string
    link?: string
}

type FacilityAction = {
    title: string
    steps: ActionStep[]
}

type ActionStep = {
    text: string
    link?: string
}

export type { District, Facility, FacilityRoll, FacilityAction, ActionStep }
