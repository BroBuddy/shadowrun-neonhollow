export const Town = [
    {
        id: 'T001',
        title: 'NeonHollow',
        content:
            '<p><em>"Where the lights never die—only the people do."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/NeonHollow.jpg" alt="NeonHollow" /></p>' +
            '<p><strong>NeonHollow</strong> is a fractured sprawl of flickering holo-ads, decaying arcologies, and back-alley deals. The corporations rule from mirrored towers, the gangs own the ground, and the rest just try to survive in the haze of smog and digital noise. Nothing here is clean—least of all your conscience.</p>' +
            '<p><strong>Entertainment District:</strong></p>' +
            '<ul><li>BioCare (T010)</li><li>HoloLounge (T020)</li><li>DreamSphere (T030)</li><li>EchoGarden (T040)</li></ul>' +
            '<p><strong>Industrial District:</strong></p>' +
            '<ul><li>PatrolHub (T050)</li><li>IronGym (T060)</li><li>NeuralNexus (T070)</li></ul>' +
            '<p><strong>Underground District:</strong></p>' +
            '<ul><li>SmugglerDen (T080)</li><li>ZeroZone (T090)</li></ul>' +
            '<p>When a town event unfolds, roll on the Event Matrix (E001) to discover what new twist awaits you in the neon-drenched streets of Neonhollow.</p>',
    },
    {
        id: 'T010',
        title: 'NeonHollow: BioCare',
        content:
            '<p><em>"Healing flesh, not souls."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/BioCare.jpg" alt="BioCare" /></p>' +
            '<p>Gene-hacked meds and synthetic organs in sterile, humming rooms. You’ll walk out fixed. Probably.</p>' +
            '<p><strong>Actions at BioCare:</strong></p>' +
            '<ul><li>Vital Restoration (T011)</li><li>Plasma Donation (T012)</li></ul>',
    },
    {
        id: 'T011',
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
        id: 'T012',
        title: 'BioCare: Plasma Donation',
        content:
            '<p>By sacrificing a bit of your own vitality, you exchange <strong>-1 Health</strong> for a quick boost of <strong>1.000 ¥</strong>.</p>' +
            '<p>Roll 2d6 to see how your actions shape the shadows:</p>' +
            '<ul>' +
            '<li>2-3: <strong>Critical Withdrawal</strong> – Your veins rebel. The extraction is messy and painful.<ul><li>-1 Energy, -1 Reputation</li></ul></li>' +
            '<li>4-5: <strong>Unstable Plasma</strong> – The extraction goes through, but it’s far from smooth.<ul><li>-1 Energy</li></ul></li>' +
            '<li>6-8: <strong>Suboptimal Donation</strong> – The plasma is harvested with moderate success, but it’s not ideal.<ul><li>No Effect</li></ul></li>' +
            '<li>9-10: <strong>Standard Donation</strong> – A clean and efficient extraction. The transaction goes as planned.<ul><li>+1 Energy</li></ul></li>' +
            '<li>11-12: <strong>Prime Fluid Harvest</strong> – The extraction is flawless, and your blood is of excellent quality.<ul><li>+1 Energy, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'T020',
        title: 'NeonHollow: HoloLounge',
        content:
            '<p><em>"Reality? Optional."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/HoloLounge.jpg" alt="HoloLoungeoCare" /></p>' +
            '<p>Plug in and drift away — virtual escapism meets social surveillance. Someone’s always watching.</p>' +
            '<p><strong>Actions at HoloLounge:</strong></p>' +
            '<ul><li>Eating (T021)</li><li>Drinking (T022)</li><li>Gambling (T023)</li></ul>',
    },
    {
        id: 'T021',
        title: 'HoloLounge: Eating',
        content:
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
        id: 'T022',
        title: 'HoloLounge: Drinking',
        content:
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
        id: 'T023',
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
        id: 'T030',
        title: 'NeonHollow: DreamSphere',
        content:
            '<p><em>"Where your nightmares become hobbies."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/DreamSphere.jpg" alt="DreamSphere" /></p>' +
            '<p>Immersive simulations, deep dives, and curated dreams. Your mind may wander, but your body pays.</p>' +
            '<p><strong>Actions at DreamSphere:</strong></p>' +
            '<ul><li>Battery Recharge (T031)</li></ul>',
    },
    {
        id: 'T031',
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
        id: 'T040',
        title: 'NeonHollow: EchoGarden',
        content:
            '<p><em>"The city’s memory grows here."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/EchoGarden.jpg" alt="EchoGarden" /></p>' +
            '<p>Overgrown ruins tuned to ancient tech and spirit circuits. The wind speaks, if you know how to listen.</p>' +
            '<p><strong>Actions at EchoGarden:</strong></p>' +
            '<ul><li>Laying Off (T041)</li><li>Informant Detection (T042)</li></ul>',
    },
    {
        id: 'T041',
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
        id: 'T042',
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
        id: 'T050',
        title: 'NeonHollow: PatrolHub',
        content:
            '<p><em>"The law`s last flicker."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/PatrolHub.jpg" alt="PatrolHub" /></p>' +
            '<p>Half-abandoned precincts where drones recharge and jaded officers monitor chaos from dusty screens.</p>' +
            '<p><strong>Actions at PatrolHub:</strong></p>' +
            '<ul><li>Pay Off Heat (T051)</li><li>Selling Intel (T052)</li></ul>',
    },
    {
        id: 'T051',
        title: 'PatrolHub: Pay Off Heat',
        content:
            '<p>Slip 2.000 ¥ to a crooked cop — if you`re lucky, the heat cools off... for now.</p>' +
            '<ul>' +
            '<li>2-3: <strong>Blowback</strong> – The payoff is rejected, and your actions raise suspicion.<ul><li>+1 Heat, -1 Energy</li></ul></li>' +
            '<li>4-5: <strong>Indifference</strong> – The authorities are too busy or unconvinced.<ul><li>No Effect</li></ul></li>' +
            '<li>6-8: <strong>Partial Success</strong> – Some of the heat dies down, but it’s still warm out there.<ul><li>-1 Heat</li></ul></li>' +
            '<li>9-10: <strong>Bribe Accepted</strong> – The right hand gets greased, and the heat backs off noticeably.<ul><li>-2 Heat</li></ul></li>' +
            '<li>11-12: <strong>Clean Slate</strong> – Your generosity and connections buy you peace—for now.<ul><li>-3 Heat, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'T052',
        title: 'PatrolHub: Selling Intel',
        content:
            '<p>You need at least one piece of intel to approach an officer. Regardless of the outcome, the intel is used up in the process.</p>' +
            '<p>Add your <strong>Logic</strong> value to the 2d6 roll — sharp insight turns raw intel into real cred on the streets.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Flagged</strong> – Your intel was traced — you`re now on their radar<ul><li>+1 Heat</li></ul></li>' +
            '<li>6-8: <strong>Disregarded</strong> – Low-level intel. No one’s interested.<ul><li>No Effect</li></ul></li>' +
            '<li>9-11: <strong>Standard Trade</strong> – Decent info, fair price.<ul><li>+1.000 ¥</li></ul></li>' +
            '<li>12-14: <strong>Valuable Lead</strong> – They found use in your intel. <ul><li>+2.000 ¥, -1 Heat</li></ul></li>' +
            '<li>15+: <strong>Classified Gold</strong> – Your intel changes plans<ul><li>+3.000 ¥, -1 Heat, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'T060',
        title: 'NeonHollow: IronGym',
        content:
            '<p><em>"Muscle isn`t old-school—it`s survival."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/IronGym.jpg" alt="IronGym" /></p>' +
            '<p>At IronGym, you can enhance your attributes through training or pit them against other runners in a challenging showdown.</p>' +
            '<p><strong>Actions at IronGym:</strong></p>' +
            '<ul><li>Physical Training (T061)</li></ul>',
    },
    {
        id: 'T061',
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
        id: 'T070',
        title: 'NeonHollow: NeuralNexus',
        content:
            '<p><em>"Where minds meet machines."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/NeuralNexus.jpg" alt="NeuralNexus" /></p>' +
            '<p>At NeuralNexus, you can refine your attributes with targeted training or challenge other runners to test your skills.</p>' +
            '<p><strong>Actions at NeuralNexus:</strong></p>' +
            '<ul><li>Mental Training (T071)</li></ul>',
    },
    {
        id: 'T071',
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
        id: 'T080',
        title: 'NeonHollow: SmugglerDen',
        content:
            '<p><em>"The city`s forgotten veins."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/SmugglerDen.jpg" alt="SmugglerDen" /></p>' +
            '<p>Crates of contraband, whispered deals, and guarded nods. If it’s illegal or rare, it passed through here.</p>' +
            '<p><strong>Actions at SmugglerDen:</strong></p>' +
            '<ul><li>Cyberware Installation (T081)</li><li>Stimulant Injection (T082)</li></ul>',
    },
    {
        id: 'T081',
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
        id: 'T082',
        title: 'SmugglerDen: Stimulant Injection',
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
        id: 'T090',
        title: 'NeonHollow: ZeroZone',
        content:
            '<p><em>"Where the shadows test their own."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/ZeroZone.jpg" alt="ZeroZone" /></p>' +
            '<p>ZeroZone is more than just a meeting ground—it`s the crucible where shadowrunners prove their worth. Every interaction here is a gamble, whether it’s a whispered offer or a brutal showdown. Step inside, and the city’s underbelly watches.</p>' +
            '<p><strong>Actions at ZeroZone:</strong></p>' +
            '<ul><li>Wire a Contact (T091)</li><li>Challenge (T092)</li></ul>',
    },
    {
        id: 'T091',
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
        id: 'T092',
        title: 'ZeroZone: Challenge',
        content:
            '<p>Choose one of your physical or mental attributes.</p>' +
            '<p>Roll on the Runner Matrix (N001) to find out who`s your opponent in this challenge.</p>' +
            '<ol><li><strong>Size up your opponent.</strong> Compare your chosen attribute with theirs to determine your edge.</li>' +
            '<li><strong>Feel the adrenaline.</strong> Add or subtract the difference to your 2d6 roll.</li>' +
            '<li><strong>Face the outcome.</strong> Consult the challenge result (T093) to see if you walk away stronger — or bruised.</li></ol>',
    },
    {
        id: 'T093',
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
]
