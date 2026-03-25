import Arrow from '@/components/Arrow'
import Card from '@/components/Card'
import PopUp from '@/components/Popup'

const MissionRules = () => {

    return (
        <Card>
            <div className="mb-4">
                <p><strong>Do Your Homework:</strong></p>

                <span>
                    Know the risks before you run.
                    <Arrow className='mx-1' />
                    <PopUp title='Rules'>
                        <p>You can only complete one run per day.</p>
                        <ul className="list-margin">
                            <li>Each run has 6 steps. Each step reveals a random event.</li>
                            <li>Roll 1D6 for difficulty: DC 8, 10 or 12.</li>
                            <li>Roll 2D6 + chosen attribute. Meet or beat the DC to succeed.</li>
                            <li>Final step: fixed DC 12 twist.</li>
                            <li>+1 Performance per success, -1 per failure.</li>
                            <li>Your Performance determines your reward.</li>
                        </ul>
                        <p>When the run is done, the city goes dark. Midnight begins.</p>
                    </PopUp>
                </span>
            </div>
        </Card>
    )
}

export default MissionRules
