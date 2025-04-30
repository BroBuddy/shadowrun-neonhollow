import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import Headline from '@/components/Headline'
import MechanicView from '../../mechanic/components/MechanicView'
import FadeIn from '@/components/FadeIn'

const Rule = () => {
    return (
        <>
            <Headline>Rules</Headline>
            <Card>
                <FadeIn>
                    <MechanicView />
                    <p>
                        <strong>Start your Adventure:</strong>
                    </p>
                    <ul className="list-margin">
                        <li>
                            <Link to="/character">Character Creation</Link>
                        </li>
                    </ul>
                </FadeIn>
            </Card>
        </>
    )
}

export default Rule
