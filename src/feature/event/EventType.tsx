type Event = {
    id: string
    title: string
    description: string
    skillChecks?: SkillCheck[]
    bonus?: string
}

type SkillCheck = {
    attribute: string
    icon: '💪' | '🧠'
    dc: number
    description: string
    success: SkillCheckResult
    fail: SkillCheckResult
}

type SkillCheckResult = {
    text: string
    resource: { [key: string]: number }
}

export type { Event, SkillCheck, SkillCheckResult }
