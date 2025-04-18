import Card from './Card'

const Mission = () => {
    return (
        <section className="flex flex-col py-2 w-full">
            <Card title="Mr. Johnson">
                <p>
                    <em>The smile’s fake. The creds are real.</em>
                </p>
                <p className="flex items-center justify-center">
                    <img src="/images/MrJohnson.jpg" alt="Mr. Johnson" />
                </p>
                <p>
                    No one knows his real name—and that’s the point. Mr. Johnson
                    is the middleman between shadow and silver, offering dirty
                    jobs with clean payouts. Always dressed sharp, always calm,
                    and never without a plan. If he calls, it means someone
                    wants something done off the books... and you’re the asset.
                </p>
                <p>
                    <strong>Missions from Mr. Johnson:</strong>
                </p>
                <ul>
                    <li>
                        <strong>Assassination:</strong>
                        <br />A name on a list, a pulse waiting to stop. Clean
                        or messy—just don’t get caught.
                    </li>
                    <li>
                        <strong>Sabotage:</strong>
                        <br />
                        Slip in, ruin everything, and vanish. Leave only smoke
                        and malfunction behind.
                    </li>
                    <li>
                        <strong>Smuggling:</strong>
                        <br />
                        Slip in, ruin everything, and vanish. Leave only smoke
                        and malfunction behind.
                    </li>
                    <li>
                        <strong>Infiltration:</strong>
                        <br />
                        Bypass locks, dodge eyes, crack firewalls. Get in, get
                        out, leave nothing behind but doubt.
                    </li>
                    <li>
                        <strong>Extraction:</strong>
                        <br />A person, a thing, a secret. Whatever it is, it's
                        deep in hostile territory. Time to pull it out.
                    </li>
                    <li>
                        <strong>Negotiation:</strong>
                        <br />
                        Not every war is fought with guns. Talk your way through
                        the fire, or start it yourself.
                    </li>
                </ul>
            </Card>
        </section>
    )
}

export default Mission
