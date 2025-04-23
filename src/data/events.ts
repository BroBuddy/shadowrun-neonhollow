export const Events = [
    {
        id: 'R401',
        title: 'Event Matrix',
        content: `<table>
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
                    <td>R411</td>
                    <td>R412</td>
                    <td>R413</td>
                    <td>R414</td>
                    <td>R415</td>
                    <td>R416</td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>R421</td>
                    <td>R422</td>
                    <td>R423</td>
                    <td>R424</td>
                    <td>R425</td>
                    <td>R426</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>R431</td>
                    <td>R432</td>
                    <td>R433</td>
                    <td>R434</td>
                    <td>R435</td>
                    <td>R436</td>
                </tr>
                <tr>
                    <th>4</th>
                    <td>R441</td>
                    <td>R442</td>
                    <td>R443</td>
                    <td>R444</td>
                    <td>R445</td>
                    <td>R446</td>
                </tr>
                <tr>
                    <th>5</th>
                    <td>R451</td>
                    <td>R452</td>
                    <td>R453</td>
                    <td>R454</td>
                    <td>R455</td>
                    <td>R456</td>
                </tr>
                <tr>
                    <th>6</th>
                    <td>R461</td>
                    <td>R462</td>
                    <td>R463</td>
                    <td>R464</td>
                    <td>R465</td>
                    <td>R466</td>
                </tr>
            </tbody>
        </table>
        <hr />
        <p><strong>To roll on the Event Matrix:</strong></p>
        <ol>
            <li><strong>Roll 2d6</strong> – one die will be for the tens digit and the other for the ones digit.</li>
            <li>Combine the two rolls to form a two-digit number.</li>
            <li><strong>Find the ID</strong> – Use the number rolled to locate the ID on the matrix.</li>
            <li>Choose how to handle the event, then roll the number of <strong>1d6</strong> corresponding to the value of your chosen attribute.</li>
            <li>To achieve success, you always need at least <strong>2 Successes</strong>.</li>
        </ol>`,
    },
    {
        id: 'R411',
        title: 'Power Surge',
        content: `<p>In the blink of an eye, lights across the district flicker out. Emergency backups hum weakly, but critical systems are down. Doors won’t open, elevators stall, and neon signs die, leaving the streets eerily dark. People panic while others see opportunity in the shadows.</p>
        <ul>
            <li><strong>Logic:</strong> Diagnose grid failures and reroute energy manually.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
            <li><strong>Reaction:</strong> Navigate the chaos and avoid hazards in the dark.
                <ul>
                    <li><strong>Success:</strong> +1 Energy</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R412',
        title: 'Gang Skirmish',
        content: `<p>The distant sound of gunfire quickly becomes a brutal street clash as rival gangs bring their turf war into the open. Civilians run for cover as drones scan for threats and trigger-happy thugs shoot first, ask never. You’re in the middle—like it or not.</p>
        <ul>
            <li><strong>Strength:</strong> Push through the brawl and shield others from crossfire.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
            <li><strong>Agility:</strong> Dodge debris and gunfire while escaping the scene.
                <ul>
                    <li><strong>Success:</strong> +1 Energy</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R413',
        title: 'System Audit',
        content: `<p>Unmarked corp vans roll in with men in suits and mirrored shades. It’s a spontaneous citywide audit—identity checks, data sweeps, and silence. Those with clean records walk. The rest... vanish. It’s a bad time to look suspicious.</p>
        <ul>
            <li><strong>Charisma:</strong> Convince officials you’re just a harmless citizen.
                <ul>
                    <li><strong>Success:</strong> -1 Heat</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
            <li><strong>Logic:</strong> Forge clean credentials on the fly.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R414',
        title: 'HoloMalfunction',
        content: `<p>Suddenly, reality bends. Public holograms glitch, flicker, and merge with corrupted ads and rogue sensory loops. People stumble, stunned by the overload. Some go into panic, others collapse. The city turns into a dizzying circus of synthetic hallucinations.</p>
        <ul>
            <li><strong>Intuition:</strong> Identify a safe route through the visual chaos.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
            <li><strong>Reaction:</strong> React quickly to avoid running into danger.
                <ul>
                    <li><strong>Success:</strong> +1 Agility Temporary</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R415',
        title: 'Riot Response',
        content: `<p>What started as a peaceful protest explodes into full-scale unrest. Flames flicker in the distance. Armed patrols clash with rioters. Barricades rise. Drones buzz overhead. You're either part of the cleanup—or collateral.</p>
        <ul>
            <li><strong>Agility:</strong> Slip through the crowds unnoticed and unharmed.
                <ul>
                    <li><strong>Success:</strong> -1 Heat</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
            <li><strong>Strength:</strong> Hold the line or break through violent crowds.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R416',
        title: 'Data Leak',
        content: `<p>Confidential data floods the net—blacklists, corp secrets, even underground aliases. Everyone wants a piece of it. Fixers, runners, and enforcers scramble to secure or erase traces before they’re burned by the fallout.</p>
        <ul>
            <li><strong>Intuition:</strong> Locate the source and capture valuable files.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
            <li><strong>Charisma:</strong> Sell false leads to rival fixers.
                <ul>
                    <li><strong>Success:</strong> +1.000 ¥</li>
                    <li><strong>Fail:</strong> -1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R421',
        title: 'Drone Interference',
        content: `<p>Surveillance drones are behaving erratically, hovering too low, scanning innocents, and occasionally crashing. The glitch might be random—or a test. Citizens are unnerved, and runners are being flagged as high-priority threats.</p>
        <ul>
            <li><strong>Reaction:</strong> Evade malfunctioning drones before you're tagged.
                <ul>
                    <li><strong>Success:</strong> -1 Heat</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
            <li><strong>Logic:</strong> Override a drone’s routine and redirect it.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R422',
        title: 'Toxic Leak',
        content: `<p>Alarms blare in the Industrial District. A transport truck jackknifed near a biochem depot, leaking fluorescent vapor. The air burns to breathe, and cleanup crews are late. Residents flee while looters dive in for rare salvage.</p>
        <ul>
            <li><strong>Strength:</strong> Help seal the rupture using brute force and gear.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -2 Health</li>
                </ul>
            </li>
            <li><strong>Intuition:</strong> Find a clean exit before the toxin spreads.
                <ul>
                    <li><strong>Success:</strong> +1 Energy</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R423',
        title: 'Black Market Raid',
        content: `<p>Word spreads fast: authorities are raiding underground trade hubs. Smugglers ditch crates in alleys, buyers scatter. Some see it as a chance to snatch unclaimed tech—others know it’s a trap with teeth.</p>
        <ul>
            <li><strong>Agility:</strong> Dash in, grab goods, and escape before backup arrives.
                <ul>
                    <li><strong>Success:</strong> +1.000 ¥</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
            <li><strong>Charisma:</strong> Convince raiders you’re part of the cleanup crew.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R424',
        title: 'Neural Broadcast Glitch',
        content: `<p>All over town, neural implants start buzzing with strange pulses—random memories, thoughts, or encrypted fragments. It leaves people dizzy or worse. Someone’s testing a signal... or sending a message.</p>
        <ul>
            <li><strong>Logic:</strong> Decode the pulse and stabilize your implant.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
            <li><strong>Intuition:</strong> Resist the mental assault and clear your head.
                <ul>
                    <li><strong>Success:</strong> +1 Health</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R425',
        title: 'Rogue Courier',
        content: `<p>A courier bot meant for secure corp deliveries has gone rogue, jetting through alleys and rooftop routes. Rumor says it’s carrying data chips worth a fortune—or an AI with secrets someone didn’t want released.</p>
        <ul>
            <li><strong>Reaction:</strong> Track and intercept the bot mid-run.
                <ul>
                    <li><strong>Success:</strong> +1.000 ¥</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
            <li><strong>Intuition:</strong> Predict the courier’s next location.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R426',
        title: 'Street Prophet',
        content: `<p>A cloaked figure preaches doom at every intersection, warning of firewalls collapsing and AIs waking up. Most ignore him—until his predictions start coming true. Traffic crashes, drones dive, and digital ads flicker to static eyes.</p>
        <ul>
            <li><strong>Charisma:</strong> Calm the crowd and rally them away from chaos.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -1 Reputation</li>
                </ul>
            </li>
            <li><strong>Intuition:</strong> Piece together what the prophet truly knows.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R431',
        title: 'Night Howlers',
        content: `<p>As dusk falls, an unknown gang launches a blitz through the Underground District. Cyber-hacked beasts and augmented enforcers clash with patrols. Chaos spreads fast—and you're caught in the middle.</p>
        <ul>
            <li><strong>Strength:</strong> Fight off an aggressive ganger blocking your escape.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -2 Health</li>
                </ul>
            </li>
            <li><strong>Agility:</strong> Slip between crossfire and vanish into the shadows.
                <ul>
                    <li><strong>Success:</strong> -1 Heat</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R432',
        title: 'Encrypted Broadcast',
        content: `<p>A rogue signal overrides public screens, displaying cryptic messages and flickering blueprints. Corps rush to shut it down, but it’s spreading like wildfire through backchannels.</p>
        <ul>
            <li><strong>Logic:</strong> Decode the stream before it gets scrubbed.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
            <li><strong>Intuition:</strong> Follow the hidden markers to the source.
                <ul>
                    <li><strong>Success:</strong> +1.000 ¥</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R433',
        title: 'Corporate Parade',
        content: `<p>A major corp rolls through downtown with a flashy security showcase—drones, armored convoys, and neon-clad execs. It’s all PR, but the street is a minefield of surveillance.</p>
        <ul>
            <li><strong>Charisma:</strong> Blend in with the crowd and fake a corp ID.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
            <li><strong>Reaction:</strong> Duck through blind spots before the scanners catch you.
                <ul>
                    <li><strong>Success:</strong> +1 Energy</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R434',
        title: 'Neon Storm',
        content: `<p>A rare energy storm warps electronics citywide. Neon signs flicker violently, streetlights burst, and vehicles stall. The unstable surge makes neural links flare dangerously.</p>
        <ul>
            <li><strong>Logic:</strong> Ground your system and save your gear from frying.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
            <li><strong>Strength:</strong> Drag civilians out of a crashed tram's danger zone.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R435',
        title: 'Lost Shipment',
        content: `<p>A container marked with a restricted corp seal washed up in the city’s canal. It's half-submerged, blinking, and unguarded—for now. The question is: grab it or walk away?</p>
        <ul>
            <li><strong>Reaction:</strong> Quickly recover the container before corp drones arrive.
                <ul>
                    <li><strong>Success:</strong> +1.000 ¥</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
            <li><strong>Intuition:</strong> Scan for traps and avoid potential setup.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R436',
        title: 'Echo in the Wires',
        content: `<p>Old net architecture beneath the city pulses online for the first time in years. Ghost code floods public terminals, and runners whisper of an AI waking from dormancy.</p>
        <ul>
            <li><strong>Logic:</strong> Interface with the terminal and pull data before it fades.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
            <li><strong>Charisma:</strong> Convince a rival crew to share their decrypted fragment.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Reputation</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R441',
        title: 'Synthetic Plague',
        content: `<p>A mutated bio-virus has slipped containment in a nearby lab. Streets are locked down, and drones scan for signs of infection. Runners are being blamed for the breach.</p>
        <ul>
            <li><strong>Logic:</strong> Reprogram a med-drone to scan and clear you.
                <ul>
                    <li><strong>Success:</strong> -1 Heat</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
            <li><strong>Agility:</strong> Escape quarantine patrols before they close in.
                <ul>
                    <li><strong>Success:</strong> +1 Energy</li>
                    <li><strong>Fail:</strong> -2 Health</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R442',
        title: 'False Broadcast',
        content: `<p>Someone hijacks a local media node, broadcasting a deepfake of you committing a high-profile crime. Your reputation takes a hit—unless you fix it fast.</p>
        <ul>
            <li><strong>Charisma:</strong> Convince a trusted informant to discredit the footage.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -1 Reputation</li>
                </ul>
            </li>
            <li><strong>Intuition:</strong> Track the origin of the false feed.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R443',
        title: 'Burning Skies',
        content: `<p>A corp zeppelin crashes into a tenement block in the Industrial District. Fires spread, alarms wail, and panic floods the street. You’re nearby—and you might be able to help.</p>
        <ul>
            <li><strong>Strength:</strong> Pull survivors from debris before the fire spreads.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
            <li><strong>Reaction:</strong> Dodge falling wreckage and reach the scene first.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R444',
        title: 'Midnight Deal',
        content: `<p>You overhear a fixer negotiating a risky black-market exchange in a back alley. You could step in, assist—or walk away before things get ugly.</p>
        <ul>
            <li><strong>Charisma:</strong> Mediate the deal and win both sides' trust.
                <ul>
                    <li><strong>Success:</strong> +1.000 ¥</li>
                    <li><strong>Fail:</strong> -1 Reputation</li>
                </ul>
            </li>
            <li><strong>Intuition:</strong> Notice the hidden ambush and slip out early.
                <ul>
                    <li><strong>Success:</strong> -1 Heat</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R445',
        title: 'Neural Glitch',
        content: `<p>A new firmware patch pushes to the entire district. Those with implants experience spasms, hallucinations, and memory gaps. If you’re wired, you feel it instantly.</p>
        <ul>
            <li><strong>Logic:</strong> Patch the code manually before your implants fry.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
            <li><strong>Strength:</strong> Hold steady and ride out the seizures.
                <ul>
                    <li><strong>Success:</strong> +1 Health</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R446',
        title: 'Encrypted Cache',
        content: `<p>A runner posts a cryptic location drop for an abandoned corp cache. Dozens begin the hunt, but the system guarding it is old—and dangerous.</p>
        <ul>
            <li><strong>Logic:</strong> Crack the encryption before rival runners catch on.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
            <li><strong>Reaction:</strong> Outrun competitors and reach the cache first.
                <ul>
                    <li><strong>Success:</strong> +1.000 ¥</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R451',
        title: 'Corporate Espionage',
        content: `<p>A rival corporation's espionage team attempts to steal sensitive data from the district. The chaos is unfolding around you. You have to decide how to get involved.</p>
        <ul>
            <li><strong>Charisma:</strong> Convince a bystander to leak crucial information.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Reputation</li>
                </ul>
            </li>
            <li><strong>Intuition:</strong> Track the espionage team's movements and sabotage their plan.
                <ul>
                    <li><strong>Success:</strong> -1 Heat</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R452',
        title: 'Hacker Riot',
        content: `<p>A local hacker group starts a riot, disrupting city-wide comms and electronics. The streets are chaotic as they demand greater freedom from corporate control.</p>
        <ul>
            <li><strong>Agility:</strong> Navigate the riot safely and avoid danger.
                <ul>
                    <li><strong>Success:</strong> +1 Energy</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
            <li><strong>Logic:</strong> Hack into the group's system and disable their riot control equipment.
                <ul>
                    <li><strong>Success:</strong> -1 Heat</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R453',
        title: 'Corruption Unveiled',
        content: `<p>A city councilor is publicly exposed for embezzlement, sparking protests in the streets. You can either fuel the fire or try to put out the flames.</p>
        <ul>
            <li><strong>Charisma:</strong> Use your influence to calm the crowds.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -1 Reputation</li>
                </ul>
            </li>
            <li><strong>Intuition:</strong> Investigate the situation to gather intelligence on the corrupt official.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R454',
        title: 'Underground Duel',
        content: `<p>An underground arena has just announced a high-stakes combat tournament. Crowds are gathering, and the opportunity for a quick payout is tempting. But the risks are high.</p>
        <ul>
            <li><strong>Strength:</strong> Enter the tournament and fight for the prize money.
                <ul>
                    <li><strong>Success:</strong> +1.000 ¥</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
            <li><strong>Reaction:</strong> Bet on another fighter and avoid the fight yourself.
                <ul>
                    <li><strong>Success:</strong> +1.000 ¥</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R455',
        title: 'Neon Storm',
        content: `<p>A massive storm has rolled in, causing disruptions to power and communication networks across the district. The neon lights flicker as the city braces for the worst.</p>
        <ul>
            <li><strong>Logic:</strong> Analyze the storm's pattern to find the safest route out of the area.
                <ul>
                    <li><strong>Success:</strong> +1 Energy</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
            <li><strong>Agility:</strong> Dodge falling debris and move swiftly through the chaos.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R456',
        title: 'Black Market Deal',
        content: `<p>The black market is buzzing with a high-value deal involving rare weapons tech. It's a perfect opportunity to buy, sell, or steal—if you dare.</p>
        <ul>
            <li><strong>Charisma:</strong> Negotiate a better deal with the black market vendors.
                <ul>
                    <li><strong>Success:</strong> +1.000 ¥</li>
                    <li><strong>Fail:</strong> -1 Reputation</li>
                </ul>
            </li>
            <li><strong>Strength:</strong> Use force to take the weapons tech by intimidation.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R461',
        title: 'Blackout in the District',
        content: `<p>A sudden power outage plunges the district into darkness. The blackout causes chaos as people scramble to figure out what happened.</p>
        <ul>
            <li><strong>Logic:</strong> Investigate the cause of the blackout by accessing nearby systems.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
            <li><strong>Agility:</strong> Navigate through the dark streets, avoiding dangers like looters.
                <ul>
                    <li><strong>Success:</strong> +1 Energy</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R462',
        title: 'Rogue AI',
        content: `<p>A rogue AI has gained control of a local security system and is attacking citizens. Its influence spreads across nearby electronics, including your personal devices.</p>
        <ul>
            <li><strong>Reaction:</strong> React quickly to avoid the AI's detection systems.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
            <li><strong>Logic:</strong> Hack the AI to shut it down before it causes more damage.
                <ul>
                    <li><strong>Success:</strong> -1 Heat</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R463',
        title: 'Gang Showdown',
        content: `<p>A gang war breaks out in the heart of the district. Gunfire echoes in the streets as rival factions clash over turf. You need to decide whether to get involved or avoid the chaos.</p>
        <ul>
            <li><strong>Strength:</strong> Charge in and confront one of the gangs directly.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
            <li><strong>Charisma:</strong> Use diplomacy to try and calm the gangs and stop the violence.
                <ul>
                    <li><strong>Success:</strong> -1 Heat</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R464',
        title: 'Corporate Bribery',
        content: `<p>A high-ranking corporate exec is caught in a bribery scandal. The news spreads quickly, and protests begin to stir. You can either exploit the situation or help calm the tensions.</p>
        <ul>
            <li><strong>Charisma:</strong> Use your social influence to sway the public opinion and calm the protesters.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -1 Reputation</li>
                </ul>
            </li>
            <li><strong>Intuition:</strong> Investigate the scandal and uncover hidden details that could be used for leverage.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R465',
        title: 'Street Race',
        content: `<p>A street race is taking place through the district, and it’s drawing huge crowds. The potential rewards are great, but the risks are just as high. Are you in?</p>
        <ul>
            <li><strong>Agility:</strong> Join the race and prove your driving skills.
                <ul>
                    <li><strong>Success:</strong> +1.000 ¥</li>
                    <li><strong>Fail:</strong> -1 Health</li>
                </ul>
            </li>
            <li><strong>Strength:</strong> Help a racer with their vehicle to ensure they win the race.
                <ul>
                    <li><strong>Success:</strong> +1 Reputation</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
        </ul>`,
    },
    {
        id: 'R466',
        title: 'Medical Crisis',
        content: `<p>A viral outbreak hits the district, causing widespread panic. Medical facilities are overwhelmed, and only the most desperate are left to fend for themselves.</p>
        <ul>
            <li><strong>Logic:</strong> Analyze the virus and help create a makeshift cure.
                <ul>
                    <li><strong>Success:</strong> +1 Intel</li>
                    <li><strong>Fail:</strong> -1 Energy</li>
                </ul>
            </li>
            <li><strong>Charisma:</strong> Rally the people to stay calm and follow safety procedures.
                <ul>
                    <li><strong>Success:</strong> -1 Heat</li>
                    <li><strong>Fail:</strong> +1 Heat</li>
                </ul>
            </li>
        </ul>`,
    },
]
