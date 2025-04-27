import { Link } from 'react-router-dom'
import Card from '../components/Card'

const rows = 6
const cols = 6

function Matrix() {
    return (
        <Card title="Matrix">
            <p>
                <strong>Event Matrix:</strong>
            </p>
            <table>
                <thead>
                    <tr>
                        <th>2d6</th>
                        {Array.from({ length: cols }, (_, index) => (
                            <th key={`col-${index + 1}`}>{index + 1}</th>
                        ))}
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
                                        to={`/R4${rowIndex + 1}${colIndex + 1}`}
                                        className="a"
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
            <div className="card card-margin">
                <p>
                    <strong>Event Rules:</strong>
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
            <p>
                <strong>Runner Matrix:</strong>
            </p>
            <table>
                <thead>
                    <tr>
                        <th>2d6</th>
                        {Array.from({ length: cols }, (_, index) => (
                            <th key={`col-${index + 1}`}>{index + 1}</th>
                        ))}
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
                                        to={`/R5${rowIndex + 1}${colIndex + 1}`}
                                        className="a"
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
        </Card>
    )
}

export default Matrix
