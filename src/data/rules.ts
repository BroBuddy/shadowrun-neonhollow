export const Rules = [
    {
        id: 'R001',
        title: 'Welcome to NeonHollow',
        content:
            '<p>You’re inside a full-spectrum neural simulation, created by rogue deckers and ex-corp AIs to test potential shadowrunners in a city twisted by corporate control. Everything you see, every sound, every face, every choice—fabricated to push you to your limits.</p>' +
            '<p>The megacorp dominates this simulation like it does the real world. It watches, it hunts, and it controls every district—just like it will when you jack out of this and hit the actual streets.</p>' +
            '<p>Your task is simple: break the system.</p>' +
            '<p>Take on missions. Build your rep. Uncover secrets. Burn down their influence—district by district.</p>' +
            '<p>This is your trial. Win it... and wake up. R002</p>',
    },
    {
        id: 'R002',
        title: 'Instructions',
        content: `<p><strong>Your first Steps:</strong></p>
            <p>Grab 2d6, a pen, and something to write on.</p>
            <p><strong>Know the Mechanics:</strong></p>
            <p>R003 &#8594; Time</p>
            <p>R004 &#8594; Nuyen</p>
            <p>R005 &#8594; Health</p>
            <p>R006 &#8594; Energy</p>
            <p>R007 &#8594; Reputation</p>
            <p>R008 &#8594; Heat</p>
            <p>R009 &#8594; Intel</p>
            <p>R010 &#8594; Dice</p>
            <p>R011 &#8594; Matrix</p>
            <p><strong>Start your Adventure:</strong></p>
            <p>R012 &#8594; Character Creation</p>`,
    },
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
                        <li>Roll on the <strong>Event Matrix</strong> R401</li>
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
            <p>You'll need Intel to fund missions from <strong>Mr. Johnson</strong> (R601) to bring down the MegaCorp (R110).</p>
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
        id: 'R012',
        title: 'Character Creation',
        content: `<p><strong>Metatype:</strong></p>
            <p>Roll 1d6:</p>
            <ol>
                <li>R021 &#8594; Human</li>
                <li>R022 &#8594; Elf</li>
                <li>R023 &#8594; Dwarf</li>
                <li>R024 &#8594; Orc</li>
                <li>R025 &#8594; Troll</li>
                <li>Roll Again</li>
            </ol>
            <hr />
            <p><strong>Archetype:</strong></p>
            <p>Roll 1d6:</p>
            <ol>
                <li>R031 &#8594; Street Samurai</li>
                <li>R032 &#8594; Decker</li>
                <li>R033 &#8594; Rigger</li>
                <li>R034 &#8594; Mage</li>
                <li>R035 &#8594; Face</li>
                <li>R036 &#8594; Shaman</li>
            </ol>
            <hr />
            <p><strong>Background:</strong></p>
            <p>Your archetype is the tens digit.</p>
            <p>Roll 1d6:</p>
            <table>
                <thead>
                    <tr>
                        <th>2d6</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>R711</td>
                        <td>R712</td>
                        <td>R713</td>
                        <td>R714</td>
                        <td>R715</td>
                        <td>R716</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>R721</td>
                        <td>R722</td>
                        <td>R723</td>
                        <td>R724</td>
                        <td>R725</td>
                        <td>R726</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>R731</td>
                        <td>R732</td>
                        <td>R733</td>
                        <td>R734</td>
                        <td>R735</td>
                        <td>R736</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>R741</td>
                        <td>R742</td>
                        <td>R743</td>
                        <td>R744</td>
                        <td>R745</td>
                        <td>R746</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>R751</td>
                        <td>R752</td>
                        <td>R753</td>
                        <td>R754</td>
                        <td>R755</td>
                        <td>R756</td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>R761</td>
                        <td>R762</td>
                        <td>R763</td>
                        <td>R764</td>
                        <td>R765</td>
                        <td>R766</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <p><strong>Gear:</strong></p>
            <p>Choose one item for free from the Fixer's Workshop:</p>
            <ul>
                <li>
                    <strong>Power Gauntlets:</strong> +1 Strength
                </li>
                <li>
                    <strong>Nano-Tread Boots:</strong> +1 Agility
                </li>
                <li>
                    <strong>Reflex Enhancer Implant:</strong> +1 Reaction
                </li>
                <li>
                    <strong>Neural Interface Headset:</strong> +1 Logic
                </li>
                <li>
                    <strong>Synaptic Amplifier:</strong> +1 Intuition
                </li>
                <li>
                    <strong>Holo-Disguise Mask:</strong> +1 Charisma
                </li>
            </ul>
            <p>Apply the bonus to your player sheet.</p>
            <hr />
            <p><strong>Mode:</strong></p>
            <p>The mode grants you starting resources such as Health, Energy, Nuyen, and possibly Reputation.</p>
            <ul>
                <li>
                    <strong>Easy Mode:</strong>
                    <ul>
                        <li>15.000 ¥</li>
                        <li>10 Health</li>
                        <li>10 Energy</li>
                        <li>2 Reputation</li>
                    </ul>
                </li>
                <li>
                    <strong>Medium Mode:</strong>
                    <ul>
                        <li>10.000 ¥</li>
                        <li>8 Health</li>
                        <li>8 Energy</li>
                        <li>1 Reputation</li>
                    </ul>
                </li>
                <li>
                    <strong>Hard Mode:</strong>
                    <ul>
                        <li>5.000 ¥</li>
                        <li>6 Health</li>
                        <li>6 Energy</li>
                    </ul>
                </li>
            </ul>
            <hr />
            <p><strong>(Optional) Name:</strong></p>
            <p>Each archetype has its own name pool:</p>
            <ul>
                <li>R041 &#8594; Street Samurai</li>
                <li>R042 &#8594; Decker</li>
                <li>R043 &#8594; Rigger</li>
                <li>R044 &#8594; Mage</li>
                <li>R045 &#8594; Face</li>
                <li>R046 &#8594; Shaman</li>
            </ul>
            <hr />
            <p>Now you're ready — head into <strong>NeonHollow</strong> and begin your adventure. R101</p>`,
    },
    {
        id: 'R014',
        title: 'Attributes',
        content:
            '<p>The main characteristics essential for skill checks are as follows:</p>' +
            '<ol><li><strong>Strength</strong> – The Power to Endure</li><li><strong>Agility</strong> – The Speed to Slip Between Shadows</li><li><strong>Reaction</strong> – The Edge That Comes Before Thought</li><li><strong>Logic</strong> – The Key That Unlocks Every Door</li><li><strong>Intuition</strong> – The Sixth Sense of the Streets</li><li><strong>Charisma</strong> – The Power That Doesn’t Need Guns</li></ol>',
    },
    {
        id: 'R015',
        title: 'Sheet',
        content: `<p>
                A fast-access reference sheet featuring the most essential rules
                and frequently used tables.
            </p>
            <p>
                <strong>Rules:</strong>
            </p>
            <p>
                <Link to="/R001">R001</Link> &#8594; Welcome to NeonHollow
            </p>
            <p>
                <Link to="/R002">R002</Link> &#8594; Instructions
            </p>
            <p>
                <strong>Matrix:</strong>
            </p>
            <p>
                <Link to="/R401">R401</Link> &#8594; Event Matrix
            </p>
            <p>
                <Link to="/R501">R501</Link> &#8594; Runner Matrix
            </p>
            <p>
                <strong>Mission:</strong>
            </p>
            <p>
                <Link to="/R602">R602</Link> &#8594; Rules
            </p>
            <p>
                <Link to="/R603">R603</Link> &#8594; Performance
            </p>`,
    },
    {
        id: 'R016',
        title: 'Well Done',
        content:
            '<p>The Corp is no more. You’ve dismantled their influence and shattered their operations. <strong>NeonHollow</strong> will breathe easier now, though it will take time for the dust to settle.</p>' +
            '<p>You’ve done well — this victory may be only the beginning of something bigger. Still, tonight, you’ve earned your place among the shadows.</p>' +
            '<p>You notice the lights dimming, gradually fading until everything is engulfed in complete darkness.</p>' +
            '<p>From afar, a familiar sound echoes...</p>' +
            '<p><em>"Wake up, Shadowrunner. You are worthy."</em></p>',
    },
    {
        id: 'R017',
        title: 'Overwhelmingly Great',
        content:
            '<p>The Corp has crumbled. You’ve not only crushed their empire, you’ve sent shockwaves through the entire city. News of their downfall spreads like wildfire, and for once, it’s the people of <strong>NeonHollow</strong> who are celebrating.</p>' +
            '<p>The city is yours, and you’ve rewritten its future in a single, devastating blow. Your name will be whispered in awe across the streets for years to come.</p>' +
            '<p>You notice the lights dimming, gradually fading until everything is engulfed in complete darkness.</p>' +
            '<p>From afar, a familiar sound echoes...</p>' +
            '<p><em>"Wake up, Shadowrunner. You are worthy."</em></p>',
    },
]
