type Event = {
    id: string
    title: string
    description: string
    skillChecks?: SkillCheck[]
    bonus?: string
}

type SkillCheck = {
    attribute: string
    dc: number
    description: string
    success: string
    fail: string
}

export type { Event, SkillCheck }
