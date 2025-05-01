import React from 'react'
import FadeIn from './FadeIn'

type CardProps = {
    children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
    return (
        <div className="card bg-black z-0">
            <FadeIn>{children}</FadeIn>
        </div>
    )
}

export default Card
