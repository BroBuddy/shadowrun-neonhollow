import { backgroundData } from "../data/backgroundData"
import { Background } from "../types/ArchetypeType"

const validTags = backgroundData.map(({ id }) => id)
const isValidBackground = (id: string): boolean => validTags.includes(id)

const backgroundMap = new Map(
    backgroundData.map((background: Background) => [background.id, background])
)

const getBackgroundById = (id: string): Background | undefined => {
    return backgroundMap.get(id)
}

export { getBackgroundById, isValidBackground }
