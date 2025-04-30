import { useContext } from 'react'
import ColorSchemeContext from './ColorSchemeProvider'

export const useColorScheme = () => useContext(ColorSchemeContext)
