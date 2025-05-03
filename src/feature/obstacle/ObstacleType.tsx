type Attribute =
    | 'Strength'
    | 'Agility'
    | 'Reaction'
    | 'Logic'
    | 'Intuition'
    | 'Charisma'

type Icon = '💪' | '🧠'

type ObstacleSkillCheck = {
    attribute: Attribute
    icon: Icon
}

type Obstacle = {
    id: string
    title: string
    description: string
    skillChecks: ObstacleSkillCheck[]
}

export type { Obstacle, ObstacleSkillCheck }
