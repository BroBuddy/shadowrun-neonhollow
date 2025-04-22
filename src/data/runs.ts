export const Runs = [
    {
        id: 'M001',
        title: 'Mr. Johnson',
        content: `<p class="flex items-center justify-center"><img src="/images/MrJohnson.jpg" alt="MrJohnson" /></p>
            <p><em>"The smile's fake. The creds are real."</em></p>
            <p><strong>Spend <strong>3 Intel</strong> &#8594; Roll 1d6 for your mission:</strong></p>
            <ul>
                <li>1-2: <strong>Operation Blackout</strong> (M010)</li>
                <li>3-4: <strong>Neon Evac</strong> (M020)</li>
                <li>5-6: <strong>Phantom Strike</strong> (M030)</li>
            </ul>
            <p>To master the shadows, study the Rules (M002) — and after every run, debrief with the Performance (M003) to assess your impact.</p>`,
    },
    {
        id: 'M002',
        title: 'Run: Rules',
        content: `<ol>
            <li>Roll 1d6 to determine the mission location.</li>
            <li>Face three obstacles. Roll 2d6 to determine your skill check for each.
            <li>DC means Difficulty Class – how many successes you need to clear a challenge.</li>
            </li>
            <li>If you succeed at all three, the twist is revealed.</li>
            <li>Each success contributes to your overall Performance score.</li>
            <li>After the run, report to Mr. Johnson and receive your reward based on Performance (M003).</li>
            </ol>`,
    },
    {
        id: 'M003',
        title: 'Run: Performance',
        content: `<p>Mr. Johnson doesn’t just care that the job’s done — he cares how it’s done.</p>
            <p>The better your performance, the greater the reward.</p>
            <ol>
                <li><strong>Disastrous</strong> – Mission failed badly. Severe fallout.
                    <ul>
                        <li>No Effect</li>
                    </ul>
                </li>
                <li><strong>Underwhelming</strong> – Barely completed the job, but left a mess.
                    <ul>
                        <li>+2.000 ¥</li>
                    </ul>
                </li>
                <li><strong>Partial</strong> – Mission completed, but with setbacks.
                    <ul>
                        <li>+4.000 ¥</li>
                    </ul>
                </li>
                <li><strong>Impressive</strong> – Handled the mission well, mostly clean.
                    <ul>
                        <li>+6.000 ¥, -1 Corp Influence</li>
                    </ul>
                </li>
                <li><strong>Exceptional</strong> – Flawless execution, no trace left.
                    <ul>
                        <li>+8.000 ¥, -1 Corp Influence, +1 Reputation</li>
                    </ul>
                </li>
            </ol>`,
    },
    {
        id: 'M010',
        title: 'Mission: Operation Blackout',
        content: `
            <p><strong>Client:</strong><br />
            BioCare</p>
            <p><strong>Location:</strong><br />
            CorpTower</p>
            <p><strong>Briefing:</strong><br />
            A silent data breach threatens BioCare's neural implant protocols. Traces lead to the upper floors of CorpTower—specifically the Data Regulation Wing. Someone within the corporate matrix is cloning patient data and selling it off-network. BioCare needs this stopped, quietly.</p>
            <ol>
                <li><strong>Disable the Drones</strong>
                    <ul>
                        <li>2-5: <strong>Logic (DC 3)</strong>: Hack the drone control system.</li>
                        <li>6-8: <strong>Reaction (DC 2)</strong>: Evade and disable drones.</li>
                        <li>9-12: <strong>Strength (DC 1)</strong>: Rip the drones from their mounts.</li>
                        <li><strong>Fail:</strong> Performance 1</li>
                    </ul>
                </li>
                <li><strong>Bypass the Laser Security</strong>
                    <ul>
                        <li>2-5: <strong>Agility (DC 3)</strong>: Crawl through the lasers.</li>
                        <li>6-8: <strong>Intuition (DC 2)</strong>: Identify weak points in the grid.</li>
                        <li>9-12: <strong>Strength (DC 1)</strong>: Cut through the grid manually.</li>
                        <li><strong>Fail:</strong> Performance 2</li>
                    </ul>
                </li>
                <li><strong>Crack the Secure Lab Door</strong>
                    <ul>
                        <li>2-5: <strong>Strength (DC 3)</strong>: Force the door open.</li>
                        <li>6-8: <strong>Logic (DC 2)</strong>: Hack the security lock.</li>
                        <li>9-12: <strong>Agility (DC 1)</strong>: Pick the lock.</li>
                        <li><strong>Fail:</strong> Performance 3</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Twist:</strong><br />
            The target is in a bio-containment area. New security measures are active.</p>
            <ul>
                <li><strong>Intuition (DC 3)</strong>: Spot hidden cameras.</li>
                <li><strong>Fail:</strong> Performance 4</li>
                <li><strong>Success:</strong> Performance 5</li>
            </ul>`,
    },
    {
        id: 'M020',
        title: 'Mission: Neon Evac',
        content: `
            <p><strong>Client:</strong><br />
            HoloLounge</p>
            <p><strong>Location:</strong><br />
            CorpTower</p>
            <p><strong>Briefing:</strong><br />
            One of HoloLounge's VIP clients—a famous synth performer named KALLA-X—is being detained by corporate agents after refusing to sign an exclusive media rights contract. She’s holed up in a luxury suite on the Executive Entertainment Deck, monitored by corp security and biometric locks.</p>
            <ol>
                <li><strong>Solve Passcode Puzzle</strong>
                    <ul>
                        <li>2-5: <strong>Logic (DC 3)</strong>: Hack the target’s device to access the data chip.</li>
                        <li>6-8: <strong>Agility (DC 2)</strong>: Pickpocket the chip without alerting the target.</li>
                        <li>9-12: <strong>Strength (DC 1)</strong>: Forcefully take the chip from the target.</li>
                        <li><strong>Fail:</strong> Performance 2</li>
                    </ul>
                </li>
                <li><strong>Locate the Target</strong>
                    <ul>
                        <li>2-5: <strong>Intuition (DC 3)</strong>: Spot the target among the patrons.</li>
                        <li>6-8: <strong>Agility (DC 2)</strong>: Stealthily observe the target from a distance.</li>
                        <li>9-12: <strong>Strength (DC 1)</strong>: Push through the crowd to get a closer look.</li>
                        <li><strong>Fail:</strong> Performance 1</li>
                    </ul>
                </li>
                <li><strong>Escape from Penthouse</strong>
                    <ul>
                        <li>2-5: <strong>Agility (DC 3)</strong>: Slip out the back exit unnoticed.</li>
                        <li>6-8: <strong>Intuition (DC 2)</strong>: Spot the safest exit route without alerting security.</li>
                        <li>9-12: <strong>Strength (DC 1)</strong>: Push your way through the crowd and force your way out.</li>
                        <li><strong>Fail:</strong> Performance 3</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Twist:</strong><br />
            The target’s bodyguards are already on high alert and begin scanning the lounge.</p>
            <ul>
                <li><strong>Intuition (DC 3)</strong>: Spot the bodyguards before they spot you.</li>
                <li><strong>Fail:</strong> Performance 4</li>
                <li><strong>Success:</strong> Performance 5</li>
            </ul>`,
    },
    {
        id: 'M030',
        title: 'Mission: Phantom Strike',
        content: `
            <p><strong>Client:</strong><br />
            DreamSphere</p>
            <p><strong>Location:</strong><br />
            CorpTower</p>
            <p><strong>Briefing:</strong><br />
            DreamSphere has learned that CorpTower’s corporate intelligence division is running covert operations to intercept and manipulate data streams tied to DreamSphere’s underground network. This is a breach of their privacy agreement, and the client demands retaliation.</p>
            <ol>
                <li><strong>Infiltrate the Lobby</strong>
                    <ul>
                        <li>2-5: <strong>Intuition (DC 3)</strong>: Blend into the crowd and avoid detection.</li>
                        <li>6-8: <strong>Agility (DC 2)</strong>: Evade hotel security and slip past unnoticed.</li>
                        <li>9-12: <strong>Strength (DC 1)</strong>: Push through the crowd and force your way in.</li>
                        <li><strong>Fail:</strong> Performance 1</li>
                    </ul>
                </li>
                <li><strong>Bypass the Elevator Security</strong>
                    <ul>
                        <li>2-5: <strong>Agility (DC 3)</strong>: Scale the exterior and access the cellar undetected.</li>
                        <li>6-8: <strong>Intuition (DC 2)</strong>: Locate the hidden access point in the building's ventilation shaft.</li>
                        <li>9-12: <strong>Strength (DC 1)</strong>: Force open a locked maintenance door.</li>
                        <li><strong>Fail:</strong> Performance 3</li>
                    </ul>
                </li>
                <li><strong>Fetch sensitive data</strong>
                    <ul>
                        <li>2-5: <strong>Logic (DC 3)</strong>:  Hack into the building’s security control system.</li>
                        <li>6-8: <strong>Agility (DC 2)</strong>: Sneak past the security cameras and enter an unguarded elevator.</li>
                        <li>9-12: <strong>Strength (DC 1)</strong>: Pry open the elevator’s emergency hatch and bypass the system.</li>
                        <li><strong>Fail:</strong> Performance 2</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Twist:</strong><br />
            The server room is not as empty as expected. The target is under heavy surveillance.</p>
            <ul>
                <li><strong>Intuition (DC 3)</strong>: Detect hidden surveillance cameras.</li>
                <li><strong>Fail:</strong> Performance 4</li>
                <li><strong>Success:</strong> Performance 5</li>
            </ul>`,
    },
    {
        id: 'M040',
        title: 'Mission: Silent Extraction',
        content: `
            <p><strong>Briefing:</strong><br />
            EchoGarden, a sprawling park in the heart of the city, has become a meeting point for a high-profile target. Nighthawk Industries needs you to extract them without drawing attention. Make sure the job is done quietly and efficiently.</p>
            <ol>
                <li><strong>Infiltrate the Park</strong>
                    <ul>
                        <li>2-5: <strong>Agility (DC 3)</strong>: Sneak past park patrols undetected.</li>
                        <li>6-8: <strong>Logic (DC 2)</strong>: Analyze the security system and find a weak spot.</li>
                        <li>9-12: <strong>Strength (DC 1)</strong>: Force your way through a locked gate.</li>
                        <li><strong>Fail:</strong> Performance 1</li>
                    </ul>
                </li>
                <li><strong>Locate the Target</strong>
                    <ul>
                        <li>2-5: <strong>Intuition (DC 3)</strong>: Spot the target in the crowd.</li>
                        <li>6-8: <strong>Charisma (DC 2)</strong>: Use your charm to gather info from park-goers.</li>
                        <li>9-12: <strong>Logic (DC 1)</strong>: Deduce the target’s location from the environment.</li>
                        <li><strong>Fail:</strong> Performance 2</li>
                    </ul>
                </li>
                <li><strong>Extract the Target</strong>
                    <ul>
                        <li>2-5: <strong>Strength (DC 3)</strong>: Physically subdue the target and drag them to safety.</li>
                        <li>6-8: <strong>Agility (DC 2)</strong>: Move quickly and quietly to avoid detection.</li>
                        <li>9-12: <strong>Charisma (DC 1)</strong>: Convince the target to cooperate willingly.</li>
                        <li><strong>Fail:</strong> Performance 3</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Twist:</strong><br />
            A group of armed mercenaries enters the park, likely searching for the same target. You’ll need to act fast.</p>
            <ul>
                <li><strong>Intuition (DC 3):</strong> Spot the mercenaries’ approach.</li>
                <li><strong>Fail:</strong> Performance 4</li>
                <li><strong>Success:</strong> Performance 5</li>
            </ul>`,
    },
    {
        id: 'M050',
        title: 'Mission: Ironclad Heist',
        content: `
            <p><strong>Briefing:</strong><br />
            IronGym, the city’s top fitness center, is more than just a place to work out. Rumor has it that a hidden vault beneath the gym houses valuable corporate secrets. Nighthawk Industries has hired you to infiltrate the gym, crack the vault, and retrieve the data. Be ready to face some serious security measures and keep a low profile.</p>
            <ol>
                <li><strong>Infiltrate the Gym</strong>
                    <ul>
                        <li>2-5: <strong>Agility (DC 3)</strong>: Blend in with gym-goers and avoid attention.</li>
                        <li>6-8: <strong>Strength (DC 2)</strong>: Use brute force to take down an unwitting guard.</li>
                        <li>9-12: <strong>Charisma (DC 1)</strong>: Convince the receptionist to let you through to restricted areas.</li>
                        <li><strong>Fail:</strong> Performance 1</li>
                    </ul>
                </li>
                <li><strong>Access the Underground Vault</strong>
                    <ul>
                        <li>2-5: <strong>Strength (DC 3)</strong>: Smash through a locked gym maintenance door.</li>
                        <li>6-8: <strong>Logic (DC 2)</strong>: Hack the security system to reveal the vault's location.</li>
                        <li>9-12: <strong>Intuition (DC 1)</strong>: Find the hidden passage leading to the vault.</li>
                        <li><strong>Fail:</strong> Performance 2</li>
                    </ul>
                </li>
                <li><strong>Crack the Vault</strong>
                    <ul>
                        <li>2-5: <strong>Strength (DC 3)</strong>: Use heavy-duty tools to break into the vault.</li>
                        <li>6-8: <strong>Logic (DC 2)</strong>: Hack the vault’s electronic lock.</li>
                        <li>9-12: <strong>Agility (DC 1)</strong>: Pick the lock without triggering alarms.</li>
                        <li><strong>Fail:</strong> Performance 3</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Twist:</strong><br />
            The vault is booby-trapped with advanced security measures. You have only a few minutes to disable them before the alarm goes off.</p>
            <ul>
                <li><strong>Intuition (DC 3):</strong> Spot the hidden traps in the vault.</li>
                <li><strong>Fail:</strong> Performance 4</li>
                <li><strong>Success:</strong> Performance 5</li>
            </ul>`,
    },
    {
        id: 'M060',
        title: 'Mission: Neural Heist',
        content: `
            <p><strong>Briefing:</strong><br />
            NeuralNexus, a cutting-edge university and research lab, houses some of the most classified neural research in the city. Nighthawk Industries needs you to infiltrate the lab, steal sensitive data, and leave without a trace. The lab is full of highly trained security, so proceed with caution.</p>
            <ol>
                <li><strong>Infiltrate the Lab</strong>
                    <ul>
                        <li>2-5: <strong>Agility (DC 3)</strong>: Slip past security cameras unnoticed.</li>
                        <li>6-8: <strong>Logic (DC 2)</strong>: Hack into the lab’s security system to disable cameras.</li>
                        <li>9-12: <strong>Strength (DC 1)</strong>: Force your way through a locked security door.</li>
                        <li><strong>Fail:</strong> Performance 1</li>
                    </ul>
                </li>
                <li><strong>Locate the Data Core</strong>
                    <ul>
                        <li>2-5: <strong>Intuition (DC 3)</strong>: Find the hidden entrance to the data vault.</li>
                        <li>6-8: <strong>Charisma (DC 2)</strong>: Convince a lab technician to reveal the location of the vault.</li>
                        <li>9-12: <strong>Logic (DC 1)</strong>: Analyze the lab layout to deduce the data core’s location.</li>
                        <li><strong>Fail:</strong> Performance 2</li>
                    </ul>
                </li>
                <li><strong>Extract the Data</strong>
                    <ul>
                        <li>2-5: <strong>Strength (DC 3)</strong>: Force open the data core with your equipment.</li>
                        <li>6-8: <strong>Intuition (DC 2)</strong>: Identify the easiest way to access the core’s data banks.</li>
                        <li>9-12: <strong>Agility (DC 1)</strong>: Quick-fingered hacking to bypass the security protocols.</li>
                        <li><strong>Fail:</strong> Performance 3</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Twist:</strong><br />
            A top-tier researcher is onto your presence and is calling in reinforcements. You need to move quickly to finish the job.</p>
            <ul>
                <li><strong>Intuition (DC 3):</strong> Spot the researcher before they alert security.</li>
                <li><strong>Fail:</strong> Performance 4</li>
                <li><strong>Success:</strong> Performance 5</li>
            </ul>`,
    },
]
