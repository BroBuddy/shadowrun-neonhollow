import React from 'react'
import Dice from './Dice'

type CardProps = {
    children: React.ReactNode
    dice?: number | undefined
}

const Card = ({ children, dice }: CardProps) => {
    return (
        <div className="relative card bg-black/80 shadow-md z-30">
            {dice && (
                <div className="absolute top-3 right-3 z-30">
                    <Dice dice={dice} />
                </div>
            )}
            {children}
        </div>
    )
}

export default Card
