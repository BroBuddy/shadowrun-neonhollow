import { useMemo } from 'react'
import { getArchetypeById, isValidArchetype } from '../services/ArchetypeService'

const useArchetypeData = (id: number | undefined) => {
    const data = useMemo(() => getArchetypeById(Number(id)), [id])
    const isValidData = useMemo(
        () => !data || !isValidArchetype(Number(id)),
        [data, id]
    )

    return { data, isValidData }
}

export { useArchetypeData }
