import Card from '@/components/Card'
import Headline from '@/components/Headline'
import { Link } from 'react-router-dom'

const rows = 6
const cols = 6

function Character() {
    return (
        <>
            <Headline>Character Creation</Headline>
            <Card>
                <p>
                    <strong className="violet">Metatype:</strong>
                </p>
                <p>Roll 1d6:</p>
                <ol>
                    <li>
                        <Link to="/R021">Human</Link>
                    </li>
                    <li>
                        <Link to="/R021">Human</Link>
                    </li>
                    <li>
                        <Link to="/R022">Elf</Link>
                    </li>
                    <li>
                        <Link to="/R023">Dwarf</Link>
                    </li>
                    <li>
                        <Link to="/R024">Orc</Link>
                    </li>
                    <li>
                        <Link to="/R025">Troll</Link>
                    </li>
                </ol>
            </Card>
            <Card>
                <p>
                    <strong className="violet">Archetype:</strong>
                </p>
                <p>Roll 1d6:</p>
                <ol>
                    <li>
                        <Link to="/R031">Street Samurai</Link>
                    </li>
                    <li>
                        <Link to="/R032">Decker</Link>
                    </li>
                    <li>
                        <Link to="/R033">Rigger</Link>
                    </li>
                    <li>
                        <Link to="/R034">Mage</Link>
                    </li>
                    <li>
                        <Link to="/R035">Face</Link>
                    </li>
                    <li>
                        <Link to="/R036">Shaman</Link>
                    </li>
                </ol>
            </Card>
            <Card>
                <p>
                    <strong className="violet">Background:</strong>
                </p>
                <p>Your archetype is the tens digit - Roll 1d6:</p>
                <table>
                    <thead>
                        <tr>
                            <th>2d6</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: rows }, (_, rowIndex) => (
                            <tr key={`row-${rowIndex + 1}`}>
                                <th>{rowIndex + 1}</th>
                                {Array.from({ length: cols }, (_, colIndex) => (
                                    <td
                                        key={`cell-${rowIndex + 1}-${colIndex + 1}`}
                                    >
                                        <Link
                                            to={`/R7${rowIndex + 1}${colIndex + 1}`}
                                        >
                                            {rowIndex + 1}x{colIndex + 1}
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
            <Card>
                <p>
                    <strong className="violet">Gear:</strong>
                </p>
                <p>Choose one item for free from the Fixer's Workshop:</p>
                <ul>
                    <li>
                        <strong>Power Gauntlets:</strong> +1 Strength
                    </li>
                    <li>
                        <strong>Nano-Tread Boots:</strong> +1 Agility
                    </li>
                    <li>
                        <strong>Reflex Enhancer Implant:</strong> +1 Reaction
                    </li>
                    <li>
                        <strong>Neural Interface Headset:</strong> +1 Logic
                    </li>
                    <li>
                        <strong>Synaptic Amplifier:</strong> +1 Intuition
                    </li>
                    <li>
                        <strong>Holo-Disguise Mask:</strong> +1 Charisma
                    </li>
                </ul>
                <p>Apply the bonus to your player sheet.</p>
            </Card>
            <Card>
                <p>
                    <strong className="violet">Mode:</strong>
                </p>
                <p>
                    The mode grants you starting resources such as Health,
                    Energy, Nuyen, and possibly Reputation.
                </p>
                <ul>
                    <li>
                        <strong>Easy Mode:</strong>
                        <ul>
                            <li>15.000 ¥</li>
                            <li>10 Health</li>
                            <li>10 Energy</li>
                            <li>2 Reputation</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Medium Mode:</strong>
                        <ul>
                            <li>10.000 ¥</li>
                            <li>8 Health</li>
                            <li>8 Energy</li>
                            <li>1 Reputation</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Hard Mode:</strong>
                        <ul>
                            <li>5.000 ¥</li>
                            <li>6 Health</li>
                            <li>6 Energy</li>
                        </ul>
                    </li>
                </ul>
            </Card>
            <Card>
                <p>
                    <strong className="violet">(Optional) Name:</strong>
                </p>
                <p>Each archetype has its own name pool:</p>
                <ul>
                    <li>
                        <Link to="/R041">Street Samurai</Link>
                    </li>
                    <li>
                        <Link to="/R042">Decker</Link>
                    </li>
                    <li>
                        <Link to="/R043">Rigger</Link>
                    </li>
                    <li>
                        <Link to="/R044">Mage</Link>
                    </li>
                    <li>
                        <Link to="/R045">Face</Link>
                    </li>
                    <li>
                        <Link to="/R046">Shaman</Link>
                    </li>
                </ul>
            </Card>
        </>
    )
}

export default Character
