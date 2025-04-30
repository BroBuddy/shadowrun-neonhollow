import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import Headline from '@/components/Headline'
import MechanicView from '../../mechanic/components/MechanicView'
import FadeIn from '@/components/FadeIn'
import { useColorScheme } from '@/context/useColorScheme'

const Rule = () => {
    const { toggleColorScheme } = useColorScheme()

    return (
        <>
            <Headline>Rules</Headline>
            <Card>
                <FadeIn>
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
                                    Toggle Schema
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
                                    Character Creation
                                </Link>
                            </li>
                        </ul>
                    </section>
                </FadeIn>
            </Card>
        </>
    )
}

export default Rule
