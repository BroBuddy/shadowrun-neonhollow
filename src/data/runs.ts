export const Runs = [
    {
        id: 'R601',
        title: 'Mr. Johnson',
        content: `<p class="flex items-center justify-center"><img src="/images/MrJohnson.jpg" alt="MrJohnson" /></p>
            <p><em>"The smile's fake. The creds are real."</em></p>
            <p>The mysterious figure is a former corporate insider, now seeking to aid you in toppling the megacorp from within.</p>
            <p><strong>Before each mission:</strong></p>
            <ol>
                <li>Spend <strong>3 Intel</strong> &#8594; Negotiate for hazard pay</li>
                <li>Roll 2d6 &#8594; Add <strong>Charisma</strong></li>
                <li>See R303 &#8594; Nuyen</li>
            </ol>
            <p><strong>Missions:</strong></p>
            <ol>
                <li><strong>Leak Sensitive Data</strong> (R610)</li>
                <li><strong>Crash Security Systems</strong> (R620)</li>
                <li><strong>Confront the CEO</strong> (R630)</li>
            </ol>
            <hr />
            <p>To master the shadows, study the Rules (R602) — and after every run, debrief with the Performance (R603) to assess your impact.</p>`,
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
            <p>Report to <strong>Mr. Johnson</strong> after the run to receive your reward based on Performance (R603).</p>`,
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
        title: 'Leak Sensitive Data',
        content: `
            <p><strong>Client:</strong><br />
            Dr. Vexa Arul, BioCare</p>
            <p><strong>Location:</strong><br />
            MegaCorp</p>
            <p><strong>Briefing:</strong><br />
            BioCare suspects the megacorp of illegally cloning biometric datasets from neural implant users. You’re tasked with infiltrating the Legal Archives in MegaCorp, pulling incriminating files, and leaking them into the open net. Clean, silent, and fast—their reputation depends on it.</p>
            <hr />
            <p><strong>1. Enter the Archives Undetected</strong></p>
            <p>Roll 2d6:</p>
            <ul>
                <li>2–5 &#8594; <strong>Agility (DC 12)</strong>:<br />Sneak past motion detectors.</li>
                <li>6–8 &#8594; <strong>Intuition (DC 10)</strong>:<br />Time the patrols perfectly.</li>
                <li>9–12 &#8594; <strong>Logic (DC 8)</strong>:<br />Disable surveillance remotely.</li>
            </ul>
            <p>Fail? &#8594; See R603 &#8594; Performance 1</p>
            <hr />
            <p><strong>2. Access the Encrypted Files</strong></p>
            <p>Roll 2d6:</p>
            <ul>
                <li>3–6 &#8594; <strong>Logic (DC 12)</strong>:<br />Break through the firewall.</li>
                <li>7–9 &#8594; <strong>Charisma (DC 10)</strong>:<br />Social-engineer a bypass code.</li>
                <li>10–12 &#8594; <strong>Strength (DC 8)</strong>:<br />Physically remove the secure drive.</li>
            </ul>
            <p>Fail? &#8594; See R603 &#8594; Performance 2</p>
            <hr />
            <p><strong>3. Exfiltrate with the Data</strong></p>
            <p>Roll 2d6:</p>
            <ul>
                <li>4–7 &#8594; <strong>Reaction (DC 12)</strong>:<br />Dodge the incoming corpsec unit.</li>
                <li>8-10 &#8594; <strong>Agility (DC 10)</strong>:<br />Escape via the ventilation shafts.</li>
                <li>11–12 &#8594; <strong>Charisma (DC 8)</strong>:<br />Bluff your way out in plain sight.</li>
            </ul>
            <p>Fail? &#8594; See R603 &#8594; Performance 3</p>
            <hr />
            <p><strong>Twist:</strong><br />
            A corporate agent is already leaking the data to another buyer. Time is limited.</p>
            <ul>
                <li><strong>Reaction (DC 14)</strong> or <strong>Intuition (DC 14)</strong>:<br />
                Spot the rival agent’s trail and intercept.</li>
            </ul>
            <p>Fail? &#8594; See R603 &#8594; Performance 4</p>
            <p>Success? &#8594; See R603 &#8594; Performance 5</p>`,
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
            <p>Fail? &#8594; See R014</p>
            <p>Success? &#8594; See R015</p>`,
    },
]
