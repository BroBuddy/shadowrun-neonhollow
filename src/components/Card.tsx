import React from 'react'

type CardProps = {
    children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
    return <div className="card bg-black/80">{children}</div>
}

export default Card
