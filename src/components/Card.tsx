const Card = ({ title, children }: any) => {
    return (
        <div className="card">
            {title && <h2 className="text-xl px-2 mb-4">{title}</h2>}

            {children}
        </div>
    )
}

export default Card
