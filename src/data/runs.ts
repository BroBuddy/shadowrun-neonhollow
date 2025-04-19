export const Runs = [
    {
        id: 'M001',
        title: 'Mr. Johnson',
        content:
            '<p><em>"The smile’s fake. The creds are real."</em></p>' +
            '<p class="flex items-center justify-center"><img src="/images/MrJohnson.jpg" alt="MrJohnson" /></p>' +
            '<p>No one knows his real name — and that’s the point. Mr. Johnson is the middleman between shadow and silver, offering dirty jobs with clean payouts. Always dressed sharp, always calm, and never without a plan. If he calls, it means someone wants something done off the books... and you’re the asset.</p>' +
            '<p>Roll 1d6 to determine your type of run:</p>' +
            '<ol><li>Assassination (M010)</li><li>Sabotage (M020)</li><li>Smuggling (M030)</li><li>Infiltration (M040)</li><li>Extraction (M050)</li><li>Negotiation (M060)</li></ol>' +
            '<p>To master the shadows, study the Rules (M002) — and after every run, debrief with the Performance (M003) to assess your impact.</p>',
    },
    {
        id: 'M002',
        title: 'Run: Rules',
        content:
            '<ol><li><strong>Roll for the Mission Type</strong><br />Start by rolling to determine what kind of mission you`re taking on.</li><li><strong>Track Your Performance</strong><br />Every mission begins with a <strong>Performance of 0</strong>.</li><li><strong>Complete All 6 Tasks</strong><br />Work through the tasks in chronological order. For each task:<ul><li>Choose one of the two available attributes.</li><li>Roll <strong>2d6 + chosen attribute</strong>.</li><li>A result of <strong>10 or more is a Success</strong> → +1 Performance</li><li>A result below 10 is a Failure → -1 Performance</li></ul></li><li><strong>Return to Mr. Johnson</strong><br />After completing the mission, consult the <strong>Performance</strong> (M003) to determine your final reward based on your score.</li></ol>',
    },
    {
        id: 'M003',
        title: 'Run: Performance',
        content:
            '<p>Mr. Johnson doesn’t just care that the job’s done—he cares how it’s done.</p>' +
            '<ul>' +
            '<li>-3/-4: <strong>Disastrous</strong> – Mission failed catastrophically. Severe fallout and consequences.<ul><li>+10,000 ¥, -1 Reputation</li></ul></li>' +
            '<li>-1/-2: <strong>Underwhelming</strong> – You scraped by, but not without burning bridges. The job’s done—barely.<ul><li>+15.000 ¥</li></ul></li>' +
            '<li>0: <strong>Mediocre</strong> – Mission completed, but with some compromises.<ul><li>+20.000 ¥</li></ul></li>' +
            '<li>+1/+2: <strong>Impressive</strong> – You handled the mission well — efficient and mostly clean. Johnson’s pleased.<ul><li>+25.000 ¥</li></ul></li>' +
            '<li>+3/+4: <strong>Exceptional</strong> – Mission flawlessly executed. No trace left behind.<ul><li>+30.000 ¥, +1 Reputation</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'M010',
        title: 'Run: Assassination',
        content:
            '<p><em>The Silent Execution</em></p>' +
            '<p>A deadly contract awaits you in the shadows of NeonHollow, where a high-profile target lies waiting for a swift and silent death. Navigate through the city’s security, avoid detection, and eliminate the mark before vanishing into the depths of the urban jungle.</p>' +
            '<p><strong>Six shadow-drenched tasks:</strong></p>' +
            '<ol>' +
            '<li><strong>Breach the Outer Perimeter</strong>' +
            '<ul>' +
            '<li><strong>Strength:</strong> Break through a sealed service entrance with brute force.' +
            '<ul><li><strong>Failure:</strong> +1 Heat</li></ul>' +
            '</li>' +
            '<li><strong>Agility:</strong> Climb over a razor-wired fence without making noise.' +
            '<ul><li><strong>Failure:</strong> -1 Health</li></ul>' +
            '</li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Disable the Guards</strong>' +
            '<ul>' +
            '<li><strong>Strength:</strong> Knock out a patrolling guard with a silent takedown.' +
            '<ul><li><strong>Failure:</strong> +1 Heat</li></ul>' +
            '</li>' +
            '<li><strong>Charisma:</strong> Distract the guard with fast talk or impersonation.' +
            '<ul><li><strong>Failure:</strong> -1 Reputation</li></ul>' +
            '</li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Infiltrate the Building</strong>' +
            '<ul>' +
            '<li><strong>Strength:</strong> Force open a jammed security door.' +
            '<ul><li><strong>Failure:</strong> +1 Heat</li></ul>' +
            '</li>' +
            '<li><strong>Logic:</strong> Hack the door panel and bypass the locking mechanism.' +
            '<ul><li><strong>Failure:</strong> -1 Energy</li></ul>' +
            '</li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Evade the Cameras</strong>' +
            '<ul>' +
            '<li><strong>Strength:</strong> Smash a wall-mounted camera quickly before it spots you.' +
            '<ul><li><strong>Failure:</strong> +1 Heat</li></ul>' +
            '</li>' +
            '<li><strong>Intuition:</strong> Detect the camera blind spots and sneak through unnoticed.' +
            '<ul><li><strong>Failure:</strong> -1 Energy</li></ul>' +
            '</li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Eliminate the Target</strong>' +
            '<ul>' +
            '<li><strong>Strength:</strong> Snap the target’s neck in close combat.' +
            '<ul><li><strong>Failure:</strong> +1 Heat</li></ul>' +
            '</li>' +
            '<li><strong>Agility:</strong> Sneak up and use a silent blade for a clean kill.' +
            '<ul><li><strong>Failure:</strong> -1 Health</li></ul>' +
            '</li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Escape the Scene</strong>' +
            '<ul>' +
            '<li><strong>Strength:</strong> Push a heavy obstacle to block pursuing enemies.' +
            '<ul><li><strong>Failure:</strong> -1 Health</li></ul>' +
            '</li>' +
            '<li><strong>Reaction:</strong> React quickly to dodge enemy fire and flee.' +
            '<ul><li><strong>Failure:</strong> +1 Heat</li></ul>' +
            '</li>' +
            '</ul>' +
            '</li>' +
            '</ol>',
    },
    {
        id: 'M020',
        title: 'Run: Sabotage',
        content:
            '<p><em>Sabotage Operation: The Silent Strike</em></p>' +
            '<p>A high-risk mission to sabotage a powerful corporation’s key facility. You need to infiltrate, plant explosives, and get out before the place goes up in flames. Timing and precision are crucial.</p>' +
            '<p><strong>Six dangerous tasks:</strong></p>' +
            '<ol>' +
            '<li><strong>Bypass the Security System</strong>' +
            '<ul>' +
            '<li><strong>Agility:</strong> Use quick reflexes to avoid detection as you sneak past the guards.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '<li><strong>Logic:</strong> Hack into the security system to disable cameras and alarms.<ul><li><strong>Failure:</strong> -1 Energy</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Infiltrate the Facility</strong>' +
            '<ul>' +
            '<li><strong>Agility:</strong> Use your nimbleness to climb through a ventilation shaft and avoid detection.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '<li><strong>Strength:</strong> Break open a locked door with brute force to gain access.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Plant the Explosives</strong>' +
            '<ul>' +
            '<li><strong>Agility:</strong> Place the explosives carefully to avoid triggering alarms or traps.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '<li><strong>Logic:</strong> Plan the optimal placement of explosives for maximum damage.<ul><li><strong>Failure:</strong> -1 Energy</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Escape the Facility</strong>' +
            '<ul>' +
            '<li><strong>Agility:</strong> Use your agility to evade the oncoming security guards and cameras.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '<li><strong>Strength:</strong> Force your way through a locked gate or heavy door to make your escape.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Get to the Extraction Point</strong>' +
            '<ul>' +
            '<li><strong>Agility:</strong> Sprint to the extraction point while dodging incoming fire from guards.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '<li><strong>Reaction:</strong> Quickly react to enemy movements and avoid getting pinned down.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Exfiltrate the Area</strong>' +
            '<ul>' +
            '<li><strong>Strength:</strong> Push a heavy object in the way to block pursuit by enemies.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '<li><strong>Reaction:</strong> React swiftly to avoid enemy fire while getting to safety.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '</ol>',
    },
    {
        id: 'M030',
        title: 'Run: Smuggling',
        content:
            '<p><em>Undercover Cargo Delivery</em></p>' +
            '<p>A high-stakes smuggling run into the heart of Neonhollow. You must get the cargo past checkpoints, avoid detection, and deliver it to your buyer. Every second counts as you navigate the lawless streets.</p>' +
            '<p><strong>Six perilous tasks:</strong></p>' +
            '<ol>' +
            '<li><strong>Get Past the Checkpoint</strong>' +
            '<ul>' +
            '<li><strong>Reaction:</strong> React quickly to avoid suspicion as you drive through the checkpoint.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '<li><strong>Intuition:</strong> Read the guard’s body language and predict their next move to stay out of sight.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Hide the Cargo</strong>' +
            '<ul>' +
            '<li><strong>Reaction:</strong> Quickly find a hidden compartment in your vehicle to stash the contraband.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '<li><strong>Strength:</strong> Use brute force to secure the cargo in place and prevent any accidental reveals.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Distract the Authorities</strong>' +
            '<ul>' +
            '<li><strong>Reaction:</strong> Quickly think of a way to distract the guards during a random inspection.<ul><li><strong>Failure:</strong> -1 Reputation</li></ul></li>' +
            '<li><strong>Charisma:</strong> Sweet-talk your way past the authorities with a convincing story.<ul><li><strong>Failure:</strong> -1 Reputation</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Navigate the Back Alleys</strong>' +
            '<ul>' +
            '<li><strong>Reaction:</strong> React fast to avoid a sudden blockade or roadblock in the alley.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '<li><strong>Agility:</strong> Take sharp turns and dodge obstacles to avoid slowing down.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Deliver the Cargo</strong>' +
            '<ul>' +
            '<li><strong>Reaction:</strong> React quickly when the buyer arrives early, preventing any mistakes.<ul><li><strong>Failure:</strong> -1 Energy</li></ul></li>' +
            '<li><strong>Logic:</strong> Ensure the exchange goes smoothly by confirming the buyer’s information and terms.<ul><li><strong>Failure:</strong> -1 Energy</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Escape the Ambush</strong>' +
            '<ul>' +
            '<li><strong>Reaction:</strong> Swiftly dodge gunfire and find an escape route when the ambush hits.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '<li><strong>Strength:</strong> Fight your way out if there’s no escape route available.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '</ol>',
    },
    {
        id: 'M040',
        title: 'Run: Infiltration',
        content:
            '<p><em>Infiltration Mission: Silent Insertion</em></p>' +
            '<p>Your objective is to infiltrate a high-security facility, extract sensitive data, and exit without being detected. Each decision must be precise, as any mistake could lead to immediate consequences.</p>' +
            '<p><strong>Six crucial tasks:</strong></p>' +
            '<ol>' +
            '<li><strong>Hack the Security Network</strong>' +
            '<ul>' +
            '<li><strong>Logic:</strong> Bypass the security system to gain access to the building’s digital network.<ul><li><strong>Failure:</strong> -1 Energy</li></ul></li>' +
            '<li><strong>Strength:</strong> Force open a locked access panel to override the system manually.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Navigate the Building</strong>' +
            '<ul>' +
            '<li><strong>Logic:</strong> Calculate the safest route through the building based on security patterns.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '<li><strong>Agility:</strong> Use your dexterity to climb or squeeze through tight spaces to avoid detection.<ul><li><strong>Failure:</strong> -1 Energy</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Locate the Target Data</strong>' +
            '<ul>' +
            '<li><strong>Logic:</strong> Use your knowledge to locate the data storage area in the building.<ul><li><strong>Failure:</strong> -1 Energy</li></ul></li>' +
            '<li><strong>Strength:</strong> Break into a storage room using brute force when a keycard fails.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Disable the Security Systems</strong>' +
            '<ul>' +
            '<li><strong>Logic:</strong> Disable security cameras and sensors through hacking.<ul><li><strong>Failure:</strong> -1 Energy</li></ul></li>' +
            '<li><strong>Agility:</strong> Disarm traps and other security measures with precise movements.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Extract the Data</strong>' +
            '<ul>' +
            '<li><strong>Logic:</strong> Use a device to extract data from the secure server.<ul><li><strong>Failure:</strong> -1 Energy</li></ul></li>' +
            '<li><strong>Strength:</strong> Force your way through a locked server room if the access is blocked.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Escape the Facility</strong>' +
            '<ul>' +
            '<li><strong>Logic:</strong> Plan your escape route to avoid security patrols and alarms.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '<li><strong>Reaction:</strong> React quickly to evade security guards while making your escape.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '</ol>',
    },
    {
        id: 'M050',
        title: 'Run: Extraction',
        content:
            '<p><em>Extraction Mission: Ghost Protocol</em></p>' +
            '<p>Your job is to locate and safely extract a high-value individual from a hostile zone. Every step requires sharp instincts and quick decisions. One wrong move could doom the entire run.</p>' +
            '<p><strong>Six tense tasks:</strong></p>' +
            '<ol>' +
            '<li><strong>Pinpoint the Target</strong>' +
            '<ul>' +
            '<li><strong>Intuition:</strong> Sense patterns in guard patrols and civilian flow to locate the target.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '<li><strong>Logic:</strong> Analyze surveillance data to deduce the most likely location.<ul><li><strong>Failure:</strong> -1 Energy</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Avoid Hostile Surveillance</strong>' +
            '<ul>' +
            '<li><strong>Intuition:</strong> Detect security drones before they spot you.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '<li><strong>Agility:</strong> Use quick movements to evade their scanning range.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Contact the Target</strong>' +
            '<ul>' +
            '<li><strong>Intuition:</strong> Choose the right moment to approach without drawing attention.<ul><li><strong>Failure:</strong> -1 Reputation</li></ul></li>' +
            '<li><strong>Charisma:</strong> Calm the target and gain their trust swiftly.<ul><li><strong>Failure:</strong> -1 Intel</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Neutralize the Threat</strong>' +
            '<ul>' +
            '<li><strong>Intuition:</strong> Predict enemy ambush positions before they spring the trap.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '<li><strong>Strength:</strong> Take down a pursuing enemy in hand-to-hand combat.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Reach the Extraction Point</strong>' +
            '<ul>' +
            '<li><strong>Intuition:</strong> Sense which alleyways or passages are safest.<ul><li><strong>Failure:</strong> -1 Energy</li></ul></li>' +
            '<li><strong>Reaction:</strong> React fast to sudden obstacles or shifting threats.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Evacuate Under Fire</strong>' +
            '<ul>' +
            '<li><strong>Intuition:</strong> Guide the target out under stress, avoiding danger instinctively.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '<li><strong>Agility:</strong> Move quickly and dodge gunfire or collapsing debris.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '</ol>',
    },
    {
        id: 'M060',
        title: 'Run: Negotiation',
        content:
            '<p><em>Negotiation Mission: Terms of Influence</em></p>' +
            '<p>You`re entering hostile boardrooms, smoky backrooms, and digital black markets to negotiate fragile alliances, buy information, or defuse conflicts. This run is about words, wit, and wielding presence like a weapon.</p>' +
            '<p><strong>Six tense tasks:</strong></p>' +
            '<ol>' +
            '<li><strong>Arrange the Meeting</strong>' +
            '<ul>' +
            '<li><strong>Charisma:</strong> Convince the fixer to schedule a high-priority audience.<ul><li><strong>Failure:</strong> -1 Reputation</li></ul></li>' +
            '<li><strong>Intuition:</strong> Read the fixer’s mood and offer just the right incentive.<ul><li><strong>Failure:</strong> -1 Credits</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Pass the Security Check</strong>' +
            '<ul>' +
            '<li><strong>Charisma:</strong> Charm the gatekeeper into bypassing protocol.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '<li><strong>Reaction:</strong> Stay cool and act natural as they scan for threats.<ul><li><strong>Failure:</strong> -1 Intel</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Open the Deal</strong>' +
            '<ul>' +
            '<li><strong>Charisma:</strong> Present your case with confidence and persuasive flair.<ul><li><strong>Failure:</strong> -1 Credits</li></ul></li>' +
            '<li><strong>Logic:</strong> Back your arguments with airtight data and planning.<ul><li><strong>Failure:</strong> -1 Reputation</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Handle Pushback</strong>' +
            '<ul>' +
            '<li><strong>Charisma:</strong> De-escalate rising tension without looking weak.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '<li><strong>Strength:</strong> Intimidate with body language and sheer presence.<ul><li><strong>Failure:</strong> -1 Health</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Seal the Agreement</strong>' +
            '<ul>' +
            '<li><strong>Charisma:</strong> Close the deal with conviction and style.<ul><li><strong>Failure:</strong> -1 Intel</li></ul></li>' +
            '<li><strong>Agility:</strong> Catch a last-minute change or clause before it slips by.<ul><li><strong>Failure:</strong> +1 Heat</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '<li><strong>Exit Gracefully</strong>' +
            '<ul>' +
            '<li><strong>Charisma:</strong> Leave a lasting impression that boosts your rep.<ul><li><strong>Failure:</strong> -1 Reputation</li></ul></li>' +
            '<li><strong>Logic:</strong> Plant a subtle message or bug as you leave.<ul><li><strong>Failure:</strong> -1 Energy</li></ul></li>' +
            '</ul>' +
            '</li>' +
            '</ol>',
    },
]
