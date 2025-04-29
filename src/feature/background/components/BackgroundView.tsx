import Card from '@/components/Card'
import Dice from '@/components/Dice'
import MatrixTable from '@/components/MatrixTable'

function BackgroundView() {
    return (
        <Card>
            <p>
                <strong className="highlight">Background:</strong>
            </p>
            <p>Your archetype is the tens digit.</p>
            <p className="flex items-center space-x-1">
                <span>Roll 1d6:</span>
                <Dice min={1} max={6} />
            </p>
            <MatrixTable linkPrefix="/background/R7" />
        </Card>
    )
}

export default BackgroundView
