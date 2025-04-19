export const Town = [
    {
        id: 'T001',
        title: 'NeonHollow',
        content:
            '<p><em>"Where the lights never die—only the people do."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/NeonHollow.jpg" alt="NeonHollow" /></p>' +
            '<p><strong>NeonHollow</strong> is a fractured sprawl of flickering holo-ads, decaying arcologies, and back-alley deals. The corporations rule from mirrored towers, the gangs own the ground, and the rest just try to survive in the haze of smog and digital noise. Nothing here is clean—least of all your conscience.</p>' +
            '<p><strong>Facilities in NeonHollow:</strong></p>' +
            '<ul><li>BioCare (T010)</li><li>CyberBite (T020)</li><li>DreamSphere (T030)</li><li>EchoGarden (T040)</li><li>HoloLounge (T050)</li><li>IronGym (T060)</li><li>NeuralNexus (T070)</li><li>PatrolHub (T080)</li><li>SmugglerDen (T090)</li></ul>',
    },
    {
        id: 'T010',
        title: 'NeonHollow: BioCare',
        content:
            '<p><em>"Healing flesh, not souls."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/BioCare.jpg" alt="BioCare" /></p>' +
            '<p>Gene-hacked meds and synthetic organs in sterile, humming rooms. You’ll walk out fixed. Probably.</p>' +
            '<p><strong>Actions at BioCare:</strong></p>' +
            '<ul><li>Healing (T011)</li><li>Cyberware Installation (T012)</li></ul>',
    },
    {
        id: 'T011',
        title: 'BioCare: Healing',
        content:
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
        title: 'BioCare: Cyberware Installation',
        content:
            '<p>Roll 2d6 to see how your actions shape the shadows:</p>' +
            '<ul>' +
            '<li>2-3: <strong>Malfunctioning</strong> – The cyberware fails to integrate properly, causing glitches and instability.<ul><li>-1 Attribute, -2 Energy, +1 Heat</li></ul></li>' +
            '<li>4-5: <strong>Hiccup</strong> – The cyberware installation is partially successful, but some functions are not working as expected.<ul><li>-1 Energy</li></ul></li>' +
            '<li>6-8: <strong>Stable</strong> – The cyberware is successfully installed and functions as intended, but without optimal performance.<ul><li>+1 Attribute</li></ul></li>' +
            '<li>9-10: <strong>Enhanced</strong> – The cyberware installation goes smoothly, improving the system’s overall performance.<ul><li>+1 Attribute, +1 Energy</li></ul></li>' +
            '<li>11-12: <strong>Perfect Sync</strong> – The installation is flawless, and the cyberware integrates seamlessly, enhancing the user experience.<ul><li>+1 Attribute, +2 Energy, +1 random Attribute (next Run)</li></ul></li>' +
            '</ul>' +
            '<p>When rolling for a random attribute, refer to the attribute details for guidance (C002).</p>',
    },
    {
        id: 'T020',
        title: 'NeonHollow: CyberBite',
        content:
            '<p><em>"Food, but wired."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/CyberBite.jpg" alt="CyberBite" /></p>' +
            '<p>Nutrient paste and synth meat, spiked with nootropics and stim flavoring. Keeps your edge sharp.</p>' +
            '<p><strong>Actions at CyberBite:</strong></p>' +
            '<ul><li>Eating (T021)</li><li>Drinking (T022)</li></ul>',
    },
    {
        id: 'T021',
        title: 'CyberBite: Eating',
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
        title: 'CyberBite: Drinking',
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
        id: 'T030',
        title: 'NeonHollow: DreamSphere',
        content:
            '<p><em>"Where your nightmares become hobbies."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/DreamSphere.jpg" alt="DreamSphere" /></p>' +
            '<p>Immersive simulations, deep dives, and curated dreams. Your mind may wander, but your body pays.</p>' +
            '<p><strong>Actions at DreamSphere:</strong></p>' +
            '<ul><li>Sleeping (T031)</li><li>Socializing (T032)</li></ul>',
    },
    {
        id: 'T031',
        title: 'DreamSphere: Sleeping',
        content:
            '<p>Add your <strong>Intuition</strong> to the 2d6 roll when sleeping—your instincts help you find rest in the chaos.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Glitching Nightmare</strong> – The DreamSphere malfunctions, bombarding your mind with fractured code and unsettling visions.<ul><li>+2 Energy, -2 Health</li></ul></li>' +
            '<li>6-8: <strong>Data Noise Dreams</strong> – Your sleep is shallow, haunted by corrupted memories and ad jingle echoes.<ul><li>+3 Energy, -1 Health</li></ul></li>' +
            '<li>9-11: <strong>Mediocre Recharge</strong> – You drift through bland dreamscapes. Not bad, not great—just enough.<ul><li>+4 Energy</li></ul></li>' +
            '<li>12-14: <strong>REM Reboot</strong> – The DreamSphere calibrates your vitals perfectly. You wake up feeling refreshed.<ul><li>+5 Energy, +1 Health</li></ul></li>' +
            '<li>15+: <strong>Neural Harmony</strong> – Total system sync. Your mind and body align in a deep, healing trance.<ul><li>+6 Energy, +2 Health, +1 Reaction (next Run)</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'T032',
        title: 'DreamSphere: Socializing',
        content:
            '<p>Add your <strong>Charisma</strong> value to the 2d6 roll when socializing with other runners.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Awkward Encounter</strong> – You say the wrong thing to the wrong person. The tension sticks.<ul><li>+1 Heat</li></ul></li>' +
            '<li>6-8: <strong>Cold Shoulders</strong> – No one’s in the mood to talk. The room feels colder than the neon glow.<ul><li>No Effect</li></ul></li>' +
            '<li>9-11: <strong>Small Talk Sync</strong> – You chat with a few fellow runners. Nothing major, but you get a feel for who`s around.<ul><li>+1 Intel</li></ul></li>' +
            '<li>12-14: <strong>Shared War Stories</strong> – A runner opens up about a recent job. You walk away with useful info.<ul><li>+2 Intel</li></ul></li>' +
            '<li>15+: <strong>Formed Connection</strong> – You hit it off with a skilled runner. They might help you next time.<ul><li>+2 Intel, +1 random Runner</li></ul></li>' +
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
            '<ul><li>Meet an Informant</li><li>Relaxing</li></ul>',
    },
    {
        id: 'T050',
        title: 'NeonHollow: HoloLounge',
        content:
            '<p><em>"Reality? Optional."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/HoloLounge.jpg" alt="HoloLoungeoCare" /></p>' +
            '<p>Plug in and drift away—virtual escapism meets social surveillance. Someone’s always watching.</p>' +
            '<p><strong>Actions at HoloLounge:</strong></p>' +
            '<ul><li>Gambling (T051)</li><li>Hiring (T052)</li></ul>',
    },
    {
        id: 'T051',
        title: 'HoloLounge: Gambling',
        content:
            '<p>To participate in gambling, you must have at least 10.000 ¥ in your pocket.</p>' +
            '<p>Add your <strong>Logic</strong> or <strong>Intuition</strong> value to the 2d6 roll when gambling, depending on whether you rely on gut instincts or persuasive tactics to sway the odds in your favor.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Big Loss</strong> – Your luck is about as bad as it gets tonight. The losses hit hard.<ul><li>-10.000 ¥, -1 Energy, -1 Reputation</li></ul></li>' +
            '<li>6-8: <strong>Unlucky Streak</strong> – The cards aren’t in your favor, and your winnings feel like they don’t matter much.<ul><li>-5.000 ¥, -1 Energy</li></ul></li>' +
            '<li>9-11: <strong>Even Luck</strong> – It’s a wash. No gains, no losses.<ul><li>No Effect</li></ul></li>' +
            '<li>12-14: <strong>Lucky Break</strong> – The house can’t touch you tonight, and you’re getting the payout you’ve been waiting for.<ul><li>+5.000 ¥, +1 Energy</li></ul></li>' +
            '<li>15+: <strong>Jackpot!</strong> – The payout is massive, and the room watches in awe as you walk away with a fortune.<ul><li>+10.000 ¥, +1 Energy, +1 Heat</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'T052',
        title: 'HoloLounge: Hiring',
        content:
            '<p>To hire a runner for your team, you must have at least 50.000 ¥ available.</p>' +
            '<p>Add your <strong>Charisma</strong> value to the 2d6 roll to haggle with the runner for lower payment.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Overpriced Hire</strong> – You’ve hired a runner, but it’s going to cost you dearly.<ul><li>-50.000 ¥, +1 random Runner</li></ul></li>' +
            '<li>6-8: <strong>Expensive but Acceptable</strong> – The runner’s skill set is solid, but they’re not exactly cheap.<ul><li>-45.000 ¥, +1 random Runner</li></ul></li>' +
            '<li>9-11: <strong>Standard Price</strong> – The runner`s price is what you would expect for their skill level.<ul><li>-40.000 ¥, +1 random Runner</li></ul></li>' +
            '<li>12-14: <strong>Reasonable Hire</strong> – You’ve managed to secure a solid deal for this runner.<ul><li>-35.000 ¥, +1 random Runner</li></ul></li>' +
            '<li>15+: <strong>Bargain Hire</strong> – You’ve managed to convince the runner to work for less than their usual rate.<ul><li>-30.000 ¥, +1 random Runner</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'T060',
        title: 'NeonHollow: IronGym',
        content:
            '<p><em>"Muscle isn`t old-school—it`s survival."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/IronGym.jpg" alt="IronGym" /></p>' +
            '<p>At IronGym, you can enhance your physical attributes through training or pit them against other runners in a challenging showdown.</p>' +
            '<p><strong>Actions at IronGym:</strong></p>' +
            '<ul><li>Training (T061)</li><li>Challenge (T062)</li></ul>',
    },
    {
        id: 'T061',
        title: 'IronGym: Training',
        content:
            '<p>Choose one of your physical attributes:</p>' +
            '<ul><li>Strength</li><li>Agility</li><li>Reaction</li></ul>' +
            '<p>The training session costs you 10,000 ¥ multiplied by your current attribute value.</p>' +
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
        id: 'T062',
        title: 'IronGym: Challenge',
        content:
            '<p>Choose one of your physical attributes:</p>' +
            '<ul><li>Strength</li><li>Agility</li><li>Reaction</li></ul>',
    },
    {
        id: 'T070',
        title: 'NeonHollow: NeuralNexus',
        content:
            '<p><em>"Where minds meet machines."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/NeuralNexus.jpg" alt="NeuralNexus" /></p>' +
            '<p>At NeuralNexus, you can refine your mental attributes with targeted training or challenge other runners to test your skills.</p>' +
            '<p><strong>Actions at NeuralNexus:</strong></p>' +
            '<ul><li>Training (T071)</li><li>Challenge (T072)</li></ul>',
    },
    {
        id: 'T071',
        title: 'NeuralNexus: Training',
        content:
            '<p>Choose one of your mental attributes:</p>' +
            '<ul><li>Logic</li><li>Intuition</li><li>Charisma</li></ul>' +
            '<p>The training session costs you 10,000 ¥ multiplied by your current attribute value.</p>' +
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
        id: 'T072',
        title: 'NeuralNexus: Challenge',
        content:
            '<p>Choose one of your mental attributes:</p>' +
            '<ul><li>Logic</li><li>Intuition</li><li>Charisma</li></ul>',
    },
    {
        id: 'T080',
        title: 'NeonHollow: PatrolHub',
        content:
            '<p><em>"The law`s last flicker."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/PatrolHub.jpg" alt="PatrolHub" /></p>' +
            '<p>Half-abandoned precincts where drones recharge and jaded officers monitor chaos from dusty screens.</p>' +
            '<p><strong>Actions at PatrolHub:</strong></p>' +
            '<ul><li>Pay Off Heat (T081)</li><li>Selling Intel</li></ul>',
    },
    {
        id: 'T081',
        title: 'PatrolHub: Pay Off Heat',
        content:
            '<p>Slip 10,000 ¥ to a crooked cop — if you`re lucky, the heat cools off... for now.</p>' +
            '<ul>' +
            '<li>2-5: <strong>Blowback</strong> – The payoff is rejected, and your actions raise suspicion.<ul><li>+1 Heat, -1 Energy</li></ul></li>' +
            '<li>6-8: <strong>Indifference</strong> – The authorities are too busy or unconvinced.<ul><li>No Effect</li></ul></li>' +
            '<li>9-11: <strong>Partial Success</strong> – Some of the heat dies down, but it’s still warm out there.<ul><li>-1 Heat</li></ul></li>' +
            '<li>12-14: <strong>Bribe Accepted</strong> – The right hand gets greased, and the heat backs off noticeably.<ul><li>-2 Heat</li></ul></li>' +
            '<li>15+: <strong>Clean Slate</strong> – Your generosity and connections buy you peace—for now.<ul><li>-3 Heat, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'T090',
        title: 'NeonHollow: SmugglerDen',
        content:
            '<p><em>"The city`s forgotten veins."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/SmugglerDen.jpg" alt="SmugglerDen" /></p>' +
            '<p>Crates of contraband, whispered deals, and guarded nods. If it’s illegal or rare, it passed through here.</p>' +
            '<p><strong>Actions at SmugglerDen:</strong></p>' +
            '<ul><li>Boosting Drugs</li><li>Stimulant Injection</li></ul>',
    },
]
