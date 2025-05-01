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
            <a
                onClick={handleOpen}
                className="text-bold highlight cursor-pointer"
            >
                {title}
            </a>

            {isPopUpOpen && (
                <div
                    onClick={handleClose}
                    className="flex fixed inset-0 bg-black/80 justify-center items-center p-5 z-60 transition-opacity duration-300 cursor-pointer"
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
