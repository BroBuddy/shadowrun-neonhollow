import FadeIn from '@/components/FadeIn'
import Card from '../../../components/Card'
import Headline from '@/components/Headline'
import MatrixTable from '@/components/MatrixTable'

function Event() {
    return (
        <>
            <Headline>Event</Headline>
            <Card>
                <FadeIn>
                    <p>
                        <strong className="highlight">Event Rules:</strong>
                    </p>
                    <ol className="list-margin">
                        <li>Choose how to handle the event.</li>
                        <li>
                            Roll <strong>2d6</strong> &#8594; Add choosen
                            attribute
                        </li>
                        <li>
                            If you meet or exceed the{' '}
                            <strong>Difficulty Check</strong> (DC), you succeed.
                        </li>
                    </ol>
                </FadeIn>
            </Card>

            <Card dice={1}>
                <FadeIn>
                    <p>
                        <strong className="highlight">Event Matrix:</strong>
                    </p>
                    <p>Roll 1d6 twice:</p>
                    <MatrixTable linkPrefix="/event/R4" />
                </FadeIn>
            </Card>
        </>
    )
}

export default Event
