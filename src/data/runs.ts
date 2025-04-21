export const Runs = [
    {
        id: 'M001',
        title: 'Mr. Johnson',
        content:
            '<p class="flex items-center justify-center"><img src="/images/MrJohnson.jpg" alt="MrJohnson" /></p>' +
            '<p><em>"The smile’s fake. The creds are real."</em></p>' +
            '<p>To take on a mission from Mr. Johnson, you’ll need to spend <strong>2 Reputation</strong>.</p>' +
            '<p>Roll 1d6 to determine your type of run:</p>' +
            '<ol><li>Assassination (M010)</li><li>Sabotage (M020)</li><li>Smuggling (M030)</li><li>Infiltration (M040)</li><li>Extraction (M050)</li><li>Negotiation (M060)</li></ol>' +
            '<p>To master the shadows, study the Rules (M002) — and after every run, debrief with the Performance (M003) to assess your impact.</p>',
    },
    {
        id: 'M002',
        title: 'Run: Rules',
        content:
            '<ol><li><strong>Roll for the Mission Type</strong><br />Start by rolling to determine what kind of mission you`re taking on.</li><li><strong>Track Your Performance</strong><br />Every mission begins with a <strong>Performance of 0</strong>.</li><li><strong>Complete All 6 Tasks</strong><br />Work through the tasks in chronological order. For each task:<ul><li>Choose one of the two available options</li><li>Roll a number of dice equal to your attribute value</li><li>Score a success with every 5 or 6 you roll</li><li>Rolling a 0 counts as a failure — your performance score decreases by 1.</li><li> Any result of 1 or more is a success and increases your performance score by 1.</li></ul></li><li><strong>Return to Mr. Johnson</strong><br />After completing the mission, consult the <strong>Performance</strong> (M003) to determine your final reward based on your score.</li></ol>',
    },
    {
        id: 'M003',
        title: 'Run: Performance',
        content:
            '<p>Mr. Johnson doesn’t just care that the job’s done — he cares how it’s done.</p>' +
            '<ul>' +
            '<li>-3/-4: <strong>Disastrous</strong> – Mission failed catastrophically. Severe fallout and consequences.<ul><li>-1 Reputation</li></ul></li>' +
            '<li>-1/-2: <strong>Underwhelming</strong> – You scraped by, but not without burning bridges. The job’s done—barely.<ul><li>+2.000 ¥</li></ul></li>' +
            '<li>0: <strong>Mediocre</strong> – Mission completed, but with some compromises.<ul><li>+4.000 ¥</li></ul></li>' +
            '<li>+1/+2: <strong>Impressive</strong> – You handled the mission well — efficient and mostly clean. Johnson’s pleased.<ul><li>+6.000 ¥, +1 Reputation</li></ul></li>' +
            '<li>+3/+4: <strong>Exceptional</strong> – Mission flawlessly executed. No trace left behind.<ul><li>+8.000 ¥, +1 Reputation, +1 Intel</li></ul></li>' +
            '</ul>',
    },
    {
        id: 'M010',
        title: 'Run: Assassination',
        content: `<ol>
        <li><strong>Breach the Outer Perimeter</strong>
            <ul>
                <li><strong>Strength (3)</strong> – Smash through a sealed service door.
                    <ul>
                        <li>+1 Heat</li>
                    </ul>
                </li>
                <li><strong>Intuition (2)</strong> – Observe and exploit patrol blind spots.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Disable the Guards</strong>
            <ul>
                <li><strong>Strength (3)</strong> – Knock out a patrolling guard with a silent takedown.
                    <ul>
                        <li>-1 Reputation</li>
                    </ul>
                </li>
                <li><strong>Agility (2)</strong> – Sneak past the guard unnoticed.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Infiltrate the Building</strong>
            <ul>
                <li><strong>Strength (3)</strong> – Force open a jammed security door.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Intuition (2)</strong> – Detect weak points in security systems to slip through.
                    <ul>
                        <li>-1 Intel</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Evade the Cameras</strong>
            <ul>
                <li><strong>Strength (3)</strong> – Smash a wall-mounted camera quickly before it spots you.
                    <ul>
                        <li>+1 Heat</li>
                    </ul>
                </li>
                <li><strong>Intuition (2)</strong> – Detect the camera blind spots and sneak through unnoticed.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Eliminate the Target</strong>
            <ul>
                <li><strong>Strength (3)</strong> – Snap the target’s neck in close combat.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
                <li><strong>Agility (2)</strong> – Sneak up and use a silent blade for a clean kill.
                    <ul>
                        <li>-1 Reputation</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Escape the Scene</strong>
            <ul>
                <li><strong>Strength (3)</strong> – Push a heavy obstacle to block pursuing enemies.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
                <li><strong>Agility (2)</strong> – Sprint and dodge to make a clean getaway.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>`,
    },
    {
        id: 'M020',
        title: 'Run: Sabotage',
        content: `<ol>
        <li><strong>Bypass the Security System</strong>
            <ul>
                <li><strong>Agility (3):</strong> Use quick reflexes to avoid detection as you sneak past the guards.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
                <li><strong>Logic (2):</strong> Hack into the security system to disable cameras and alarms.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Infiltrate the Facility</strong>
            <ul>
                <li><strong>Agility (3):</strong> Use your nimbleness to climb through a ventilation shaft and avoid detection.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
                <li><strong>Strength (2):</strong> Break open a locked door with brute force to gain access.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Plant the Explosives</strong>
            <ul>
                <li><strong>Agility (3):</strong> Place the explosives carefully to avoid triggering alarms or traps.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
                <li><strong>Logic (2):</strong> Plan the optimal placement of explosives for maximum damage.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Escape the Facility</strong>
            <ul>
                <li><strong>Agility (3):</strong> Use your agility to evade the oncoming security guards and cameras.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
                <li><strong>Strength (2):</strong> Force your way through a locked gate or heavy door to make your escape.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Get to the Extraction Point</strong>
            <ul>
                <li><strong>Agility (3):</strong> Sprint to the extraction point while dodging incoming fire from guards.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
                <li><strong>Reaction (2):</strong> Quickly react to enemy movements and avoid getting pinned down.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Exfiltrate the Area</strong>
            <ul>
                <li><strong>Agility (3):</strong> Dodge incoming fire and obstacles on your way out.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
                <li><strong>Reaction (2):</strong> React swiftly to avoid enemy fire while getting to safety.
                    <ul>
                        <li>+1 Heat</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>`,
    },
    {
        id: 'M030',
        title: 'Run: Smuggling',
        content: `<ol>
        <li><strong>Get Past the Checkpoint</strong>
            <ul>
                <li><strong>Reaction (3):</strong> Quickly react to dodge or deflect the guards' attention.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
                <li><strong>Agility (2):</strong> Use quick reflexes to slip past the guards unnoticed.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Hide the Cargo</strong>
            <ul>
                <li><strong>Reaction (3):</strong> React quickly to hide the cargo before anyone sees.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Agility (2):</strong> Quickly hide the cargo in a concealed location.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Distract the Authorities</strong>
            <ul>
                <li><strong>Reaction (3):</strong> React quickly to create a distraction and divert attention.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Charisma (2):</strong> Engage in a heated conversation to divert attention from the cargo.
                    <ul>
                        <li>-1 Reputation</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Navigate the Back Alleys</strong>
            <ul>
                <li><strong>Reaction (3):</strong> React swiftly to avoid obstacles and sudden traps in the alley.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Agility (2):</strong> Use your nimbleness to quickly navigate narrow and dangerous alleys.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Deliver the Cargo</strong>
            <ul>
                <li><strong>Reaction (3):</strong> Quickly adjust and react to avoid detection on the delivery route.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Agility (2):</strong> Sprint to the drop-off point while avoiding detection.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Escape the Ambush</strong>
            <ul>
                <li><strong>Reaction (3):</strong> React swiftly to evade enemy fire and escape the ambush.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Agility (2):</strong> Use your speed to evade enemy fire and escape the ambush.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>`,
    },
    {
        id: 'M040',
        title: 'Run: Infiltration',
        content: `<ol>
        <li><strong>Hack the Security Network</strong>
            <ul>
                <li><strong>Logic (3):</strong> Use your hacking skills to break into the security network undetected.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Agility (2):</strong> Quickly input commands while avoiding detection by the system's countermeasures.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Navigate the Building</strong>
            <ul>
                <li><strong>Logic (3):</strong> Plan and navigate a path through the building to avoid guards and cameras.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Agility (2):</strong> Move stealthily through the building, using agility to avoid detection.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Locate the Target Data</strong>
            <ul>
                <li><strong>Logic (3):</strong> Use your knowledge and system skills to pinpoint the exact location of the target data.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Intuition (2):</strong> Trust your instincts to find the right area where the data is stored.
                    <ul>
                        <li>-1 Intel</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Disable the Security Systems</strong>
            <ul>
                <li><strong>Logic (3):</strong> Use your technical expertise to disable the security systems.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Agility (2):</strong> Sneak through security systems, avoiding motion detectors and cameras.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Extract the Data</strong>
            <ul>
                <li><strong>Logic (3):</strong> Use your hacking skills to extract the data without triggering alarms.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Agility (2):</strong> Move swiftly to the data extraction point without drawing attention.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Escape the Facility</strong>
            <ul>
                <li><strong>Logic (3):</strong> Strategically plan your exit to avoid detection by the security team.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Agility (2):</strong> Use your agility to slip past guards and reach the exit undetected.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>`,
    },
    {
        id: 'M050',
        title: 'Run: Extraction',
        content: `<ol>
        <li><strong>Pinpoint the Target</strong>
            <ul>
                <li><strong>Intuition (3)</strong> – Use keen observation to locate the target’s exact position.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Logic (2)</strong> – Analyze the area and triangulate the target's location using data.
                    <ul>
                        <li>-1 Intel</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Avoid Hostile Surveillance</strong>
            <ul>
                <li><strong>Intuition (3)</strong> – Spot blind spots in the surveillance system and avoid detection.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Strength (2)</strong> – Overpower a surveillance guard to disable their equipment quietly.
                    <ul>
                        <li>+1 Heat</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Contact the Target</strong>
            <ul>
                <li><strong>Intuition (3)</strong> – Read the target’s body language to approach them safely.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Charisma (2)</strong> – Convince the target to trust you and agree to the extraction plan.
                    <ul>
                        <li>-1 Reputation</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Neutralize the Threat</strong>
            <ul>
                <li><strong>Intuition (3)</strong> – Identify the most immediate threats and neutralize them efficiently.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Strength (2)</strong> – Disarm and subdue a hostile opponent in close combat.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Reach the Extraction Point</strong>
            <ul>
                <li><strong>Intuition (3)</strong> – Quickly assess the safest route to the extraction point.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Reaction (2)</strong> – React swiftly to sudden dangers on your way to the extraction point.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Evacuate Under Fire</strong>
            <ul>
                <li><strong>Intuition (3)</strong> – Recognize the safest escape route under heavy fire.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
                <li><strong>Strength (2)</strong> – Carry a wounded target or heavy equipment while under fire.
                    <ul>
                        <li>-1 Health</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>`,
    },
    {
        id: 'M060',
        title: 'Run: Negotiation',
        content: `<ol>
        <li><strong>Arrange the Meeting</strong>
            <ul>
                <li><strong>Charisma (3)</strong> – Convince the right person to set up the meeting for the negotiation.
                    <ul>
                        <li>-1 Reputation</li>
                    </ul>
                </li>
                <li><strong>Intuition (2)</strong> – Sense the best approach to arranging the meeting based on the available information.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Pass the Security Check</strong>
            <ul>
                <li><strong>Charisma (3)</strong> – Charm the security staff into letting you through without raising suspicion.
                    <ul>
                        <li>-1 Reputation</li>
                    </ul>
                </li>
                <li><strong>Logic (2)</strong> – Provide sound reasoning for your need to pass the security check.
                    <ul>
                        <li>-1 Intel</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Open the Deal</strong>
            <ul>
                <li><strong>Charisma (3)</strong> – Begin the conversation with a persuasive opening that sets the tone.
                    <ul>
                        <li>-1 Reputation</li>
                    </ul>
                </li>
                <li><strong>Intuition (2)</strong> – Gauge the mood and expectations of the other party to tailor your approach.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Handle Pushback</strong>
            <ul>
                <li><strong>Charisma (3)</strong> – Calmly counter objections and push back to keep the deal on track.
                    <ul>
                        <li>-1 Reputation</li>
                    </ul>
                </li>
                <li><strong>Intuition (2)</strong> – Read the room to anticipate the pushback and counter it effectively.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Seal the Agreement</strong>
            <ul>
                <li><strong>Charisma (3)</strong> – Close the deal with a strong, confident final statement.
                    <ul>
                        <li>-1 Reputation</li>
                    </ul>
                </li>
                <li><strong>Logic (2)</strong> – Ensure all terms are clear and acceptable before finalizing the deal.
                    <ul>
                        <li>-1 Intel</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><strong>Exit Gracefully</strong>
            <ul>
                <li><strong>Charisma (3)</strong> – Leave the meeting with a positive impression, maintaining future opportunities.
                    <ul>
                        <li>-1 Reputation</li>
                    </ul>
                </li>
                <li><strong>Intuition (2)</strong> – Observe any lingering doubts or potential problems during your exit.
                    <ul>
                        <li>-1 Energy</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>`,
    },
]
