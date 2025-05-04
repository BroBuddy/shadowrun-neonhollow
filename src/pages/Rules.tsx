import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Headline from '@/components/Headline'
import MechanicView from '../feature/mechanic/components/MechanicView'
import { useColorScheme } from '@/context/useColorScheme'
import ModeView from '@/feature/character/components/ModeView'
import PopUp from '@/components/Popup'

const Rules = () => {
    const { toggleColorScheme } = useColorScheme()

    return (
        <>
            <Headline>Rules</Headline>
            <Card>
                <section>
                    <p>
                        <strong>Settings:</strong>
                    </p>
                    <ul className="list-margin">
                        <li>
                            <a
                                className="cursor-pointer"
                                onClick={toggleColorScheme}
                            >
                                🎨 Toggle Schema
                            </a>
                        </li>
                    </ul>
                </section>

                {MechanicView ? (
                    <MechanicView />
                ) : (
                    <p>Mechanic view is unavailable.</p>
                )}

                <section>
                    <p>
                        <strong>Start your Adventure:</strong>
                    </p>
                    <ul className="list-margin">
                        <li>
                            <Link
                                to="/character"
                                aria-label="Character Creation"
                                title="Character Creation"
                            >
                                ✏️ Character Creation
                            </Link>
                        </li>
                        <li>
                            <PopUp title="⚔️ Mode Selection">
                                <ModeView />
                            </PopUp>
                        </li>
                    </ul>
                </section>
            </Card>
        </>
    )
}

export default Rules
