import React from 'react'
import Dice from './Dice'

type CardProps = {
    children: React.ReactNode
    dice?: number
}

const Card = ({ children, dice }: CardProps) => {
    return (
        <div className="relative card bg-black/80 shadow-md z-10">
            {dice && (
                <div className="absolute top-3 right-3">
                    <Dice />
                </div>
            )}
            {children}
        </div>
    )
}

export default Card
