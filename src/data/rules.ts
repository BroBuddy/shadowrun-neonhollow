export const Rules = [
    {
        id: 'R001',
        title: 'Welcome to NeonHollow',
        content:
            '<p>You’re inside a full-spectrum neural simulation, created by rogue deckers and ex-corp AIs to test potential shadowrunners in a city twisted by corporate control. Everything you see, every sound, every face, every choice—fabricated to push you to your limits.</p>' +
            '<p>The megacorp dominates this simulation like it does the real world. It watches, it hunts, and it controls every district—just like it will when you jack out of this and hit the actual streets.</p>' +
            '<p>Your task is simple: break the system.</p>' +
            '<p>Take on missions. Build your rep. Uncover secrets. Burn down their influence—district by district.</p>' +
            '<p>This is your trial. Win it... and wake up. (R002)</p>',
    },
    {
        id: 'R002',
        title: 'Instructions',
        content:
            '<p><strong>Your First Steps into NeonHollow:</strong></p>' +
            '<ol>' +
            '<li><strong>Suit Up</strong> – Grab 2d6, a pen, and something to write on. That’s your loadout.</li>' +
            '<li><strong>Create Your Runner</strong> (R003) – Build the shadow operative who’ll face the city’s dark corners.</li>' +
            '<li><strong>Know The Mechanics</strong>' +
            '<ul><li>Health (R005)</li><li>Energy (R006)</li><li>Reputation (R007)</li><li>Heat (R008)</li><li>Intel (R010)</li><li>Time (R011)</li><li>Dice (R012)</li></ul></li>' +
            '<li><strong>Enter NeonHollow</strong> (R101) – The city’s waiting. Time to make your move.</li>' +
            '</ol>',
    },
    {
        id: 'R003',
        title: 'Character Creation',
        content:
            '<p>Follow this guide to build your runner before diving into the shadows.</p>' +
            '<ol><li>(R020) Metatype</li><li>(R030) Archetype</li><li>(R701) Background</li><li>(R040) Name</li><li>(R050) Gear</li><li>(R060) Mode</li></ol>' +
            '<p>When rolling for a random attribute, refer to the attribute details for guidance (R004).</p>',
    },
    {
        id: 'R004',
        title: 'Attributes',
        content:
            '<p>The main characteristics essential for skill checks are as follows:</p>' +
            '<ol><li><strong>Strength</strong> – The Power to Endure</li><li><strong>Agility</strong> – The Speed to Slip Between Shadows</li><li><strong>Reaction</strong> – The Edge That Comes Before Thought</li><li><strong>Logic</strong> – The Key That Unlocks Every Door</li><li><strong>Intuition</strong> – The Sixth Sense of the Streets</li><li><strong>Charisma</strong> – The Power That Doesn’t Need Guns</li></ol>',
    },
    {
        id: 'R005',
        title: 'Health Mechanic',
        content: `<p>Health ranges from 0 to 10 and cannot exceed these limits.</p>
            <p>If your Health reaches 0, you're effectively dead – just virtually speaking.</p>
            <p><strong>Main Sources:</strong></p>
            <ol>
                <li>BioCare</li>
                <li>IronGym</li>
                <li>EchoGarden</li>
            </ol>`,
    },
    {
        id: 'R006',
        title: 'Energy Mechanic',
        content: `<p>Energy ranges from 0 to 10 and cannot exceed these limits.</p>
            <p>Each point below 0 will cost you <strong>1 Health</strong> point instead. Entering a district will costs you <strong>1 Energy</strong>.</p>
            <p><strong>Main Sources:</strong></p>
            <ol>
                <li>DreamSphere</li>
                <li>HoloLounge</li>
                <li>NeuralNexus</li>
            </ol>`,
    },
    {
        id: 'R007',
        title: 'Reputation Mechanic',
        content: `<p>Reputation ranges from 0 to 5 and cannot exceed these limits.</p>
            <p>Once per skill check, you may spend <strong>1 Reputation</strong> to gain an additional roll, which will overwrite any previous failed attempt.</p>
            <p><strong>Main Sources:</strong></p>
            <ol>
                <li>Skill Checks</li>
                <li>Town Events</li>
                <li>Mr. Johnson</li>
            </ol>`,
    },
    {
        id: 'R008',
        title: 'Heat Mechanic',
        content: `<p>The scale ranges from 0 to 5.</p>
            <p>At the end of the day, the corporation will track you down, draining your health and energy by an amount equal to your current heat level.</p>
            <p>The higher the heat level, the more town districts will lock down, restricting access to their services.</p>
            <p><strong>Main Sources:</strong></p>
            <ol>
                <li>SmugglerDen</li>
                <li>PatrolHub</li>
                <li>EchoGarden</li>
            </ol>`,
    },
    {
        id: 'R010',
        title: 'Intel Mechanic',
        content: `<p>Intel ranges from 0 to 5 and cannot exceed these limits.</p>
            <p>You'll need Intel to fund missions from <strong>Mr. Johnson</strong> (R601) to bring down the CorpTower (R110).</p>
            <p><strong>Main Sources:</strong></p>
            <ol>
                <li>NeuralNexus</li>
                <li>SmugglerDen</li>
                <li>CorpTower</li>
            </ol>`,
    },
    {
        id: 'R011',
        title: 'Time Mechanic',
        content: `<p>You’ve got <strong>7 Days</strong> to dismantle the system. Each cycle gives you <strong>7 Hours</strong> — use them wisely.</p>
            <p>For a detailed breakdown of how a day shift works, refer to the <strong>NeonHollow</strong> rules (R102).</p>`,
    },
    {
        id: 'R012',
        title: 'Dice Mechanic',
        content:
            '<p>When prompted to roll <strong>1d6</strong>, it means you must roll a single six-sided die — your fate resting on a number between 1 and 6.</p>' +
            '<p>Rolling <strong>2d6</strong> means tossing two six-sided dice and adding the results together.</p>' +
            '<p>For Matrix checks, throw two sixers: the first die gives you the tens, the second the ones.</p>' +
            '<p>Whenever you roll double ones, it triggers a critical glitch—data corruption, misfire, or worse. You immediately lose <strong>1 Intel</strong>.</p>' +
            '<p>On the flip side, if you roll double sixes, you strike digital gold: gain <strong>1 Intel</strong> as the shadows reward your precision.</p>',
    },
    {
        id: 'R013',
        title: 'Sheet',
        content: `<p>A fast-access reference sheet featuring the most essential rules and frequently used tables.</p>
            <p><strong>Mechanics:</strong></p>
            <ul>
                <li>Instructions (R002)</li>
                <li>Attributes (R004)</li>
            </ul>
            <p><strong>Runner:</strong></p>
            <ul>
                <li>Character Creation (R003)</li>
                <li>Matrix (R501)</li>
            </ul>
            <p><strong>Town:</strong></p>
            <ul>
                <li>Rules (R102)</li>
                <li>Events (R401)</li>
            </ul>
            <p><strong>Mission:</strong></p>
            <ul>
                <li>Rules (R602)</li>
                <li>Performance (R603)</li>
            </ul>`,
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
