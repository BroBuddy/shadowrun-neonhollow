import Card from '@/components/Card'
import Dice from '@/components/Dice'
import FadeIn from '@/components/FadeIn'
import InRow from '@/components/InRow'
import MatrixTable from '@/components/MatrixTable'

function BackgroundView() {
    return (
        <Card>
            <FadeIn>
                <p>
                    <strong className="highlight">Background:</strong>
                </p>

                <InRow>
                    <span>Your archetype is the tens digit - Roll:</span>
                    <Dice dice={1} />
                </InRow>
                <MatrixTable linkPrefix="/background/R7" />
            </FadeIn>
        </Card>
    )
}

export default BackgroundView
