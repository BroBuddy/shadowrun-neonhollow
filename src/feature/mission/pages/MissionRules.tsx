import Card from '@/components/Card'
import Headline from '@/components/Headline'

function MissionRules() {
    return (
        <>
            <Headline>Mission Rules</Headline>

            <Card>
                <p>
                    At the start of each mission, your Performance begins at 5
                    and can shift between 1 and 9 based on your success.
                </p>
                <p>
                    You must tackle the missions in order and each mission
                    follows a specific structure:
                </p>
                <ul className="list-margin">
                    <li>
                        Face three tasks. Roll 2d6 to determine your skill check
                        for each.
                    </li>
                    <li>
                        DC is the number of successes needed to clear a
                        challenge.
                    </li>
                    <li>If you succeed at all three, the twist is revealed.</li>
                    <li>
                        Each success contributes to your overall Performance
                        score.
                    </li>
                </ul>
            </Card>
        </>
    )
}

export default MissionRules
