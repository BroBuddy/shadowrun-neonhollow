import Card from '@/components/Card'

const MissionInstruction = () => {

    return (
        <Card>
            <div className="mb-4">
                <p>
                    <strong className="highlight">Mission Rules:</strong>
                </p>
                
                <ul className="list-margin">
                    <li>
                        Each run can only be completed once per day.
                    </li>
                    <li>
                        Each run has 6 steps. Every step reveals a random event.
                    </li>
                    <li>
                        Roll 1D6 to determine the difficulty. DC 8, 10 or 12.
                    </li>
                    <li>
                        Roll 2D6 and add your chosen attribute. Meet or beat the DC to succeed.
                    </li>
                    <li>
                        The final step is always a twist with a fixed DC 12.
                    </li>
                    <li>
                        Each success adds +1 Performance, each failure -1.
                    </li>
                    <li>
                        Your final Performance determines your reward.
                    </li>
                </ul>
            </div>
        </Card>
    )
}

export default MissionInstruction
