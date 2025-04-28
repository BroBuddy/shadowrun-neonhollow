import { useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { TagItem } from '@/lib/types'
import { Data } from '@/feature/rule/data/data'
import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { makeUrlsClickable } from '@/lib/helper'

const RuleDetail = () => {
    const { tag } = useParams()
    const [activeTag, setActiveTag] = useState<TagItem | null>(null)
    const transformedContent = useMemo(() => {
        return activeTag?.content ? makeUrlsClickable(activeTag.content) : null
    }, [activeTag?.content])

    useEffect(() => {
        if (!tag) return

        const findTag = Data.find((item: TagItem) => item.id === tag)
        setActiveTag((findTag as TagItem) ?? null)
    }, [tag])

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

export default RuleDetail
