import Card from '@/components/Card'
import { Link } from 'react-router-dom'

function Character() {
    return (
        <Card title="Character Creation">
            <div className="card">
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
            </div>

            <div className="card card-margin">
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
            </div>

            <div className="card">
                <p>
                    <strong className="violet">Background:</strong>
                </p>
                <p>Your archetype is the tens digit - Roll 1d6:</p>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Link to="/R711">R711</Link>
                            </td>
                            <td>
                                <Link to="/R712">R712</Link>
                            </td>
                            <td>
                                <Link to="/R713">R713</Link>
                            </td>
                            <td>
                                <Link to="/R714">R714</Link>
                            </td>
                            <td>
                                <Link to="/R715">R715</Link>
                            </td>
                            <td>
                                <Link to="/R716">R716</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/R721">R721</Link>
                            </td>
                            <td>
                                <Link to="/R722">R722</Link>
                            </td>
                            <td>
                                <Link to="/R723">R723</Link>
                            </td>
                            <td>
                                <Link to="/R724">R724</Link>
                            </td>
                            <td>
                                <Link to="/R725">R725</Link>
                            </td>
                            <td>
                                <Link to="/R726">R726</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/R731">R731</Link>
                            </td>
                            <td>
                                <Link to="/R732">R732</Link>
                            </td>
                            <td>
                                <Link to="/R733">R733</Link>
                            </td>
                            <td>
                                <Link to="/R734">R734</Link>
                            </td>
                            <td>
                                <Link to="/R735">R735</Link>
                            </td>
                            <td>
                                <Link to="/R736">R736</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/R741">R741</Link>
                            </td>
                            <td>
                                <Link to="/R742">R742</Link>
                            </td>
                            <td>
                                <Link to="/R743">R743</Link>
                            </td>
                            <td>
                                <Link to="/R744">R744</Link>
                            </td>
                            <td>
                                <Link to="/R745">R745</Link>
                            </td>
                            <td>
                                <Link to="/R746">R746</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/R751">R751</Link>
                            </td>
                            <td>
                                <Link to="/R752">R752</Link>
                            </td>
                            <td>
                                <Link to="/R753">R753</Link>
                            </td>
                            <td>
                                <Link to="/R754">R754</Link>
                            </td>
                            <td>
                                <Link to="/R755">R755</Link>
                            </td>
                            <td>
                                <Link to="/R756">R756</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/R761">R761</Link>
                            </td>
                            <td>
                                <Link to="/R762">R762</Link>
                            </td>
                            <td>
                                <Link to="/R763">R763</Link>
                            </td>
                            <td>
                                <Link to="/R764">R764</Link>
                            </td>
                            <td>
                                <Link to="/R765">R765</Link>
                            </td>
                            <td>
                                <Link to="/R766">R766</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="card card-margin">
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
            </div>

            <div className="card">
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
            </div>

            <div className="card card-margin">
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
            </div>
        </Card>
    )
}

export default Character
