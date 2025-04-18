type TagItem = {
    id: string
    title: string
    content: string
    time?: string
}

type TagOption = {
    value: string
    label: string
}

type TagSheet = {
    id: string
    title: string
}

export type { TagItem, TagOption, TagSheet }
