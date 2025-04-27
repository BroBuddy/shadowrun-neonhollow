import Card from '@/components/Card'
import { Link } from 'react-router-dom'

const rows = 6
const cols = 6

function BackgroundView() {
    return (
        <Card>
            <p>
                <strong className="highlight">Background:</strong>
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
                                            to={`/rule/R7${rowIndex + 1}${colIndex + 1}`}
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
    )
}

export default BackgroundView
