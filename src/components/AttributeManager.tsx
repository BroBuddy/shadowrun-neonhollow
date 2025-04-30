import useAttributeStore from '@/store/attributeStore'
import { useState } from 'react'
import AttributeEditor from './AttributeEditor'

const AttributeManager = ({
    toggleColorScheme,
}: {
    toggleColorScheme: () => void
}) => {
    const attributes = useAttributeStore((state) => state.attributes)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleModal = (state: boolean) => {
        setIsOpen(state)
    }
    return (
        <>
            <div
                className="fixed cursor-pointer left-0 top-0 w-full bg-black shadow-md z-40 flex w-full"
                onClick={() => toggleModal(true)}
            >
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

            <div
                className={`fixed bg-black inset-0 bg-opacity-90 flex transition-transform z-50 duration-500 ${
                    isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="shadow-lg w-3/4 max-w-md mt-5 mx-auto">
                    <div>
                        <div className="flex items-center justify-between">
                            <span
                                className="highlight p-2 text-md cursor-pointer"
                                onClick={toggleColorScheme}
                            >
                                <strong>Toggle Color Scheme</strong>
                            </span>

                            <span
                                className="text-white cursor-pointer text-xl -mt-3"
                                onClick={() => toggleModal(false)}
                            >
                                ✕
                            </span>
                        </div>
                    </div>
                    <div className="flex">
                        <AttributeEditor />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AttributeManager
