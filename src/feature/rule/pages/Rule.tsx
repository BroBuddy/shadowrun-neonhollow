import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import Headline from '@/components/Headline'
import MechanicView from '../../mechanic/components/MechanicView'

const Rule = () => {
    return (
        <>
            <Headline>Rules</Headline>
            <Card>
                <p>
                    <strong>Your first Steps:</strong>
                </p>
                <p>Grab 2d6, a pen, and something to write on.</p>
                <MechanicView />
                <p>
                    <strong>Start your Adventure:</strong>
                </p>
                <ul className="list-margin">
                    <li>
                        <Link to="/character">Character Creation</Link>
                    </li>
                </ul>
            </Card>
        </>
    )
}

export default Rule
