import { Link, useParams } from 'react-router-dom'
import { Characters as CharactersData } from '@/data/characters'
import { Town as TownData } from '@/data/town'
import { useEffect, useState } from 'react'
import { makeUrlsClickable, rulesRegex } from '@/lib/helper'
import { TagItem } from '@/lib/types'
import Card from './Card'

const Tag = () => {
    const { tagId } = useParams()
    const tagsInRow = 7
    const [activeTag, setActiveTag] = useState<TagItem | null>(null)
    const [linkTags, setLinkTags] = useState<string[]>([])
    const dataSet = CharactersData.concat(TownData)
    const transformedContent = makeUrlsClickable(activeTag?.content)

    useEffect(() => {
        const findTags = activeTag?.content.match(rulesRegex)
        const uniqueTags = [...new Set(findTags)]
        setLinkTags(uniqueTags)
    }, [activeTag?.content])

    useEffect(() => {
        const findTag = dataSet.find((item: TagItem) => item.id === tagId)
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
