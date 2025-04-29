type FadeInProps = {
    children: React.ReactNode
}

function FadeIn({ children }: FadeInProps) {
    return <div className="fade-in z-20">{children}</div>
}

export default FadeIn
