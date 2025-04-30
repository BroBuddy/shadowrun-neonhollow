import React from 'react'

type CardProps = {
    children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
    return (
        <div className="relative card bg-black shadow-md z-30">{children}</div>
    )
}

export default Card
