import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Headline from '@/components/Headline'
import Card from '@/components/Card'
import { getMetatypeById, isValidMetatype } from '../metatypeData'
import { Metatype } from '../MetatypeType'
import useAttributeStore from '@/feature/attribute/store/attributeStore'
import FadeIn from '@/components/FadeIn'

function MetatypeDetail() {
    const { id } = useParams()
    const setAttributes = useAttributeStore((state) => state.setAttributes)
    const data = useMemo(() => {
        return getMetatypeById(Number(id)) as Metatype
    }, [id])

    useEffect(() => {
        if (data && isValidMetatype(Number(id))) {
            setAttributes(data.attributes)
        }
    }, [data, id, setAttributes])

    if (!data || !isValidMetatype(Number(id))) {
        return (
            <>
                <Headline>Invalid Metatype</Headline>
                <Card>
                    <p>The tag you provided is invalid.</p>
                </Card>
            </>
        )
    }

    return (
        <>
            <Headline>{data.title}</Headline>
            <Card>
                <div className="flex gap-5">
                    <div className="flex-1 basis-2/5">
                        <img
                            src={`/images/${data.title}.jpg`}
                            alt={data.title}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-1 basis-3/5">
                        <FadeIn>
                            <p>
                                <em>"{data.description}"</em>
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </Card>

            <Card>
                <p>Attributes have been stored automatically.</p>
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
            </Card>
        </>
    )
}

export default MetatypeDetail
