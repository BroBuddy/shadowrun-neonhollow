import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Headline from '@/components/Headline'

const rows = 6
const cols = 6

function Matrix() {
    return (
        <>
            <Headline>Matrix</Headline>
            <Card>
                <p>
                    <strong className="highlight">Event Rules:</strong>
                </p>
                <ol className="list-margin">
                    <li>Choose how to handle the event.</li>
                    <li>
                        Roll <strong>2d6</strong> &#8594; Add choosen attribute
                    </li>
                    <li>
                        If you meet or exceed the{' '}
                        <strong>Difficulty Check</strong> (DC), you succeed.
                    </li>
                </ol>
            </Card>
            <Card>
                <p>
                    <strong className="highlight">Event Matrix:</strong>
                </p>
                <p>🎲 Roll 2d6:</p>
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
                        {Array.from({ length: rows }, (_, rowIndex: number) => (
                            <tr key={`row-${rowIndex + 1}`}>
                                <th>{rowIndex + 1}</th>
                                {Array.from(
                                    { length: cols },
                                    (_, colIndex: number) => (
                                        <td
                                            key={`cell-${rowIndex + 1}-${colIndex + 1}`}
                                        >
                                            <Link
                                                to={`/rule/R4${rowIndex + 1}${colIndex + 1}`}
                                            >
                                                {rowIndex + 1}x{colIndex + 1}
                                            </Link>
                                        </td>
                                    )
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
            <Card>
                <p>
                    <strong className="highlight">Runner Matrix:</strong>
                </p>
                <p>🎲 Roll 2d6:</p>
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
                        {Array.from({ length: rows }, (_, rowIndex: number) => (
                            <tr key={`row-${rowIndex + 1}`}>
                                <th>{rowIndex + 1}</th>
                                {Array.from(
                                    { length: cols },
                                    (_, colIndex: number) => (
                                        <td
                                            key={`cell-${rowIndex + 1}-${colIndex + 1}`}
                                        >
                                            <Link
                                                to={`/rule/R5${rowIndex + 1}${colIndex + 1}`}
                                            >
                                                {rowIndex + 1}x{colIndex + 1}
                                            </Link>
                                        </td>
                                    )
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </>
    )
}

export default Matrix
