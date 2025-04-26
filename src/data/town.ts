export const Town = [
    {
        id: 'R101',
        title: 'NeonHollow',
        content: `<p class="flex items-center justify-center"><img src="/images/NeonHollow.jpg" alt="NeonHollow" /></p>
            <p><em>"Where the lights never die — only the people do."</em></p>
            <p><strong>District Lockdowns:</strong></p>
            <ul>
                <li>Heat 1 &#8594; Quantum District</li>
                <li>Heat 2 &#8594; Serenity District</li>
                <li>Heat 3 &#8594; Vortex District</li>
            </ul>
            <hr />
            <p><strong>Quantum District:</strong></p>
            <div class="flex gap-8">
                <div class="flex-1 basis-1/3">
                    <p>MegaCorp<br />
                    R110</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>NeuralNexus<br />
                    R180</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>PatrolHub<br />
                    R120</p>
                </div>
            </div>
            <p><strong>Serenity District:</strong></p>
            <div class="flex gap-8">
                <div class="flex-1 basis-1/3">
                    <p>BioCare<br />
                    R130</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>EchoGarden<br />
                    R160</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>DreamSphere<br />
                    R150</p>
                </div>
            </div>
            <p><strong>Vortex District:</strong></p>
            <div class="flex gap-8">
                <div class="flex-1 basis-1/3">
                    <p>HoloLounge<br />
                    R140</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>IronGym<br />
                    R170</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>ZeroZone<br />
                    R200</p>
                </div>
            </div>
            <p><strong>Undercity District:</strong></p>
            <div class="flex gap-8">
                <div class="flex-1 basis-1/3">
                    <p>SmugglerDen<br />
                    R190</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>SafeHouse<br />
                    R210</p>
                </div>
                <div class="flex-1 basis-1/3">
                </div>
            </div>
            <hr />
            <p>Dive into the rules (R102) to get a taste of how things run at <strong>NeonHollow</strong>.</p>`,
    },
    {
        id: 'R102',
        title: 'Town Rules',
        content: `<p>Start each day at your private SafeHouse.</p>
            <p>Each entry into a building or completion of a designated action will incur a time cost of <strong>1 Hour</strong>.</p>
            <p>You can perform an action only once per day.</p>
            <p>At the end of the day, roll on the <strong>Event Matrix</strong> (R401) to uncover the happenings on the streets of NeonHollow.</p>
            <p>Got enough Intel by midnight? Time to visit Mr. Johnson for a mission — just don’t skip the hazard pay negotiations.</p>
            <p>After each mission, you return to your SafeHouse and a new day begins.</p>`,
    },
    {
        id: 'R110',
        title: 'MegaCorp',
        content: `<p class="flex items-center justify-center"><img src="/images/MegaCorp.jpg" alt="MegaCorp" /></p>
            <p><em>"Order. Control. Perfection."</em></p>
            <p>Use an action below to skip one of the first two missions. Actions are single-use, and the final mission cannot be skipped.</p>
            <p><strong>Incite Rebellion:</strong></p>
            <ul>
                <li>Spend <strong>5 Reputation</strong> &#8594; +2 Heat</li>
            </ul>
            <p><strong>Propaganda Campaign:</strong></p>
            <ul>
                <li>Pay <strong>30.000 ¥</strong> &#8594; +2 Heat</li>
            </ul>`,
    },
    {
        id: 'R120',
        title: 'PatrolHub',
        content: `<p class="flex items-center justify-center"><img src="/images/PatrolHub.jpg" alt="PatrolHub" /></p>
            <p><em>"The law's last flicker."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ul>
                <li>2: <strong>Patrol Check</strong> &#8594; See R472</li>
                <li>3-4: <strong>Security Breach</strong> &#8594; +1 Heat</li>
                <li>5-6: <strong>False Accusation</strong> &#8594; -1 Reputation</li>
                <li>7: <strong>Standard</strong> &#8594; No Effect</li>
                <li>8-9: <strong>Backup Support</strong> &#8594; +1 Energy</li>
                <li>10-11: <strong>Friendly Recognition</strong> &#8594; -1 Heat</li>
                <li>12: <strong>Security Clearance Boost</strong> &#8594; +1 Reputation</li>
            </ul>
            <hr />
            <p><strong>Silence the Badge:</strong></p>
            <ul>
                <li>Pay <strong>6.000 ¥</strong> &#8594; Roll 2d6 &#8594; <strong>+2</strong></li>
                <li>Add <strong>Strength</strong> or <strong>Charisma</strong></li>
                <li>See R304 &#8594; Reduce Heat</li>
            </ul>
            <p><strong>Bounty Pursuit:</strong></p>
            <ul>
                <li>Spend <strong>3 Health</strong> &#8594; Roll 2d6 &#8594; <strong>+2</strong></li>
                <li>Add <strong>Strength</strong> or <strong>Intuition</strong></li>
                <li>See R303 &#8594; Gain Nuyen</li>
            </ul>`,
    },
    {
        id: 'R130',
        title: 'BioCare',
        content: `<p class="flex items-center justify-center"><img src="/images/BioCare.jpg" alt="BioCare" /></p>
            <p><em>"Healing flesh, not souls."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ul>
                <li>2: <strong>Medical Malfunction</strong> &#8594; See R473</li>
                <li>3-4: <strong>Uncooperative Patient</strong> &#8594; +1 Heat</li>
                <li>5-6: <strong>Unsettling Diagnosis</strong> &#8594; -1 Health</li>
                <li>7: <strong>Standard</strong> &#8594; No Effect</li>
                <li>8-9: <strong>Energy Boost</strong> &#8594; +1 Energy</li>
                <li>10-11: <strong>Public Assistance</strong> &#8594; +1 Reputation</li>
                <li>12: <strong>Mysterious Encounter</strong> &#8594; See R483</li>
            </ul>
            <hr />
            <p><strong>Nano Restoration:</strong></p>
            <ul>
                <li>Pay <strong>6.000 ¥</strong> &#8594; Roll 2d6 &#8594; <strong>+2</strong></li>
                <li>Add <strong>Strength</strong> or <strong>Agility</strong></li>
                <li>See R301 &#8594; Gain Health</li>
            </ul>
            <p><strong>Donate Plasma:</strong></p>
            <ul>
                <li>Spend <strong>2 Health</strong> &#8594; Roll 2d6</li>
                <li>Add <strong>Agility</strong> or <strong>Reaction</strong></li>
                <li>See R303 &#8594; Gain Nuyen</li>
            </ul>
            <p><strong>Agility Recalibration:</strong></p>
            <ul>
                <li>Pay <strong>1.000 ¥</strong> per point of Agility</li>
                <li>Roll 2d6 &#8594; Add 10 &#8594; Subtract Agility</li>
                <li>See R306 &#8594; Improve Attribute</li>
            </ul>`,
    },
    {
        id: 'R140',
        title: 'HoloLounge',
        content: `<p class="flex items-center justify-center"><img src="/images/HoloLounge.jpg" alt="HoloLoungeoCare" /></p>
            <p><em>"Reality? Optional."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ul>
                <li>2: <strong>The Whisper Network</strong> &#8594; See R476</li>
                <li>3-4: <strong>Drunk and Disorderly</strong> &#8594; +1 Heat</li>
                <li>5-6: <strong>Toxic Cocktail</strong> &#8594; -1 Health</li>
                <li>7: <strong>Standard</strong> &#8594; No Effect</li>
                <li>8-9: <strong>Nutritious Snack</strong> &#8594; +1 Energy</li>
                <li>10-11: <strong>Winning Bet</strong> &#8594; +2.000 ¥</li>
                <li>12: <strong>Mysterious Encounter</strong> &#8594; See R486</li>
            </ul>
            <hr />
            <p><strong>Gambling Table:</strong></p>
            <ul>
                <li>Spend <strong>2 Energy</strong> &#8594; Roll 2d6</li>
                <li>Add <strong>Reaction</strong> or <strong>Charisma</strong></li>
                <li>See R303 &#8594; Gain Nuyen</li>
            </ul>
            <p><strong>Pay the Insider:</strong></p>
            <ul>
                <li>Pay <strong>4.000 ¥</strong> &#8594; Roll 2d6</li>
                <li>Add <strong>Intuition</strong> or <strong>Charisma</strong></li>
                <li>See R305 &#8594; Gain Intel</li>
            </ul>
            <p><strong>Charisma Negotiation:</strong></p>
            <ul>
                <li>Pay <strong>1.000 ¥</strong> per point of Charisma</li>
                <li>Roll 2d6 &#8594; Add 10 &#8594; Subtract Charisma</li>
                <li>See R306 &#8594; Improve Attribute</li>
            </ul>`,
    },
    {
        id: 'R150',
        title: 'DreamSphere',
        content: `<p class="flex items-center justify-center"><img src="/images/DreamSphere.jpg" alt="DreamSphere" /></p>
            <p><em>"Where your nightmares become hobbies."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ul>
                <li>2: <strong>Dream State Disturbance</strong> &#8594; See R475</li>
                <li>3-4: <strong>Suspicious Activity</strong> &#8594; +1 Heat</li>
                <li>5-6: <strong>Service Charge Surge</strong> &#8594; -2.000 ¥</li>
                <li>7: <strong>Standard</strong> &#8594; No Effect</li>
                <li>8-9: <strong>Luxury Massage Chair</strong> &#8594; +1 Energy</li>
                <li>10-11: <strong>Social Sync Event</strong> &#8594; +1 Reputation</li>
                <li>12: <strong>Mysterious Encounter</strong> &#8594; See R485</li>
            </ul>
            <hr />
            <p><strong>Energetic Reboot:</strong></p>
            <ul>
                <li>Pay <strong>6.000 ¥</strong> &#8594; Roll 2d6 &#8594; <strong>+2</strong></li>
                <li>Add <strong>Reaction</strong> or <strong>Intuition</strong></li>
                <li>See R302 &#8594; Gain Energy</li>
            </ul>
            <p><strong>Memory Extraction:</strong></p>
            <ul>
                <li>Spend <strong>2 Energy</strong> &#8594; Roll 2d6</li>
                <li>Add <strong>Logic</strong> or <strong>Intuition</strong></li>
                <li>See R303 &#8594; Gain Nuyen</li>
            </ul>
            <p><strong>Intuition Awareness:</strong></p>
            <ul>
                <li>Pay <strong>1.000 ¥</strong> per point of Intuition</li>
                <li>Roll 2d6 &#8594; Add 10 &#8594; Subtract Intuition</li>
                <li>See R306 &#8594; Improve Attribute</li>
            </ul>`,
    },
    {
        id: 'R160',
        title: 'EchoGarden',
        content: `<p class="flex items-center justify-center"><img src="/images/EchoGarden.jpg" alt="EchoGarden" /></p>
            <p><em>"The city’s memory grows here."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ul>
                <li>2: <strong>Lost Data</strong> &#8594; See R474</li>
                <li>3-4: <strong>Suspicious Plant Harvest</strong> &#8594; +1 Heat</li>
                <li>5-6: <strong>Toxic Fungal Patch</strong> &#8594; -1 Health</li>
                <li>7: <strong>Standard</strong> &#8594; No Effect</li>
                <li>8-9: <strong>Friendly Chat</strong> &#8594; +1 Energy</li>
                <li>10-11: <strong>Solar Soak</strong> &#8594; +1 Health</li>
                <li>12: <strong>Mysterious Encounter</strong> &#8594; See R484</li>
            </ul>
            <hr />
            <p><strong>Vital Rejuvenation:</strong></p>
            <ul>
                <li>Spend <strong>1 Health</strong> &#8594; Roll 2d6 &#8594; <strong>-2</strong></li>
                <li>Add <strong>Agility</strong> or <strong>Reaction</strong></li>
                <li>See R302 &#8594; Gain Energy</li>
            </ul>
            <p><strong>Meditative Escape:</strong></p>
            <ul>
                <li>Pay <strong>4.000 ¥</strong> &#8594; Roll 2d6</li>
                <li>Add <strong>Reaction</strong> or <strong>Logic</strong></li>
                <li>See R304 &#8594; Reduce Heat</li>
            </ul>
            <p><strong>Reaction Sharpening:</strong></p>
            <ul>
                <li>Pay <strong>1.000 ¥</strong> per point of Reaction</li>
                <li>Roll 2d6 &#8594; Add 10 &#8594; Subtract Reaction</li>
                <li>See R306 &#8594; Improve Attribute</li>
            </ul>`,
    },
    {
        id: 'R170',
        title: 'IronGym',
        content: `<p class="flex items-center justify-center"><img src="/images/IronGym.jpg" alt="IronGym" /></p>
            <p><em>"Muscle isn't old-school — it's survival."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ul>
                <li>2: <strong>Unplanned Challenge</strong> &#8594; See R477</li>
                <li>3-4: <strong>Wrong Locker Room</strong> &#8594; +1 Heat</li>
                <li>5-6: <strong>Unpaid Membership</strong> &#8594; -2.000 ¥</li>
                <li>7: <strong>Standard</strong> &#8594; No Effect</li>
                <li>8-9: <strong>Promo Energy Bar</strong> &#8594; +1 Energy</li>
                <li>10-11: <strong>Perfect Form</strong> &#8594; +1 Reputation</li>
                <li>12: <strong>Mysterious Encounter</strong> &#8594; See R487</li>
            </ul>
            <hr />
            <p><strong>Massage Therapy:</strong></p>
            <ul>
                <li>Pay <strong>4.000 ¥</strong> &#8594; Roll 2d6</li>
                <li>Add <strong>Strength</strong> or <strong>Reaction</strong></li>
                <li>See R301 &#8594; Gain Health</li>
            </ul>
            <p><strong>Nutritional Experiments:</strong></p>
            <ul>
                <li>Spend <strong>2 Health</strong> &#8594; Roll 2d6</li>
                <li>Add <strong>Strength</strong> or <strong>Agility</strong></li>
                <li>See R303 &#8594; Gain Nuyen</li>
            </ul>
            <p><strong>Strength Conditioning:</strong></p>
            <ul>
                <li>Pay <strong>1.000 ¥</strong> per point of Strength</li>
                <li>Roll 2d6 &#8594; Add 10 &#8594; Subtract Strength</li>
                <li>See R306 &#8594; Improve Attribute</li>
            </ul>`,
    },
    {
        id: 'R180',
        title: 'NeuralNexus',
        content: `<p class="flex items-center justify-center"><img src="/images/NeuralNexus.jpg" alt="NeuralNexus" /></p>
            <p><em>"Where minds meet machines."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ul>
                <li>2: <strong>System Anomaly</strong> &#8594; See R471</li>
                <li>3-4: <strong>Unapproved Experiment</strong> &#8594; +1 Heat</li>
                <li>5-6: <strong>Research Malfunctions</strong> &#8594; -1 Health</li>
                <li>7: <strong>Standard</strong> &#8594; No Effect</li>
                <li>8-9: <strong>Unexpected Discovery</strong> &#8594; +1 Energy</li>
                <li>10-11: <strong>Laboratory Breakthrough</strong> &#8594; +1 Intel</li>
                <li>12: <strong>Mysterious Encounter</strong> &#8594; See R481</li>
            </ul>
            <hr />
            <p><strong>Code Decryption:</strong></p>
            <ol>
                <li>Pay <strong>6.000 ¥</strong> &#8594; Roll 2d6 &#8594; <strong>+2</strong></li>
                <li>Add <strong>Logic</strong> or <strong>Intuition</strong></li>
                <li>See R305 &#8594; Gain Intel</li>
            </ol>
            <p><strong>Neural Sync Boost:</strong></p>
            <ol>
                <li>Pay <strong>4.000 ¥</strong> &#8594; Roll 2d6</li>
                <li>Add <strong>Logic</strong> or <strong>Charisma</strong></li>
                <li>See R302 &#8594; Gain Energy</li>
            </ol>
            <p><strong>Logic Refinement:</strong></p>
            <ul>
                <li>Pay <strong>1.000 ¥</strong> per point of Logic</li>
                <li>Roll 2d6 &#8594; Add 10 &#8594; Subtract Logic</li>
                <li>See R306 &#8594; Improve Attribute</li>
            </ul>`,
    },
    {
        id: 'R190',
        title: 'SmugglerDen',
        content: `<p class="flex items-center justify-center"><img src="/images/SmugglerDen.jpg" alt="SmugglerDen" /></p>
            <p><em>"The city's forgotten veins."</em></p>
            <p><strong>Enter &#8594; Roll 2d6:</strong></p>
            <ul>
                <li>2: <strong>Smuggler’s Test</strong> &#8594; See R478</li>
                <li>3-4: <strong>Police Raid</strong> &#8594; +1 Heat</li>
                <li>5-6: <strong>Knife Fight</strong> &#8594; -1 Health</li>
                <li>7: <strong>Standard</strong> &#8594; No Effect</li>
                <li>8-9: <strong>Discount Promotion</strong> &#8594; +2.000 ¥</li>
                <li>10-11: <strong>Thief Caught</strong> &#8594; +1 Reputation</li>
                <li>12: <strong>Prestigious Contact</strong> &#8594; +1 Intel</li>
            </ul>
            <hr />
            <p><strong>Fence Hot Goods:</strong></p>
            <ul>
                <li>Spend <strong>1 Health</strong> &#8594; Roll 2d6 &#8594; <strong>-2</strong></li>
                <li>Add <strong>Agility</strong> or <strong>Logic</strong></li>
                <li>See R303 &#8594; Gain Nuyen</li>
            </ul>
            <p><strong>Corrupted Files:</strong></p>
            <ol>
                <li>Pay <strong>2.000 ¥</strong> &#8594; Roll 2d6 &#8594; <strong>-2</strong></li>
                <li>Add <strong>Agility</strong> or <strong>Intuition</strong></li>
                <li>See R305 &#8594; Gain Intel</li>
            </ol>`,
    },
    {
        id: 'R200',
        title: 'ZeroZone',
        content: `<p class="flex items-center justify-center"><img src="/images/ZeroZone.jpg" alt="ZeroZone" /></p>
            <p><em>"Where the shadows test their own."</em></p>
            <p><strong>Recruit a Runner:</strong></p>
            <ol>
                <li>Roll on the <strong>Runner Matrix</strong> (R501)</li>
                <li>Remember the two highest attributes</li>
                <li>Pay <strong>10.000 ¥</strong> &#8594; Roll 2d6 &#8594; Add <strong>Charisma</strong></li>
                <li>See R307 &#8594; Runner</li>
            </ol>
            <p><strong>Challenge a Runner:</strong></p>
            <ol>
                <li>Combine your two highest attributes</li>
                <li>Roll on the <strong>Runner Matrix</strong> (R501)</li>
                <li>Add up the opponent’s corresponding attributes</li>
                <li>You lost? &#8594; Lose <strong>Health</strong> equal to the gap</li>
                <li>Add 10 &#8594; See R303 &#8594; Nuyen</li>
            </ol>`,
    },
    {
        id: 'R210',
        title: 'SafeHouse',
        content: `<p class="flex items-center justify-center"><img src="/images/SafeHouse.jpg" alt="SafeHouse" /></p>
            <p><em>"A secret refuge where safety lies."</em></p>
            <p><strong>Stimulant Injection:</strong></p>
            <ul>
                <li>Spend <strong>1 Energy</strong> &#8594; Roll 2d6 &#8594; <strong>-2</strong></li>
                <li>Add <strong>Strength</strong> or <strong>Logic</strong></li>
                <li>See R301 &#8594; Gain Health</li>
            </ul>
            <p><strong>False Credentials:</strong></p>
            <ol>
                <li>Pay <strong>2.000 ¥</strong> &#8594; Roll 2d6 &#8594; <strong>-2</strong></li>
                <li>Add <strong>Agility</strong> or <strong>Charisma</strong></li>
                <li>See R304 &#8594; Reduce Heat</li>
            </ol>
            `,
    },
]
