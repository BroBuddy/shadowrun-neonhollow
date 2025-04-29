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
                        You must tackle the missions in order and each mission
                        follows a specific structure:
                    </p>
                    <ul>
                        <li>
                            Face three obstacles. Roll 2d6 to determine your
                            skill check for each.
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
                    <p>
                        Report to <strong>Mr. Johnson</strong> after the run to
                        receive your reward based on Performance.
                    </p>
                </FadeIn>
            </Card>
        </>
    )
}

export default MissionRules
