import { archetypeData } from "../data/archtypeData"
import { Archetype } from "../types/ArchetypeType"

const validIds = archetypeData.map(({ id }) => id)
const isValidArchetype = (id: number): boolean => validIds.includes(id)

const getArchetypeData = (): Pick<Archetype, 'id' | 'title'>[] => {
    return archetypeData.map(({ id, title }) => ({ id, title }))
}

const getArchetypeById = (id: number): Archetype | undefined => {
    return archetypeData.find((item: Archetype) => item.id === id)
}

export { getArchetypeData, getArchetypeById, isValidArchetype }