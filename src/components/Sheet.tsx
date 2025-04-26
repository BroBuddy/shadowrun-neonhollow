import { Link } from 'react-router-dom'
import Booklet from './Booklet'
import Card from './Card'

function Sheet() {
    return (
        <Card title="Sheet">
            <p>
                A fast-access reference sheet featuring the most essential rules
                and frequently used tables.
            </p>
            <p>
                <strong>Rules:</strong>
            </p>
            <p>
                <Link to="/R001" className="a">
                    R001
                </Link>{' '}
                &#8594; Welcome to NeonHollow
            </p>
            <p>
                <Link to="/R002" className="a">
                    R002
                </Link>{' '}
                &#8594; Instructions
            </p>
            <p>
                <strong>Matrix:</strong>
            </p>
            <p>
                <Link to="/R401" className="a">
                    R401
                </Link>{' '}
                &#8594; Event Matrix
            </p>
            <p>
                <Link to="/R501" className="a">
                    R501
                </Link>{' '}
                &#8594; Runner Matrix
            </p>
            <p>
                <strong>Mission:</strong>
            </p>
            <p>
                <Link to="/R602" className="a">
                    R602
                </Link>{' '}
                &#8594; Rules
            </p>
            <p>
                <Link to="/R603" className="a">
                    R603
                </Link>{' '}
                &#8594; Performance
            </p>
            <p>
                <strong>Quick Search:</strong>
            </p>
            <Booklet />
        </Card>
    )
}

export default Sheet
