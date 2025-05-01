import { useEffect, useState } from 'react'

type FadeInProps = {
    children: React.ReactNode
    delay?: number
}

function FadeIn({ children, delay = 0 }: FadeInProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, delay)

        return () => clearTimeout(timer)
    }, [delay])

    return (
        <div
            className={`fade-in z-20 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {children}
        </div>
    )
}

export default FadeIn
