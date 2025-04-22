export const Town = [
    {
        id: 'R101',
        title: 'NeonHollow',
        content: `<p class="flex items-center justify-center"><img src="/images/NeonHollow.jpg" alt="NeonHollow" /></p>
            <p><em>"Where the lights never die — only the people do."</em></p>
            <p>Dive into the rules (R102) to get a taste of how things run at <strong>NeonHollow</strong>.</p>
            <p><strong>Security District:</strong></p>
            <div class="flex gap-8">
                <div class="flex-1 basis-1/3">
                    <p>CorpTower<br />
                    <img src="/images/CorpTower.jpg" alt="CorpTower" />
                    R110</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>PatrolHub<br />
                    <img src="/images/PatrolHub.jpg" alt="PatrolHub" />
                    R120</p>
                </div>
                <div class="flex-1 basis-1/3">
                </div>
            </div>
            <p><strong>Entertainment District:</strong></p>
            <div class="flex gap-8">
                <div class="flex-1 basis-1/3">
                    <p>BioCare<br />
                    <img src="/images/BioCare.jpg" alt="BioCare" />
                    R130</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>HoloLounge<br />
                    <img src="/images/HoloLounge.jpg" alt="HoloLounge" />
                    R140</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>DreamSphere<br />
                    <img src="/images/DreamSphere.jpg" alt="DreamSphere" />
                    R150</p>
                </div>
            </div>
            <p><strong>Industrial District:</strong></p>
            <div class="flex gap-8">
                <div class="flex-1 basis-1/3">
                    <p>EchoGarden<br />
                    <img src="/images/EchoGarden.jpg" alt="EchoGarden" />
                    R160</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>IronGym<br />
                    <img src="/images/IronGym.jpg" alt="IronGym" />
                    R170</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>NeuralNexus<br />
                    <img src="/images/NeuralNexus.jpg" alt="NeuralNexus" />
                    R180</p>
                </div>
            </div>
            <p><strong>Underground District:</strong></p>
            <div class="flex gap-8">
                <div class="flex-1 basis-1/3">
                    <p>SmugglerDen<br />
                    <img src="/images/SmugglerDen.jpg" alt="SmugglerDen" />
                    R190</p>
                </div>
                <div class="flex-1 basis-1/3">
                    <p>ZeroZone<br />
                    <img src="/images/ZeroZone.jpg" alt="ZeroZone" />
                    R200</p>
                </div>
                <div class="flex-1 basis-1/3">
                </div>
            </div>`,
    },
    {
        id: 'R102',
        title: 'NeonHollow: Rules',
        content:
            '<p>NeonHollow’s split into four districts. Moving between them drains <strong>1 Energy</strong>, a small price to pay for what you might find.</p>' +
            '<p>Each district is home to various facilities. Upon entering one, you`ll need to roll on an event table to see what unfolds within.</p>' +
            '<p>Every action takes <strong>1 hour</strong>, and once you`re done, you`ll return to the streets. Afterward, roll 1d6 to see if a town event kicks off.</p>' +
            '<p>If the roll exceeds your current hour, the streets stay quiet — no surprises this time.</p>' +
            '<p>When a town event unfolds, roll on the <strong>Event Matrix</strong> (E001) to discover what new twist awaits you in the neon-drenched streets of NeonHollow.</p>' +
            '<p>As long as no town event pops up, you can pay a visit to <strong>Mr. Johnson</strong> (M001) and line up your next run.</p>' +
            '<p>A day ends either when a town event kicks off or when the runner takes on a job from Mr. Johnson.</p>',
    },
    {
        id: 'R110',
        title: 'NeonHollow: CorpTower',
        content: `<p class="flex items-center justify-center"><img src="/images/CorpTower.jpg" alt="CorpTower" /></p>
            <p><em>"Order. Control. Perfection."</em></p>
            <p>Enter &#8594; Roll 2d6 &#8594; See R111</p>
            <p><strong>Hack the Network:</strong></p>
            <ol>
                <li>Spend <strong>3 Energy</strong> &#8594; Roll your <strong>Logic</strong> and <strong>Intuition</strong></li>
                <li>Add <strong>1 Success</strong> to your roll &#8594; See R303</li>
            </ol>
            <p><strong>Infiltrate the Terrain:</strong></p>
            <ol>
                <li>Spend <strong>3 Health</strong> &#8594; Roll your <strong>Agility</strong> and <strong>Intuition</strong></li>
                <li>Add <strong>1 Success</strong> to your roll &#8594; See R305</li>
            </ol>`,
    },
    {
        id: 'R111',
        title: 'CorpTower: Event Table',
        content: `<ul>
            <li>2: <strong>Access Denied</strong><ul><li>Security ejects you from the building.</li></ul></li>
            <li>3: <strong>Retina Scan Error</strong> – The scanner glitches and rejects your ID.<ul><li>+1 Heat</li></ul></li>
            <li>4: <strong>System Loop</strong> – You get stuck in a malfunctioning elevator.<ul><li>-1 Health</li></ul></li>
            <li>5: <strong>Unauthorized Access</strong> – You accidentally trigger a silent alarm.<ul><li>-1.000 ¥</li></ul></li>
            <li>6: <strong>Overwatched</strong> – Drones lock onto your movement patterns.<ul><li>-1 Energy</li></ul></li>
            <li>7: <strong>Standard Procedure</strong><ul><li>No Effect</li></ul></li>
            <li>8: <strong>Fast Pass</strong> – Your access code is unexpectedly validated.<ul><li>+1 Energy</li></ul></li>
            <li>9: <strong>Corporate Favor</strong> – You assist with a minor internal task.<ul><li>+1.000 ¥</li></ul></li>
            <li>10: <strong>Clean Record</strong> – Surveillance clears your ID file.<ul><li>-1 Heat</li></ul></li>
            <li>11: <strong>Silent Support</strong> – An insider flags your presence as “cleared.”<ul><li>+1 Reputation</li></ul></li>
            <li>12: <strong>Data Whisper</strong> – A passing exec leaks classified info.<ul><li>+1 Intel</li></ul></li>
        </ul>`,
    },
    {
        id: 'R112',
        title: 'CorpTower: Leak Sensitive Data',
        content:
            '<p>Make a roll with <strong>Logic</strong> + <strong>Intuition</strong> to push forward.</p>' +
            '<ul>' +
            '<li>0: <strong>Disastrous Failure</strong> – You’ve either sent a decoy file or were traced mid-upload, leaving a trail of evidence.<ul><li>+1 Heat, -1 Reputation</li></ul></li>' +
            '<li>1: <strong>Unsuccessful Attempt</strong> – The leak was sloppy, and it barely made an impact.<ul><li>+1 Heat</li></ul></li>' +
            '<li>2: <strong>Corp Defenses Hold</strong> – Your leak didn’t have the desired effect.<ul><li>No Effect</li></ul></li>' +
            '<li>3: <strong>Moderate Success</strong> – The data released is credible and damaging.<ul><li>The task is complete</li></ul></li>' +
            '<li>4+: <strong>Catastrophic Blow</strong> – The leak hits them hard. Global attention, corporate turmoil, and public outrage leave the Corp scrambling.<ul><li>The task is complete, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R113',
        title: 'CorpTower: Crash Security Systems',
        content:
            '<p>Make a roll with <strong>Agility</strong> + <strong>Reaction</strong> to push forward.</p>' +
            '<ul>' +
            '<li>0: <strong>Critical Breach</strong> – You’ve triggered an alarm, and the system locks down, sending the corp into high alert.<ul><li>+1 Heat, -1 Reputation</li></ul></li>' +
            '<li>1: <strong>Botched Attempt</strong> – The system is still mostly intact, but you’ve made a small hole in their defenses.<ul><li>+1 Heat</li></ul></li>' +
            '<li>2: <strong>Fortified Defenses</strong> – The system detects your intrusion, and your efforts are quickly neutralized.<ul><li>No Effect</li></ul></li>' +
            '<li>3: <strong>Shaky Success</strong> – You’ve caused some damage, disrupting their security protocol for a brief period.<ul><li>The task is complete</li></ul></li>' +
            '<li>4+: <strong>Security Meltdown</strong> – You’ve overwhelmed their security, leaving them scrambling to recover and cover their tracks.<ul><li>The task is complete, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R114',
        title: 'CorpTower: Confront the CEO',
        content:
            '<p>Make a roll with <strong>Strength</strong> + <strong>Charisma</strong> to push forward.</p>' +
            '<ul>' +
            '<li>0: <strong>Epic Fail</strong> – The CEO laughs you off, and security is alerted.<ul><li>+1 Heat, -1 Reputation</li></ul></li>' +
            '<li>1: <strong>Botched Negotiation</strong> – Your attempt at confrontation falters, and the CEO calls in reinforcements.<ul><li>+1 Heat</li></ul></li>' +
            '<li>2: <strong>Minor Setback</strong> – You manage to get a few words in, but the CEO turns the tables.<ul><li>No Effect</li></ul></li>' +
            '<li>3: <strong>Crack the Mask</strong> – The CEO flinches. You`re getting to them.<ul><li>Victory! (R014)</li></ul></li>' +
            '<li>4+: <strong>Toppled Tyrant</strong> – You break through. The corp`s reign is crumbling.<ul><li>Victory! (R015)</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R120',
        title: 'NeonHollow: PatrolHub',
        content: `<p class="flex items-center justify-center"><img src="/images/PatrolHub.jpg" alt="PatrolHub" /></p>
            <p><em>"The law's last flicker."</em></p>
            <p>Enter &#8594; Roll 2d6 &#8594; See R121</p>
            <p><strong>Bounty Hunting:</strong></p>
            <ol>
                <li>Spend <strong>2 Health</strong> &#8594; Roll your <strong>Strength</strong> and <strong>Agility</strong></li>
                <li>See R303</li>
            </ol>
            <p><strong>Bribe the Officer:</strong></p>
            <ol>
                <li>Pay <strong>3.000 ¥</strong> &#8594; Roll your <strong>Strength</strong> and <strong>Charisma</strong></li>
                <li>Add <strong>1 Success</strong> to your roll &#8594; See R304</li>
            </ol>`,
    },
    {
        id: 'R121',
        title: 'PatrolHub: Event Table',
        content:
            '<ul>' +
            '<li>2: <strong>Access Denied</strong><ul><li>Security ejects you from the building.</li></ul></li>' +
            '<li>2: <strong>Scanner Malfunction</strong> – A security scanner glitches and zaps you.<ul><li>-1 Health</li></ul></li>' +
            '<li>4: <strong>Heavy Watch</strong> – Officers trail you the moment you enter.<ul><li>+1 Heat</li></ul></li>' +
            '<li>5: <strong>Interrogation Mix-Up</strong> – You`re pulled into a questioning room by mistake.<ul><li>-1.000 ¥</li></ul></li>' +
            '<li>6: <strong>Paperwork Hell</strong> – Bureaucracy eats your time.<ul><li>-1 Energy</li></ul></li>' +
            '<li>7: <strong>Standard Procedure</strong><ul><li>No Effect</li></ul></li>' +
            '<li>8: <strong>Free Escort</strong> – An officer helps you bypass the lines.<ul><li>+1 Energy</li></ul></li>' +
            '<li>9: <strong>Case Glitch</strong> – Your old criminal file vanishes in a system wipe.<ul><li>-1 Heat</li></ul></li>' +
            '<li>10: <strong>Confidential Boost</strong> – A friendly officer slides you an insider tip.<ul><li>+1 Intel</li></ul></li>' +
            '<li>11 <strong>Stopping a Desperate Escape</strong> – You intervene when an inmate tries to break free.<ul><li>+1 any Attribute Temporary</li></ul></li>' +
            '<li>12: <strong>Stopping a Robbery</strong> – You walk in just as a desperate thief is about to pull the trigger.<ul><li>+1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R130',
        title: 'NeonHollow: BioCare',
        content: `<p class="flex items-center justify-center"><img src="/images/BioCare.jpg" alt="BioCare" /></p>
            <p><em>"Healing flesh, not souls."</em></p>
            <p>Enter &#8594; Roll 2d6 &#8594; See R131</p>
            <p><strong>Restorative Treatment:</strong></p>
            <ol>
                <li>Pay <strong>3.000 ¥</strong> &#8594; Roll your <strong>Reaction</strong> and <strong>Logic</strong></li>
                <li>Add <strong>1 Success</strong> to your roll &#8594; See R301</li>
            </ol>
            <p><strong>Cyberware Enhancement:</strong></p>
            <ol>
                <li>Select whether to enhance: <strong>Strength</strong> or <strong>Logic</strong></li>
                <li>Pay <strong>1.000 ¥</strong> per point of the chosen attribute</li>
                <li>Roll your selected attribute &#8594; See R306</li>
            </ol>`,
    },
    {
        id: 'R131',
        title: 'BioCare: Event Table',
        content:
            '<ul>' +
            '<li>2: <strong>Access Denied</strong><ul><li>Security ejects you from the building.</li></ul></li>' +
            '<li>3: <strong>Security Screening</strong> – The facial recognition software mistakes you for someone else.<ul><li>-1 Energy, +1 Heat</li></ul></li>' +
            '<li>4: <strong>Suspicious Scan</strong> – The scanner picks up something "unusual" in your body.<ul><li>-1 Health</li></ul></li>' +
            '<li>5: <strong>Rogue Doc Encounter</strong> – A shady employee offers "off-the-record" services.<ul><li>+1 Heat</li></ul></li>' +
            '<li>6: <strong>Delayed Appointment</strong> – Your appointment is pushed back due to a mix-up.<ul><li>-1 Energy</li></ul></li>' +
            '<li>7: <strong>Standard Procedure</strong><ul><li>No Effect</li></ul></li>' +
            '<li>8: <strong>Quick Service</strong> – The process is quicker than expected.<ul><li>+1 Energy</li></ul></li>' +
            '<li>9: <strong>Strange Gift</strong> – An anonymous package is sent to you during your wait.<ul><li>+1.000 ¥</li></ul></li>' +
            '<li>10: <strong>Relaxed Environment</strong> – You rest fully in the waiting area’s relaxation pods.<ul><li>+1 Charisma Temporary, +1 Energy</li></ul></li>' +
            '<li>11: <strong>Lucky Break</strong> – The system accidentally upgrades your service.<ul><li>+1 Agility Temporary, +1 Health</li></ul></li>' +
            '<li>12: <strong>VIP Escort</strong> – A corporate representative recognizes you and provides expedited service.<ul><li>+1 Reputation, +1 Intel</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R140',
        title: 'NeonHollow: HoloLounge',
        content: `<p class="flex items-center justify-center"><img src="/images/HoloLounge.jpg" alt="HoloLoungeoCare" /></p>
            <p><em>"Reality? Optional."</em></p>
            <p>Enter &#8594; Roll 2d6 &#8594; See R141</p>
            <p><strong>Nutritional Meal:</strong></p>
            <ol>
                <li>Pay <strong>1.000 ¥</strong> &#8594; Roll your <strong>Strength</strong> and <strong>Intuition</strong></li>
                <li>Remove <strong>1 Success</strong> from your roll &#8594; See R301</li>
            </ol>
            <p><strong>High-Stakes Gambling:</strong></p>
            <ol>
                <li>Pay <strong>1.000 ¥</strong> &#8594; Roll your <strong>Intuition</strong> and <strong>Charisma</strong></li>
                <li>Remove <strong>1 Success</strong> from your roll &#8594; See R303</li>
            </ol>`,
    },
    {
        id: 'R141',
        title: 'HoloLounge: Event Table',
        content:
            '<ul>' +
            '<li>2: <strong>Access Denied</strong><ul><li>Security ejects you from the building.</li></ul></li>' +
            '<li>3: <strong>Bar Fight Breaks Out</strong> – A nearby patron bumps into you, sparking a fight.<ul><li>-1 Health</li></ul></li>' +
            '<li>4: <strong>Data Corruption</strong> – A data corruption issue halts your service as your information is temporarily inaccessible.<ul><li>-1.000 ¥</li></ul></li>' +
            '<li>5: <strong>Exotic Drink Offer</strong> – A bartender offers you a special drink that could "enhance" your experience.<ul><li>-1 Energy</li></ul></li>' +
            '<li>6: <strong>Unwanted Attention</strong> – Someone at the bar takes too much interest in you, trying to strike up an uncomfortable conversation.<ul><li>+1 Heat</li></ul></li>' +
            '<li>7: <strong>Standard Procedure</strong><ul><li>No Effect</li></ul></li>' +
            '<li>8: <strong>Lucky Encounter</strong> – You spot someone you’ve been looking for.<ul><li>+1 Energy</li></ul></li>' +
            '<li>9: <strong>HoloShow Surprise</strong> – A stunning live hologram show begins right as you sit down.<ul><li>+1 Agility Temporary</li></ul></li>' +
            '<li>10: <strong>Free Round</strong> – The bartender offers you a free drink as part of a promotion.<ul><li>+1 Intuition Temporary</li></ul></li>' +
            '<li>11: <strong>HoloLounge Jackpot</strong> – A mysterious figure gifts you a lucky chip, which you use to win a prize.<ul><li>+2.000 ¥</li></ul></li>' +
            '<li>12: <strong>VIP Table Reserved</strong> – A corporate rep sees you and upgrades your seating to a VIP table.<ul><li>+1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R150',
        title: 'NeonHollow: DreamSphere',
        content: `<p class="flex items-center justify-center"><img src="/images/DreamSphere.jpg" alt="DreamSphere" /></p>
            <p><em>"Where your nightmares become hobbies."</em></p>
            <p>Enter &#8594; Roll 2d6 &#8594; See R151</p>
            <p><strong>Restorative Sleep:</strong></p>
            <ol>
                <li>Pay <strong>3.000 ¥</strong> &#8594; Roll your <strong>Reaction</strong> and <strong>Intuition</strong></li>
                <li>Add <strong>1 Success</strong> to your roll &#8594; See R302</li>
            </ol>
            <p><strong>Calm Your Mind:</strong></p>
            <ol>
                <li>Spend <strong>1 Health</strong> &#8594; Roll your <strong>Agility</strong> and <strong>Logic</strong></li>
                <li>Remove <strong>1 Success</strong> from your roll &#8594; See R304</li>
            </ol>`,
    },
    {
        id: 'R151',
        title: 'DreamSphere: Event Table',
        content:
            '<ul>' +
            '<li>2: <strong>Access Denied</strong><ul><li>Security ejects you from the building.</li></ul></li>' +
            '<li>3: <strong>Welcome Drink Fail</strong> – The bartender serves you a drink that tastes completely wrong.<ul><li>-1 Health</li></ul></li>' +
            '<li>4: <strong>Eyes on You</strong> – A corp agent sits quietly in the lobby, staring as you enter.<ul><li>+1 Heat</li></ul></li>' +
            '<li>5: <strong>Payment Verification Loop</strong> – Your credstick triggers an endless scan loop at check-in.<ul><li>-1.000 ¥</li></ul></li>' +
            '<li>6: <strong>Security Delay</strong> – You`re stuck at the entrance as drones sweep the lobby.<ul><li>-1 Energy</li></ul></li>' +
            '<li>7: <strong>Standard Procedure</strong><ul><li>No Effect</li></ul></li>' +
            '<li>8: <strong>Complimentary Sleep Enhancer</strong> – You`re offered a free neural bath.<ul><li>+1 Energy</li></ul></li>' +
            '<li>9: <strong>Lucky Find</strong> – While passing through the lobby, you spot a forgotten wallet.<ul><li>+1.000 ¥</li></ul></li>' +
            '<li>10: <strong>DreamBoost Package</strong> – A promo code in the system gives you a bonus service.<ul><li>+1 Health</li></ul></li>' +
            '<li>11: <strong>VIP Recognition</strong> – The manager personally escorts you in, citing your stellar rep.<ul><li>+1 Intuition Temporary</li></ul></li>' +
            '<li>12: <strong>Lucid Experience Access</strong> – A rare opening gives you access to the Lucid Lounge.<ul><li>+1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R160',
        title: 'NeonHollow: EchoGarden',
        content: `<p class="flex items-center justify-center"><img src="/images/EchoGarden.jpg" alt="EchoGarden" /></p>
            <p><em>"The city’s memory grows here."</em></p>
            <p>Enter &#8594; Roll 2d6 &#8594; See R161</p>
            <p><strong>Meditation Lesson:</strong></p>
            <ol>
                <li>Pay <strong>1.000 ¥</strong> &#8594; Roll your <strong>Agility</strong> and <strong>Reaction</strong></li>
                <li>Remove <strong>1 Success</strong> from your roll &#8594; See R302</li>
            </ol>
            <p><strong>Pressure the Informant:</strong></p>
            <ol>
                <li>Pay <strong>1 Energy</strong> &#8594; Roll your <strong>Strength</strong> and <strong>Reaction</strong></li>
                <li>Remove <strong>1 Success</strong> from your roll &#8594; See R305</li>
            </ol>`,
    },
    {
        id: 'R161',
        title: 'EchoGarden: Event Table',
        content:
            '<ul>' +
            '<li>2: <strong>Access Denied</strong><ul><li>Security ejects you from the building.</li></ul></li>' +
            '<li>3: <strong>Toxic Pollen</strong> – A strange neon-flowering plant releases a puff of spores.<ul><li>-1 Health</li></ul></li>' +
            '<li>4: <strong>Scanner Surge</strong> – An old surveillance post flares to life.<ul><li>-1 Reaction Temporary</li></ul></li>' +
            '<li>5: <strong>Rival Sighting</strong> – A known enemy locks eyes with you before vanishing.<ul><li>+1 Heat</li></ul></li>' +
            '<li>6: <strong>Unstable Ground</strong> – You nearly trip over a sinkhole crack.<ul><li>-1 Energy</li></ul></li>' +
            '<li>7: <strong>Standard Procedure</strong><ul><li>No Effect</li></ul></li>' +
            '<li>8: <strong>Urban Bloom</strong> – You find rare bioluminescent moss.<ul><li>+1 Energy</li></ul></li>' +
            '<li>9: <strong>Forgotten Cache</strong> – Something’s stashed under a bench.<ul><li>+1.000 ¥</li></ul></li>' +
            '<li>10: <strong>Street Melody</strong> – A synthwave tune calms your nerves.<ul><li>-1 Heat</li></ul></li>' +
            '<li>11: <strong>Old Contact</strong> – A quiet tip from a friendly face.<ul><li>+1 Intel</li></ul></li>' +
            '<li>12: <strong>Peaceful Enlightenment</strong> – A moment of clarity under rustling leaves.<ul><li>+1 Reaction Temporary</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R170',
        title: 'NeonHollow: IronGym',
        content: `<p class="flex items-center justify-center"><img src="/images/IronGym.jpg" alt="IronGym" /></p>
            <p><em>"Muscle isn't old-school — it's survival."</em></p>
            <p><strong>Recovery Training:</strong></p>
            <ol>
                <li>Spend <strong>2 Energy</strong> &#8594; Roll your <strong>Agility</strong> and <strong>Charisma</strong></li>
                <li>See R301</li>
            </ol>
            <p><strong>Endurance Drill:</strong></p>
            <ol>
                <li>Select whether to enhance: <strong>Agility</strong> or <strong>Reaction</strong></li>
                <li>Pay <strong>1.000 ¥</strong> per point of the chosen attribute</li>
                <li>Roll your selected attribute &#8594; See R306</li>
            </ol>`,
    },
    {
        id: 'R180',
        title: 'NeonHollow: NeuralNexus',
        content: `<p class="flex items-center justify-center"><img src="/images/NeuralNexus.jpg" alt="NeuralNexus" /></p>
            <p><em>"Where minds meet machines."</em></p>
            <p><strong>Memory Mining:</strong></p>
            <ol>
                <li>Spend <strong>2 Health</strong> &#8594; Roll your <strong>Strength</strong> and <strong>Logic</strong></li>
                <li>See R302</li>
            </ol>
            <p><strong>Cyberware Enhancement:</strong></p>
            <ol>
                <li>Select whether to enhance: <strong>Intuition</strong> or <strong>Charisma</strong></li>
                <li>Pay <strong>1.000 ¥</strong> per point of the chosen attribute</li>
                <li>Roll your selected attribute &#8594; See R306</li>
            </ol>`,
    },
    {
        id: 'R190',
        title: 'NeonHollow: SmugglerDen',
        content: `<p class="flex items-center justify-center"><img src="/images/SmugglerDen.jpg" alt="SmugglerDen" /></p>
            <p><em>"The city's forgotten veins."</em></p>
            <p><strong>Ask for Protection:</strong></p>
            <ol>
                <li>Spend <strong>2 Energy</strong> &#8594; Roll your <strong>Reaction</strong> and <strong>Charisma</strong></li>
                <li>See R304</li>
            </ol>
            <p><strong>Buy Confidential Info:</strong></p>
            <ol>
                <li>Pay <strong>2.000 ¥</strong> &#8594; Roll your <strong>Logic</strong> and <strong>Charisma</strong></li>
                <li>See R305</li>
            </ol>`,
    },
    {
        id: 'R200',
        title: 'NeonHollow: ZeroZone',
        content: `<p class="flex items-center justify-center"><img src="/images/ZeroZone.jpg" alt="ZeroZone" /></p>
            <p><em>"Where the shadows test their own."</em></p>
            <p><strong>Challenge a Runner:</strong></p>
            <ol>
                <li>Select <strong>two Attributes</strong> for the Challenge</li>
                <li>Roll your chosen <strong>Attributes</strong></li>
                <li>Track your <strong>Successes</strong></li>
                <li>Roll on the Runner Matrix (N001)</li>
                <li>Roll the opponent's <strong>Attributes</strong></li>
                <li>Substract opponent's successes from yours</li>
                <li>Remove <strong>1 Success</strong> from your roll &#8594; See R303</li>
            </ol>
            <p><strong>Recruit a Runner:</strong></p>
            <ol>
                <li>You must have at least <strong>8.000 ¥</strong> available</li>
                <li>Roll on the Runner Matrix (N001)</li>
                <li>Remember the two highest Attributes</li>
                <li>Roll your <strong>Charisma</strong> and another <strong>Attribute</strong></li>
                <li>Remove <strong>1 Success</strong> from your roll &#8594; See R307</li>
            </ol>`,
    },
    {
        id: 'R800',
        title: 'NeonHollow: SafeHouse',
        content:
            '<p class="flex items-center justify-center"><img src="/images/SafeHouse.jpg" alt="SafeHouse" /></p>' +
            '<p><em>"No names. No noise. No light."</em></p>',
    },
    {
        id: 'R900',
        title: 'NeonHollow: CyberBite',
        content:
            '<p class="flex items-center justify-center"><img src="/images/CyberBite.jpg" alt="CyberBite" /></p>' +
            '<p><em>"Food, but wired."</em></p>',
    },
    {
        id: 'R301',
        title: 'Outcome: Health',
        content: `<p>The number of successes determines the outcome of the action.</p>
        <ol start="0">
            <li>
                <strong>Critical Failure</strong> – The treatment backfires, causing harm.
                <ul>
                    <li>-2 Health, +1 Heat</li>
                </ul>
            </li>
            <li>
                <strong>Failure</strong> – Healing stalls. You’re patched, but need more time.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>
                <strong>Standard</strong> – Treatment kicks in slowly, stabilizing you.
                <ul>
                    <li>+2 Health, +1 Energy</li>
                </ul>
            </li>
            <li>
                <strong>Good</strong> – Cells respond well, and you feel stronger.
                <ul>
                    <li>+4 Health, +2 Energy</li>
                </ul>
            </li>
            <li>
                <strong>Great</strong> – Nanites accelerate healing, and you gain energy.
                <ul>
                    <li>+6 Health, +3 Energy</li>
                </ul>
            </li>
            <li>
                <strong>Exceptional</strong> – Perfect recovery. You feel better than ever.
                <ul>
                    <li>+8 Health, +4 Energy, +1 Reputation</li>
                </ul>
            </li>
        </ol>`,
    },
    {
        id: 'R302',
        title: 'Outcome: Energy',
        content: `<p>The number of successes determines the outcome of the action.</p>
        <ol start="0">
            <li>
                <strong>Critical Failure</strong> – The treatment leaves you feeling more drained than before.
                <ul>
                    <li>-2 Energy, +1 Heat</li>
                </ul>
            </li>
            <li>
                <strong>Failure</strong> – The process does little to restore your energy, but you feel slightly better.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>
                <strong>Standard</strong> – You start to regain some energy, though not at full capacity.
                <ul>
                    <li>+2 Energy, +1 Health</li>
                </ul>
            </li>
            <li>
                <strong>Good</strong> – The treatment has a noticeable effect, and you feel more refreshed.
                <ul>
                    <li>+4 Energy, +2 Health</li>
                </ul>
            </li>
            <li>
                <strong>Great</strong> – Your energy is fully restored, and you feel recharged.
                <ul>
                    <li>+6 Energy, +3 Health</li>
                </ul>
            </li>
            <li>
                <strong>Exceptional</strong> – You feel fully revitalized, bursting with energy and vitality.
                <ul>
                    <li>+8 Energy, +4 Health, +1 Reputation</li>
                </ul>
            </li>
        </ol>`,
    },
    {
        id: 'R303',
        title: 'Outcome: Nuyen',
        content: `<p>The number of successes determines the outcome of the action.</p>
        <ol start="0">
            <li>
                <strong>Critical Failure</strong> – The job backfired or was a setup.
                <ul>
                    <li>0 ¥, +1 Heat</li>
                </ul>
            </li>
            <li>
                <strong>Failure</strong> – You earned something, but it's barely worth the risk.
                <ul>
                    <li>1.000 ¥</li>
                </ul>
            </li>
            <li>
                <strong>Standard</strong> – A modest payout for solid work.
                <ul>
                    <li>3.000 ¥</li>
                </ul>
            </li>
            <li>
                <strong>Good</strong> – A smooth job and fair compensation.
                <ul>
                    <li>6.000 ¥</li>
                </ul>
            </li>
            <li>
                <strong>Great</strong> – The plan worked perfectly and paid well.
                <ul>
                    <li>10.000 ¥</li>
                </ul>
            </li>
            <li>
                <strong>Exceptional</strong> – Flawless execution, and the money shows it.
                <ul>
                    <li>15.000 ¥, +1 Reputation</li>
                </ul>
            </li>
        </ol>`,
    },
    {
        id: 'R304',
        title: 'Outcome: Heat',
        content: `<p>The number of successes determines the outcome of the action.</p>
        <ol start="0">
            <li>
                <strong>Critical Failure</strong> – Your actions attract major attention from the authorities.
                <ul>
                    <li>+2 Heat</li>
                </ul>
            </li>
            <li>
                <strong>Failure</strong> – You leave behind traces that raise suspicion.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>
                <strong>Standard</strong> – You keep a low profile, but eyes are still on you.
                <ul>
                    <li>-1 Heat</li>
                </ul>
            </li>
            <li>
                <strong>Good</strong> – You take extra precautions and shake off pursuit.
                <ul>
                    <li>-2 Heat</li>
                </ul>
            </li>
            <li>
                <strong>Great</strong> – You reroute your trail and erase your digital footprint.
                <ul>
                    <li>-3 Heat</li>
                </ul>
            </li>
            <li>
                <strong>Exceptional</strong> – Your actions are so clean, you’re mistaken for a civilian.
                <ul>
                    <li>-4 Heat, +1 Reputation</li>
                </ul>
            </li>
        </ol>`,
    },
    {
        id: 'R305',
        title: 'Outcome: Intel',
        content: `<p>The number of successes determines the outcome of the action.</p>
        <ol start="0">
            <li><strong>Critical Failure</strong>
                <ul>
                    <li>Your attempt to gather intel fails miserably, and you end up losing crucial data.</li>
                    <li>-1 Intel, +1 Heat</li>
                </ul>
            </li>
            <li><strong>Failure</strong>
                <ul>
                    <li>You manage to retrieve some information, but it's incomplete and unreliable.</li>
                    <li>No Effect</li>
                </ul>
            </li>
            <li><strong>Standard</strong>
                <ul>
                    <li>You gather basic intel that may be useful, but it's not game-changing.</li>
                    <li>+1 Intel</li>
                </ul>
            </li>
            <li><strong>Good</strong>
                <ul>
                    <li>The intel you collect is solid, providing useful insights into your mission.</li>
                    <li>+2 Intel</li>
                </ul>
            </li>
            <li><strong>Great</strong>
                <ul>
                    <li>Your intel collection goes exceptionally well, uncovering valuable information.</li>
                    <li>+3 Intel</li>
                </ul>
            </li>
            <li><strong>Exceptional</strong>
                <ul>
                    <li>You uncover crucial and highly valuable intelligence that could change the course of the mission.</li>
                    <li>+4 Intel, +1 Reputation</li>
                </ul>
            </li>
        </ol>`,
    },
    {
        id: 'R306',
        title: 'Outcome: Attribute',
        content: `<p>The number of successes determines the outcome of the action.</p>
        <ol start="0">
            <li>
                <strong>Failure</strong> – The enhancement doesn’t sync well with your body.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>
                <strong>Standard</strong> – The boost kicks in as expected.
                <ul>
                    <li>+1 to Attribute</li>
                </ul>
            </li>
            <li>
                <strong>Good</strong> – You feel sharp, fast, and focused.
                <ul>
                    <li>+1 to Attribute, +1 Intel</li>
                </ul>
            </li>
            <li>
                <strong>Great</strong> – Your body and mind align perfectly with the upgrade.
                <ul>
                    <li>+1 to Attribute</li>
                </ul>
            </li>
            <li>
                <strong>Exceptional</strong> – The enhancement merges flawlessly with your system.
                <ul>
                    <li>+1 to Attribute, +1 Reputation</li>
                </ul>
            </li>
        </ol>`,
    },
    {
        id: 'R307',
        title: 'Outcome: Runner',
        content: `<p>The number of successes determines the outcome of the action.</p>
        <ol start="0">
            <li>
                <strong>Critical Failure</strong> – No interest, dismisses the offer.
                <ul>
                    <li>No Effect</li>
                </ul>
            </li>
            <li>
                <strong>Failure</strong> – You’ve hired a runner, but it’s going to cost you dearly.
                <ul>
                    <li>-8.000 ¥, 1. Attribute Temporary</li>
                </ul>
            </li>
            <li>
                <strong>Standard</strong> – The runner’s skill set is solid, but they’re not exactly cheap.
                <ul>
                    <li>-7.000 ¥, 1. Attribute Temporary, 2. Attribute Temporary</li>
                </ul>
            </li>
            <li>
                <strong>Good</strong> – The runner's price is what you would expect for their skill level.
                <ul>
                    <li>-6.000 ¥, 1. Attribute</li>
                </ul>
            </li>
            <li>
                <strong>Great</strong> – You’ve managed to secure a solid deal for this runner.
                <ul>
                    <li>-5.000 ¥, 1. Attribute, 2. Attribute Temporary</li>
                </ul>
            </li>
            <li>
                <strong>Exceptional</strong> – You’ve managed to convince the runner to work for less than their usual rate.
                <ul>
                    <li>-4.000 ¥, 1. Attribute, 2. Attribute, +1 Reputation</li>
                </ul>
            </li>
        </ol>`,
    },
]
