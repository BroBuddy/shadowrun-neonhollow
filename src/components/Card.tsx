const Card = ({ title, children }: any) => {
    return (
        <div className="flex flex-col bg-black p-4 text-xs">
            {title && <h2 className="text-xl px-2 mb-4">{title}</h2>}

            {children}
        </div>
    )
}

export default Card
