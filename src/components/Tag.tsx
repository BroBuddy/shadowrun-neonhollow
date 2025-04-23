import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { makeUrlsClickable, rulesRegex } from '@/lib/helper'
import { TagItem } from '@/lib/types'
import Card from './Card'
import { Data } from '@/data/data'

const Tag = () => {
    const { tagId } = useParams()
    const [activeTag, setActiveTag] = useState<TagItem | null>(null)
    const [_, setLinkTags] = useState<string[]>([])
    const transformedContent = activeTag?.content
        ? makeUrlsClickable(activeTag.content)
        : null

    useEffect(() => {
        const findTags = activeTag?.content.match(rulesRegex)
        const uniqueTags = [...new Set(findTags)]
        setLinkTags(uniqueTags)
    }, [activeTag?.content])

    useEffect(() => {
        const findTag = Data.find((item: TagItem) => item.id === tagId)
        setActiveTag(findTag as TagItem)
    }, [tagId])

    return (
        <>
            {activeTag && (
                <Card title={activeTag.title}>
                    <div>{transformedContent}</div>
                </Card>
            )}
        </>
    )
}

export default Tag
