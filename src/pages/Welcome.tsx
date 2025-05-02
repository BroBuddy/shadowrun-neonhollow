import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Headline from '@/components/Headline'
import FadeIn from '@/components/FadeIn'

function Welcome() {
    return (
        <>
            <Headline>Welcome to NeonHollow</Headline>
            <Card>
                <FadeIn>
                    <p className="highlight">[SYSTEM BOOTING…]</p>
                </FadeIn>
                <FadeIn delay={1500}>
                    <p className="highlight">[SIGNAL TRACE INITIATED…]</p>
                </FadeIn>
                <FadeIn delay={3000}>
                    <p className="highlight">[CONNECTION ATTEMPT: FAILED]</p>
                </FadeIn>
                <FadeIn delay={4500}>
                    <p className="highlight">[RETRYING…]</p>
                </FadeIn>
                <FadeIn delay={6000}>
                    <p>
                        <em>
                            "You are inside a controlled simulation. A
                            test—crafted by rogue deckers and ex-corp AIs. Every
                            sight, every sound, every action—engineered to
                            measure your limits."
                        </em>
                    </p>
                </FadeIn>
                <FadeIn delay={7500}>
                    <p>
                        <em>
                            "The megacorp watches. It controls. It hunts. The
                            same way it does beyond this simulation. Every
                            district, every choice—monitored."
                        </em>
                    </p>
                </FadeIn>
                <FadeIn delay={9000}>
                    <p>
                        <em>
                            "Your mission is simple: break their grip. Take
                            jobs. Gain influence. Uncover secrets. Burn their
                            hold on this world. Win the trial… and wake up."
                        </em>
                    </p>
                </FadeIn>
                <FadeIn delay={10500}>
                    <p>
                        Start here &#8594;{' '}
                        <Link to="/rules" className="ml-1">
                            Rules
                        </Link>
                    </p>
                </FadeIn>
            </Card>
        </>
    )
}

export default Welcome
