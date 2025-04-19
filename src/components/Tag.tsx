import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { makeUrlsClickable, rulesRegex } from '@/lib/helper'
import { TagItem } from '@/lib/types'
import Card from './Card'
import { Data } from '@/data/data'

const Tag = () => {
    const { tagId } = useParams()
    const tagsInRow = 6
    const [activeTag, setActiveTag] = useState<TagItem | null>(null)
    const [linkTags, setLinkTags] = useState<string[]>([])
    const transformedContent = makeUrlsClickable(activeTag?.content)

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
                <Card
                    id={activeTag.id}
                    time={activeTag.time || null}
                    title={activeTag.title}
                >
                    <div
                        dangerouslySetInnerHTML={{
                            __html: transformedContent,
                        }}
                    />
                </Card>
            )}

            {linkTags?.length >= 1 && (
                <Card title="Links">
                    <p>
                        {linkTags?.map((tag: string, index: number) => {
                            return (
                                <span key={index}>
                                    <Link to={`/${tag}`}>{tag}</Link>
                                    {index + 1 < linkTags.length ? ', ' : null}
                                    {(index + 1) % tagsInRow == 0 ? (
                                        <br />
                                    ) : null}
                                </span>
                            )
                        })}
                    </p>
                </Card>
            )}
        </>
    )
}

export default Tag
