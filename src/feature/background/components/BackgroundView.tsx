import Card from '@/components/Card'
import FadeIn from '@/components/FadeIn'
import MatrixTable from '@/components/MatrixTable'

function BackgroundView() {
    return (
        <Card dice={1}>
            <FadeIn>
                <p>
                    <strong className="highlight">Background:</strong>
                </p>
                <p>Your archetype is the tens digit - Roll 1d6:</p>
                <MatrixTable linkPrefix="/background/R7" />
            </FadeIn>
        </Card>
    )
}

export default BackgroundView
