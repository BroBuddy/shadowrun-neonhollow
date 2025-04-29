import Card from '@/components/Card'
import Dice from '@/components/Dice'
import MatrixTable from '@/components/MatrixTable'

function BackgroundView() {
    return (
        <Card>
            <div className="flex justify-between items-center">
                <p>
                    <strong className="highlight">Background:</strong>
                </p>
                <div className="flex gap-2">
                    <Dice label="1d6" min={1} max={6} />
                </div>
            </div>
            <p>🎲 Roll 1d6: Archetype is the tens digit</p>
            <MatrixTable linkPrefix="/background/R7" />
        </Card>
    )
}

export default BackgroundView
