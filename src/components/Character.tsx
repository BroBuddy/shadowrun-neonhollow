import { Link } from 'react-router-dom'
import Card from './Card'

const Character = () => {
    return (
        <section className="flex flex-col py-2 w-full">
            <Card title="Character">
                <p>
                    Follow this guide to build your shadowrunner before diving
                    into the shadows.
                </p>
                <ol>
                    <li>
                        (<Link to="/C010">C010</Link>) Class
                    </li>
                    <li>
                        (<Link to="/C020">C020</Link>) Race
                    </li>
                    <li>
                        (<Link to="/C030">C030</Link>) Background
                    </li>
                    <li>
                        (<Link to="/C040">C040</Link>) Name
                    </li>
                </ol>
            </Card>
        </section>
    )
}

export default Character
