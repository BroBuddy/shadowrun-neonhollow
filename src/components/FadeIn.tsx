import { useEffect, useState } from 'react'

type FadeInProps = {
    children: React.ReactNode
    delay?: number
    role?: string
    ariaLabel?: string
}

function FadeIn({ children, delay = 0, role, ariaLabel }: FadeInProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, delay)

        return () => clearTimeout(timer)
    }, [delay])

    return (
        <>
            {isVisible && (
                <div
                    className={`fade-in z-20 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    role={role}
                    aria-label={ariaLabel}
                >
                    {children}
                </div>
            )}
        </>
    )
}

export default FadeIn
