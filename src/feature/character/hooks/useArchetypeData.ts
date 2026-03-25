import { getArchetypeById, isValidArchetype } from '../services/ArchetypeService'

const useArchetypeData = (id: number | undefined) => {
    const data = getArchetypeById(Number(id))
    const isValidData = !data || !isValidArchetype(Number(id))

    return { data, isValidData }
}

export { useArchetypeData }
