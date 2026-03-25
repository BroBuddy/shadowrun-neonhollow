import { resourceData } from "../data/resourceData"
import { Resource } from "../types/ResourceType"

const getResourceData = (): Resource[] => {
    return resourceData.map(({ tag, title }) => ({ tag, title }))
}

const getResourceByTag = (tag: string): Resource => {
    return resourceData.find((item: Resource) => item.tag === tag) as Resource
}

export { getResourceData, getResourceByTag }