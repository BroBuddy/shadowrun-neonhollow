import { createContext, useContext, useState, ReactNode } from 'react'

const ColorSchemeContext = createContext<{
    isDefaultMode: boolean
    toggleColorScheme: () => void
}>({
    isDefaultMode: true,
    toggleColorScheme: () => {},
})

export const ColorSchemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDefaultMode, setIsDefaultMode] = useState<boolean>(true)

    const toggleColorScheme = () => {
        setIsDefaultMode((prev) => !prev)
    }

    return (
        <ColorSchemeContext.Provider
            value={{ isDefaultMode, toggleColorScheme }}
        >
            {children}
        </ColorSchemeContext.Provider>
    )
}

export const useColorScheme = () => useContext(ColorSchemeContext)
