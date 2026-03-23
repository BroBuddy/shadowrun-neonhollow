import Dice from "@/components/Dice"
import InRow from "@/components/InRow"

const ObstacleRoll = () => (
    <>
        <InRow>
            <span>Roll</span>
            <Dice dice={1} />
        </InRow>

        <ul className="list-margin">
            <li><strong>Roll 1-2</strong> &#8594; DC 12</li>
            <li><strong>Roll 3-4</strong> &#8594; DC 10</li>
            <li><strong>Roll 5-6</strong> &#8594; DC 8</li>
        </ul>
    </>
)

export default ObstacleRoll