import React, { useState } from 'react'
import Card from './Card'

type PopUpProps = {
    title: string
    children: React.ReactNode
}

const PopUp: React.FC<PopUpProps> = ({ title, children }) => {
    const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false)

    const handleOpen = () => setIsPopUpOpen(true)
    const handleClose = () => setIsPopUpOpen(false)

    return (
        <div>
            <button onClick={handleOpen} className="text-bold highlight">
                {title}
            </button>

            {isPopUpOpen && (
                <div
                    onClick={handleClose}
                    className="flex fixed inset-0 bg-black/80 justify-center items-center z-60 transition-opacity duration-300 cursor-pointer"
                >
                    <div
                        className="cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Card>
                            <p>
                                <strong className="highlight">{title}:</strong>
                            </p>
                            <>{children}</>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PopUp
