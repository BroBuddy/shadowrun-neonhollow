export const Rules = [
    {
        id: 'R001',
        title: 'Rules: Welcome to NeonHollow',
        content:
            '<p>The neon lights flicker and pulse in rhythm with the hum of the city, but beneath the bright, chaotic facade lies a world fractured by power, greed, and survival.</p>' +
            '<p>In the shadows of towering megacorporations, where the rich and powerful play their games, the streets are a battleground for those desperate enough to survive.</p>' +
            '<p>Your journey starts now...</p>' +
            '<p>First, forge your own runner (R002) — your avatar in this broken world.</p>' +
            '<p>Once you`ve shaped your character, step into NeonHollow (T001).</p>' +
            '<p>But before you dive into the chaos, take a moment to familiarize yourself with the game`s mechanics. Understanding how to survive here might just be the edge you need.</p>' +
            '<ul><li>Health (R004)</li><li>Energy (R005)</li><li>Reputation (R006)</li><li>Heat (R007)</li><li>Intel (R008)</li></ul>',
    },
    {
        id: 'R002',
        title: 'Rules: Character',
        content:
            '<p>Follow this guide to build your shadowrunner before diving into the shadows.</p>' +
            '<ol><li>(C010) Class</li><li>(C020) Race</li><li>(C030) Background</li><li>(C040) Name</li><li>(C050) Mode</li></ol>' +
            '<p>When rolling for a random attribute, refer to the attribute details for guidance (C002).</p>',
    },
    {
        id: 'R003',
        title: 'Character: Attributes',
        content:
            '<p>Roll 1d6 to determine your random attribute:</p>' +
            '<ol><li><strong>Strength</strong> – The Power to Endure</li><li><strong>Agility</strong> – The Speed to Slip Between Shadows</li><li><strong>Reaction</strong> – The Edge That Comes Before Thought</li><li><strong>Logic</strong> – The Key That Unlocks Every Door</li><li><strong>Intuition</strong> – The Sixth Sense of the Streets</li><li><strong>Charisma</strong> – The Power That Doesn’t Need Guns</li></ol>',
    },

    {
        id: 'R004',
        title: 'Character: Health',
        content:
            '<p>Health represents the physical state of a runner, a fragile balance between vitality and deterioration. </p>' +
            '<p>It ranges from 0 to 10, with higher values reflecting peak condition—faster reflexes, sharper senses, and resilience in the face of adversity. The closer to 10 you are, the better your chances to endure the harsh world around you. But as your Health drops, so does your effectiveness. Injuries, exhaustion, and the harshness of your environment weigh heavily on you.</p>' +
            '<p>At 0, your journey ends. Your runner is dead. No more chances.</p>' +
            '<p>To restore Health, visit <strong>BioCare</strong>, where skilled techs patch you up for a price. Or indulge in a hearty meal at <strong>CyberBite</strong> to give yourself a boost.</p>' +
            '<p>Outside these options, the streets of NeonHollow may offer unexpected moments to mend, but don’t rely on luck alone. Stay sharp, or you might not live to fight another day.</p>',
    },
    {
        id: 'R005',
        title: 'Character: Energy',
        content:
            '<p>Energy is the lifeblood of a runner, the fuel that keeps you going in the neon-lit streets of NeonHollow. It measures your stamina, your ability to push through the grind of daily tasks, from town events to dangerous runs for Mr. Johnson.</p>' +
            '<p>Your energy ranges from 0 to 10—at higher levels, you`ll find yourself sharp, quicker on your feet, and more resilient. But let your energy dip too low, and you’ll start feeling the strain: at lower levels, you’ll suffer setbacks, and when it hits zero, every further drain on your energy will cost you precious health.</p>' +
            '<p>To restore your energy, the <strong>DreamSphere</strong> is your best bet, offering a peaceful sanctuary where you can recharge your batteries.</p>' +
            '<p>There are also other opportunities to recover energy during town events, but don’t rely too heavily on them—staying rested and ready is crucial to surviving the harsh life of a runner in this chaotic city.</p>',
    },
    {
        id: 'R006',
        title: 'Character: Reputation',
        content:
            '<p>Reputation is the weight your name carries in the shadows of NeonHollow. It’s the reputation you’ve built through your actions and the whispers that follow you wherever you go.</p>' +
            '<p>As you rise, it opens doors to high-stakes jobs and elite missions, but fall too far, and those doors will slam shut.</p>' +
            '<p>Your Reputation ranges from 0 to 5, growing with every courteous interaction, successful mission, or display of skill. On the flip side, if your actions are reckless, your performance subpar, or you rub others the wrong way, you’ll find yourself losing respect in the underworld.</p>' +
            '<p>How others see you can be the difference between a lucrative gig and being left out in the cold.</p>',
    },
    {
        id: 'R007',
        title: 'Character: Heat',
        content:
            '<p>Heat represents your notoriety with the law in NeonHollow. It rises when you engage in illegal activities and decreases when you stick to the straight and narrow.</p>' +
            '<p>The scale ranges from 0 to 10, with three distinct levels: at Level 0, you`re practically invisible to the authorities—nothing out of the ordinary.</p>' +
            '<p>But as your heat increases, the law takes more notice, and your rolls begin to suffer as the city becomes more hostile to your presence.</p>' +
            '<p>To reduce heat, you can pay off an officer for a quick fix, or you can choose to lay low for a while, allowing time to dull the memory of your face and your criminal activities.</p>',
    },
    {
        id: 'R008',
        title: 'Character: Intel',
        content:
            '<p>Intel is the lifeblood of your runner’s network—sought-after information about the city, the corps, or anyone who’s in the know. It’s not just facts; it’s power in a world where knowledge can be as valuable as a weapon.</p>' +
            '<p>Your Intel ranges from 0 to 5, and it’s a currency of its own in the shadows of NeonHollow.</p>' +
            '<p>You can spend 1 Intel to reroll any check you’ve just failed, a chance to turn the tide when your luck’s running thin—though you can only use this trick once per roll. If you’ve gathered enough, you can unload your stash of Intel to an underground fixer, swapping secrets for cold, hard nuyen.</p>' +
            '<p>Whether you’re tracking down an informant or stumbling upon valuable intel in the city’s chaos, every piece you gather sharpens your edge in this cutthroat world.</p>',
    },
    {
        id: 'R010',
        title: 'Character: Class',
        content:
            '<p>Roll 1d6 to determine your class:</p>' +
            '<ol><li>(C011) Street Samurai</li><li>(C012) Decker</li><li>(C013) Rigger</li><li>(C014) Mage</li><li>(C015) Face</li><li>(C016) Shaman</li></ol>' +
            '<p>Each class has unique strengths, weaknesses, and a default set of attribute values.</p>',
    },
    {
        id: 'R011',
        title: 'Class: Street Samurai',
        content:
            '<p>A master of combat, both physical and ranged. Often a hired gun or mercenary, the Street Samurai relies on strength and agility to survive in the harsh world of the shadows.</p>' +
            '<p><strong>Attributes:</strong></p>' +
            '<ul><li>Strength: 4</li><li>Agility: 4</li><li>Reaction: 3</li><li>Logic: 2</li><li>Intuition: 3</li><li>Charisma: 2</li></ul>',
    },
    {
        id: 'R012',
        title: 'Class: Decker',
        content:
            "<p>The digital cowboy. A Decker navigates the Matrix, hacking and controlling systems with a mix of tech skills and speed. They're often the go-to for gathering information or manipulating digital environments.</p>" +
            '<p><strong>Attributes:</strong></p>' +
            '<ul><li>Strength: 2</li><li>Agility: 3</li><li>Reaction: 4</li><li>Logic: 4</li><li>Intuition: 3</li><li>Charisma: 2</li></ul>',
    },
    {
        id: 'R013',
        title: 'Class: Rigger',
        content:
            '<p>Riggers specialize in controlling drones, vehicles, and machinery. Their physical prowess allows them to take charge of mechanical and robotic assets, making them versatile in combat and exploration.</p>' +
            '<p><strong>Attributes:</strong></p>' +
            '<ul><li>Strength: 3</li><li>Agility: 4</li><li>Reaction: 2</li><li>Logic: 3</li><li>Intuition: 2</li><li>Charisma: 4</li></ul>',
    },
    {
        id: 'R014',
        title: 'Class: Mage',
        content:
            '<p>The wielder of magical powers. Mages use their abilities to manipulate the elements, enchant objects, and protect themselves from harm. They rely heavily on their mental attributes to tap into their magical forces.</p>' +
            '<p><strong>Attributes:</strong></p>' +
            '<ul><li>Strength: 3</li><li>Agility: 2</li><li>Reaction: 2</li><li>Logic: 4</li><li>Intuition: 4</li><li>Charisma: 3</li></ul>',
    },
    {
        id: 'R015',
        title: 'Class: Face',
        content:
            '<p>The social expert, often the face of the team. Faces specialize in negotiations, deception, and influence. They rely on charisma to manipulate others and can charm or intimidate their way through various situations.</p>' +
            '<p><strong>Attributes:</strong></p>' +
            '<ul><li>Strength: 2</li><li>Agility: 3</li><li>Reaction: 4</li><li>Logic: 3</li><li>Intuition: 2</li><li>Charisma: 4</li></ul>',
    },
    {
        id: 'R016',
        title: 'Class: Shaman',
        content:
            "<p>A spiritual leader and practitioner of magic. Shamans are deeply connected to the natural world and communicate with spirits to enhance their abilities. They're more attuned to nature and can summon and control spirits.</p>" +
            '<p><strong>Attributes:</strong></p>' +
            '<ul><li>Strength: 4</li><li>Agility: 2</li><li>Reaction: 3</li><li>Logic: 2</li><li>Intuition: 4</li><li>Charisma: 3</li></ul>',
    },
    {
        id: 'R020',
        title: 'Character: Race',
        content:
            '<p>Roll 1d6 to determine your race:</p>' +
            '<ol><li>(C021) Human</li><li>(C022) Elf</li><li>(C023) Dwarf</li><li>(C024) Orc</li><li>(C025) Troll</li><li>Roll Again</li></ol>' +
            '<p>Apply the bonuses to your attributes.</p>',
    },
    {
        id: 'R021',
        title: 'Race: Human',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Human.jpg" alt="Human" /></p>' +
            '<p>The most adaptable and versatile race, humans have the ability to excel in nearly every environment. They may not possess the natural enhancements of the other races, but their drive and determination make them a powerful force in any situation.</p>' +
            '<p><strong>Bonuses:</strong></p>' +
            "<p>+1 to any attribute (Player's choice)</p>",
    },
    {
        id: 'R022',
        title: 'Race: Elf',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Elf.jpg" alt="Elf" /></p>' +
            '<p>"Graceful, elegant, and with a keen intellect, elves are often seen as the aristocrats of the Shadowrun world. Their natural agility and charisma make them invaluable in both social and combat situations.</p>' +
            '<p><strong>Bonuses:</strong></p>' +
            '<p>+1 to Agility / Charisma</p>',
    },
    {
        id: 'R023',
        title: 'Race: Dwarf',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Dwarf.jpg" alt="Dwarf" /></p>' +
            '<p>Dwarves are the embodiment of endurance and resilience. Shorter in stature but larger in presence, they are known for their strength, toughness, and unyielding determination. They’re often the reliable backbone of any crew</p>' +
            '<p><strong>Bonuses:</strong></p>' +
            '<p>+1 to Strength / Logic</p>',
    },
    {
        id: 'R024',
        title: 'Race: Ork',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Ork.jpg" alt="Ork" /></p>' +
            '<p>With a natural inclination toward physical power and aggression, orks are often misunderstood as brutish, but they have a strong sense of loyalty and honor. Their towering frames and raw strength make them formidable in any fight.</p>' +
            '<p><strong>Bonuses:</strong></p>' +
            '<p>+1 to Strength / Intuition</p>',
    },
    {
        id: 'R025',
        title: 'Race: Troll',
        content:
            '<p class="flex items-center justify-center"><img src="/images/Troll.jpg" alt="Troll" /></p>' +
            '<p>Trolls are intimidating giants, known for their immense physical strength and natural toughness. While their appearance often causes fear, trolls are also capable of deep loyalty and fierce protection for those they care about.</p>' +
            '<p><strong>Bonuses:</strong></p>' +
            '<p>+1 to Strength / Reaction</p>',
    },
    {
        id: 'R030',
        title: 'Character: Background',
        content:
            '<p>Your origins matter—pick your race to unveil the path that led you here.</p>' +
            '<ul><li>(C031) Human</li><li>(C032) Elf</li><li>(C033) Dwarf</li><li>(C034) Orc</li><li>(C035) Troll</li></ul>',
    },
    {
        id: 'R031',
        title: 'Background: Human',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Corporate Soldier:</strong><br />You worked in the security detail of a corporate mega-conglomerate. You understand the balance of power and the weight of wealth.</li><li><strong>Street Hustler:</strong><br />You grew up on the streets, using your wits and charm to survive. You’re a smooth talker and a quick thinker.</li><li><strong>Tech Salvager:</strong><br />You spent years collecting and selling tech scraps, learning the ins and outs of electronics. Your mind works well with complex systems.</li><li><strong>Military Veteran:</strong><br />Years of service have given you discipline and experience under pressure. You are tough and resilient in combat.</li><li><strong>Escape Artist:</strong><br />You’ve mastered the art of getting out of tight spots with agility.</li><li><strong>Runaway Noble:</strong><br />Born into wealth but raised on the streets, you blend both worlds with ease.</li></ol>',
    },
    {
        id: 'R032',
        title: 'Background: Elf',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Elven Noble:</strong><br />You were raised in the lap of luxury, trained in etiquette, and surrounded by politics.</li><li><strong>Forest Scout:</strong><br />Raised in the deep forests, you’re quick, quiet, and aware of everything around you.</li><li><strong>Arcane Scholar:</strong><br />Years of study have sharpened your logical mind and magical knowledge.</li><li><strong>Speedster:</strong><br />Whether in the woods or streets, you’re faster than the rest.</li><li><strong>High Society Rebel:</strong><br />Born into privilege but now a free spirit with street wisdom.</li><li><strong>Master of Disguise:</strong><br />You blend into any crowd with ease and grace.</li></ol>',
    },
    {
        id: 'R033',
        title: 'Background: Dwarf',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Forge Worker:</strong><br />A life at the forge made you strong, hardy, and skilled with your hands.</li><li><strong>Engineer:</strong><br />You can fix or build anything, even under pressure.</li><li><strong>Underground Tracker:</strong><br />Raised in the tunnels, your sense of direction is legendary.</li><li><strong>Mercenary:</strong><br />Battle-hardened and unshakable in combat.</li><li><strong>Craftsman:</strong><br />Your work is detailed, refined, and always functional.</li><li><strong>Grumpy Old Mentor:</strong><br />Gruff but wise, you’ve got decades of experience to offer.</li></ol>',
    },
    {
        id: 'R034',
        title: 'Background: Ork',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Street Enforcer:</strong><br />People don’t argue with you—you’re the muscle they fear.</li><li><strong>Rage Fighter:</strong><br />You strike fast and hard, fueled by fury.</li><li><strong>Tech Scrapper:</strong><br />You’ve got grease under your nails and a working knowledge of tech.</li><li><strong>Hunter:</strong><br />Keen instincts and quick reflexes keep you alive in the wild.</li><li><strong>Urban Scout:</strong><br />You own the alleys and rooftops—urban terrain is your jungle.</li><li><strong>Grunt:</strong><br />You’ve been on the frontlines, taking the hits and surviving the worst.</li></ol>',
    },
    {
        id: 'R035',
        title: 'Background: Troll',
        content:
            '<p>Roll 1d6 to determine your background:</p>' +
            '<ol><li><strong>Pit Fighter:</strong><br />You’ve battled in the arena—brute strength is your game.</li><li><strong>Bouncer:</strong><br />You protect, intimidate, and shut things down with your presence.</li><li><strong>Mossback:</strong><br />Tough, seasoned, and unmovable in a fight.</li><li><strong>Ravager:</strong><br />You charge like a freight train—melee combat is your playground.</li><li><strong>Beastmaster:</strong><br />You’ve tamed wild creatures and learned their ways.</li><li><strong>Troll Outlaw:</strong><br />A nomad and survivor with a fearsome reputation.</li></ol>',
    },
    {
        id: 'R040',
        title: 'Character: Name',
        content:
            '<p>Each class has its own name pool.</p>' +
            '<ul><li>(C041) Street Samurai</li><li>(C042) Decker</li><li>(C043) Rigger</li><li>(C044) Mage</li><li>(C045) Face</li><li>(C046) Shaman</li></ul>',
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
