import { Resources } from '../character/CharacterType'

type Mission = {
    id: string
    title: string
    attributes?: string
    client: string
    briefing: string
    twist: MissionTwist
}

type MissionTask = {
    id: number
    title: string
    outcomes: MissionOutcome[]
}

type MissionOutcome = {
    range: string
    stat: string
    dc: number
    description: string
}

type MissionTwist = {
    description: string
    skillChecks: MissionSkillCheck[]
}

type MissionSkillCheck = {
    attribute: string
    dc: number
    description: string
}

type MissionPerformance = {
    id: number
    title: string
    level: string
    resources?: Resources
    effects?: MissionEffect[]
}

type MissionEffect = {
    description: string
    link?: string
}

export type {
    Mission,
    MissionTask,
    MissionOutcome,
    MissionTwist,
    MissionSkillCheck,
    MissionPerformance,
    MissionEffect,
}
