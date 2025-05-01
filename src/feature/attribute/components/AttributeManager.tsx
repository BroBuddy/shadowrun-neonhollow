import { useState } from 'react'
import useAttributeStore from '@/feature/attribute/store/attributeStore'
import AttributeModal from './AttributeModal'

const AttributeManager = () => {
    const attributes = useAttributeStore((state) => state.attributes)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleModal = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <header>
            <div
                className="fixed z-30 cursor-pointer left-0 top-0 w-full bg-black shadow-md flex w-full"
                onClick={() => toggleModal()}
            >
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
            </div>

            <AttributeModal isOpen={isOpen} toggleModal={toggleModal} />
        </header>
    )
}

export default AttributeManager
