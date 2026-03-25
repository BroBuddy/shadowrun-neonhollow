import Arrow from "@/components/Arrow"
import Dice from "@/components/Dice"
import InRow from "@/components/InRow"

const ObstacleRoll = () => (
    <>
        <InRow>
            <span>Roll</span>
            <Dice dice={1} />
        </InRow>

        <ul className="list-margin">
            <li><strong>Roll 1-2</strong> <Arrow /> DC 12</li>
            <li><strong>Roll 3-4</strong> <Arrow /> DC 10</li>
            <li><strong>Roll 5-6</strong> <Arrow /> DC 8</li>
        </ul>
    </>
)

export default ObstacleRoll