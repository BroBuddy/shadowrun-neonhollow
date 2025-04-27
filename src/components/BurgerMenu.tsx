import { useState } from 'react'

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleModal = (state: boolean) => {
        setIsOpen(state)
    }

    return (
        <>
            <div
                className="absolute top-4 right-4 text-xl cursor-pointer"
                onClick={() => toggleModal(true)}
            >
                ☰
            </div>

            <div
                className={`fixed bg-black inset-0 bg-opacity-90 flex transition-transform duration-500 ${
                    isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="shadow-lg w-2/3 max-w-md mt-5 mx-auto">
                    <div className="flex items-center justify-between">
                        <p>
                            <strong>Modal</strong>
                        </p>

                        <span
                            className="text-white cursor-pointer text-xl -mt-3"
                            onClick={() => toggleModal(false)}
                        >
                            ✕
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BurgerMenu
