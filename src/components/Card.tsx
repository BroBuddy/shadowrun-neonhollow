import React from 'react'

type CardProps = {
    children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
    return <div className="card bg-black z-0">{children}</div>
}

export default Card
