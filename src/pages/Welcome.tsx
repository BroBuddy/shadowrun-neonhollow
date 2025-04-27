import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Headline from '@/components/Headline'

function Welcome() {
    return (
        <>
            <Headline>Welcome to NeonHollow</Headline>
            <Card>
                <p>
                    You’re inside a full-spectrum neural simulation, created by
                    rogue deckers and ex-corp AIs to test potential
                    shadowrunners in a city twisted by corporate control.
                    Everything you see, every sound, every face, every
                    choice—fabricated to push you to your limits.
                </p>
                <p>
                    The megacorp dominates this simulation like it does the real
                    world. It watches, it hunts, and it controls every
                    district—just like it will when you jack out of this and hit
                    the actual streets.
                </p>
                <p>Your task is simple: break the system.</p>
                <p>
                    Take on missions. Build your rep. Uncover secrets. Burn down
                    their influence—district by district.
                </p>
                <p>
                    <Link to="/rule">
                        This is your trial. Win it... and wake up.
                    </Link>
                </p>
            </Card>
        </>
    )
}

export default Welcome
