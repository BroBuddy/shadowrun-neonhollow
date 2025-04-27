export const Rules = [
    {
        id: 'R003',
        title: 'Time Mechanic',
        content: `<p>You’ve got <strong>7 Days</strong> to dismantle the system. Each cycle gives you <strong>7 Hours</strong> — use them wisely.</p>
            <p>This is how a day unfolds in <strong>NeonHollow</strong>:</p>
            <ol>
                <li>Start at your private <strong>SafeHouse</strong>.</li>
                <li>Entering any building:
                    <ul>
                        <li>Moving cost <strong>1 Energy</strong> and <strong>1 Hour</strong>.</li>
                    </ul>
                </li>
                <li>Perform actions:
                    <ul>
                        <li>Actions cost <strong>1 Hour</strong>.</li>
                        <li>Actions can be performed <strong>once per day</strong>.</li>
                        <li>Actions at the Megacorp are <strong>single-use</strong> only.</li>
                    </ul>
                </li>
                <li>End of the Day:
                    <ul>
                        <li>Roll on the <strong>Event Matrix</strong></li>
                        <li>Increase <strong>Day Counter</strong> by +1</li>
                        <li>Reset <strong>Hours</strong> to 0</li>
                    </ul>
                </li>
            </ol>`,
    },
    {
        id: 'R004',
        title: 'Nuyen Mechanic',
        content: `<p>Nuyen is the currency of the Shadowrun universe, widely recognized as a standard means of payment.</p>
            <p>Most facility actions require Nuyen, so it’s wise to keep your pockets full.</p>
            <p>Many facilities offer opportunities to earn Nuyen — take your chances and make it count.</p>`,
    },
    {
        id: 'R005',
        title: 'Health Mechanic',
        content: `<p>Health ranges from 0 to 10 and cannot exceed these limits.</p>
            <p>If your Health reaches 0, you're effectively dead – just virtually speaking.</p>
            <p><strong>Service Providers:</strong></p>
            <ol>
                <li>BioCare</li>
                <li>IronGym</li>
                <li>SafeHouse</li>
            </ol>`,
    },
    {
        id: 'R006',
        title: 'Energy Mechanic',
        content: `<p>Energy ranges from 0 to 10 and cannot exceed these limits.</p>
            <p>Each point below 0 will cost you <strong>1 Health</strong> point instead.</p>
            <p><strong>Service Providers:</strong></p>
            <ol>
                <li>DreamSphere</li>
                <li>NeuralNexus</li>
                <li>EchoGarden</li>
            </ol>`,
    },
    {
        id: 'R007',
        title: 'Reputation Mechanic',
        content: `<p>Reputation ranges from 0 to 6 and cannot exceed these limits.</p>
            <p>Once per skill check, you may spend <strong>1 Reputation</strong> to gain an additional roll, which will overwrite any previous failed attempt.</p>
            <p><strong>Service Providers:</strong></p>
            <ol>
                <li>Skill Checks</li>
                <li>Town Events</li>
                <li>Mr. Johnson</li>
            </ol>`,
    },
    {
        id: 'R008',
        title: 'Heat Mechanic',
        content: `<p>Heat ranges from 0 to 3 and cannot exceed these limits.</p>
            <p>When your Heat level rises, the Corp's special ops start hunting you down. You suffer the following consequences based on your new <strong>Heat</strong> level.</p>
            <ul>
                <li>Lose <strong>Health</strong> and <strong>Energy</strong> equal to your current Heat level.</li>
            </ul>
            <p>The higher the heat level, the more town districts will lock down, restricting access to their services.</p>
            <p><strong>Service Providers:</strong></p>
            <ol>
                <li>PatrolHub</li>
                <li>EchoGarden</li>
                <li>SafeHouse</li>
            </ol>`,
    },
    {
        id: 'R009',
        title: 'Intel Mechanic',
        content: `<p>Intel ranges from 0 to 6 and cannot exceed these limits.</p>
            <p>You'll need Intel to fund missions from <strong>Mr. Johnson</strong> to bring down the MegaCorp.</p>
            <p><strong>Service Providers:</strong></p>
            <ol>
                <li>NeuralNexus</li>
                <li>HoloLounge</li>
                <li>SmugglerDen</li>
            </ol>`,
    },
    {
        id: 'R010',
        title: 'Dice Mechanic',
        content: `<p>When prompted to roll <strong>1d6</strong>, it means you must roll a single six-sided die — your fate resting on a number between 1 and 6.</p>
            <p>Rolling <strong>2d6</strong> means tossing two six-sided dice and adding the results together.</p>
            <p>Whenever you roll double ones, it triggers a critical glitch—data corruption, misfire, or worse. You immediately lose <strong>1 Intel</strong>.</p>
            <p>On the flip side, if you roll double sixes, you strike digital gold: gain <strong>1 Intel</strong> as the shadows reward your precision.</p>`,
    },
    {
        id: 'R011',
        title: 'Matrix Mechanic',
        content: `<p><strong>Roll 2d6</strong> – one die will be for the tens digit and the other for the ones digit.</p>
            <p>Combine the two rolls to form a two-digit number.</p>
            <p><strong>Find the ID</strong> – Use the number rolled to locate the ID on the matrix.</p>`,
    },
    {
        id: 'R014',
        title: 'Well Done',
        content:
            '<p>The Corp is no more. You’ve dismantled their influence and shattered their operations. <strong>NeonHollow</strong> will breathe easier now, though it will take time for the dust to settle.</p>' +
            '<p>You’ve done well — this victory may be only the beginning of something bigger. Still, tonight, you’ve earned your place among the shadows.</p>' +
            '<p>You notice the lights dimming, gradually fading until everything is engulfed in complete darkness.</p>' +
            '<p>From afar, a familiar sound echoes...</p>' +
            '<p><em>"Wake up, Shadowrunner. You are worthy."</em></p>',
    },
    {
        id: 'R015',
        title: 'Overwhelmingly Great',
        content:
            '<p>The Corp has crumbled. You’ve not only crushed their empire, you’ve sent shockwaves through the entire city. News of their downfall spreads like wildfire, and for once, it’s the people of <strong>NeonHollow</strong> who are celebrating.</p>' +
            '<p>The city is yours, and you’ve rewritten its future in a single, devastating blow. Your name will be whispered in awe across the streets for years to come.</p>' +
            '<p>You notice the lights dimming, gradually fading until everything is engulfed in complete darkness.</p>' +
            '<p>From afar, a familiar sound echoes...</p>' +
            '<p><em>"Wake up, Shadowrunner. You are worthy."</em></p>',
    },
]
