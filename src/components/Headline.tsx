import React from 'react'

type HeadlineProps = {
    children: React.ReactNode
}

const Headline = ({ children }: HeadlineProps) => {
    return <div className="headline">{children && <h1>{children}</h1>}</div>
}

export default Headline
