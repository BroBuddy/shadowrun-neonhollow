import { useColorTheme } from '@/context/useColorTheme'

function Settings () {
    const { toggleColorTheme: toggleColorScheme } = useColorTheme()
    
    return (
        <section>
            <p><strong>Settings:</strong></p>
            
            <ul className="list-margin">
                <li>
                    <a
                        className="cursor-pointer"
                        onClick={toggleColorScheme}
                    >
                        🎨 Toggle Theme
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Settings