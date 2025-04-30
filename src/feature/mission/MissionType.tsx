type Mission = {
    id: string
    title: string
    client: {
        name: string
        location: string
    }
    mission_location: string
    briefing: string
    tasks: MissionTask[]
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
    options: MissionOption[]
}

type MissionOption = {
    stat: string
    dc: number
    description: string
}

type MissionPerformance = {
    id: number
    title: string
    level: string
    effects: MissionEffect[]
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
    MissionOption,
    MissionPerformance,
    MissionEffect,
}
