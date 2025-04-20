export const Characters = [
    {
        id: 'C001',
        title: 'Character',
        content:
            '<p>Follow this guide to build your shadowrunner before diving into the shadows.</p>' +
            '<ol><li>(C010) Class</li><li>(C020) Race</li><li>(C030) Background</li><li>(C040) Name</li><li>(C050) Mode</li></ol>' +
            '<p>When rolling for a random attribute, refer to the attribute details for guidance (C002).</p>',
    },
    {
        id: 'C002',
        title: 'Character: Attributes',
        content:
            '<p>Roll 1d6 to determine your random attribute:</p>' +
            '<ol><li><strong>Strength</strong> – The Power to Endure</li><li><strong>Agility</strong> – The Speed to Slip Between Shadows</li><li><strong>Reaction</strong> – The Edge That Comes Before Thought</li><li><strong>Logic</strong> – The Key That Unlocks Every Door</li><li><strong>Intuition</strong> – The Sixth Sense of the Streets</li><li><strong>Charisma</strong> – The Power That Doesn’t Need Guns</li></ol>',
    },
    {
        id: 'C003',
        title: 'Character: Time',
        content: '<p>Time</p>',
    },
    {
        id: 'C004',
        title: 'Character: Health',
        content: '<p>Health</p>',
    },
    {
        id: 'C005',
        title: 'Character: Energy',
        content: '<p>Energy</p>',
    },
    {
        id: 'C006',
        title: 'Character: Reputation',
        content: '<p>Reputation</p>',
    },
    {
        id: 'C007',
        title: 'Character: Heat',
        content: '<p>Heat</p>',
    },
    {
        id: 'C008',
        title: 'Character: Intel',
        content: '<p>Intel</p>',
    },
    {
        id: 'C010',
        title: 'Character: Class',
        content:
            '<p>Roll 1d6 to determine your class:</p>' +
            '<ol><li>(C011) Street Samurai</li><li>(C012) Decker</li><li>(C013) Rigger</li><li>(C014) Mage</li><li>(C015) Face</li><li>(C016) Shaman</li></ol>' +
            '<p>Each class has unique strengths, weaknesses, and a default set of attribute values.</p>',
    },
    {
        id: 'C011',
        title: 'Class: Street Samurai',
        content:
            '<p>A master of combat, both physical and ranged. Often a hired gun or mercenary, the Street Samurai relies on strength and agility to survive in the harsh world of the shadows.</p>' +
            '<p><strong>Attributes:</strong></p>' +
            '<ul><li>Strength: 4</li><li>Agility: 4</li><li>Reaction: 3</li><li>Logic: 2</li><li>Intuition: 3</li><li>Charisma: 2</li></ul>',
    },
    {
        id: 'C012',
        title: 'Class: Decker',
        content:
            "<p>The digital cowboy. A Decker navigates the Matrix, hacking and controlling systems with a mix of tech skills and speed. They're often the go-to for gathering information or manipulating digital environments.</p>" +
            '<p><strong>Attributes:</strong></p>' +
            '<ul><li>Strength: 2</li><li>Agility: 3</li><li>Reaction: 4</li><li>Logic: 4</li><li>Intuition: 3</li><li>Charisma: 2</li></ul>',
    },
    {
        id: 'C013',
        title: 'Class: Rigger',
        content:
            '<p>Riggers specialize in controlling drones, vehicles, and machinery. Their physical prowess allows them to take charge of mechanical and robotic assets, making them versatile in combat and exploration.</p>' +
            '<p><strong>Attributes:</strong></p>' +
            '<ul><li>Strength: 3</li><li>Agility: 4</li><li>Reaction: 2</li><li>Logic: 3</li><li>Intuition: 2</li><li>Charisma: 4</li></ul>',
    },
    {
        id: 'C014',
        title: 'Class: Mage',
        content:
            '<p>The wielder of magical powers. Mages use their abilities to manipulate the elements, enchant objects, and protect themselves from harm. They rely heavily on their mental attributes to tap into their magical forces.</p>' +
            '<p><strong>Attributes:</strong></p>' +
            '<ul><li>Strength: 3</li><li>Agility: 2</li><li>Reaction: 2</li><li>Logic: 4</li><li>Intuition: 4</li><li>Charisma: 3</li></ul>',
    },
    {
        id: 'C015',
        title: 'Class: Face',
        content:
            '<p>The social expert, often the face of the team. Faces specialize in negotiations, deception, and influence. They rely on charisma to manipulate others and can charm or intimidate their way through various situations.</p>' +
            '<p><strong>Attributes:</strong></p>' +
            '<ul><li>Strength: 2</li><li>Agility: 3</li><li>Reaction: 4</li><li>Logic: 3</li><li>Intuition: 2</li><li>Charisma: 4</li></ul>',
    },
    {
        id: 'C016',
        title: 'Class: Shaman',
        content:
            "<p>A spiritual leader and practitioner of magic. Shamans are deeply connected to the natural world and communicate with spirits to enhance their abilities. They're more attuned to nature and can summon and control spirits.</p>" +
            '<p><strong>Attributes:</strong></p>' +
            '<ul><li>Strength: 4</li><li>Agility: 2</li><li>Reaction: 3</li><li>Logic: 2</li><li>Intuition: 4</li><li>Charisma: 3</li></ul>',
    },
    {
        id: 'C020',
        title: 'Character: Race',
        content:
            '<p>Roll 1d6 to determine your race:</p>' +
            '<ol><li>(C021) Human</li><li>(C022) Elf</li><li>(C023) Dwarf</li><li>(C024) Orc</li><li>(C025) Troll</li><li>Roll Again</li></ol>' +
            '<p>Apply the bonuses to your attributes.</p>',
    },
    {
        id: 'C021',
        title: 'Race: Human',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Human.jpg" alt="Human" /></p>' +
            '<p>The most adaptable and versatile race, humans have the ability to excel in nearly every environment. They may not possess the natural enhancements of the other races, but their drive and determination make them a powerful force in any situation.</p>' +
            '<p><strong>Bonuses:</strong></p>' +
            "<p>+1 to any attribute (Player's choice)</p>",
    },
    {
        id: 'C022',
        title: 'Race: Elf',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Elf.jpg" alt="Elf" /></p>' +
            '<p>"Graceful, elegant, and with a keen intellect, elves are often seen as the aristocrats of the Shadowrun world. Their natural agility and charisma make them invaluable in both social and combat situations.</p>' +
            '<p><strong>Bonuses:</strong></p>' +
            '<p>+1 to Agility / Charisma</p>',
    },
    {
        id: 'C023',
        title: 'Race: Dwarf',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Dwarf.jpg" alt="Dwarf" /></p>' +
            '<p>Dwarves are the embodiment of endurance and resilience. Shorter in stature but larger in presence, they are known for their strength, toughness, and unyielding determination. They’re often the reliable backbone of any crew</p>' +
            '<p><strong>Bonuses:</strong></p>' +
            '<p>+1 to Strength / Logic</p>',
    },
    {
        id: 'C024',
        title: 'Race: Ork',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Ork.jpg" alt="Ork" /></p>' +
            '<p>With a natural inclination toward physical power and aggression, orks are often misunderstood as brutish, but they have a strong sense of loyalty and honor. Their towering frames and raw strength make them formidable in any fight.</p>' +
            '<p><strong>Bonuses:</strong></p>' +
            '<p>+1 to Strength / Intuition</p>',
    },
    {
        id: 'C025',
        title: 'Race: Troll',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Troll.jpg" alt="Troll" /></p>' +
            '<p>Trolls are intimidating giants, known for their immense physical strength and natural toughness. While their appearance often causes fear, trolls are also capable of deep loyalty and fierce protection for those they care about.</p>' +
            '<p><strong>Bonuses:</strong></p>' +
            '<p>+1 to Strength / Reaction</p>',
    },
    {
        id: 'C030',
        title: 'Character: Background',
        content:
            '<p>Your origins matter—pick your race to unveil the path that led you here.</p>' +
            '<ul><li>(C031) Human</li><li>(C032) Elf</li><li>(C033) Dwarf</li><li>(C034) Orc</li><li>(C035) Troll</li></ul>',
    },
    {
        id: 'C031',
        title: 'Background: Human',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Corporate Soldier:</strong><br />You worked in the security detail of a corporate mega-conglomerate. You understand the balance of power and the weight of wealth.</li><li><strong>Street Hustler:</strong><br />You grew up on the streets, using your wits and charm to survive. You’re a smooth talker and a quick thinker.</li><li><strong>Tech Salvager:</strong><br />You spent years collecting and selling tech scraps, learning the ins and outs of electronics. Your mind works well with complex systems.</li><li><strong>Military Veteran:</strong><br />Years of service have given you discipline and experience under pressure. You are tough and resilient in combat.</li><li><strong>Escape Artist:</strong><br />You’ve mastered the art of getting out of tight spots with agility.</li><li><strong>Runaway Noble:</strong><br />Born into wealth but raised on the streets, you blend both worlds with ease.</li></ol>',
    },
    {
        id: 'C032',
        title: 'Background: Elf',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Elven Noble:</strong><br />You were raised in the lap of luxury, trained in etiquette, and surrounded by politics.</li><li><strong>Forest Scout:</strong><br />Raised in the deep forests, you’re quick, quiet, and aware of everything around you.</li><li><strong>Arcane Scholar:</strong><br />Years of study have sharpened your logical mind and magical knowledge.</li><li><strong>Speedster:</strong><br />Whether in the woods or streets, you’re faster than the rest.</li><li><strong>High Society Rebel:</strong><br />Born into privilege but now a free spirit with street wisdom.</li><li><strong>Master of Disguise:</strong><br />You blend into any crowd with ease and grace.</li></ol>',
    },
    {
        id: 'C033',
        title: 'Background: Dwarf',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Forge Worker:</strong><br />A life at the forge made you strong, hardy, and skilled with your hands.</li><li><strong>Engineer:</strong><br />You can fix or build anything, even under pressure.</li><li><strong>Underground Tracker:</strong><br />Raised in the tunnels, your sense of direction is legendary.</li><li><strong>Mercenary:</strong><br />Battle-hardened and unshakable in combat.</li><li><strong>Craftsman:</strong><br />Your work is detailed, refined, and always functional.</li><li><strong>Grumpy Old Mentor:</strong><br />Gruff but wise, you’ve got decades of experience to offer.</li></ol>',
    },
    {
        id: 'C034',
        title: 'Background: Ork',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Street Enforcer:</strong><br />People don’t argue with you—you’re the muscle they fear.</li><li><strong>Rage Fighter:</strong><br />You strike fast and hard, fueled by fury.</li><li><strong>Tech Scrapper:</strong><br />You’ve got grease under your nails and a working knowledge of tech.</li><li><strong>Hunter:</strong><br />Keen instincts and quick reflexes keep you alive in the wild.</li><li><strong>Urban Scout:</strong><br />You own the alleys and rooftops—urban terrain is your jungle.</li><li><strong>Grunt:</strong><br />You’ve been on the frontlines, taking the hits and surviving the worst.</li></ol>',
    },
    {
        id: 'C035',
        title: 'Background: Troll',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Pit Fighter:</strong><br />You’ve battled in the arena—brute strength is your game.</li><li><strong>Bouncer:</strong><br />You protect, intimidate, and shut things down with your presence.</li><li><strong>Mossback:</strong><br />Tough, seasoned, and unmovable in a fight.</li><li><strong>Ravager:</strong><br />You charge like a freight train—melee combat is your playground.</li><li><strong>Beastmaster:</strong><br />You’ve tamed wild creatures and learned their ways.</li><li><strong>Troll Outlaw:</strong><br />A nomad and survivor with a fearsome reputation.</li></ol>',
    },
    {
        id: 'C040',
        title: 'Character: Name',
        content:
            '<p>Each class has its own name pool.</p>' +
            '<ul><li>(C041) Street Samurai</li><li>(C042) Decker</li><li>(C043) Rigger</li><li>(C044) Mage</li><li>(C045) Face</li><li>(C046) Shaman</li></ul>',
    },
    {
        id: 'C041',
        title: 'Name: Street Samurai',
        content:
            '<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate table.</p>' +
            '<p><strong>First Name:</strong></p>' +
            '<ol><li>Kaito</li><li>Hana</li><li>Ryo</li><li>Takashi</li><li>Mei</li><li>Kenji</li></ol>' +
            '<p><strong>Last Name:</strong></p>' +
            '<ol><li>Blade</li><li>Wraith</li><li>Tiger</li><li>Ghost</li><li>Steel</li><li>Ronin</li></ol>',
    },
    {
        id: 'C042',
        title: 'Name: Decker',
        content:
            '<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate table.</p>' +
            '<p><strong>First Name:</strong></p>' +
            '<ol><li>Ray</li><li>Lex</li><li>Nova</li><li>Jax</li><li>Zero</li><li>Kai</li></ol>' +
            '<p><strong>Last Name:</strong></p>' +
            '<ol><li>Circuit</li><li>Byte</li><li>Shock</li><li>Pulse</li><li>Code</li><li>Grid</li></ol>',
    },
    {
        id: 'C043',
        title: 'Name: Rigger',
        content:
            '<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate table.</p>' +
            '<p><strong>First Name:</strong></p>' +
            '<ol><li>Rusty</li><li>Max</li><li>Sasha</li><li>Quinn</li><li>Juno</li><li>Flint</li></ol>' +
            '<p><strong>Last Name:</strong></p>' +
            '<ol><li>Gear</li><li>Iron</li><li>Switch</li><li>Drive</li><li>Pilot</li><li>Mechanic</li></ol>',
    },
    {
        id: 'C044',
        title: 'Name: Mage',
        content:
            '<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate table.</p>' +
            '<p><strong>First Name:</strong></p>' +
            '<ol><li>Ash</li><li>Vesper</li><li>Nox</li><li>Zephyr</li><li>Luna</li><li>Orion</li></ol>' +
            '<p><strong>Last Name:</strong></p>' +
            '<ol><li>Flame</li><li>Star</li><li>Warden</li><li>Spell</li><li>Void</li><li>Arcane</li></ol>',
    },
    {
        id: 'C045',
        title: 'Name: Face',
        content:
            '<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate table.</p>' +
            '<p><strong>First Name:</strong></p>' +
            '<ol><li>Rio</li><li>Cole</li><li>Ava</li><li>Zara</li><li>Damon</li><li>Lex</li></ol>' +
            '<p><strong>Last Name:</strong></p>' +
            '<ol><li>Charm</li><li>Blare</li><li>Silver</li><li>Blade</li><li>Vibe</li><li>Verve</li></ol>',
    },
    {
        id: 'C046',
        title: 'Name: Shaman',
        content:
            '<p>Roll 1d6 to get a first name and 1d6 for a second name from the appropriate table.</p>' +
            '<p><strong>First Name:</strong></p>' +
            '<ol><li>Tala</li><li>Soren</li><li>Freya</li><li>Bastian</li><li>Naya</li><li>Zane</li></ol>' +
            '<p><strong>Last Name:</strong></p>' +
            '<ol><li>Spirit</li><li>Wolf</li><li>Storm</li><li>Wind</li><li>Sky</li><li>Shadow</li></ol>',
    },
    {
        id: 'C050',
        title: 'Character: Mode',
        content:
            '<p>Select a mode to fade into the shadows and uncover the hidden corners of NeonHollow.</p>' +
            '<p>For your first journey, I suggest starting with Easy Mode to get a feel for the city`s pulse.</p>' +
            '<p><strong>Easy Mode:</strong></p>' +
            '<ul><li>7.000 ¥</li><li>7 Health</li><li>7 Energy</li><li>1 Reputation</li><li>1 Intel</li></ul>' +
            '<p><strong>Medium Mode:</strong></p>' +
            '<ul><li>5.000 ¥</li><li>5 Health</li><li>5 Energy</li><li>1 Reputation</li><li>0 Intel</li></ul>' +
            '<p><strong>Hard Mode:</strong></p>' +
            '<ul><li>3.000 ¥</li><li>3 Health</li><li>3 Energy</li><li>0 Reputation</li><li>0 Intel</li></ul>',
    },
]
