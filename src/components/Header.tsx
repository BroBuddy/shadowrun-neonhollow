import { useState } from 'react'
import ResourceManager from '@/feature/resource/components/ResourceManager'
import AttributeManager from '@/feature/attribute/components/AttributeManager'
import AttributeModal from '@/feature/attribute/components/AttributeModal'

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleModal = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <header>
            <div
                style={{ zIndex: 9999 }}
                className="fixed cursor-pointer left-0 top-0 w-full bg-black flex flex-col"
                aria-expanded={isOpen}
                aria-controls="attribute-modal"
                onClick={() => toggleModal()}
            >
                <div className="w-full flex justify-center">
                    <ResourceManager />
                </div>

                <div className="w-full flex justify-center">
                    <AttributeManager />
                </div>
            </div>

            <AttributeModal isOpen={isOpen} toggleModal={toggleModal} />
        </header>
    )
}

export default Header
