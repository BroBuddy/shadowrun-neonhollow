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
            '<ol><li>(R020) Metatype</li><li>(R030) Archetype</li><li>(R040) Name</li><li>(R050) Background</li><li>(R060) Mode</li></ol>' +
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
        content:
            '<p>Health represents the physical state of a runner, a fragile balance between vitality and deterioration. </p>' +
            '<p>It ranges from 0 to 10, with higher values reflecting peak condition—faster reflexes, sharper senses, and resilience in the face of adversity. The closer to 10 you are, the better your chances to endure the harsh world around you. But as your Health drops, so does your effectiveness. Injuries, exhaustion, and the harshness of your environment weigh heavily on you.</p>' +
            '<p>At 0, your journey ends. Your runner is dead. No more chances.</p>' +
            '<p>To restore Health, visit <strong>BioCare</strong>, where skilled techs patch you up for a price. Or indulge in a hearty meal at <strong>CyberBite</strong> to give yourself a boost.</p>' +
            '<p>Outside these options, the streets of <strong>NeonHollow</strong> may offer unexpected moments to mend, but don’t rely on luck alone. Stay sharp, or you might not live to fight another day.</p>',
    },
    {
        id: 'R006',
        title: 'Character: Energy',
        content:
            '<p>Energy is the lifeblood of a runner, the fuel that keeps you going in the neon-lit streets of NeonHollow. It measures your stamina, your ability to push through the grind of daily tasks, from town events to dangerous runs for Mr. Johnson.</p>' +
            '<p>Your energy ranges from 0 to 10—at higher levels, you`ll find yourself sharp, quicker on your feet, and more resilient. But let your energy dip too low, and you’ll start feeling the strain: at lower levels, you’ll suffer setbacks, and when it hits zero, every further drain on your energy will cost you precious health.</p>' +
            '<p>To restore your energy, the <strong>DreamSphere</strong> is your best bet, offering a peaceful sanctuary where you can recharge your batteries.</p>' +
            '<p>There are also other opportunities to recover energy during town events, but don’t rely too heavily on them—staying rested and ready is crucial to surviving the harsh life of a runner in this chaotic city.</p>',
    },
    {
        id: 'R007',
        title: 'Character: Reputation',
        content:
            '<p>Reputation is the weight your name carries in the shadows of NeonHollow. It’s the reputation you’ve built through your actions and the whispers that follow you wherever you go.</p>' +
            '<p>As you rise, it opens doors to high-stakes jobs and elite missions, but fall too far, and those doors will slam shut.</p>' +
            '<p>Your Reputation ranges from 0 to 5, growing with every courteous interaction, successful mission, or display of skill. On the flip side, if your actions are reckless, your performance subpar, or you rub others the wrong way, you’ll find yourself losing respect in the underworld.</p>' +
            '<p>How others see you can be the difference between a lucrative gig and being left out in the cold.</p>',
    },
    {
        id: 'R008',
        title: 'Character: Heat',
        content:
            '<p>Heat represents your notoriety with the law in NeonHollow. It rises when you engage in illegal activities and decreases when you stick to the straight and narrow.</p>' +
            '<p>The scale ranges from 0 to 5, at the end of each day, roll 1d6.</p>' +
            '<p>If the result is equal to or higher than your current Heat, the Corp takes notice — roll on the Heat Events (R009) to see how they respond.</p>' +
            '<p>But as your heat increases, the law takes more notice, and your rolls begin to suffer as the city becomes more hostile to your presence.</p>' +
            '<p>To reduce heat, you can pay off an officer for a quick fix, or you can choose to lay low for a while, allowing time to dull the memory of your face and your criminal activities.</p>',
    },
    {
        id: 'R009',
        title: 'Heat: Events',
        content:
            '<p>Roll 1d6 to see how the Corp retaliates against your rising threat:</p>' +
            '<ol>' +
            '<li><strong>Hacked Account</strong> — A corp hacker infiltrates your system and drains your virtual wallet.<ul><li>-1.000 ¥</li></ul></li>' +
            '<li><strong>Street Chase</strong> — A chase through the city streets to avoid an ambush tires you out.<ul><li>-1 Energy</li></ul></li>' +
            '<li><strong>Surveillance Spike</strong> — Drones and streetcams are tracking your movements.<ul><li>+1 Heat</li></ul></li>' +
            '<li><strong>Bounty Alert</strong> — A hit squad tracks you down.<ul><li>-1 Health</li></ul></li>' +
            '<li><strong>Undercover Op</strong> — A fixer turns out to be a corp informant.<ul><li>-1 Reputation</li></ul></li>' +
            '<li><strong>Unauthorized Access</strong> — A corp bot infiltrates your network, posing as a system update and stealing your Intel.<ul><li>-1 Intel</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'R010',
        title: 'Character: Intel',
        content:
            '<p>Intel is the lifeblood of your runner’s network — sought-after information about the city, the corps, or anyone who’s in the know. It’s not just facts; it’s power in a world where knowledge can be as valuable as a weapon.</p>' +
            '<p>Your Intel ranges from 0 to 5, and it’s a currency of its own in the shadows of NeonHollow.</p>' +
            '<p>The primary reason to gather Intel is to strike at the heart of the megacorp’s influence—leaking secrets, sabotaging control systems, or blackmailing key players. And if you’re low on creds, you can always sell your findings to a fixer for a quick payout.</p>' +
            '<p>Whether you’re tracking down an informant or stumbling upon hidden data caches, every sliver of Intel you collect sharpens your edge in this cutthroat world.</p>',
    },
    {
        id: 'R011',
        title: 'Character: Time',
        content:
            '<p>You’ve got 14 days to take down the corp. The clock’s ticking, and you need to move fast.</p>' +
            '<p>Each day starts at <strong>0 hours</strong>, and every action you take in the town eats up <strong>1 hour</strong> of your time.</p>' +
            '<p>The day ends either when a town event (E001) occurs or when you take on a job from <strong>Mr. Johnson</strong> (M001).</p>' +
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
            '<p>A fast-access reference sheet featuring the most essential rules and frequently used tables for quick decision-making in the field.</p>' +
            '<ul>' +
            '<li>Instructions (R002)</li>' +
            '<li>Heat: Events (R009)</li>' +
            '<li>Run: Rules (M002)</li>' +
            '<li>Run: Performance (M003)</li>' +
            '<li>Runner Matrix (N001)</li>' +
            '<li>Event Matrix (E001)</li>' +
            '</ul>',
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
        content:
            '<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate table.</p>' +
            '<p><strong>First Name:</strong></p>' +
            '<ol><li>Kaito</li><li>Hana</li><li>Ryo</li><li>Takashi</li><li>Mei</li><li>Kenji</li></ol>' +
            '<p><strong>Last Name:</strong></p>' +
            '<ol><li>Blade</li><li>Wraith</li><li>Tiger</li><li>Ghost</li><li>Steel</li><li>Ronin</li></ol>',
    },
    {
        id: 'R042',
        title: 'Name: Decker',
        content:
            '<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate table.</p>' +
            '<p><strong>First Name:</strong></p>' +
            '<ol><li>Ray</li><li>Lex</li><li>Nova</li><li>Jax</li><li>Zero</li><li>Kai</li></ol>' +
            '<p><strong>Last Name:</strong></p>' +
            '<ol><li>Circuit</li><li>Byte</li><li>Shock</li><li>Pulse</li><li>Code</li><li>Grid</li></ol>',
    },
    {
        id: 'R043',
        title: 'Name: Rigger',
        content:
            '<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate table.</p>' +
            '<p><strong>First Name:</strong></p>' +
            '<ol><li>Rusty</li><li>Max</li><li>Sasha</li><li>Quinn</li><li>Juno</li><li>Flint</li></ol>' +
            '<p><strong>Last Name:</strong></p>' +
            '<ol><li>Gear</li><li>Iron</li><li>Switch</li><li>Drive</li><li>Pilot</li><li>Mechanic</li></ol>',
    },
    {
        id: 'R044',
        title: 'Name: Mage',
        content:
            '<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate table.</p>' +
            '<p><strong>First Name:</strong></p>' +
            '<ol><li>Ash</li><li>Vesper</li><li>Nox</li><li>Zephyr</li><li>Luna</li><li>Orion</li></ol>' +
            '<p><strong>Last Name:</strong></p>' +
            '<ol><li>Flame</li><li>Star</li><li>Warden</li><li>Spell</li><li>Void</li><li>Arcane</li></ol>',
    },
    {
        id: 'R045',
        title: 'Name: Face',
        content:
            '<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate table.</p>' +
            '<p><strong>First Name:</strong></p>' +
            '<ol><li>Rio</li><li>Cole</li><li>Ava</li><li>Zara</li><li>Damon</li><li>Lex</li></ol>' +
            '<p><strong>Last Name:</strong></p>' +
            '<ol><li>Charm</li><li>Blare</li><li>Silver</li><li>Blade</li><li>Vibe</li><li>Verve</li></ol>',
    },
    {
        id: 'R046',
        title: 'Name: Shaman',
        content:
            '<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate table.</p>' +
            '<p><strong>First Name:</strong></p>' +
            '<ol><li>Tala</li><li>Soren</li><li>Freya</li><li>Bastian</li><li>Naya</li><li>Zane</li></ol>' +
            '<p><strong>Last Name:</strong></p>' +
            '<ol><li>Spirit</li><li>Wolf</li><li>Storm</li><li>Wind</li><li>Sky</li><li>Shadow</li></ol>',
    },
    {
        id: 'R050',
        title: 'Character: Background',
        content:
            '<p>Your origins matter — pick your metatype to unveil the path that led you here.</p>' +
            '<ul><li>(R051) Human</li><li>(R052) Elf</li><li>(R053) Dwarf</li><li>(R054) Orc</li><li>(R055) Troll</li></ul>',
    },
    {
        id: 'R051',
        title: 'Background: Human',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Corporate Soldier:</strong><br />You worked in the security detail of a corporate mega-conglomerate. You understand the balance of power and the weight of wealth.</li><li><strong>Street Hustler:</strong><br />You grew up on the streets, using your wits and charm to survive. You’re a smooth talker and a quick thinker.</li><li><strong>Tech Salvager:</strong><br />You spent years collecting and selling tech scraps, learning the ins and outs of electronics. Your mind works well with complex systems.</li><li><strong>Military Veteran:</strong><br />Years of service have given you discipline and experience under pressure. You are tough and resilient in combat.</li><li><strong>Escape Artist:</strong><br />You’ve mastered the art of getting out of tight spots with agility.</li><li><strong>Runaway Noble:</strong><br />Born into wealth but raised on the streets, you blend both worlds with ease.</li></ol>',
    },
    {
        id: 'R052',
        title: 'Background: Elf',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Elven Noble:</strong><br />You were raised in the lap of luxury, trained in etiquette, and surrounded by politics.</li><li><strong>Forest Scout:</strong><br />Raised in the deep forests, you’re quick, quiet, and aware of everything around you.</li><li><strong>Arcane Scholar:</strong><br />Years of study have sharpened your logical mind and magical knowledge.</li><li><strong>Speedster:</strong><br />Whether in the woods or streets, you’re faster than the rest.</li><li><strong>High Society Rebel:</strong><br />Born into privilege but now a free spirit with street wisdom.</li><li><strong>Master of Disguise:</strong><br />You blend into any crowd with ease and grace.</li></ol>',
    },
    {
        id: 'R053',
        title: 'Background: Dwarf',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Forge Worker:</strong><br />A life at the forge made you strong, hardy, and skilled with your hands.</li><li><strong>Engineer:</strong><br />You can fix or build anything, even under pressure.</li><li><strong>Underground Tracker:</strong><br />Raised in the tunnels, your sense of direction is legendary.</li><li><strong>Mercenary:</strong><br />Battle-hardened and unshakable in combat.</li><li><strong>Craftsman:</strong><br />Your work is detailed, refined, and always functional.</li><li><strong>Grumpy Old Mentor:</strong><br />Gruff but wise, you’ve got decades of experience to offer.</li></ol>',
    },
    {
        id: 'R054',
        title: 'Background: Ork',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Street Enforcer:</strong><br />People don’t argue with you—you’re the muscle they fear.</li><li><strong>Rage Fighter:</strong><br />You strike fast and hard, fueled by fury.</li><li><strong>Tech Scrapper:</strong><br />You’ve got grease under your nails and a working knowledge of tech.</li><li><strong>Hunter:</strong><br />Keen instincts and quick reflexes keep you alive in the wild.</li><li><strong>Urban Scout:</strong><br />You own the alleys and rooftops—urban terrain is your jungle.</li><li><strong>Grunt:</strong><br />You’ve been on the frontlines, taking the hits and surviving the worst.</li></ol>',
    },
    {
        id: 'R055',
        title: 'Background: Troll',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Pit Fighter:</strong><br />You’ve battled in the arena—brute strength is your game.</li><li><strong>Bouncer:</strong><br />You protect, intimidate, and shut things down with your presence.</li><li><strong>Mossback:</strong><br />Tough, seasoned, and unmovable in a fight.</li><li><strong>Ravager:</strong><br />You charge like a freight train—melee combat is your playground.</li><li><strong>Beastmaster:</strong><br />You’ve tamed wild creatures and learned their ways.</li><li><strong>Troll Outlaw:</strong><br />A nomad and survivor with a fearsome reputation.</li></ol>',
    },
    {
        id: 'R060',
        title: 'Character: Mode',
        content:
            '<p>Select a mode to fade into the shadows and uncover the hidden corners of NeonHollow.</p>' +
            '<p>For your first journey, I suggest starting with Easy Mode to get a feel for the city`s pulse.</p>' +
            '<p><strong>Easy Mode:</strong></p>' +
            '<ul><li>7.000 ¥</li><li>7 Health</li><li>7 Energy</li><li>2 Reputation</li></ul>' +
            '<p><strong>Medium Mode:</strong></p>' +
            '<ul><li>5.000 ¥</li><li>5 Health</li><li>5 Energy</li><li>1 Reputation</li></ul>' +
            '<p><strong>Hard Mode:</strong></p>' +
            '<ul><li>3.000 ¥</li><li>3 Health</li><li>3 Energy</li><li>0 Reputation</li></ul>',
    },
]
