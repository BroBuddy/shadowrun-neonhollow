export const Town = [
    {
        id: 'R101',
        title: 'NeonHollow',
        content: `<p class="flex items-center justify-center"><img src="/images/NeonHollow.jpg" alt="NeonHollow" /></p>
            <p><em>"Where the lights never die — only the people do."</em></p>
            <p><strong>District Lockdowns:</strong></p>
            <ul>
                <li>Heat 2 &#8594; Security District</li>
                <li>Heat 3 &#8594; Entertainment District</li>
                <li>Heat 4 &#8594; Industrial District</li>
            </ul>
            <p><strong>Security District:</strong></p>
            <div class="flex gap-8">
                <div class="flex-1 basis-1/3">
                    <p>CorpTower<br />
                    R110</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>PatrolHub<br />
                    R120</p>
                </div>
                <div class="flex-1 basis-1/3">
                </div>
            </div>
            <p><strong>Entertainment District:</strong></p>
            <div class="flex gap-8">
                <div class="flex-1 basis-1/3">
                    <p>BioCare<br />
                    R130</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>HoloLounge<br />
                    R140</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>DreamSphere<br />
                    R150</p>
                </div>
            </div>
            <p><strong>Industrial District:</strong></p>
            <div class="flex gap-8">
                <div class="flex-1 basis-1/3">
                    <p>EchoGarden<br />
                    R160</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>IronGym<br />
                    R170</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>NeuralNexus<br />
                    R180</p>
                </div>
            </div>
            <p><strong>Underground District:</strong></p>
            <div class="flex gap-8">
                <div class="flex-1 basis-1/3">
                    <p>SmugglerDen<br />
                    R190</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>ZeroZone<br />
                    R200</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>SafeHouse<br />
                    R210</p>
                </div>
            </div>
            <hr />
            <p>Dive into the rules (R102) to get a taste of how things run at <strong>NeonHollow</strong>.</p>`,
    },
    {
        id: 'R102',
        title: 'NeonHollow: Rules',
        content: `<p>Start each day at your underground <strong>SafeHouse</strong>.</p>
            <p>Moving between districts costs <strong>1 Energy</strong>. Upon entering a building, roll on the <strong>Entry Table</strong>.</p>
            <p>Every action consumes <strong>1 hour</strong> of your time. After every action, roll <strong>1d6</strong> to check for a random event. If the roll exceeds your available hours, no event triggers.</p>
            <p>When a town event unfolds, roll on the <strong>Event Matrix</strong>. If no town event occurs, you may visit <strong>Mr. Johnson</strong>.</p>
            <p>A day ends when a town event occurs or when you accept a mission from Mr. Johnson.</p>`,
    },
    {
        id: 'R110',
        title: 'NeonHollow: CorpTower',
        content: `<p class="flex items-center justify-center"><img src="/images/CorpTower.jpg" alt="CorpTower" /></p>
            <p><em>"Order. Control. Perfection."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ol start="2">
                <li><strong>Access Denied</strong> &#8594; Move out &#8594; +1 Hour</li>
                <li><strong>Retina Scan Error</strong> &#8594; +1 Heat</li>
                <li><strong>System Loop</strong> &#8594; -1 Intuition Temporary</li>
                <li><strong>Unauthorized Access</strong> &#8594; -1.000 ¥</li>
                <li><strong>Overwatched</strong> &#8594; -1 Energy</li>
                <li><strong>Standard Procedure</strong> &#8594; No Effect</li>
                <li><strong>Fast Pass</strong> &#8594; +1 Energy</li>
                <li><strong>Corporate Favor</strong> &#8594; +1.000 ¥</li>
                <li><strong>Clean Record</strong> &#8594; -1 Heat</li>
                <li><strong>Silent Support</strong> &#8594; +1 Intuition Temporary</li>
                <li><strong>Data Whisper</strong> &#8594; +1 Intel</li>
            </ol>
            <p><strong>Protest Persuasion:</strong></p>
            <ul>
                <li>Spend <strong>2 Energy</strong> &#8594; Roll 2d6</li>
                <li>Add <strong>Reaction</strong> or <strong>Charisma</strong></li>
                <li>See R303 &#8594; Nuyen</li>
            </ul>
            <p><strong>Espionage Assignment:</strong></p>
            <ul>
                <li>Spend <strong>1 Health</strong> &#8594; Roll 2d6 &#8594; <strong>-2</strong></li>
                <li>Add <strong>Agility</strong> or <strong>Reaction</strong></li>
                <li>See R305 &#8594; Intel</li>
            </ul>`,
    },
    {
        id: 'R120',
        title: 'NeonHollow: PatrolHub',
        content: `<p class="flex items-center justify-center"><img src="/images/PatrolHub.jpg" alt="PatrolHub" /></p>
            <p><em>"The law's last flicker."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ol start="2">
                <li><strong>Access Denied</strong> &#8594; Move out &#8594; +1 Hour</li>
                <li><strong>Heavy Watch</strong> &#8594; +1 Heat</li>
                <li><strong>Scanner Malfunction</strong> &#8594; -1 Health</li>
                <li><strong>Interrogation Mix-Up</strong> &#8594; -1.000 ¥</li>
                <li><strong>Paperwork Hell</strong> &#8594; -1 Energy</li>
                <li><strong>Standard Procedure</strong> &#8594; No Effect</li>
                <li><strong>Free Escort</strong> &#8594; +1 Energy</li>
                <li><strong>Stopping a Robbery</strong> &#8594; +1 Reputation</li>
                <li><strong>Case Glitch</strong> &#8594; -1 Heat</li>
                <li><strong>Stopping a Desperate Escape</strong> &#8594; +1 Strength Temporary</li>
                <li><strong>Confidential Boost</strong> &#8594; +1 Intel</li>
            </ol>
            <p><strong>Silence the Badge:</strong></p>
            <ul>
                <li>Pay <strong>2.000 ¥</strong> &#8594; Roll 2d6</li>
                <li>Add <strong>Logic</strong> or <strong>Charisma</strong></li>
                <li>See R304 &#8594; Heat</li>
            </ul>
            <p><strong>Bounty Pursuit:</strong></p>
            <ul>
                <li>Spend <strong>1 Health</strong> &#8594; Roll 2d6 &#8594; <strong>-2</strong></li>
                <li>Add <strong>Strength</strong> or <strong>Agility</strong></li>
                <li>See R303 &#8594; Nuyen</li>
            </ul>`,
    },
    {
        id: 'R130',
        title: 'NeonHollow: BioCare',
        content: `<p class="flex items-center justify-center"><img src="/images/BioCare.jpg" alt="BioCare" /></p>
            <p><em>"Healing flesh, not souls."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ol start="2">
                <li><strong>Access Denied</strong> &#8594; Move out &#8594; +1 Hour</li>
                <li><strong>Rogue Doc Encounter</strong> &#8594; +1 Heat</li>
                <li><strong>Suspicious Scan</strong> &#8594; -1 Agility Temporary</li>
                <li><strong>Security Screening</strong> &#8594; -1 Health</li>
                <li><strong>Delayed Appointment</strong> &#8594; -1 Energy</li>
                <li><strong>Standard Procedure</strong> &#8594; No Effect</li>
                <li><strong>Quick Service</strong> &#8594; +1 Energy</li>
                <li><strong>Strange Gift</strong> &#8594; +1.000 ¥</li>
                <li><strong>Relaxed Environment</strong> &#8594; +1 Charisma Temporary</li>
                <li><strong>Lucky Break</strong> &#8594; +1 Agility Temporary</li>
                <li><strong>VIP Escort</strong> &#8594; +1 Reputation</li>
            </ol>
            <p><strong>Nano Restoration:</strong></p>
            <ul>
                <li>Pay <strong>3.000 ¥</strong> &#8594; Roll 2d6 &#8594; <strong>+2</strong></li>
                <li>Add <strong>Strength</strong> or <strong>Agility</strong></li>
                <li>See R301 &#8594; Health</li>
            </ul>
            <p><strong>Donate Plasma:</strong></p>
            <ul>
                <li>Spend <strong>1 Health</strong> &#8594; Roll 2d6 &#8594; <strong>-2</strong></li>
                <li>Add <strong>Strength</strong> or <strong>Agility</strong></li>
                <li>See R303 &#8594; Nuyen</li>
            </ul>
            <p><strong>Agility Recalibration:</strong></p>
            <ul>
                <li>Pay <strong>1.000 ¥</strong> per point of Agility</li>
                <li>Roll 2d6 &#8594; Add 10 &#8594; Subtract Agility</li>
                <li>See R306 &#8594; Attribute</li>
            </ul>`,
    },
    {
        id: 'R140',
        title: 'NeonHollow: HoloLounge',
        content: `<p class="flex items-center justify-center"><img src="/images/HoloLounge.jpg" alt="HoloLoungeoCare" /></p>
            <p><em>"Reality? Optional."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ol start="2">
                <li><strong>Access Denied</strong> &#8594; Move out &#8594; +1 Hour</li>
                <li><strong>Unwanted Attention</strong> &#8594; +1 Heat</li>
                <li><strong>Bar Fight Breaks Out</strong> &#8594; -1 Health</li>
                <li><strong>Data Corruption</strong> &#8594; -1.000 ¥</li>
                <li><strong>Exotic Drink Offer</strong> &#8594; -1 Energy</li>
                <li><strong>Standard Procedure</strong> &#8594; No Effect</li>
                <li><strong>Lucky Encounter</strong> &#8594; +1 Energy</li>
                <li><strong>HoloLounge Jackpot</strong> &#8594; +1.000 ¥</li>
                <li><strong>Free Round</strong> &#8594; +1 Health</li>
                <li><strong>HoloShow Surprise</strong> &#8594; +1 Intuition Temporary</li>
                <li><strong>VIP Table Reserved</strong> &#8594; +1 Reputation</li>
            </ol>
            <p><strong>High-Stakes Gambling:</strong></p>
            <ul>
                <li>Pay <strong>3.000 ¥</strong> &#8594; Roll 2d6 &#8594; <strong>+2</strong></li>
                <li>Add <strong>Agility</strong> or <strong>Charisma</strong></li>
                <li>See R303 &#8594; Nuyen</li>
            </ul>
            <p><strong>Social Recharge:</strong></p>
            <ul>
                <li>Spend <strong>2 Energy</strong> &#8594; Roll 2d6</li>
                <li>Add <strong>Intuition</strong> or <strong>Charisma</strong></li>
                <li>See R302 &#8594; Energy</li>
            </ul>
            <p><strong>Charisma Negotiation:</strong></p>
            <ul>
                <li>Pay <strong>1.000 ¥</strong> per point of Charisma</li>
                <li>Roll 2d6 &#8594; Add 10 &#8594; Subtract Charisma</li>
                <li>See R306 &#8594; Attribute</li>
            </ul>`,
    },
    {
        id: 'R150',
        title: 'NeonHollow: DreamSphere',
        content: `<p class="flex items-center justify-center"><img src="/images/DreamSphere.jpg" alt="DreamSphere" /></p>
            <p><em>"Where your nightmares become hobbies."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ol start="2">
                <li><strong>Access Denied</strong> &#8594; Move out &#8594; +1 Hour</li>
                <li><strong>Eyes on You</strong> &#8594; +1 Heat</li>
                <li><strong>Welcome Drink Fail</strong> &#8594; -1 Health</li>
                <li><strong>Payment Verification Loop</strong> &#8594; -1.000 ¥</li>
                <li><strong>Security Delay</strong> &#8594; -1 Energy</li>
                <li><strong>Standard Procedure</strong> &#8594; No Effect</li>
                <li><strong>Complimentary Sleep Enhancer</strong> &#8594; +1 Energy</li>
                <li><strong>Lucky Find</strong> &#8594; +1.000 ¥</li>
                <li><strong>DreamBoost Package</strong> &#8594; +1 Health</li>
                <li><strong>VIP Recognition</strong> &#8594; +1 Intuition Temporary</li>
                <li><strong>Lucid Experience Access</strong> &#8594; +1 Reputation</li>
            </ol>
            <p><strong>Energetic Reboot:</strong></p>
            <ul>
                <li>Pay <strong>3.000 ¥</strong> &#8594; Roll 2d6 &#8594; <strong>+2</strong></li>
                <li>Add <strong>Reaction</strong> or <strong>Intuition</strong></li>
                <li>See R302 &#8594; Energy</li>
            </ul>
            <p><strong>Memory Mining:</strong></p>
            <ul>
                <li>Spend <strong>1 Energy</strong> &#8594; Roll 2d6 &#8594; <strong>-2</strong></li>
                <li>Add <strong>Strength</strong> or <strong>Agility</strong></li>
                <li>See R303 &#8594; Nuyen</li>
            </ul>
            <p><strong>Reaction Sharpening:</strong></p>
            <ul>
                <li>Pay <strong>1.000 ¥</strong> per point of Reaction</li>
                <li>Roll 2d6 &#8594; Add 10 &#8594; Subtract Reaction</li>
                <li>See R306 &#8594; Attribute</li>
            </ul>`,
    },
    {
        id: 'R160',
        title: 'EchoGarden',
        content: `<p class="flex items-center justify-center"><img src="/images/EchoGarden.jpg" alt="EchoGarden" /></p>
            <p><em>"The city’s memory grows here."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ol start="2">
                <li><strong>Access Denied</strong> &#8594; Move out &#8594; +1 Hour</li>
                <li><strong>Rival Sighting</strong> &#8594; +1 Heat</li>
                <li><strong>Scanner Surge</strong> &#8594; -1 Reaction Temporary</li>
                <li><strong>Toxic Pollen</strong> &#8594; -1 Health</li>
                <li><strong>Unstable Ground</strong> &#8594; -1 Energy</li>
                <li><strong>Standard Procedure</strong> &#8594; No Effect</li>
                <li><strong>Urban Bloom</strong> &#8594; +1 Energy</li>
                <li><strong>Forgotten Cache</strong> &#8594; +1.000 ¥</li>
                <li><strong>Peaceful Enlightenment</strong> &#8594; +1 Reaction Temporary</li>
                <li><strong>Old Contact</strong> &#8594; +1 Intel</li>
                <li><strong>Street Melody</strong> &#8594; -1 Heat</li>
            </ol>
            <p><strong>Vital Rejuvenation:</strong></p>
            <ul>
                <li>Pay <strong>1.000 ¥</strong> &#8594; Roll 2d6 &#8594; <strong>-2</strong></li>
                <li>Add <strong>Strength</strong> or <strong>Intuition</strong></li>
                <li>See R301 &#8594; Health</li>
            </ul>
            <p><strong>Cooling Meditation:</strong></p>
            <ul>
                <li>Spend <strong>1 Energy</strong> &#8594; Roll 2d6 &#8594; <strong>-2</strong></li>
                <li>Add <strong>Agility</strong> or <strong>Intuition</strong></li>
                <li>See R304 &#8594; Heat</li>
            </ul>
            <p><strong>Intuition Awareness:</strong></p>
            <ul>
                <li>Pay <strong>1.000 ¥</strong> per point of Intuition</li>
                <li>Roll 2d6 &#8594; Add 10 &#8594; Subtract Intuition</li>
                <li>See R306 &#8594; Attribute</li>
            </ul>`,
    },
    {
        id: 'R170',
        title: 'IronGym',
        content: `<p class="flex items-center justify-center"><img src="/images/IronGym.jpg" alt="IronGym" /></p>
            <p><em>"Muscle isn't old-school — it's survival."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ol start="2">
                <li><strong>Access Denied</strong> &#8594; Move out &#8594; +1 Hour</li>
                <li><strong>Deceptive Contestant</strong> &#8594; +1 Heat</li>
                <li><strong>Uneven Barbell</strong> &#8594; -1 Agility Temporary</li>
                <li><strong>Overzealous Spotter</strong> &#8594; -1 Health</li>
                <li><strong>Broken Equipment</strong> &#8594; -1 Energy</li>
                <li><strong>Standard Procedure</strong> &#8594; No Effect</li>
                <li><strong>Endurance Boost</strong> &#8594; +1 Energy</li>
                <li><strong>Forgotten Protein Shake</strong> &#8594; +1.000 ¥</li>
                <li><strong>Coaching Session</strong> &#8594; +1 Reputation</li>
                <li><strong>Post-Workout Rush</strong> &#8594; +1 Agility Temporary</li>
                <li><strong>Lucky Break</strong> &#8594; +1 Intel</li>
            </ol>
            <p><strong>Muscle Recover:</strong></p>
            <ul>
                <li>Spend <strong>2 Energy</strong> &#8594; Roll 2d6</li>
                <li>Add <strong>Strength</strong> or <strong>Reaction</strong></li>
                <li>See R301 &#8594; Health</li>
            </ul>
            <p><strong>Strength Conditioning:</strong></p>
            <ul>
                <li>Pay <strong>1.000 ¥</strong> per point of Strength</li>
                <li>Roll 2d6 &#8594; Add 10 &#8594; Subtract Strength</li>
                <li>See R306 &#8594; Attribute</li>
            </ul>`,
    },
    {
        id: 'R180',
        title: 'NeonHollow: NeuralNexus',
        content: `<p class="flex items-center justify-center"><img src="/images/NeuralNexus.jpg" alt="NeuralNexus" /></p>
            <p><em>"Where minds meet machines."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ol start="2">
                <li><strong>Access Denied</strong> &#8594; Move out &#8594; +1 Hour</li>
                <li><strong>System Error</strong> &#8594; +1 Heat</li>
                <li><strong>Research Malfunction</strong> &#8594; -1 Health</li>
                <li><strong>Data Breach</strong> &#8594; -1.000 ¥</li>
                <li><strong>Unscheduled Maintenance</strong> &#8594; -1 Energy</li>
                <li><strong>Standard Procedure</strong> &#8594; No Effect</li>
                <li><strong>Unexpected Discovery</strong> &#8594; +1 Energy</li>
                <li><strong>Corporate Funding</strong> &#8594; +1.000 ¥</li>
                <li><strong>Secret Research</strong> &#8594; -1 Heat</li>
                <li><strong>Professor's Favor</strong> &#8594; +1 Reputation</li>
                <li><strong>Study Break</strong> &#8594; +1 Intel</li>
            </ol>
            <p><strong>Data Extraction:</strong></p>
            <ol>
                <li>Spend <strong>3 Energy</strong> &#8594; Roll 2d6 &#8594; <strong>+2</strong></li>
                <li>Add <strong>Reaction</strong> or <strong>Logic</strong></li>
                <li>See R305 &#8594; Intel</li>
            </ol>
            <p><strong>Neural Sync Boost:</strong></p>
            <ol>
                <li>Pay <strong>1.000 ¥</strong> &#8594; Roll 2d6 &#8594; <strong>-2</strong></li>
                <li>Add <strong>Logic</strong> or <strong>Intuition</strong></li>
                <li>See R302 &#8594; Energy</li>
            </ol>
            <p><strong>Logic Refinement:</strong></p>
            <ul>
                <li>Pay <strong>1.000 ¥</strong> per point of Logic</li>
                <li>Roll 2d6 &#8594; Add 10 &#8594; Subtract Logic</li>
                <li>See R306 &#8594; Attribute</li>
            </ul>`,
    },
    {
        id: 'R190',
        title: 'NeonHollow: SmugglerDen',
        content: `<p class="flex items-center justify-center"><img src="/images/SmugglerDen.jpg" alt="SmugglerDen" /></p>
            <p><em>"The city's forgotten veins."</em></p>
            <p><strong>False Credentials:</strong></p>
            <ol>
                <li>Pay <strong>3.000 ¥</strong> &#8594; Roll 2d6 &#8594; <strong>+2</strong></li>
                <li>Add <strong>Agility</strong> or <strong>Logic</strong></li>
                <li>See R304 &#8594; Heat</li>
            </ol>
            <p><strong>Corrupted Files:</strong></p>
            <ol>
                <li>Pay <strong>2.000 ¥</strong> &#8594; Roll 2d6</li>
                <li>Add <strong>Strength</strong> or <strong>Logic</strong></li>
                <li>See R305 &#8594; Intel</li>
            </ol>`,
    },
    {
        id: 'R200',
        title: 'NeonHollow: ZeroZone',
        content: `<p class="flex items-center justify-center"><img src="/images/ZeroZone.jpg" alt="ZeroZone" /></p>
            <p><em>"Where the shadows test their own."</em></p>
            <p><strong>Recruit a Runner:</strong></p>
            <ol>
                <li>You must have at least <strong>8.000 ¥</strong> available</li>
                <li>Roll on the Runner Matrix (N001)</li>
                <li>Remember the two highest Attributes</li>
                <li>Roll your <strong>Charisma</strong> and another <strong>Attribute</strong></li>
                <li>See R307 &#8594; Runner</li>
            </ol>
            <p><strong>Challenge a Runner:</strong></p>
            <ol>
                <li>
                    <strong>Select Combat Type:</strong>
                    <ul>
                        <li><strong>Close-Combat:</strong> Strength, Agility</li>
                        <li><strong>Hacking Assault: </strong> Reaction, Logic</li>
                        <li><strong>Psionic Warfare:</strong> Intuition, Charisma</li>
                    </ul>
                </li>
                <li>
                    <strong>Opponent Generation:</strong>
                    <ul>
                        <li>Roll on the <strong>Runner Matrix</strong> (R501) to identify your opponent.</li>
                    </ul>
                </li>
                <li>
                    <strong>Attribute Clash:</strong>
                    <ul>
                        <li>Roll 2d6 for each relevant attribute</li>
                        <li>Add your attribute score to each roll</li>
                        <li>Subtract opponent’s corresponding attribute</li>
                    </ul>
                </li>
                <li>Add both attribute results to determine outcome.</li>
                <li>See R303 &#8594; Nuyen</li>
            </ol>`,
    },
    {
        id: 'R210',
        title: 'NeonHollow: SafeHouse',
        content: `<p class="flex items-center justify-center"><img src="/images/SafeHouse.jpg" alt="SafeHouse" /></p>
            <p><em>"No names. No noise. No light."</em></p>
            <p><strong>Stimulant Injection:</strong></p>
            <ul>
                <li>-3 Health &#8594; +1d6 Energy</li>
            </ul>
            <p><strong>Quick Reboot:</strong></p>
            <ul>
                <li>-3 Energy &#8594; +1d6 Health</li>
            </ul>
            <p><strong>Public Appeal:</strong></p>
            <ul>
                <li>-3 Reputation &#8594; -1d6 Heat</li>
            </ul>
            <p><strong>Blackmail Bargain:</strong></p>
            <ul>
                <li>-1 Intel &#8594; +1d6x1.000 ¥</li>
            </ul>`,
    },
    {
        id: 'R301',
        title: 'Outcome: Health',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>
                2-5: <strong>Critical Failure</strong> – The treatment backfires, causing harm.
                <ul>
                    <li>-2 Health, +1 Heat</li>
                </ul>
            </li>
            <li>
                6-8: <strong>Failure</strong> – Healing stalls. You’re patched, but need more time.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>
                9-11: <strong>Standard</strong> – Treatment kicks in slowly, stabilizing you.
                <ul>
                    <li>+2 Health, +1 Energy</li>
                </ul>
            </li>
            <li>
                12-14: <strong>Good</strong> – Cells respond well, and you feel stronger.
                <ul>
                    <li>+4 Health, +2 Energy</li>
                </ul>
            </li>
            <li>
                15-17: <strong>Great</strong> – Nanites accelerate healing, and you gain energy.
                <ul>
                    <li>+6 Health, +3 Energy, +1 Reputation</li>
                </ul>
            </li>
            <li>
                18+: <strong>Exceptional</strong> – Perfect recovery. You feel better than ever.
                <ul>
                    <li>+8 Health, +4 Energy, +1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R302',
        title: 'Outcome: Energy',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>
                2-5: <strong>Critical Failure</strong> – The treatment leaves you feeling more drained than before.
                <ul>
                    <li>-2 Energy, +1 Heat</li>
                </ul>
            </li>
            <li>
                6-8: <strong>Failure</strong> – The process does little to restore your energy, but you feel slightly better.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>
                9-11: <strong>Standard</strong> – You start to regain some energy, though not at full capacity.
                <ul>
                    <li>+2 Energy, +1 Health</li>
                </ul>
            </li>
            <li>
                12-14: <strong>Good</strong> – The treatment has a noticeable effect, and you feel more refreshed.
                <ul>
                    <li>+4 Energy, +2 Health</li>
                </ul>
            </li>
            <li>
                15-17: <strong>Great</strong> – Your energy is fully restored, and you feel recharged.
                <ul>
                    <li>+6 Energy, +3 Health, +1 Reputation</li>
                </ul>
            </li>
            <li>
                18+: <strong>Exceptional</strong> – You feel fully revitalized, bursting with energy and vitality.
                <ul>
                    <li>+8 Energy, +4 Health, +1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R303',
        title: 'Outcome: Nuyen',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>
                2-5: <strong>Critical Failure</strong> – The job backfired or was a setup.
                <ul>
                    <li>+1 Heat</li>
                </ul>
            </li>
            <li>
                6-8: <strong>Failure</strong> – You earned something, but it's barely worth the risk.
                <ul>
                    <li>3.000 ¥</li>
                </ul>
            </li>
            <li>
                9-11: <strong>Standard</strong> – A modest payout for solid work.
                <ul>
                    <li>6.000 ¥</li>
                </ul>
            </li>
            <li>
                12-14: <strong>Good</strong> – A smooth job and fair compensation.
                <ul>
                    <li>9.000 ¥</li>
                </ul>
            </li>
            <li>
                15-17: <strong>Great</strong> – The plan worked perfectly and paid well.
                <ul>
                    <li>12.000 ¥, +1 Reputation</li>
                </ul>
            </li>
            <li>
                18+: <strong>Exceptional</strong> – Flawless execution, and the money shows it.
                <ul>
                    <li>15.000 ¥, +1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R304',
        title: 'Outcome: Heat',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>
                2-5: <strong>Critical Failure</strong> – Your actions attract major attention from the authorities.
                <ul>
                    <li>+2 Heat</li>
                </ul>
            </li>
            <li>
                6-8: <strong>Failure</strong> – You leave behind traces that raise suspicion.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>
                9-11: <strong>Standard</strong> – You keep a low profile, but eyes are still on you.
                <ul>
                    <li>-1 Heat</li>
                </ul>
            </li>
            <li>
                12-14: <strong>Good</strong> – You take extra precautions and shake off pursuit.
                <ul>
                    <li>-2 Heat</li>
                </ul>
            </li>
            <li>
                15-17: <strong>Great</strong> – You reroute your trail and erase your digital footprint.
                <ul>
                    <li>-3 Heat, +1 Reputation</li>
                </ul>
            </li>
            <li>
                18+: <strong>Exceptional</strong> – Your actions are so clean, you’re mistaken for a civilian.
                <ul>
                    <li>-4 Heat, +1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R305',
        title: 'Outcome: Intel',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>2-5: <strong>Critical Failure</strong> – Your attempt to gather intel fails miserably
                <ul>
                    <li>+1 Heat</li>
                </ul>
            </li>
            <li>6-8: <strong>Failure</strong> – You recover minor insight, but it’s not enough
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>9-11: <strong>Standard</strong> – You gather basic intel that may be useful
                <ul>
                    <li>+1 Intel</li>
                </ul>
            </li>
            <li>12-14: <strong>Good</strong> – The intel you collect is solid
                <ul>
                    <li>+2 Intel</li>
                </ul>
            </li>
            <li>15-17: <strong>Great</strong> – Your intel collection goes exceptionally well
                <ul>
                    <li>+3 Intel, +1 Reputation</li>
                </ul>
            </li>
            <li>18+: <strong>Exceptional</strong> – You uncover crucial and highly valuable intelligence
                <ul>
                    <li>+4 Intel, +1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R306',
        title: 'Outcome: Attribute',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>
                2-5: <strong>Critical Failure</strong> – Your system rejects the implant violently.
                <ul>
                    <li>+1 Heat</li>
                </ul>
            </li>
            <li>
                6-8: <strong>Failure</strong> – The enhancement doesn’t sync well with your body.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>
                9-11: <strong>Standard</strong> – The enhancement settles in properly.
                <ul>
                    <li>+1 to Attribute Temporary</li>
                </ul>
            </li>
            <li>
                12-14: <strong>Good</strong> – You feel sharp, fast, and focused.
                <ul>
                    <li>+1 to Attribute</li>
                </ul>
            </li>
            <li>
                15-17: <strong>Great</strong> – Your body and mind align perfectly with the upgrade.
                <ul>
                    <li>+1 to Attribute, +1 to Attribute Temporary, +1 Reputation</li>
                </ul>
            </li>
            <li>
                18+: <strong>Exceptional</strong> – The upgrade merges seamlessly with your essence.
                <ul>
                    <li>+2 to Attribute, +1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R307',
        title: 'Outcome: Runner',
        content: `<p>The number determines the outcome of the action.</p>
        <ul>
            <li>
                2-5: <strong>Critical Failure</strong> – No interest, dismisses the offer.
                <ul>
                    <li>+1 Heat</li>
                </ul>
            </li>
            <li>
                6-8: <strong>Failure</strong> – You’ve hired a runner, but it’s going to cost you dearly.
                <ul>
                    <li>-8.000 ¥, 1. Attribute Temporary</li>
                </ul>
            </li>
            <li>
                9-11: <strong>Standard</strong> – The runner’s skill set is solid, but they’re not exactly cheap.
                <ul>
                    <li>-7.000 ¥, 1. Attribute Temporary, 2. Attribute Temporary</li>
                </ul>
            </li>
            <li>
                12-14: <strong>Good</strong> – The runner's price is what you would expect for their skill level.
                <ul>
                    <li>-6.000 ¥, 1. Attribute</li>
                </ul>
            </li>
            <li>
                15-17: <strong>Great</strong> – You’ve managed to secure a solid deal for this runner.
                <ul>
                    <li>-5.000 ¥, 1. Attribute, 2. Attribute Temporary, +1 Reputation</li>
                </ul>
            </li>
            <li>
                18+: <strong>Exceptional</strong> – You’ve managed to convince the runner to work for less than their usual rate.
                <ul>
                    <li>-4.000 ¥, 1. Attribute, 2. Attribute, +1 Reputation</li>
                </ul>
            </li>
        </ol>`,
    },
]
