import { Name } from "@/feature/character/types/NameType"
import { nameData } from "../data/nameData"

const validTags = nameData.map(({ tag }) => tag)
const isValidName = (tagId: string): boolean => validTags.includes(tagId)

const getNameData = (): Pick<Name, 'tag' | 'title'>[] => {
    return nameData.map(({ tag, title }) => ({ tag, title }))
}

const getNameByTag = (tagId: string): Name | undefined => {
    return nameData.find((item: Name) => item.tag === tagId)
}

export { getNameData, getNameByTag, isValidName }