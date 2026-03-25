import { useEffect, useMemo } from 'react'
import Headline from '@/components/Headline'
import Card from '@/components/Card'
import { Metatype } from '../types/MetatypeType'
import useAttributeStore from '@/feature/attribute/store/attributeStore'
import { getMetatypeById, isValidMetatype } from '../services/MetatypeService'

type Props = {
    id: number
}

function MetatypeDetail({ id }: Props) {
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
            <div className="flex gap-5">
                <div className="flex-1 basis-2/5">
                    <img
                        src={`/images/metatype/${data.title}.jpg`}
                        alt={data.title}
                        loading="lazy"
                    />
                </div>

                <div className="flex-1 basis-3/5">
                    <p>
                        <em>"{data.description}"</em>
                    </p>
                </div>
            </div>

            <p className='mt-4'>
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
        </>
    )
}

export default MetatypeDetail
