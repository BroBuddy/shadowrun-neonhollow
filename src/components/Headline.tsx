import React from 'react'

type HeadlineProps = {
    children: React.ReactNode
}

const Headline = ({ children }: HeadlineProps) => {
    return (
        <div className="flex flex-col pt-4 pb-2 text-xs mx-1 text-center">
            {children && <h2 className="text-xl"> {children} </h2>}
        </div>
    )
}

export default Headline
