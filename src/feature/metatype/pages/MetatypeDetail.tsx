import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Headline from '@/components/Headline'
import Card from '@/components/Card'
import { getMetatypeByTag, isValidMetatype } from '../metatypeData'
import { Metatype } from '../MetatypeType'
import useAttributeStore from '@/store/attributeStore'

function MetatypeDetail() {
    const { tag } = useParams()
    const setAttributes = useAttributeStore((state) => state.setAttributes)
    const data = useMemo(() => {
        return getMetatypeByTag(tag as string) as Metatype
    }, [tag])

    if (!data || !isValidMetatype(tag as string)) {
        return (
            <>
                <Headline>Invalid Metatype</Headline>
                <Card>
                    <p>The tag you provided is invalid.</p>
                </Card>
            </>
        )
    }

    const handleSetAttributes = () => {
        setAttributes(data.attributes)
    }

    return (
        <>
            <Headline>{data.title}</Headline>
            <Card>
                <p className="flex items-center justify-center">
                    <img src={`/images/${data.title}.jpg`} alt={data.title} />
                </p>
                <p>{data.description}</p>
                <p>
                    <strong className="highlight">Starting Attributes:</strong>
                </p>
                <ul className="list-margin">
                    {Object.entries(data.attributes).map(
                        ([attribute, value]) => (
                            <li key={attribute}>
                                {attribute}:{' '}
                                {Array.isArray(value) ? value[0] : value}
                            </li>
                        )
                    )}
                </ul>
                <p>
                    &#8594;{' '}
                    <span
                        className="cursor-pointer highlight"
                        onClick={handleSetAttributes}
                    >
                        Initialize Attributes
                    </span>
                </p>
            </Card>
        </>
    )
}

export default MetatypeDetail
