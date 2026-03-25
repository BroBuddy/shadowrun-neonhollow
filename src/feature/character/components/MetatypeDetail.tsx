import { useEffect } from 'react'
import Headline from '@/components/Headline'
import Card from '@/components/Card'
import { Metatype } from '../types/MetatypeType'
import useAttributeStore from '@/feature/attribute/store/attributeStore'
import { getMetatypeById, isValidMetatype } from '../services/MetatypeService'
import PageHeader from '@/components/PageHeader'

type Props = {
    id: number
}

function MetatypeDetail({ id }: Props) {
    const setAttributes = useAttributeStore((state) => state.setAttributes)
    const data = getMetatypeById(Number(id)) as Metatype

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
            <PageHeader
                title={data.title}
                image={`/images/metatype/${data.title}.jpg`}>
                <p><em>"{data.description}"</em></p>
            </PageHeader>

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
