import Card from '@/components/Card'
import FadeIn from '@/components/FadeIn'
import Headline from '@/components/Headline'

function MissionRules() {
    return (
        <>
            <Headline>Mission Rules</Headline>

            <Card>
                <FadeIn>
                    <p>
                        At the start of each mission, your Performance begins at
                        5 and can shift between 1 and 9 based on your success.
                    </p>
                    <p>
                        You must tackle the missions in order and each mission
                        follows a specific structure:
                    </p>
                    <ul>
                        <li>
                            Face three tasks. Roll 2d6 to determine your skill
                            check for each.
                        </li>
                        <li>
                            DC is the number of successes needed to clear a
                            challenge.
                        </li>
                        <li>
                            If you succeed at all three, the twist is revealed.
                        </li>
                        <li>
                            Each success contributes to your overall Performance
                            score.
                        </li>
                    </ul>
                </FadeIn>
            </Card>
        </>
    )
}

export default MissionRules
