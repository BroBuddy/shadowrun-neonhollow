import { Resources } from "@/feature/character/CharacterType"

type StepResult = 'success' | 'failure' | null

type StepState = {
    event: MissionEvent
    dcRoll: number
    dc: number
    selectedAttribute: string | null
    checkRoll: number | null
    result: StepResult
}

type SkillCheck = {
    attribute: string;
}

type MissionEvent = {
    roll: number;
    title: string;
    description: string;
    skillChecks: string[];
    fixedDC?: number;
    autoSuccess?: boolean;
}

type MissionStep = {
    id: number;
    name: string;
    description: string;
    events: MissionEvent[];
}

type Mission = {
    id: string;
    title: string;
    focus: string;
    description: string;
    client: string;
    location: string;
    briefing: string;
    steps: MissionStep[];
}

type MissionType = Pick<Mission, 'id' | 'title' | 'focus' | 'description'>

type MissionEffect = {
    description: string
    link?: string
}

type MissionPerformance = {
    id: number
    title: string
    level: string
    resources?: Resources
    effects?: MissionEffect[]
}

export type {
    StepResult,
    StepState,
    SkillCheck,
    MissionEvent,
    MissionStep,
    Mission,
    MissionType,
    MissionEffect,
    MissionPerformance
}