export const Rules = [
    {
        id: 'R001',
        title: 'Rules: Welcome to NeonHollow',
        content:
            '<p>You’re inside a full-spectrum neural simulation, created by rogue deckers and ex-corp AIs to test potential shadowrunners in a city twisted by corporate control. Everything you see, every sound, every face, every choice—fabricated to push you to your limits.</p>' +
            '<p>The megacorp dominates this simulation like it does the real world. It watches, it hunts, and it controls every district—just like it will when you jack out of this and hit the actual streets.</p>' +
            '<p>Your task is simple: break the system.</p>' +
            '<p>Take on missions. Build your rep. Uncover secrets. Burn down their influence—district by district.</p>' +
            '<p>This is your trial. Win it... and wake up. (R002)</p>',
    },
    {
        id: 'R002',
        title: 'Rules: Instructions',
        content:
            '<p><strong>Your First Steps into NeonHollow:</strong></p>' +
            '<ol>' +
            '<li><strong>Suit Up</strong> – Grab 2d6, a pen, and something to write on. That’s your loadout.</li>' +
            '<li><strong>Create Your Runner</strong> (R003) – Build the shadow operative who’ll face the city’s dark corners.</li>' +
            '<li><strong>Know Your Core</strong> – Get familiar with what keeps you alive:' +
            '<ul><li>Health (R005)</li><li>Energy (R006)</li><li>Reputation (R007)</li><li>Heat (R008)</li><li>Intel (R010)</li><li>Time (R011)</li><li>Dice Rolling (R012)</li></ul></li>' +
            '<li><strong>Enter NeonHollow</strong> (R101) – The city’s waiting. Time to make your move.</li>' +
            '</ol>',
    },
    {
        id: 'R003',
        title: 'Rules: Runner',
        content:
            '<p>Follow this guide to build your runner before diving into the shadows.</p>' +
            '<ol><li>(R020) Metatype</li><li>(R030) Archetype</li><li>(R701) Background</li><li>(R040) Name</li><li>(R050) Gear</li><li>(R060) Mode</li></ol>' +
            '<p>When rolling for a random attribute, refer to the attribute details for guidance (R004).</p>',
    },
    {
        id: 'R004',
        title: 'Character: Attributes',
        content:
            '<p>Roll 1d6 to determine your random attribute:</p>' +
            '<ol><li><strong>Strength</strong> – The Power to Endure</li><li><strong>Agility</strong> – The Speed to Slip Between Shadows</li><li><strong>Reaction</strong> – The Edge That Comes Before Thought</li><li><strong>Logic</strong> – The Key That Unlocks Every Door</li><li><strong>Intuition</strong> – The Sixth Sense of the Streets</li><li><strong>Charisma</strong> – The Power That Doesn’t Need Guns</li></ol>',
    },
    {
        id: 'R005',
        title: 'Character: Health',
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
        title: 'Character: Energy',
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
        title: 'Character: Reputation',
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
        title: 'Character: Heat',
        content: `<p>The scale ranges from 0 to 5, at the end of each day, roll 1d6.</p>
            <p>If the result is equal to or higher than your current Heat, the Corp takes notice — roll on the Heat Events (R009) to see how they respond.</p>
            <p>But as your heat increases, the law takes more notice, and your rolls begin to suffer as the city becomes more hostile to your presence.</p>
            <p><strong>Main Sources:</strong></p>
            <ol>
                <li>SmugglerDen</li>
                <li>PatrolHub</li>
                <li>EchoGarden</li>
            </ol>`,
    },
    {
        id: 'R009',
        title: 'Heat: Events',
        content: `<p>You're on the corp's radar &#8594; <strong>-1 Heat</strong> &#8594; Roll <strong>1d6</strong> to see how they respond.</p>
            <ol>
            <li><strong>Street Chase</strong> — A chase through the city streets to avoid an ambush tires you out.<ul><li>-1 Energy</li></ul></li>
            <li><strong>Bounty Alert</strong> — A hit squad tracks you down.<ul><li>-1 Energy, -1 Health</li></ul></li>
            <li><strong>Neuroshock Intercept</strong> — A neural disruptor pulse hits you mid-hack.<ul><li>-2 Energy, -1 Health</li></ul></li>
            <li><strong>Blackout Protocol</strong> — The corp cuts power in your sector to flush you out.<ul><li>-2 Energy, -2 Health</li></ul></li>
            <li><strong>Tactical Strike Drone</strong> — A silent drone shadows you, then hits with a low-yield concussive blast.<ul><li>-3 Energy, -2 Health</li></ul></li>
            <li><strong>System Purge</strong> — The corp deploys a purge squad with incendiary rounds and area denial gas.<ul><li>-3 Energy, -3 Health</li></ul></li>
            </ol>`,
    },
    {
        id: 'R010',
        title: 'Character: Intel',
        content: `<p>Intel ranges from 0 to 5 and cannot exceed these limits.</p>
            <p>You'll need Intel to fund missions from Mr. Johnson to bring down the megacorp.</p>
            <p><strong>Main Sources:</strong></p>
            <ol>
                <li>NeuralNexus</li>
                <li>SmugglerDen</li>
                <li>CorpTower</li>
            </ol>`,
    },
    {
        id: 'R011',
        title: 'Character: Time',
        content:
            '<p>You’ve got <strong>10 days</strong> to take down the corp. The clock’s ticking, and you need to move fast.</p>' +
            '<p>Each day starts at <strong>0 hours</strong>, and every action you take in the town eats up <strong>1 hour</strong> of your time.</p>' +
            '<p>The day ends either when a town event (R401) occurs or when you take on a job from <strong>Mr. Johnson</strong> (R601).</p>' +
            '<p>For a detailed breakdown of how a day shift works, refer to the <strong>NeonHollow</strong> rules (R102).</p>',
    },
    {
        id: 'R012',
        title: 'Rules: Dice Rolling',
        content:
            '<p>When prompted to roll <strong>1d6</strong>, it means you must roll a single six-sided die — your fate resting on a number between 1 and 6.</p>' +
            '<p>Rolling <strong>2d6</strong> means tossing two six-sided dice and adding the results together.</p>' +
            '<p>For Matrix checks, throw two sixers: the first die gives you the tens, the second the ones.</p>' +
            '<p>Whenever you roll double ones, it triggers a critical glitch—data corruption, misfire, or worse. You immediately lose <strong>1 Intel</strong>.</p>' +
            '<p>On the flip side, if you roll double sixes, you strike digital gold: gain <strong>1 Intel</strong> as the shadows reward your precision.</p>',
    },
    {
        id: 'R013',
        title: 'Rules: Sheet',
        content:
            '<p>A fast-access reference sheet featuring the most essential rules and frequently used tables.</p>' +
            '<ul>' +
            '<li>Welcome to NeonHollow (R001)</li>' +
            '<li>Instructions (R002)</li>' +
            '<li>Rules: Runner (R003)</li>' +
            '<li>Heat: Events (R009)</li>' +
            '<li>NeonHollow: Rules (R102)</li>' +
            '<li>Event Matrix (R401)</li>' +
            '<li>Runner Matrix (R501)</li>' +
            '<li>Run: Rules (R602)</li>' +
            '</ul>',
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
    {
        id: 'R020',
        title: 'Character: Metatype',
        content:
            '<p>Roll 1d6 to determine your metatype:</p>' +
            '<ol><li>(R021) Human</li><li>(R022) Elf</li><li>(R023) Dwarf</li><li>(R024) Orc</li><li>(R025) Troll</li><li>Roll Again</li></ol>' +
            '<p>Apply the bonuses to your attributes.</p>',
    },
    {
        id: 'R021',
        title: 'Metatype: Human',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Human.jpg" alt="Human" /></p>' +
            '<p>The most adaptable and versatile race, humans have the ability to excel in nearly every environment. They may not possess the natural enhancements of the other races, but their drive and determination make them a powerful force in any situation.</p>' +
            '<p><strong>Starting Attributes:</strong></p>' +
            '<ul><li>Strength: 3</li><li>Agility: 3</li><li>Reaction: 3</li><li>Logic: 3</li><li>Intuition: 3</li><li>Charisma: 3</li></ul>',
    },
    {
        id: 'R022',
        title: 'Metatype: Elf',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Elf.jpg" alt="Elf" /></p>' +
            '<p>"Graceful, elegant, and with a keen intellect, elves are often seen as the aristocrats of the Shadowrun world. Their natural agility and charisma make them invaluable in both social and combat situations.</p>' +
            '<p><strong>Starting Attributes:</strong></p>' +
            '<ul><li>Strength: 2</li><li>Agility: 4</li><li>Reaction: 3</li><li>Logic: 3</li><li>Intuition: 2</li><li>Charisma: 4</li></ul>',
    },
    {
        id: 'R023',
        title: 'Metatype: Dwarf',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Dwarf.jpg" alt="Dwarf" /></p>' +
            '<p>Dwarves are the embodiment of endurance and resilience. Shorter in stature but larger in presence, they are known for their strength, toughness, and unyielding determination. They’re often the reliable backbone of any crew</p>' +
            '<p><strong>Starting Attributes:</strong></p>' +
            '<ul><li>Strength: 4</li><li>Agility: 2</li><li>Reaction: 2</li><li>Logic: 4</li><li>Intuition: 3</li><li>Charisma: 3</li></ul>',
    },
    {
        id: 'R024',
        title: 'Metatype: Ork',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Ork.jpg" alt="Ork" /></p>' +
            '<p>With a natural inclination toward physical power and aggression, orks are often misunderstood as brutish, but they have a strong sense of loyalty and honor. Their towering frames and raw strength make them formidable in any fight.</p>' +
            '<p><strong>Starting Attributes:</strong></p>' +
            '<ul><li>Strength: 4</li><li>Agility: 3</li><li>Reaction: 3</li><li>Logic: 2</li><li>Intuition: 4</li><li>Charisma: 2</li></ul>',
    },
    {
        id: 'R025',
        title: 'Metatype: Troll',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Troll.jpg" alt="Troll" /></p>' +
            '<p>Trolls are intimidating giants, known for their immense physical strength and natural toughness. While their appearance often causes fear, trolls are also capable of deep loyalty and fierce protection for those they care about.</p>' +
            '<p><strong>Starting Attributes:</strong></p>' +
            '<ul><li>Strength: 4</li><li>Agility: 2</li><li>Reaction: 4</li><li>Logic: 3</li><li>Intuition: 3</li><li>Charisma: 2</li></ul>',
    },
    {
        id: 'R030',
        title: 'Character: Archetype',
        content:
            '<p>Roll 1d6 to determine your archetype:</p>' +
            '<ol><li>(R031) Street Samurai</li><li>(R032) Decker</li><li>(R033) Rigger</li><li>(R034) Mage</li><li>(R035) Face</li><li>(R036) Shaman</li></ol>' +
            '<p>Each archetype has unique strengths, weaknesses, and a default set of attribute values.</p>',
    },
    {
        id: 'R031',
        title: 'Archetype: Street Samurai',
        content:
            '<p>A master of combat, both physical and ranged. Often a hired gun or mercenary, the Street Samurai relies on strength and agility to survive in the harsh world of the shadows.</p>' +
            '<p><strong>Bonus Attributes:</strong></p>' +
            '<ul><li>+1 Strength</li><li>+1 Agility</li></ul>',
    },
    {
        id: 'R032',
        title: 'Archetype: Decker',
        content:
            "<p>The digital cowboy. A Decker navigates the Matrix, hacking and controlling systems with a mix of tech skills and speed. They're often the go-to for gathering information or manipulating digital environments.</p>" +
            '<p><strong>Bonus Attributes:</strong></p>' +
            '<ul><li>+1 Reaction</li><li>+1 Logic</li></ul>',
    },
    {
        id: 'R033',
        title: 'Archetype: Rigger',
        content:
            '<p>Riggers specialize in controlling drones, vehicles, and machinery. Their physical prowess allows them to take charge of mechanical and robotic assets, making them versatile in combat and exploration.</p>' +
            '<p><strong>Bonus Attributes:</strong></p>' +
            '<ul><li>+1 Agility</li><li>+1 Logic</li></ul>',
    },
    {
        id: 'R034',
        title: 'Archetype: Mage',
        content:
            '<p>The wielder of magical powers. Mages use their abilities to manipulate the elements, enchant objects, and protect themselves from harm. They rely heavily on their mental attributes to tap into their magical forces.</p>' +
            '<p><strong>Bonus Attributes:</strong></p>' +
            '<ul><li>+1 Intuition</li><li>+1 Charisma</li></ul>',
    },
    {
        id: 'R035',
        title: 'Archetype: Face',
        content:
            '<p>The social expert, often the face of the team. Faces specialize in negotiations, deception, and influence. They rely on charisma to manipulate others and can charm or intimidate their way through various situations.</p>' +
            '<p><strong>Bonus Attributes:</strong></p>' +
            '<ul><li>+1 Reaction</li><li>+1 Charisma</li></ul>',
    },
    {
        id: 'R036',
        title: 'Archetype: Shaman',
        content:
            "<p>A spiritual leader and practitioner of magic. Shamans are deeply connected to the natural world and communicate with spirits to enhance their abilities. They're more attuned to nature and can summon and control spirits.</p>" +
            '<p><strong>Bonus Attributes:</strong></p>' +
            '<ul><li>+1 Strength</li><li>+1 Intuition</li></ul>',
    },
    {
        id: 'R040',
        title: 'Character: Name',
        content:
            '<p>Each archetype has its own name pool.</p>' +
            '<ul><li>(R041) Street Samurai</li><li>(R042) Decker</li><li>(R043) Rigger</li><li>(R044) Mage</li><li>(R045) Face</li><li>(R046) Shaman</li></ul>',
    },
    {
        id: 'R041',
        title: 'Name: Street Samurai',
        content: `<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate list.</p>
            <div class="grid grid-cols-2">
                <div>
                    <p><strong>First Name:</strong></p>
                    <ol><li>Kaito</li><li>Hana</li><li>Ryo</li><li>Takashi</li><li>Mei</li><li>Kenji</li></ol>
                </div>
                <div>
                    <p><strong>Last Name:</strong></p>
                    <ol><li>Blade</li><li>Wraith</li><li>Tiger</li><li>Ghost</li><li>Steel</li><li>Ronin</li></ol>
                </div>
            </div>`,
    },
    {
        id: 'R042',
        title: 'Name: Decker',
        content: `<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate list.</p>
            <div class="grid grid-cols-2">
                <div>
                    <p><strong>First Name:</strong></p>
                    <ol><li>Ray</li><li>Lex</li><li>Nova</li><li>Jax</li><li>Zero</li><li>Kai</li></ol>
                </div>
                <div>
                    <p><strong>Last Name:</strong></p>
                    <ol><li>Circuit</li><li>Byte</li><li>Shock</li><li>Pulse</li><li>Code</li><li>Grid</li></ol>
                </div>
            </div>`,
    },
    {
        id: 'R043',
        title: 'Name: Rigger',
        content: `<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate list.</p>
            <div class="grid grid-cols-2">
                <div>
                    <p><strong>First Name:</strong></p>
                    <ol><li>Rusty</li><li>Max</li><li>Sasha</li><li>Quinn</li><li>Juno</li><li>Flint</li></ol>
                </div>
                <div>
                    <p><strong>Last Name:</strong></p>
                    <ol><li>Gear</li><li>Iron</li><li>Switch</li><li>Drive</li><li>Pilot</li><li>Mechanic</li></ol>
                </div>
            </div>`,
    },
    {
        id: 'R044',
        title: 'Name: Mage',
        content: `<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate list.</p>
            <div class="grid grid-cols-2">
                <div>
                    <p><strong>First Name:</strong></p>
                    <ol><li>Ash</li><li>Vesper</li><li>Nox</li><li>Zephyr</li><li>Luna</li><li>Orion</li></ol>
                </div>
                <div>
                    <p><strong>Last Name:</strong></p>
                    <ol><li>Flame</li><li>Star</li><li>Warden</li><li>Spell</li><li>Void</li><li>Arcane</li></ol>
                </div>
            </div>`,
    },
    {
        id: 'R045',
        title: 'Name: Face',
        content: `<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate list.</p>
            <div class="grid grid-cols-2">
                <div>
                    <p><strong>First Name:</strong></p>
                    <ol><li>Rio</li><li>Cole</li><li>Ava</li><li>Zara</li><li>Damon</li><li>Lex</li></ol>
                </div>
                <div>
                    <p><strong>Last Name:</strong></p>
                    <ol><li>Charm</li><li>Blare</li><li>Silver</li><li>Blade</li><li>Vibe</li><li>Verve</li></ol>
                </div>
            </div>`,
    },
    {
        id: 'R046',
        title: 'Name: Shaman',
        content: `<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate list.</p>
            <div class="grid grid-cols-2">
                <div>
                    <p><strong>First Name:</strong></p>
                    <ol><li>Tala</li><li>Soren</li><li>Freya</li><li>Bastian</li><li>Naya</li><li>Zane</li></ol>
                </div>
                <div>
                    <p><strong>Last Name:</strong></p>
                    <ol><li>Spirit</li><li>Wolf</li><li>Storm</li><li>Wind</li><li>Sky</li><li>Shadow</li></ol>
                </div>
            </div>`,
    },
    {
        id: 'R050',
        title: 'Character: Gear',
        content: `<p>Choose an item that boosts your starting attributes:</p>
        <p><strong>Power Gauntlets:</strong></p>
        <ul>
            <li>+1 Strength</li>
        </ul>
        <p><strong>Nano-Tread Boots:</strong></p>
        <ul>
            <li>+1 Agility</li>
        </ul>
        <p><strong>Reflex Enhancer Implant:</strong></p>
        <ul>
            <li>+1 Reaction</li>
        </ul>
        <p><strong>Neural Interface Headset:</strong></p>
        <ul>
            <li>+1 Logic</li>
        </ul>
        <p><strong>Synaptic Amplifier:</strong></p>
        <ul>
            <li>+1 Intuition</li>
        </ul>
        <p><strong>Holo-Disguise Mask:</strong></p>
        <ul>
            <li>+1 Charisma</li>
        </ul>`,
    },
    {
        id: 'R060',
        title: 'Character: Mode',
        content:
            '<p>Select a mode to fade into the shadows and uncover the hidden corners of NeonHollow.</p>' +
            '<p>For your first journey, I suggest starting with Easy Mode to get a feel for the city`s pulse.</p>' +
            '<p><strong>Easy Mode:</strong></p>' +
            '<ul><li>10.000 ¥</li><li>10 Health</li><li>10 Energy</li><li>3 Reputation</li></ul>' +
            '<p><strong>Medium Mode:</strong></p>' +
            '<ul><li>8.000 ¥</li><li>8 Health</li><li>8 Energy</li><li>2 Reputation</li></ul>' +
            '<p><strong>Hard Mode:</strong></p>' +
            '<ul><li>6.000 ¥</li><li>6 Health</li><li>6 Energy</li><li>1 Reputation</li></ul>' +
            '<p><strong>Insane Mode:</strong></p>' +
            '<ul><li>4.000 ¥</li><li>4 Health</li><li>4 Energy</li><li>0 Reputation</li></ul>',
    },
]
