import React from 'react'

type HeadlineProps = {
    children: React.ReactNode
}

const Headline = ({ children }: HeadlineProps) => {
    return (
        <div className="flex flex-col p-4 text-xs mx-1">
            {children && <h2 className="text-xl">{children}</h2>}
        </div>
    )
}

export default Headline
