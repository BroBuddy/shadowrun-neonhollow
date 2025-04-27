const Headline = ({ children }: any) => {
    return (
        <div className="flex flex-col p-4 text-xs mx-1">
            {children && <h2 className="text-xl px-2">{children}</h2>}
        </div>
    )
}

export default Headline
