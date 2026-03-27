import { Attributes } from "@/feature/character/types/MetatypeType"
import { Resources } from "../../character/types/CharacterType"

type Facility = {
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
    attribute?: Attributes
}

type FacilityAction = {
    icon: string
    title: string
    steps: ActionStep[]
}

type ActionStep = {
    text: string
    tag?: string
    resource?: Resources
    attribute?: Resources
}

export type { Facility, FacilityRoll, FacilityAction, ActionStep }
