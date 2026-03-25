import { Name } from "@/feature/character/types/NameType"
import { nameData } from "../data/nameData"
import { rollDice } from "@/lib/helper"

const validTags = nameData.map(({ tag }) => tag)
const isValidTag = (tagId: string): boolean => validTags.includes(tagId)

const getNameData = (): Pick<Name, 'tag' | 'title'>[] => {
    return nameData.map(({ tag, title }) => ({ tag, title }))
}

const getNameByTag = (tagId: string): Name | undefined => {
    return nameData.find((item: Name) => item.tag === tagId)
}

const generateName = (tag: string): string | null => {
  const data = getNameByTag(tag)
  if (!data) return null

  const firstIndex = rollDice(1) - 1
  const lastIndex = rollDice(1) - 1

  const first = data.firstNames[firstIndex]
  const last = data.lastNames[lastIndex]

  return `${first} ${last}`
}

const generateMultipleNames = (
    tag: string,
    count: number
): string[] => {
    const names: string[] = []

    for (let i = 0; i < count; i++) {
        const name = generateName(tag)
        if (name) names.push(name)
    }

    return names
}

export {
    getNameData,
    getNameByTag,
    isValidTag,
    generateName,
    generateMultipleNames
}