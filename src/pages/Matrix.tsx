import { Link } from 'react-router-dom'
import Card from '../components/Card'

const rows = 6
const cols = 6

function Matrix() {
    return (
        <Card title="Matrix">
            <div className="card">
                <p>
                    <strong className="violet">Event Rules:</strong>
                </p>
                <ol>
                    <li>Choose how to handle the event.</li>
                    <li>
                        Roll <strong>2d6</strong> &#8594; Add choosen attribute
                    </li>
                    <li>
                        If you meet or exceed the{' '}
                        <strong>Difficulty Check</strong> (DC), you succeed.
                    </li>
                </ol>
            </div>
            <div className="card card-margin">
                <p>
                    <strong className="violet">Event Matrix:</strong>
                </p>
                <table>
                    <tbody>
                        {Array.from({ length: rows }, (_, rowIndex) => (
                            <tr key={`row-${rowIndex + 1}`}>
                                {Array.from({ length: cols }, (_, colIndex) => (
                                    <td
                                        key={`cell-${rowIndex + 1}-${colIndex + 1}`}
                                    >
                                        <Link
                                            to={`/R4${rowIndex + 1}${colIndex + 1}`}
                                        >
                                            R4{rowIndex + 1}
                                            {colIndex + 1}
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="card">
                <p>
                    <strong className="violet">Runner Matrix:</strong>
                </p>
                <table>
                    <tbody>
                        {Array.from({ length: rows }, (_, rowIndex) => (
                            <tr key={`row-${rowIndex + 1}`}>
                                {Array.from({ length: cols }, (_, colIndex) => (
                                    <td
                                        key={`cell-${rowIndex + 1}-${colIndex + 1}`}
                                    >
                                        <Link
                                            to={`/R5${rowIndex + 1}${colIndex + 1}`}
                                        >
                                            R5{rowIndex + 1}
                                            {colIndex + 1}
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default Matrix
