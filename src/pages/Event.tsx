import Dice from '@/components/Dice'
import Card from '../components/Card'
import Headline from '@/components/Headline'
import MatrixTable from '@/components/MatrixTable'

function Event() {
    return (
        <>
            <Headline>Event</Headline>
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
                <div className="flex items-center mb-3 space-x-1">
                    <span>Roll 2d6:</span>
                    <Dice min={1} max={6} />
                    <Dice min={1} max={6} />
                </div>
                <MatrixTable linkPrefix="/event/R4" />
            </Card>
        </>
    )
}

export default Event
