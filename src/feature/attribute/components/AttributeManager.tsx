import useAttributeStore from '@/feature/attribute/store/attributeStore'

const AttributeManager = () => {
    const attributes = useAttributeStore((state) => state.attributes)

    return (
        <>
            {Object.entries(attributes).map(([key, [main, temp]]) => (
                <div key={key} className="w-1/6 text-center p-1">
                    <div className="mb-1 text-xs">
                        <strong className="highlight mr-1">
                            {key.substring(0, 3).toUpperCase()}
                        </strong>
                        <span>
                            {main + temp}
                            {temp !== 0 && '*'}
                        </span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AttributeManager
