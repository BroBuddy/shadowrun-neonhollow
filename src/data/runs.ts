export const Runs = [
    {
        id: 'R601',
        title: 'Mr. Johnson',
        content: `<p class="flex items-center justify-center"><img src="/images/MrJohnson.jpg" alt="MrJohnson" /></p>
            <p><em>"The smile's fake. The creds are real."</em></p>
            <p>The mysterious figure is a former corporate insider, now seeking to aid you in toppling the megacorp from within.</p>
            <p><strong>Before each mission:</strong></p>
            <ol>
                <li>Spend <strong>4 Intel</strong> &#8594; Negotiate for hazard pay</li>
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
        content: `<ol>
            <li>You must tackle the missions in order.</li>
            <li>Face three obstacles. Roll 2d6 to determine your skill check for each.</li>
            <li>DC is the number of successes needed to clear a challenge.</li>
            <li>If you succeed at all three, the twist is revealed.</li>
            <li>Each success contributes to your overall Performance score.</li>
            <li>Report to Mr. Johnson after the run to receive your reward based on Performance (R603).</li>
            </ol>`,
    },
    {
        id: 'R603',
        title: 'Mission Performance',
        content: `<p><strong>Mr. Johnson</strong> doesn’t just care that the job’s done — he cares how it’s done. The better your performance, the greater the reward.</p>
            <ol>
                <li><strong>Disastrous</strong> – Mission failed badly. Severe fallout.
                    <ul>
                        <li>+1 Heat</li>
                    </ul>
                </li>
                <li><strong>Underwhelming</strong> – Setback, but Lessons Learned.
                    <ul>
                        <li>+1 Intel</li>
                    </ul>
                </li>
                <li><strong>Partial</strong> – Glitched Out, Grabbed Clues.
                    <ul>
                        <li>+5.000 ¥, +2 Intel</li>
                    </ul>
                </li>
                <li><strong>Impressive</strong> – Handled the mission well, mostly clean.
                    <ul>
                        <li>+10.000 ¥, next Mission</li>
                    </ul>
                </li>
                <li><strong>Exceptional</strong> – Flawless execution, no trace left.
                    <ul>
                        <li>+15.000 ¥, +1 Reputation, next Mission</li>
                    </ul>
                </li>
            </ol>`,
    },
    {
        id: 'R610',
        title: 'Leak Sensitive Data',
        content: `
            <p><strong>Client:</strong><br />
            Dr. Vexa Arul, BioCare</p>
            <p><strong>Location:</strong><br />
            CorpTower</p>
            <p><strong>Briefing:</strong><br />
            BioCare suspects the megacorp of illegally cloning biometric datasets from neural implant users. You’re tasked with infiltrating the Legal Archives in CorpTower, pulling incriminating files, and leaking them into the open net. Clean, silent, and fast—their reputation depends on it.</p>
            <hr />
            <ol>
                <li><strong>Enter the Archives Undetected</strong>
                    <ul>
                        <li>2–5: <strong>Agility (DC 14)</strong>:<br />Sneak past motion detectors.</li>
                        <li>6–8: <strong>Intuition (DC 12)</strong>:<br />Time the patrols perfectly.</li>
                        <li>9–12: <strong>Logic (DC 10)</strong>:<br />Disable surveillance remotely.</li>
                        <li><strong>Fail:</strong> Performance 1</li>
                    </ul>
                </li>
                <li><strong>Access the Encrypted Files</strong>
                    <ul>
                        <li>3–6: <strong>Logic (DC 14)</strong>:<br />Break through the firewall.</li>
                        <li>7–9: <strong>Charisma (DC 12)</strong>:<br />Social-engineer a bypass code.</li>
                        <li>10–12: <strong>Strength (DC 10)</strong>:<br />Physically remove the secure drive.</li>
                        <li><strong>Fail:</strong> Performance 2</li>
                    </ul>
                </li>
                <li><strong>Exfiltrate with the Data</strong>
                    <ul>
                        <li>4–7: <strong>Reaction (DC 14)</strong>:<br />Dodge the incoming corpsec unit.</li>
                        <li>8-10: <strong>Agility (DC 12)</strong>:<br />Escape via the ventilation shafts.</li>
                        <li>11–12: <strong>Charisma (DC 10)</strong>:<br />Bluff your way out in plain sight.</li>
                        <li><strong>Fail:</strong> Performance 3</li>
                    </ul>
                </li>
            </ol>
            <hr />
            <p><strong>Twist:</strong><br />
            A corporate agent is already leaking the data to another buyer. Time is limited.</p>
            <ul>
                <li><strong>Reaction (DC 14)</strong> or <strong>Intuition (DC 14)</strong>:<br />Spot the rival agent’s trail and intercept.</li>
                <li><strong>Fail:</strong> Performance 4</li>
                <li><strong>Success:</strong> Performance 5</li>
            </ul>`,
    },
    {
        id: 'R620',
        title: 'Crash Security Systems',
        content: `
            <p><strong>Client:</strong><br />
            Silas Noor, DreamSphere</p>
            <p><strong>Location:</strong><br />
            CorpTower</p>
            <p><strong>Briefing:</strong><br />
            DreamSphere's immersive sleep technology is under threat—CorpTower's surveillance AI is intercepting dreamscapes to manipulate user behavior. They want a full blackout of the Corp's security grid. Slip past the eyes, fry the core, and vanish before anyone realizes the dream changed.</p>
            <hr />
            <ol>
                <li><strong>Overload the Firewall</strong>
                    <ul>
                        <li>2–5: <strong>Logic (DC 14)</strong>:<br />Launch a deep intrusion spike.</li>
                        <li>6–8: <strong>Charisma (DC 12)</strong>:<br />Con a helpdesk agent into granting deeper access.</li>
                        <li>9–12: <strong>Intuition (DC 10)</strong>:<br />Exploit a forgotten maintenance port.</li>
                        <li><strong>Fail:</strong> Performance 1</li>
                    </ul>
                </li>
                <li><strong>Disable Security Bots</strong>
                    <ul>
                        <li>3–6: <strong>Strength (DC 14)</strong>:<br />Smash the control uplink.</li>
                        <li>7–9: <strong>Reaction (DC 12)</strong>:<br />Dodge and disrupt their patterning algorithm.</li>
                        <li>10–12: <strong>Logic (DC 10)</strong>:<br />Inject a shutdown virus.</li>
                        <li><strong>Fail:</strong> Performance 2</li>
                    </ul>
                </li>
                <li><strong>Take Down the AI Core</strong>
                    <ul>
                        <li>4–7: <strong>Agility (DC 12)</strong>:<br />Slip past motion sensors into the core chamber.</li>
                        <li>8-10: <strong>Logic (DC 12)</strong>:<br />Loop its sensory input matrix until collapse.</li>
                        <li>11–12: <strong>Charisma (DC 10)</strong>:<br />Feed it paradoxes until it freezes.</li>
                        <li><strong>Fail:</strong> Performance 3</li>
                    </ul>
                </li>
            </ol>
            <hr />
            <p><strong>Twist:</strong><br />
            A secondary AI activates, attempting a rollback.</p>
            <ul>
                <li><strong>Strength (DC 14)</strong> or <strong>Agility (DC 14)</strong>:<br />Trace and crash the fallback node before reboot completes.</li>
                <li><strong>Fail:</strong> Performance 4</li>
                <li><strong>Success:</strong> Performance 5</li>
            </ul>`,
    },
    {
        id: 'R630',
        title: 'Confront the CEO',
        content: `
            <p><strong>Client:</strong><br />
            Kael Stride, HoloLounge</p>
            <p><strong>Location:</strong><br />
            CorpTower</p>
            <p><strong>Briefing:</strong><br />
            The CEO of the megacorp is planning to seize control of HoloLounge’s independent entertainment feeds, pushing brainwash protocols through immersive media. HoloLounge wants you to break into the executive floor, confront the CEO directly, and deliver a message: some minds can’t be bought.</p>
            <hr />
            <ol>
                <li><strong>Reach the Executive Elevator</strong>
                    <ul>
                        <li>2–5: <strong>Agility (DC 14)</strong>:<br />Dodge through the lobby scanners.</li>
                        <li>6–8: <strong>Logic (DC 12)</strong>:<br />Hack the elevator’s access panel.</li>
                        <li>9–12: <strong>Strength (DC 10)</strong>:<br />Force open the maintenance shaft.</li>
                        <li><strong>Fail:</strong> Performance 1</li>
                    </ul>
                </li>
                <li><strong>Bypass CEO’s Personal Guard</strong>
                    <ul>
                        <li>3–6: <strong>Reaction (DC 14)</strong>:<br />Outmaneuver their formation.</li>
                        <li>7–9: <strong>Intuition (DC 12)</strong>:<br />Find a distraction window.</li>
                        <li>10–12: <strong>Charisma (DC 10)</strong>:<br />Pretend you're scheduled for a meeting.</li>
                        <li><strong>Fail:</strong> Performance 2</li>
                    </ul>
                </li>
                <li><strong>Deliver the Threat</strong>
                    <ul>
                        <li>4–7: <strong>Charisma (DC 14)</strong>:<br />Intimidate with presence and proof.</li>
                        <li>8–10: <strong>Logic (DC 12)</strong>:<br />Reveal the exploit in their media plan.</li>
                        <li>11–12: <strong>Strength (DC 10)</strong>:<br />Leave physical evidence of your power.</li>
                        <li><strong>Fail:</strong> Performance 3</li>
                    </ul>
                </li>
            </ol>
            <hr />
            <p><strong>Twist:</strong><br />
            The CEO is an advanced AI running a remote body. The real threat lies deeper.</p>
            <ul>
                <li><strong>Logic (DC 14)</strong> or <strong>Charisma (DC 14)</strong>:<br />Realize it’s a decoy and trace the real core.</li>
                <li><strong>Fail:</strong> See R014</li>
                <li><strong>Success:</strong> See R015</li>
            </ul>`,
    },
]
