export const Runs = [
    {
        id: 'R601',
        title: 'Mr. Johnson',
        content: `<div class="flex gap-4">
                <div class="flex-1 basis-1/2">
                    <img src="/images/MrJohnson.jpg" alt="MrJohnson" />
                </div>
                <div class="flex-1 basis-1/2">
                    <p><strong>How to Begin a Mission:</strong></p>
                    <ol>
                        <li>Spend <strong>3 Intel</strong></li>
                        <li>Roll 2d6</li>
                        <li>Add <strong>Charisma</strong></li>
                        <li>See R303 &#8594; Nuyen</li>
                    </ol>
                </div>
            </div>
            <hr />
            <p><em>"Start with the first mission."</em></p>
            <p><strong>Missions Overview:</strong></p>
            <p>R610 &#8594; Recon the Facility</p>
            <p>R620 &#8594; Crash Security Systems</p>
            <p>R630 &#8594; Confront the CEO</p>
            <p>R640 &#8594; Unveil the Truth</p>
            <hr />
            <p>Study Rules R602. Review Performance R603.</p>`,
    },
    {
        id: 'R602',
        title: 'Mission Rules',
        content: `<p>You must tackle the missions in order and each mission follows a specific structure:
            </p>
            <ul>
                <li>Face three obstacles. Roll 2d6 to determine your skill check for each.</li>
                <li>DC is the number of successes needed to clear a challenge.</li>
                <li>If you succeed at all three, the twist is revealed.</li>
                <li>Each success contributes to your overall Performance score.</li>
            </ul>
            <p>Report to <strong>Mr. Johnson</strong> after the run to receive your reward based on Performance R603.</p>`,
    },
    {
        id: 'R603',
        title: 'Mission Performance',
        content: `<p>Mr. Johnson doesn’t just care that the job’s done — he cares how it’s done. The better your performance, the greater the reward.</p>
            <p>🔴 <strong>Performance 1</strong> &#8594; Disastrous</p>
            <ul>
                <li>+3 Heat</li>
            </ul>
            <p>🔴 <strong>Performance 2</strong> &#8594; Underwhelming</p>
            <ul>
                <li>+2 Heat</li>
                <li>Roll 2d6 → +2 → See R305 → Gain Intel</li>
            </ul>
            <p>🟡 <strong>Performance 3</strong> &#8594; Partial</p>
            <ul>
                <li>+1 Heat</li>
                <li>Roll 2d6 → +4 → See R305 → Gain Intel</li>
                <li>Roll 2d6 → +2 → See R303 → Gain Nuyen</li>
            </ul>
            <p>🟢 <strong>Performance 4</strong> &#8594; Impressive</p>
            <ul>
                <li>Next Mission available</li>
                <li>Roll 2d6 → +4 → See R303 → Gain Nuyen</li>
            </ul>
            <p>🟢 <strong>Performance 5</strong> &#8594; Exceptional</p>
            <ul>
                <li>Next Mission available</li>
                <li>Roll 2d6 → +6 → See R303 → Gain Nuyen</li>
            </ul>`,
    },
    {
        id: 'R610',
        title: 'Recon the Facility',
        content: `
            <p><strong>Client:</strong><br />
            Renna Thorne, EchoGarden</p>
            <p><strong>Location:</strong><br />
            MegaCorp</p>
            <p><strong>Briefing:</strong><br />
            Renna Thorne from EchoGarden has gathered intel suggesting that MegaCorp is testing new surveillance equipment in a high-security facility. You are tasked with infiltrating the facility to gather vital information on the security systems and any sensitive data related to these new technologies.</p>
            <hr />
            <p><strong>1. Infiltrate the Outer Perimeter</strong></p>
            <p>Roll 2d6:</p>
            <ul>
                <li>2–5 &#8594; <strong>Agility (DC 12)</strong>:<br />Sneak through the shadows.</li>
                <li>6–8 &#8594; <strong>Intuition (DC 10)</strong>:<br />Locate an unguarded entry point.</li>
                <li>9–12 &#8594; <strong>Strength (DC 8)</strong>:<br />Force entry through a maintenance hatch.</li>
            </ul>
            <p>Fail? &#859 → See R603 &#859 → Performance 1</p>
            <hr />
            <p><strong>2. Gather Intel on Security Systems</strong></p>
            <p>Roll 2d6:</p>
            <ul>
                <li>3–6 &#8594; <strong>Logic (DC 12)</strong>:<br />Hack into the terminal to download floor plans.</li>
                <li>7–9 &#8594; <strong>Charisma (DC 10)</strong>:<br />Convince a guard to give you access.</li>
                <li>10–12 &#8594; <strong>Agility (DC 8)</strong>:<br />Sleight of hand to grab access cards.</li>
            </ul>
            <p>Fail? &#859 → See R603 &#859 → Performance 2</p>
            <hr />
            <p><strong>3. Extract Critical Data from the Server</strong></p>
            <p>Roll 2d6:</p>
            <ul>
                <li>4–7 &#8594; <strong>Reaction (DC 12)</strong>:<br />Dodge incoming guards.</li>
                <li>8–10 &#8594; <strong>Intuition (DC 10)</strong>:<br />Find a hidden network access port.</li>
                <li>11–12 &#8594; <strong>Charisma (DC 8)</strong>:<br />Bluff your way through a security checkpoint.</li>
            </ul>
            <p>Fail? &#859 → See R603 &#859 → Performance 3</p>
            <hr />
            <p><strong>Twist:</strong><br />
            As you are extracting the data, you stumble upon a hidden compartment within the server room that seems to be connected to a covert research project.</p>
            <ul>
                <li><strong>Intuition (DC 14)</strong> or <strong>Logic (DC 14)</strong>:<br />
                Spot hidden surveillance equipment.</li>
            </ul>
            <p>Fail? &#859 → See R603 &#859 → Performance 4</p>
            <p>Success? &#859 → See R603 &#859 → Performance 5</p>`,
    },
    {
        id: 'R620',
        title: 'Crash Security Systems',
        content: `
            <p><strong>Client:</strong><br />
            Silas Noor, DreamSphere</p>
            <p><strong>Location:</strong><br />
            MegaCorp</p>
            <p><strong>Briefing:</strong><br />
            DreamSphere's immersive sleep tech is being hijacked—MegaCorp’s surveillance AI is tapping into user dreamscapes to manipulate behavior. Your task: breach their digital stronghold, black out the security grid, and ghost out before they realize the dream's turned against them.</p>
            <hr />
            <p><strong>1. Overload the Firewall</strong></p>
            <p>Roll 2d6:</p>
            <ul>
                <li>2–5 &#8594; <strong>Logic (DC 12)</strong>:<br />Launch a deep intrusion spike.</li>
                <li>6–8 &#8594; <strong>Charisma (DC 10)</strong>:<br />Con a helpdesk agent into granting deeper access.</li>
                <li>9–12 &#8594; <strong>Intuition (DC 8)</strong>:<br />Exploit a forgotten maintenance port.</li>
            </ul>
            <p>Fail? &#8594; See R603 &#8594; Performance 1</p>
            <hr />
            <p><strong>2. Disable Security Bots</strong></p>
            <p>Roll 2d6:</p>
            <ul>
                <li>3–6 &#8594; <strong>Strength (DC 12)</strong>:<br />Smash the control uplink.</li>
                <li>7–9 &#8594; <strong>Reaction (DC 10)</strong>:<br />Disrupt their patrol pattern.</li>
                <li>10–12 &#8594; <strong>Logic (DC 8)</strong>:<br />Inject a shutdown virus.</li>
            </ul>
            <p>Fail? &#8594; See R603 &#8594; Performance 2</p>
            <hr />
            <p><strong>3. Take Down the AI Core</strong></p>
            <p>Roll 2d6:</p>
            <ul>
                <li>4–7 &#8594; <strong>Agility (DC 12)</strong>:<br />Slip through sensor coverage into the core.</li>
                <li>8–10 &#8594; <strong>Logic (DC 10)</strong>:<br />Loop the AI’s sensory matrix into feedback.</li>
                <li>11–12 &#8594; <strong>Charisma (DC 8)</strong>:<br />Overwhelm it with illogical paradoxes.</li>
            </ul>
            <p>Fail? &#8594; See R603 &#8594; Performance 3</p>
            <hr />
            <p><strong>Twist:</strong><br />
            A backup AI attempts an emergency rollback to restore the network.</p>
            <ul>
                <li><strong>Strength (DC 14)</strong> or <strong>Agility (DC 14)</strong>:<br />
                Crash the fallback node before reboot completes.</li>
            </ul>
            <p>Fail? &#8594; See R603 &#8594; Performance 4</p>
            <p>Success? &#8594; See R603 &#8594; Performance 5</p>`,
    },
    {
        id: 'R630',
        title: 'Confront the CEO',
        content: `<p><strong>Client:</strong><br />
            Kael Stride, HoloLounge</p>
            <p><strong>Location:</strong><br />
            MegaCorp</p>
            <p><strong>Briefing:</strong><br />
            The CEO of the megacorp is planning to seize control of HoloLounge’s independent entertainment feeds, pushing brainwash protocols through immersive media. HoloLounge wants you to break into the executive floor, confront the CEO directly, and deliver a message: some minds can’t be bought.</p>
            <hr />
            <p><strong>1. Reach the Executive Elevator</strong></p>
            <p>Roll 2d6:</p>
            <ul>
                <li>2–5 &#8594; <strong>Agility (DC 12)</strong>:<br />Dodge through the lobby scanners.</li>
                <li>6–8 &#8594; <strong>Logic (DC 10)</strong>:<br />Hack the elevator’s access panel.</li>
                <li>9–12 &#8594; <strong>Strength (DC 8)</strong>:<br />Force open the maintenance shaft.</li>
            </ul>
            <p>Fail? &#8594; See R603 &#8594; Performance 1</p>
            <hr />
            <p><strong>2. Bypass CEO’s Personal Guard</strong></p>
            <p>Roll 2d6:</p>
            <ul>
                <li>3–6 &#8594; <strong>Reaction (DC 12)</strong>:<br />Outmaneuver their formation.</li>
                <li>7–9 &#8594; <strong>Intuition (DC 10)</strong>:<br />Find a distraction window.</li>
                <li>10–12 &#8594; <strong>Charisma (DC 8)</strong>:<br />Pretend you're scheduled for a meeting.</li>
            </ul>
            <p>Fail? &#8594; See R603 &#8594; Performance 2</p>
            <hr />
            <p><strong>3. Deliver the Threat</strong></p>
            <p>Roll 2d6:</p>
            <ul>
                <li>4–7 &#8594; <strong>Charisma (DC 12)</strong>:<br />Intimidate with presence and proof.</li>
                <li>8–10 &#8594; <strong>Logic (DC 10)</strong>:<br />Reveal the exploit in their media plan.</li>
                <li>11–12 &#8594; <strong>Strength (DC 8)</strong>:<br />Leave physical evidence of your power.</li>
            </ul>
            <p>Fail? &#8594; See R603 &#8594; Performance 3</p>
            <hr />
            <p><strong>Twist:</strong><br />
            The CEO is an advanced AI running a remote body. The real threat lies deeper.</p>
            <ul>
                <li><strong>Logic (DC 14)</strong> or <strong>Charisma (DC 14)</strong>:<br />
                Realize it’s a decoy and trace the real core.</li>
            </ul>
            <p>Fail? &#8594; See R603 &#8594; Performance 4</p>
            <p>Success? &#8594; See R603 &#8594; Performance 5</p>`,
    },
    {
        id: 'R640',
        title: 'Unveil the Truth',
        content: `<p><strong>Client:</strong><br />
            Arlo Quinn, EchoGarden</p>
        <p><strong>Location:</strong><br />
            MegaCorp</p>
        <p><strong>Briefing:</strong><br />
            In this final move to topple the megacorp, you must infiltrate their most secure vault to uncover and leak their darkest secrets. Expose their illegal activities to the public and trigger a full collapse of their influence. The truth is the only weapon left — and you’re the one to wield it.</p>
        <hr />
        <p><strong>1. Infiltrate the Vault</strong></p>
        <p>Roll 2d6:</p>
        <ul>
            <li>2–5 &#8594; <strong>Agility (DC 10)</strong>:<br />Sneak past the tight security systems and motion sensors.</li>
            <li>6–8 &#8594; <strong>Intuition (DC 8)</strong>:<br />Use your senses to spot hidden guards and bypass them.</li>
            <li>9–12 &#8594; <strong>Strength (DC 12)</strong>:<br />Force open the door or break through barriers that are in your way.</li>
        </ul>
        <p>Fail? &#8594; See R603 &#8594; Performance 1</p>
        <hr />
        <p><strong>2. Extract the Sensitive Files</strong></p>
        <p>Roll 2d6:</p>
        <ul>
            <li>3–6 &#8594; <strong>Logic (DC 12)</strong>:<br />Hack the encrypted system to retrieve the files without leaving a trace.</li>
            <li>7–9 &#8594; <strong>Intuition (DC 10)</strong>:<br />Spot the hidden vault chambers with valuable data.</li>
            <li>10–12 &#8594; <strong>Charisma (DC 8)</strong>:<br />Convince an AI assistant to provide you with access to the files.</li>
        </ul>
        <p>Fail? &#8594; See R603 &#8594; Performance 2</p>
        <hr />
        <p><strong>3. Leak the Files to the Public</strong></p>
        <p>Roll 2d6:</p>
        <ul>
            <li>4–7 &#8594; <strong>Charisma (DC 10)</strong>:<br />Persuade the media outlets to publish the files immediately.</li>
            <li>8–10 &#8594; <strong>Logic (DC 8)</strong>:<br />Find a way to send the data securely to the right sources.</li>
            <li>11–12 &#8594; <strong>Strength (DC 12)</strong>:<br />Physically remove any data-destroying countermeasures they’ve set up to erase the files.</li>
        </ul>
        <p>Fail? &#8594; See R603 &#8594; Performance 3</p>
        <hr />
        <p><strong>Twist:</strong><br />
            Just as the files are sent out, the megacorp activates a fail-safe protocol, trying to erase all evidence. A corporate hit team is deployed to eliminate you.</p>
        <ul>
            <li><strong>Reaction (DC 12)</strong>:<br />Escape the hit team and secure your freedom before they can erase your presence.</li>
        </ul>
        <p>Fail? &#8594; See R014</p>
        <p>Success? &#8594; See R015</p>`,
    },
]
