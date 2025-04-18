const Card = ({ id, time, title, children }: any) => {
    return (
        <div className="flex flex-col bg-black/70 p-4 text-xs">
            <div className="grid grid-cols-2">
                {id && <h3 className="text-sm text-gray-500 mb-2">{id}</h3>}

                {time && (
                    <h3 className="text-sm text-gray-500 mb-2 text-right">
                        ({time})
                    </h3>
                )}
            </div>

            {title && (
                <h2 className="text-xl text-gray-500 px-2 mb-4">{title}</h2>
            )}

            {children}
        </div>
    )
}

export default Card
