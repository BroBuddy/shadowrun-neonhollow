import { useState } from 'react'
import Dice from './Dice'

function BurgerMenu() {
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
                ☰
            </div>

            <div
                className={`fixed bg-black inset-0 bg-opacity-90 flex transition-transform duration-500 ${
                    isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="shadow-lg w-3/4 max-w-md mt-5 mx-auto">
                    <div>
                        <div className="flex items-center justify-between">
                            <p>
                                <strong>Smash some dice:</strong>
                            </p>

                            <span
                                className="text-white cursor-pointer text-xl -mt-3"
                                onClick={() => toggleModal(false)}
                            >
                                ✕
                            </span>
                        </div>
                    </div>

                    <div>
                        <Dice label="1d6" min={1} max={6} />
                        <Dice label="2d6" min={2} max={11} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BurgerMenu
