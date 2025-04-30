import useAttributeStore from '@/store/attributeStore'

const AttributeManager = () => {
    const attributes = useAttributeStore((state) => state.attributes)

    return (
        <div className="flex w-full">
            {Object.entries(attributes).map(([key, [main, temp]]) => (
                <div key={key} className="w-1/6 text-center p-1">
                    <div className="mb-1 text-xs">
                        <strong className="highlight">
                            {key.substring(0, 3).toUpperCase()}
                        </strong>
                        <br />
                        {main} {temp !== 0 && `+ ${temp}`}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AttributeManager
