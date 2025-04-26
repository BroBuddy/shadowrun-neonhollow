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
    roll: string
    outcomes: MissionOutcome[]
    failure: MissionFailure
}

type MissionOutcome = {
    range: string
    stat: string
    dc: number
    description: string
}

type MissionFailure = {
    redirect: string
    performance?: string
}

type MissionTwist = {
    description: string
    options: MissionOption[]
    failure: MissionFailure
    success: MissionSuccess
}

type MissionOption = {
    stat: string
    dc: number
    description: string
}

type MissionSuccess = {
    redirect: string
    performance?: string
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
    MissionFailure,
    MissionTwist,
    MissionOption,
    MissionSuccess,
    MissionPerformance,
    MissionEffect,
}
