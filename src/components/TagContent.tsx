import { useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { makeUrlsClickable } from '@/lib/helper'
import { TagItem } from '@/lib/types'
import Card from './Card'
import { Data } from '@/data/data'
import Headline from './Headline'

const TagContent = () => {
    const { tagId } = useParams()
    const [activeTag, setActiveTag] = useState<TagItem | null>(null)
    const transformedContent = useMemo(() => {
        return activeTag?.content ? makeUrlsClickable(activeTag.content) : null
    }, [activeTag?.content])

    useEffect(() => {
        if (!tagId) return

        const findTag = Data.find((item: TagItem) => item.id === tagId)
        setActiveTag((findTag as TagItem) ?? null)
    }, [tagId])

    if (!activeTag) return null

    return (
        <>
            <Headline>{activeTag.title}</Headline>
            <Card>
                <div>{transformedContent}</div>
            </Card>
        </>
    )
}

export default TagContent
