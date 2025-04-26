export const Character = [
    {
        id: 'R003',
        title: 'Character Creation',
        content: `<p>Follow this guide to build your runner before diving into the shadows.</p>
            <ol>
                <li>Metatype</li>
                <li>Archetype</li>
                <li>Background</li>
                <li>Gear</li>
                <li>Mode</li>
            </ol>
            <hr />
            <p><strong>1. Metatype:</strong></p>
            <p>Roll 1d6:</p>
            <ol>
                <li>(R021) Human</li>
                <li>(R022) Elf</li>
                <li>(R023) Dwarf</li>
                <li>(R024) Orc</li>
                <li>(R025) Troll</li>
                <li>Roll Again</li>
            </ol>
            <p>Apply the attributes to your player sheet.</p>
            <hr />
            <p><strong>2. Archetype:</strong></p>
            <p>Roll 1d6:</p>
            <ol>
                <li>(R031) Street Samurai</li>
                <li>(R032) Decker</li>
                <li>(R033) Rigger</li>
                <li>(R034) Mage</li>
                <li>(R035) Face</li>
                <li>(R036) Shaman</li>
            </ol>
            <p>Apply the bonuses to your player sheet.</p>
            <hr />
            <p><strong>3. Background:</strong></p>
            <p>How to roll on the Background Matrix:</p>
            <ol>
                <li>Your archtype is the tens digit.</li>
                <li><strong>Roll 1d6</strong> for the ones digit.</li>
                <li>Combine the two numbers to form a two-digit number.</li>
                <li><strong>Find the ID</strong> – Use the number rolled to locate the ID on the matrix.</li>
                <li>Each background provides both a strength and a weakness.</li>
            </ol>
            <table>
                <thead>
                    <tr>
                        <th>2d6</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>R711</td>
                        <td>R712</td>
                        <td>R713</td>
                        <td>R714</td>
                        <td>R715</td>
                        <td>R716</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>R721</td>
                        <td>R722</td>
                        <td>R723</td>
                        <td>R724</td>
                        <td>R725</td>
                        <td>R726</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>R731</td>
                        <td>R732</td>
                        <td>R733</td>
                        <td>R734</td>
                        <td>R735</td>
                        <td>R736</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>R741</td>
                        <td>R742</td>
                        <td>R743</td>
                        <td>R744</td>
                        <td>R745</td>
                        <td>R746</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>R751</td>
                        <td>R752</td>
                        <td>R753</td>
                        <td>R754</td>
                        <td>R755</td>
                        <td>R756</td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>R761</td>
                        <td>R762</td>
                        <td>R763</td>
                        <td>R764</td>
                        <td>R765</td>
                        <td>R766</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <p><strong>4. Gear:</strong></p>
            <p>Choose one item for free from the Fixer's Workshop:</p>
            <ul>
                <li>
                    <strong>Power Gauntlets:</strong> +1 Strength
                </li>
                <li>
                    <strong>Nano-Tread Boots:</strong> +1 Agility
                </li>
                <li>
                    <strong>Reflex Enhancer Implant:</strong> +1 Reaction
                </li>
                <li>
                    <strong>Neural Interface Headset:</strong> +1 Logic
                </li>
                <li>
                    <strong>Synaptic Amplifier:</strong> +1 Intuition
                </li>
                <li>
                    <strong>Holo-Disguise Mask:</strong> +1 Charisma
                </li>
            </ul>
            <p>Apply the bonus to your player sheet.</p>
            <hr />
            <!--<p><strong>5. Name:</strong></p>
            <p>Each archetype has its own name pool:</p>
            <ul>
                <li>(R041) Street Samurai</li>
                <li>(R042) Decker</li>
                <li>(R043) Rigger</li>
                <li>(R044) Mage</li>
                <li>(R045) Face</li>
                <li>(R046) Shaman</li>
            </ul>
            <hr />-->
            <p><strong>5. Mode:</strong></p>
            <p>For your first journey, I suggest starting with Easy Mode to get a feel for the city's pulse.</p>
            <ul>
                <li>
                    <strong>Easy Mode:</strong>
                    <ul><li>15.000 ¥</li><li>10 Health</li><li>10 Energy</li><li>3 Reputation</li></ul>
                </li>
                <li>
                    <strong>Medium Mode:</strong>
                    <ul><li>10.000 ¥</li><li>8 Health</li><li>8 Energy</li><li>2 Reputation</li></ul>
                </li>
                <li>
                    <strong>Hard Mode:</strong>
                    <ul><li>5.000 ¥</li><li>6 Health</li><li>6 Energy</li><li>1 Reputation</li></ul>
                </li>
            </ul>`,
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
]
