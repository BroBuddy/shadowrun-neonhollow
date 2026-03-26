import { createContext, ReactNode, useState } from 'react'

const ColorThemeContext = createContext<{
    isDefaultMode: boolean
    toggleColorTheme: () => void
}>({
    isDefaultMode: true,
    toggleColorTheme: () => {},
})

export const ColorThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDefaultMode, setIsDefaultMode] = useState<boolean>(true)

    const toggleColorTheme = () => {
        setIsDefaultMode((prev) => !prev)
    }

    return (
        <ColorThemeContext.Provider
            value={{ isDefaultMode, toggleColorTheme: toggleColorTheme }}
        >
            {children}
        </ColorThemeContext.Provider>
    )
}

export default ColorThemeContext
