import { Link } from 'react-router-dom'
import Card from '../components/Card'

function Welcome() {
    return (
        <Card title="Welcome to NeonHollow">
            <div className="card">
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
                    This is your trial. Win it... and wake up.{' '}
                    <Link to="/rules">Rules</Link>
                </p>
            </div>
        </Card>
    )
}

export default Welcome
