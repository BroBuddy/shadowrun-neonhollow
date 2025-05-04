import React, { useEffect, useState } from 'react'
import Card from './Card'

type PopUpProps = {
    title: string
    children: React.ReactNode
}

const PopUp: React.FC<PopUpProps> = ({ title, children }) => {
    const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false)

    const handleOpen = () => setIsPopUpOpen(true)
    const handleClose = () => setIsPopUpOpen(false)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose()
            }
        }

        if (isPopUpOpen) {
            window.addEventListener('keydown', handleKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isPopUpOpen])

    return (
        <>
            <a
                onClick={handleOpen}
                className="text-bold highlight cursor-pointer"
                aria-expanded={isPopUpOpen}
            >
                {title}
            </a>

            {isPopUpOpen && (
                <div
                    onClick={handleClose}
                    style={{ zIndex: 999 }}
                    className="flex fixed inset-0 bg-black/90 justify-center items-center mt-14 p-5 transition-opacity duration-300 cursor-pointer"
                    role="dialog"
                    aria-labelledby="popup-title"
                    aria-modal="true"
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
        </>
    )
}

export default PopUp
