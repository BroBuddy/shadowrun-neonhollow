import { Link } from 'react-router-dom'

const rows = 6
const cols = 6

type MatrixTableProps = {
    linkPrefix: string
}

function MatrixTable({ linkPrefix }: MatrixTableProps) {
    return (
        <table className="my-2">
            <thead>
                <tr>
                    <th>2d6</th>
                    {[...Array(cols)].map((_, colIndex: number) => (
                        <th key={`header-${colIndex + 1}`}>{colIndex + 1}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {[...Array(rows)].map((_, rowIndex: number) => (
                    <tr key={`row-${rowIndex + 1}`}>
                        <th>{rowIndex + 1}</th>
                        {[...Array(cols)].map((_, colIndex: number) => (
                            <td key={`cell-${rowIndex + 1}-${colIndex + 1}`}>
                                <Link
                                    to={`${linkPrefix}${rowIndex + 1}${colIndex + 1}`}
                                >
                                    {rowIndex + 1}
                                    {colIndex + 1}
                                </Link>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MatrixTable
