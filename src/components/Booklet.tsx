import Select from 'react-select'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { TagItem, TagOption } from '@/lib/types'
import { customStyles } from '@/lib/data'
import { Data } from '@/data/data'
import Card from './Card'

const groupedOptions = [
    {
        label: 'Data',
        options: Data.map(({ content, ...item }) => item).map(
            ({ id, title }) => {
                return { value: id, label: `${id}: ${title}` }
            }
        ),
    },
]

const Booklet = () => {
    const { tagId } = useParams()
    const navigate = useNavigate()
    const [_, setActiveTag] = useState<TagItem | null>(null)
    const [selectedTag, setSelectedTag] = useState<TagOption | null>(null)

    const setTagsBySelection = (tagId: string) => {
        const activeTag = Data.find((item: TagItem) => item.id === tagId)

        if (!activeTag) {
            navigate('/R001')
            return
        }

        setActiveTag(activeTag as TagItem)
        setSelectedTag({ value: activeTag.id, label: activeTag.title })
    }

    const handleChange = (selectedTag: any) => {
        setTagsBySelection(selectedTag.value as string)
        navigate(`/${selectedTag.value}`)
    }

    useEffect(() => {
        setTagsBySelection(tagId as string)
    }, [tagId])

    return (
        <section className="flex flex-col w-full">
            <Card>
                <Select
                    value={selectedTag}
                    styles={customStyles}
                    isSearchable={true}
                    onChange={handleChange}
                    options={groupedOptions}
                />
            </Card>

            <Outlet />
        </section>
    )
}

export default Booklet
