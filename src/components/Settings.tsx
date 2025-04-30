import { useState } from 'react'
import AttributeEditor from './AttributeEditor'

function Settings({ toggleColorScheme }: { toggleColorScheme: () => void }) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleModal = (state: boolean) => {
        setIsOpen(state)
    }

    return (
        <>
            <div
                className="absolute text-white top-4 right-4 text-xl cursor-pointer"
                onClick={() => toggleModal(true)}
            >
                ⚙
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

export default Settings
