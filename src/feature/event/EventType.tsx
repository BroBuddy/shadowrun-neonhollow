type Event = {
    id: string
    title: string
    location?: string
    description: string
    skillChecks?: SkillCheck[]
    bonus?: string
}

type SkillCheck = {
    attribute: string
    icon: '💪' | '🧠'
    dc: number
    description: string
    success: string
    fail: string
}

export type { Event, SkillCheck }
