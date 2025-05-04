import React from 'react'

type HeadlineProps = {
    children: React.ReactNode
}

const Headline: React.FC<HeadlineProps> = ({ children }) => {
    return <div className="headline">{children && <h1>{children}</h1>}</div>
}

export default Headline
