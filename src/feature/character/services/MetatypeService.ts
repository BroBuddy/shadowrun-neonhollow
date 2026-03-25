import { metatypeData } from "../data/metatypeData"
import { Metatype } from "../types/MetatypeType"

const validIds = metatypeData.map(({ id }) => id)
const isValidMetatype = (id: number): boolean => validIds.includes(id)

const getMetatypeData = (): Pick<Metatype, 'id' | 'title'>[] => {
    return metatypeData.map(({ id, title }) => ({ id, title }))
}

const getMetatypeById = (id: number): Metatype | undefined => {
    return metatypeData.find(item => item.id === id)
}

export { getMetatypeData, getMetatypeById, isValidMetatype }