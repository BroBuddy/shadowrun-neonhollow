export const Town = [
    {
        id: 'R101',
        title: 'NeonHollow',
        content:
            '<p class="flex items-center justify-center"><img src="/images/NeonHollow.jpg" alt="NeonHollow" /></p>' +
            '<p><em>"Where the lights never die — only the people do."</em></p>' +
            '<p><strong>Security District:</strong></p>' +
            '<ul><li>CorpTower (R110)</li><li>PatrolHub (R120)</li></ul>' +
            '<p><strong>Entertainment District:</strong></p>' +
            '<ul><li>BioCare (R130)</li><li>HoloLounge (R140)</li><li>DreamSphere (R150)</li></ul>' +
            '<p><strong>Industrial District:</strong></p>' +
            '<ul><li>EchoGarden (R160)</li><li>IronGym (R170)</li><li>NeuralNexus (R180)</li></ul>' +
            '<p><strong>Underground District:</strong></p>' +
            '<ul><li>SmugglerDen (R190)</li><li>ZeroZone (R200)</li></ul>' +
            '<p>Dive into the rules (R102) to get a taste of how things run at <strong>NeonHollow</strong>.</p>',
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
        content:
            '<p class="flex items-center justify-center"><img src="/images/CorpTower.jpg" alt="CorpTower" /></p>' +
            '<p><em>"Order. Control. Perfection."</em></p>' +
            '<p>Each action is a crucial move in your war against the Corp — complete them all to bring the tower crashing down.</p>' +
            '<p><strong>Actions at CorpTower:</strong></p>' +
            '<ul><li>Leak Sensitive Data (R111)</li><li>Crash Security Systems (R112)</li><li>Confront the CEO (R113)</li></ul>',
    },
    {
        id: 'R111',
        title: 'CorpTower: Leak Sensitive Data',
        content:
            '<p>You must spend <strong>2 Intel</strong> to interact. No exceptions.</p>' +
            '<p>Add your <strong>Logic</strong> plus <strong>Intuition</strong> value to the 2d6 roll to orchestrate the leak and manage the fallout.</p>' +
            '<ul>' +
            '<li>2–5: <strong>Disastrous Failure</strong> – You’ve either sent a decoy file or were traced mid-upload, leaving a trail of evidence.<ul><li>+1 Heat, -1 Reputation</li></ul></li>' +
            '<li>6–9: <strong>Unsuccessful Attempt</strong> – The leak was sloppy, and it barely made an impact.<ul><li>+1 Heat</li></ul></li>' +
            '<li>10–13: <strong>Corp Defenses Hold</strong> – Your leak didn’t have the desired effect.<ul><li>No Effect</li></ul></li>' +
            '<li>14–17: <strong>Moderate Success</strong> – The data released is credible and damaging.<ul><li>-1 Corp Influence</li></ul></li>' +
            '<li>18+: <strong>Catastrophic Blow</strong> – The leak hits them hard. Global attention, corporate turmoil, and public outrage leave the Corp scrambling.<ul><li>-1 Corp Influence, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R112',
        title: 'CorpTower: Crash Security Systems',
        content:
            '<p>You must spend <strong>2 Intel</strong> to interact. No exceptions.</p>' +
            '<p>Add your <strong>Agility</strong> plus <strong>Reaction </strong> value to the 2d6 roll to orchestrate the leak and manage the fallout.</p>',
    },
    {
        id: 'R113',
        title: 'CorpTower: Confront the CEO',
        content:
            '<p>You must spend <strong>2 Intel</strong> to interact. No exceptions.</p>' +
            '<p>Add your <strong>Strength</strong> plus <strong>Charisma</strong> value to the 2d6 roll to orchestrate the leak and manage the fallout.</p>',
    },
    {
        id: 'R120',
        title: 'NeonHollow: PatrolHub',
        content:
            '<p class="flex items-center justify-center"><img src="/images/PatrolHub.jpg" alt="PatrolHub" /></p>' +
            '<p><em>"The law`s last flicker."</em></p>' +
            '<p>Before using the actions, roll 2d6 on the Event Table (R121) to determine what happens during your visit.</p>' +
            '<p><strong>Actions at PatrolHub:</strong></p>' +
            '<ul><li>Pay Off Heat (R122)</li><li>Bounty Hunting (R123)</li></ul>',
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
        id: 'R122',
        title: 'PatrolHub: Pay Off Heat',
        content:
            '<p>Slip 2.000 ¥ to a crooked cop — if you`re lucky, the heat cools off... for now.</p>' +
            '<ul>' +
            '<li>2-3: <strong>Blowback</strong> – The payoff is rejected, and your actions raise suspicion.<ul><li>+1 Heat, -1 Energy</li></ul></li>' +
            '<li>4-5: <strong>Indifference</strong> – The authorities are too busy or unconvinced.<ul><li>No Effect</li></ul></li>' +
            '<li>6-8: <strong>Partial Success</strong> – Some of the heat dies down, but it’s still warm out there.<ul><li>-1 Heat</li></ul></li>' +
            '<li>9-10: <strong>Bribe Accepted</strong> – The right hand gets greased, and the heat backs off noticeably.<ul><li>-2 Heat</li></ul></li>' +
            '<li>11-12: <strong>Clean Slate</strong> – Your generosity and connections buy you peace — for now.<ul><li>-3 Heat, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R123',
        title: 'PatrolHub: Bounty Hunting',
        content:
            '<p>Add any <strong>Attribute</strong> value to the 2d6 roll — your skills guide you through the city, hunting for your target.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Failed Pursuit</strong> – The bounty got away, leaving you with nothing to show for it.<ul><li>-1 Reputation</li></ul></li>' +
            '<li>6-8: <strong>Close Call</strong> – You managed to chase down the target, but just barely.<ul><li>No Effect</li></ul></li>' +
            '<li>9-11: <strong>	Decent Capture</strong> – You tracked and caught the bounty, but it wasn’t easy.<ul><li>+1.000 ¥</li></ul></li>' +
            '<li>12-14: <strong>Swift Success</strong> – The bounty was caught quickly and efficiently.<ul><li>+1.000 ¥, -1 Heat</li></ul></li>' +
            '<li>15+: <strong>Flawless Capture</strong> – You captured the bounty without any issues, impressing everyone in the system.<ul><li>+1.000 ¥, -1 Heat, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R130',
        title: 'NeonHollow: BioCare',
        content:
            '<p class="flex items-center justify-center"><img src="/images/BioCare.jpg" alt="BioCare" /></p>' +
            '<p><em>"Healing flesh, not souls."</em></p>' +
            '<p>Before using the actions, roll 2d6 on the Event Table (R131) to determine what happens during your visit.</p>' +
            '<p><strong>Actions at BioCare:</strong></p>' +
            '<ul><li>Vital Restoration (R132)</li><li>Plasma Donation (R133)</li></ul>',
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
        id: 'R132',
        title: 'BioCare: Vital Restoration',
        content:
            '<p>Restoring your wounds requires a payment of 3.000 ¥ for the necessary treatment and care.</p>' +
            '<p>Roll 2d6 to see how your actions shape the shadows:</p>' +
            '<ul>' +
            '<li>2-3: <strong>Malfunctioning Treatment</strong> – The procedure goes wrong, leaving you feeling disoriented and weak.<ul><li>-2 Energy</li></ul></li>' +
            '<li>4-5: <strong>Basic Care</strong> – Standard treatment leaves you feeling a bit better, but not fully restored.<ul><li>+2 Health, -1 Energy</li></ul></li>' +
            '<li>6-8: <strong>Enhanced Healing</strong> – A smooth treatment leaves you feeling better with some improvement.<ul><li>+4 Health</li></ul></li>' +
            '<li>9-10: <strong>Revitalizing Therapy</strong> – The treatment boosts your health significantly.<ul><li>+6 Health, +1 Energy</li></ul></li>' +
            '<li>11-12: <strong>Nano-Boost</strong> – Cutting-edge technology restores you fully and enhances your health.<ul><li>+8 Health, +2 Energy</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R133',
        title: 'BioCare: Plasma Donation',
        content:
            '<p>By sacrificing a bit of your own vitality, you exchange <strong>-1 Health</strong> for a quick boost of <strong>1.000 ¥</strong>.</p>' +
            '<p>Roll 2d6 to see how your actions shape the shadows:</p>' +
            '<ul>' +
            '<li>2-3: <strong>Critical Withdrawal</strong> – Your veins rebel. The extraction is messy and painful.<ul><li>-1 Energy, +1 Heat</li></ul></li>' +
            '<li>4-5: <strong>Unstable Plasma</strong> – The extraction goes through, but it’s far from smooth.<ul><li>-1 Energy</li></ul></li>' +
            '<li>6-8: <strong>Suboptimal Donation</strong> – The plasma is harvested with moderate success, but it’s not ideal.<ul><li>No Effect</li></ul></li>' +
            '<li>9-10: <strong>Standard Donation</strong> – A clean and efficient extraction. The transaction goes as planned.<ul><li>+1 Energy</li></ul></li>' +
            '<li>11-12: <strong>Prime Fluid Harvest</strong> – The extraction is flawless, and your blood is of excellent quality.<ul><li>+1 Energy, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R140',
        title: 'NeonHollow: HoloLounge',
        content:
            '<p class="flex items-center justify-center"><img src="/images/HoloLounge.jpg" alt="HoloLoungeoCare" /></p>' +
            '<p><em>"Reality? Optional."</em></p>' +
            '<p>Before using the actions, roll 2d6 on the Event Table (R141) to determine what happens during your visit.</p>' +
            '<p><strong>Actions at HoloLounge:</strong></p>' +
            '<ul><li>Drinking Shots (R142)</li><li>Gambling (R143)</li></ul>',
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
        id: 'R142',
        title: 'HoloLounge: Drinking Shots',
        content:
            '<p>Quenching your thirst with a round of shots comes at a cost of 1.00 ¥ per drink.</p>' +
            '<p>Add your <strong>Agility</strong> to the 2d6 roll when drinking to handle the physical effects and avoid getting too drunk.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Glitched Gut</strong> – Your stomach churns, vision blurs, and you knock over a table. Someone`s watching now.<ul><li>-1 Energy, +1 Heat</li></ul></li>' +
            '<li>6-8: <strong>Static Sip</strong> – It hits like flat soda. No kick, no buzz<ul><li>No Effect</li></ul></li>' +
            '<li>9-11: <strong>Average Buzz</strong> – A steady flow warms your nerves, keeping the shadows at bay.<ul><li>+1 Energy</li></ul></li>' +
            '<li>12-14: <strong>Pleasant Glow</strong> – Relaxed and sociable, you catch wind of a useful rumor.<ul><li>+2 Energy, +1 Intel</li></ul></li>' +
            '<li>15+: <strong>Euphoric High</strong> – The mix hits perfect. Your confidence is sky-high, and even strangers like you.<ul><li>+3 Energy, +1 Charisma (next Run)</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R143',
        title: 'HoloLounge: Gambling',
        content:
            '<p>To participate in gambling, you must have at least 2.000 ¥ in your pocket.</p>' +
            '<p>Add your <strong>Logic</strong> or <strong>Intuition</strong> value to the 2d6 roll when gambling, depending on whether you rely on gut instincts or persuasive tactics to sway the odds in your favor.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Big Loss</strong> – Your luck is about as bad as it gets tonight. The losses hit hard.<ul><li>-2.000 ¥, -1 Energy, -1 Reputation</li></ul></li>' +
            '<li>6-8: <strong>Unlucky Streak</strong> – The cards aren’t in your favor, and your winnings feel like they don’t matter much.<ul><li>-1.000 ¥, -1 Energy</li></ul></li>' +
            '<li>9-11: <strong>Even Luck</strong> – It’s a wash. No gains, no losses.<ul><li>No Effect</li></ul></li>' +
            '<li>12-14: <strong>Lucky Break</strong> – The house can’t touch you tonight, and you’re getting the payout you’ve been waiting for.<ul><li>+1.000 ¥, +1 Energy</li></ul></li>' +
            '<li>15+: <strong>Jackpot!</strong> – The payout is massive, and the room watches in awe as you walk away with a fortune.<ul><li>+2.000 ¥, +1 Energy, +1 Heat</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R150',
        title: 'NeonHollow: DreamSphere',
        content:
            '<p class="flex items-center justify-center"><img src="/images/DreamSphere.jpg" alt="DreamSphere" /></p>' +
            '<p><em>"Where your nightmares become hobbies."</em></p>' +
            '<p>Before using the actions, roll 2d6 on the Event Table (R151) to determine what happens during your visit.</p>' +
            '<p><strong>Actions at DreamSphere:</strong></p>' +
            '<ul><li>Battery Recharge (R152)</li><li>Eating Meals (R153)</li></ul>',
    },
    {
        id: 'R151',
        title: 'DreamSphere: Event Table',
        content:
            '<ul>' +
            '<li>2: <strong>Access Denied</strong><ul><li>Security ejects you from the building.</li></ul></li>' +
            '<li>2: <strong>Welcome Drink Fail</strong> – The bartender serves you a drink that tastes completely wrong.<ul><li>-1 Health</li></ul></li>' +
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
        id: 'R152',
        title: 'DreamSphere: Battery Recharge',
        content:
            '<p>Recharging your battery will cost you 2.000 ¥.</p>' +
            '<p>Add your <strong>Intuition</strong> to the 2d6 roll when sleeping — your instincts help you find rest in the chaos.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Glitching Nightmare</strong> – The DreamSphere malfunctions, bombarding your mind with fractured code and unsettling visions.<ul><li>+2 Energy, -2 Health</li></ul></li>' +
            '<li>6-8: <strong>Data Noise Dreams</strong> – Your sleep is shallow, haunted by corrupted memories and ad jingle echoes.<ul><li>+3 Energy, -1 Health</li></ul></li>' +
            '<li>9-11: <strong>Mediocre Recharge</strong> – You drift through bland dreamscapes. Not bad, not great—just enough.<ul><li>+4 Energy</li></ul></li>' +
            '<li>12-14: <strong>REM Reboot</strong> – The DreamSphere calibrates your vitals perfectly. You wake up feeling refreshed.<ul><li>+5 Energy, +1 Health</li></ul></li>' +
            '<li>15+: <strong>Neural Harmony</strong> – Total system sync. Your mind and body align in a deep, healing trance.<ul><li>+6 Energy, +2 Health, +1 Reaction (next Run)</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R153',
        title: 'DreamSphere: Eating Meals',
        content:
            '<p>Satisfying your hunger with a hearty meal costs 1.000 ¥.</p>' +
            '<p>Add your <strong>Logic</strong> to the 2d6 roll when choosing or preparing meals to optimize quality and benefits.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Spoiled Slop</strong> – The meal was synthetic... and suspiciously expired.<ul><li>-1 Health, -1 Energy</li></ul></li>' +
            '<li>6-8: <strong>Greasy Grub</strong> – Cheap calories and greasy additives fill your gut—but little else.<ul><li>No Effect</li></ul></li>' +
            '<li>9-11: <strong>Street Standard</strong> – A balanced mix of synth-protein and carbs, enough to keep you moving.<ul><li>+1 Health</li></ul></li>' +
            '<li>12-14: <strong>NutriBurst Platter</strong> – Fortified nutrient cubes and stim-enhanced flavor. Tastes weird, works wonders.<ul><li>+2 Health</li></ul></li>' +
            '<li>15+: <strong>Gourmet Clone Cuisine</strong> – A masterfully engineered meal loaded with bio-nutrients, protein stacks, and trace nanites.<ul><li>+3 Health, +1 Strength (next Run)</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R160',
        title: 'NeonHollow: EchoGarden',
        content:
            '<p class="flex items-center justify-center"><img src="/images/EchoGarden.jpg" alt="EchoGarden" /></p>' +
            '<p><em>"The city’s memory grows here."</em></p>' +
            '<p>Before using the actions, roll 2d6 on the Event Table (R161) to determine what happens during your visit.</p>' +
            '<p><strong>Actions at EchoGarden:</strong></p>' +
            '<ul><li>Laying Off (R162)</li><li>Informant Detection (R163)</li></ul>',
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
        id: 'R162',
        title: 'EchoGarden: Laying Off',
        content:
            '<p>Roll 2d6 to see how your actions shape the shadows:</p>' +
            '<ul>' +
            '<li>2-3: <strong>Unsuccessful Escape</strong> – The moment you think you`re hiding, you draw unwanted attention.<ul><li>+1 Heat</li></ul></li>' +
            '<li>4-5: <strong>Tension Lingers</strong> – No change. You lay low, but your movements are still being watched.<ul><li>No Effect</li></ul></li>' +
            '<li>6-8: <strong>Low Profile</strong> – You manage to blend in and stay under the radar.<ul><li>-1 Heat</li></ul></li>' +
            '<li>9-10: <strong>Under the Radar</strong> – You`ve really gotten the hang of being discreet.<ul><li>-1 Heat, +1 Energy</li></ul></li>' +
            '<li>11-12: <strong>Master of Discretion</strong> –  You`ve perfectly avoided attention, and the city feels quieter around you.<ul><li>-1 Heat, +1 Energy, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R163',
        title: 'EchoGarden: Informant Detection',
        content:
            '<p>Add your <strong>Reaction</strong> to the 2d6 roll when spying on an informant — your ability to blend into the crowd and avoid detection is key to gathering intel.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Spotted!</strong> – You fail to blend in and the informant notices your presence. They might take evasive action or call for backup.<ul><li>-1 Reputation, +1 Heat</li></ul></li>' +
            '<li>6-8: <strong>Close Call</strong> – You manage to hide in the crowd, but the informant grows suspicious, narrowing their eyes. They might leave the area soon.<ul><li>-1 Reputation</li></ul></li>' +
            '<li>9-11: <strong>Subtle Observation</strong> – You keep a low profile, tailing the informant without arousing suspicion. You gather valuable information.<ul><li>+1 Intel</li></ul></li>' +
            '<li>12-14: <strong>Unseen</strong> – You move through the crowd effortlessly, your presence completely unnoticed. The informant doesn`t suspect a thing.<ul><li>+2 Intel</li></ul></li>' +
            '<li>15+: <strong>Master of Shadows</strong> – Your skills in evasion are unmatched. Not only do you gather intel, but you also gain a better insight into the informant`s network.<ul><li>+2 Intel, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R170',
        title: 'NeonHollow: IronGym',
        content:
            '<p class="flex items-center justify-center"><img src="/images/IronGym.jpg" alt="IronGym" /></p>' +
            '<p><em>"Muscle isn`t old-school — it`s survival."</em></p>' +
            '<p><strong>Actions at IronGym:</strong></p>' +
            '<ul><li>Physical Training (R171)</li><li>Stimulant Injection (R172)</li></ul>',
    },
    {
        id: 'R171',
        title: 'IronGym: Physical Training',
        content:
            '<p>Choose one of your attributes:</p>' +
            '<ul><li>Strength</li><li>Agility</li><li>Reaction</li></ul>' +
            '<p>The training session costs you 1.000 ¥ multiplied by your current attribute value.</p>' +
            '<p>Roll 2d6 to determine the effectiveness of your training:</p>' +
            '<ul>' +
            '<li>2-3: <strong>Injury</strong> – You overexert yourself and suffer a setback.<ul><li>-1 Energy, -1 Health</li></ul></li>' +
            '<li>4-5: <strong>Minor Progress</strong> – The training leaves you feeling sore but no noticeable improvement.<ul><li>No Effect</li></ul></li>' +
            '<li>6-8: <strong>Steady Improvement</strong> – Your body adapts to the training, and you feel stronger.<ul><li>+1 Attribute</li></ul></li>' +
            '<li>9-10: <strong>Focused Training</strong> – Intense training sessions lead to real gains.<ul><li>+1 Attribute, +1 Energy</li></ul></li>' +
            '<li>11-12: <strong>Peak Performance</strong> – You’ve mastered the routine, achieving substantial improvement.<ul><li>+1 Attribute, +2 Energy</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R172',
        title: 'IronGym: Stimulant Injection',
        content:
            '<p>A dose will set you back 1.000 ¥, a price for pushing your limits.</p>' +
            '<p>Roll for a random attribute (C002) — the effects of the injection are unpredictable, making every dose a risky bet with your body and mind.</p>' +
            '<p>Add your <strong>Strength</strong> value to the 2d6 roll — your raw power will shape the outcome.</p>' +
            '<ul>' +
            '<li>2-5: <strong>System Crash</strong> – The stimulant overwhelms your system, causing your body to overreact. <ul><li>+1 Heat, -1 Attribute Temporary</li></ul></li>' +
            '<li>6-8: <strong>Jittery Burnout</strong> – You feel the surge of energy but quickly realize it’s not as effective as you hoped.<ul><li>+1 Heat</li></ul></li>' +
            '<li>9-11: <strong>Tense Surge</strong> –  The stimulant enhances your physical or mental abilities, but not without cost. <ul><li>+1 Attribute Temporary, -1 Health</li></ul></li>' +
            '<li>12-14: <strong>Sharp Precision</strong> – You experience a smooth boost of energy and focus<ul><li>+1 Attribute Temporary</li></ul></li>' +
            '<li>15+: <strong>Peak Condition</strong> – Y You feel invigorated, as the stimulant fine-tunes your abilities to their peak.<ul><li>+1 Attribute Temporary, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R180',
        title: 'NeonHollow: NeuralNexus',
        content:
            '<p class="flex items-center justify-center"><img src="/images/NeuralNexus.jpg" alt="NeuralNexus" /></p>' +
            '<p><em>"Where minds meet machines."</em></p>' +
            '<p><strong>Actions at NeuralNexus:</strong></p>' +
            '<ul><li>Mental Training (R181)</li><li>Memory Mining (R182)</li></ul>',
    },
    {
        id: 'R181',
        title: 'NeuralNexus: Mental Training',
        content:
            '<p>Choose one of your attributes:</p>' +
            '<ul><li>Logic</li><li>Intuition</li><li>Charisma</li></ul>' +
            '<p>The training session costs you 1.000 ¥ multiplied by your current attribute value.</p>' +
            '<p>Roll 2d6 to determine the effectiveness of your training:</p>' +
            '<ul>' +
            '<li>2-3: <strong>Mental Block</strong> – Your focus falters, and you can’t seem to grasp the concepts. Training has little effect.<ul><li>-1 Energy, -1 Health</li></ul></li>' +
            '<li>4-5: <strong>Stagnant Progress</strong> – 	The training didn’t push you to your limits, and you’re feeling stuck.<ul><li>No Effect</li></ul></li>' +
            '<li>6-8: <strong>Moderate Improvement</strong> – The training session is steady, leaving you with a slight boost.<ul><li>+1 Attribute</li></ul></li>' +
            '<li>9-10: <strong>Focused Mastery</strong> – You put in the work and feel like you`re gaining ground. Your mind is sharp.<ul><li>+1 Attribute, +1 Energy</li></ul></li>' +
            '<li>11-12: <strong>Mental Breakthrough</strong> –  A moment of clarity and insight takes your training to the next level, unlocking hidden potential.<ul><li>+1 Attribute, +2 Energy</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R182',
        title: 'NeuralNexus: Memory Mining',
        content:
            '<p>Drain some of your energy to fuel your wallet. Exchange <strong>-2 Energy</strong> for a quick infusion of <strong>1.000 ¥</strong>.</p>' +
            '<p>Roll 2d6 to see how your actions shape the shadows:</p>' +
            '<ul>' +
            '<li>2-3: <strong>Glitched Memory</strong> – The data extraction goes haywire, causing intense mental strain.<ul><li>-1 Health, +1 Heat</li></ul></li>' +
            '<li>4-5: <strong>Fragmented Recall</strong> – You manage to pull something useful, but the process is rough and incomplete.<ul><li>-1 Health</li></ul></li>' +
            '<li>6-8: <strong>Fuzzy Memories</strong> – A somewhat smooth extraction, but the memory data is flawed or fragmented. <ul><li>No Effect</li></ul></li>' +
            '<li>9-10: <strong>Clear Vision</strong> – The memory mining goes well, providing you with a decent payout and valuable data.<ul><li>+1 Intel</li></ul></li>' +
            '<li>11-12: <strong>Prime Data Stream</strong> – The extraction is flawless, and the memories are pristine, yielding rich rewards.<ul><li>+1 Intel, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R190',
        title: 'NeonHollow: SmugglerDen',
        content:
            '<p class="flex items-center justify-center"><img src="/images/SmugglerDen.jpg" alt="SmugglerDen" /></p>' +
            '<p><em>"The city`s forgotten veins."</em></p>' +
            '<p><strong>Actions at SmugglerDen:</strong></p>' +
            '<ul><li>Cyberware Installation (R191)</li><li>Selling Intel (R192)</li></ul>',
    },
    {
        id: 'R191',
        title: 'SmugglerDen: Cyberware Installation',
        content:
            '<p>Roll 2d6 to see how your actions shape the shadows:</p>' +
            '<ul>' +
            '<li>2-3: <strong>Malfunctioning</strong> – The cyberware fails to integrate properly, causing glitches and instability.<ul><li>-1 random Attribute, +1 Heat</li></ul></li>' +
            '<li>4-5: <strong>Hiccup</strong> – The cyberware installation is partially successful, but some functions are not working as expected.<ul><li>-1 random Attribute Temporary</li></ul></li>' +
            '<li>6-8: <strong>Stable</strong> – The cyberware is successfully installed and functions as intended, but without optimal performance.<ul><li>+1 random Attribute Temporary</li></ul></li>' +
            '<li>9-10: <strong>Enhanced</strong> – The cyberware installation goes smoothly, improving the system’s overall performance.<ul><li>+1 random Attribute</li></ul></li>' +
            '<li>11-12: <strong>Perfect Sync</strong> – The installation is flawless, and the cyberware integrates seamlessly, enhancing the user experience.<ul><li>+1 random Attribute, +1 Reputation</li></ul></li>' +
            '</ul>' +
            '<p>When rolling for a random attribute, refer to the attribute details for guidance (C002).</p>',
    },
    {
        id: 'R192',
        title: 'SmugglerDen: Selling Intel',
        content:
            '<p>You need at least one piece of intel to approach a fixer. Regardless of the outcome, the intel is used up in the process.</p>' +
            '<p>Add your <strong>Logic</strong> value to the 2d6 roll — sharp insight turns raw intel into real cred on the streets.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Flagged</strong> – Your intel was traced — you`re now on their radar<ul><li>+1 Heat</li></ul></li>' +
            '<li>6-8: <strong>Disregarded</strong> – Low-level intel. No one’s interested.<ul><li>No Effect</li></ul></li>' +
            '<li>9-11: <strong>Standard Trade</strong> – Decent info, fair price.<ul><li>+1.000 ¥</li></ul></li>' +
            '<li>12-14: <strong>Valuable Lead</strong> – They found use in your intel.<ul><li>+2.000 ¥</li></ul></li>' +
            '<li>15+: <strong>Classified Gold</strong> – Your intel changes plans<ul><li>+3.000 ¥, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R200',
        title: 'NeonHollow: ZeroZone',
        content:
            '<p class="flex items-center justify-center"><img src="/images/ZeroZone.jpg" alt="ZeroZone" /></p>' +
            '<p><em>"Where the shadows test their own."</em></p>' +
            '<p><strong>Actions at ZeroZone:</strong></p>' +
            '<ul><li>Wire a Contact (R201)</li><li>Challenge (R202)</li></ul>',
    },
    {
        id: 'R201',
        title: 'ZeroZone: Wire a Contact',
        content:
            '<p>Jack into the Runner Matrix (N001) to trace the digital scent of freelance talent ready to run.</p>' +
            '<p>To hire this runner for your squad, you must have at least 8.000 ¥ available.</p>' +
            '<p>Add your <strong>Charisma</strong> value to the 2d6 roll to haggle with the runner for lower payment.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Overpriced Hire</strong> – You’ve hired a runner, but it’s going to cost you dearly.<ul><li>-8.000 ¥, +1 random Runner</li></ul></li>' +
            '<li>6-8: <strong>Expensive but Acceptable</strong> – The runner’s skill set is solid, but they’re not exactly cheap.<ul><li>-7.000 ¥, +1 random Runner</li></ul></li>' +
            '<li>9-11: <strong>Standard Price</strong> – The runner`s price is what you would expect for their skill level.<ul><li>-6.000 ¥, +1 random Runner</li></ul></li>' +
            '<li>12-14: <strong>Reasonable Hire</strong> – You’ve managed to secure a solid deal for this runner.<ul><li>-5.000 ¥, +1 random Runner</li></ul></li>' +
            '<li>15+: <strong>Bargain Hire</strong> – You’ve managed to convince the runner to work for less than their usual rate.<ul><li>-4.000 ¥, +1 random Runner</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R202',
        title: 'ZeroZone: Challenge',
        content:
            '<p>Choose one of your physical or mental attributes.</p>' +
            '<p>Roll on the Runner Matrix (N001) to find out who`s your opponent in this challenge.</p>' +
            '<ol><li><strong>Size up your opponent.</strong> Compare your chosen attribute with theirs to determine your edge.</li>' +
            '<li><strong>Feel the adrenaline.</strong> Add or subtract the difference to your 2d6 roll.</li>' +
            '<li><strong>Face the outcome.</strong> Consult the challenge result (R203) to see if you walk away stronger — or bruised.</li></ol>',
    },
    {
        id: 'R203',
        title: 'ZeroZone: Result',
        content:
            '<p>Once the sweat dries and the dust settles, it’s time to see what you gained — or lost.</p>' +
            '<ul>' +
            '<li>2-3: <strong>Crushed</strong> – You were completely outmatched — maybe stick to cardio.<ul><li>-1 Health, -1 Reputation</li></ul></li>' +
            '<li>4-5: <strong>Outperformed</strong> – You gave it your all, but your opponent had the upper hand.<ul><li>-1 Energy</li></ul></li>' +
            '<li>6-8: <strong>Even Match</strong> – Neither of you gained the upper hand — this one’s a draw.<ul><li>No Effect</li></ul></li>' +
            '<li>9-10: <strong>Dominant</strong> – You held your ground and impressed everyone watching.<ul><li>+1 Energy</li></ul></li>' +
            '<li>11-12: <strong>Flawless Victory</strong> – You completely outshined your opponent — respect earned.<ul><li>+1.000 ¥, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R800',
        title: 'NeonHollow: SafeHouse',
        content:
            '<p class="flex items-center justify-center"><img src="/images/SafeHouse.jpg" alt="SafeHouse" /></p>' +
            '<p><em>"No names. No noise. No light."</em></p>' +
            '<p><strong>Actions at SafeHouse:</strong></p>',
    },
    {
        id: 'R900',
        title: 'NeonHollow: CyberBite',
        content:
            '<p class="flex items-center justify-center"><img src="/images/CyberBite.jpg" alt="CyberBite" /></p>' +
            '<p><em>"Food, but wired."</em></p>' +
            '<p>Before using the actions, roll 2d6 on the Event Table (R131) to determine what happens during your visit.</p>' +
            '<p><strong>Actions at CyberBite:</strong></p>' +
            '<ul><li>Eating Meals (R901)</li></ul>',
    },
    {
        id: 'R901',
        title: 'CyberBite: Event Table',
        content:
            '<ul>' +
            '<li>2: <strong>Access Denied</strong><ul><li>Security ejects you from the building.</li></ul></li>' +
            '<li>3: <strong>Missing Credstick</strong> – As you reach the counter, you realize your credstick is missing.<ul><li>-1 Reputation</li></ul></li>' +
            '<li>4: <strong>Contamination Alert</strong> – A health scanner detects a false biohazard signature from your last visit.<ul><li>+1 Heat</li></ul></li>' +
            '<li>5: <strong>Overpriced Menu</strong> – The menu is far more expensive than anticipated.<ul><li>-1.000 ¥</li></ul></li>' +
            '<li>6: <strong>Overflowing Crowds</strong> – The restaurant is packed beyond capacity.<ul><li>-1 Energy</li></ul></li>' +
            '<li>7: <strong>Standard Procedure</strong><ul><li>No Effect</li></ul></li>' +
            '<li>8: <strong>Speedy Service</strong> – Your order is processed quickly, and the meal arrives with no delay.<ul><li>+1 Energy</li></ul></li>' +
            '<li>9: <strong>Surprise Special</strong> – The chef offers a free, surprise dish on the house. It`s surprisingly delicious.<ul><li>+1 Health</li></ul></li>' +
            '<li>10: <strong>Power Pour</strong> – The bartender slides you a glowing crimson shot on the house.<ul><li>+1 Strength Temporary</li></ul></li>' +
            '<li>11: <strong>Exclusive Invite</strong> – You gain access to the VIP section.<ul><li>+1 Logic Temporary</li></ul></li>' +
            '<li>12: <strong>Perfect Experience</strong> – The food is exceptional, and the atmosphere is perfect.<ul><li>+1 Reputation</li></ul></li>' +
            '</ul>',
    },
]
