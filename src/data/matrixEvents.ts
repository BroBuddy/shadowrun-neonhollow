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
            <li>Choose how to handle the event.</li>
            <li>Roll 2d6 &#8594; Add choosen attribute</li>
            <li>If you meet or exceed the <strong>Difficulty Check</strong> (DC), you succeed.</li>
        </ol>`,
    },
    {
        id: 'R411',
        title: 'Power Surge',
        content: `<p><strong>Event:</strong><br />
            In the blink of an eye, lights across the district flicker out. Emergency backups hum weakly, but critical systems are down. Doors won’t open, elevators stall, and neon signs die, leaving the streets eerily dark. People panic while others see opportunity in the shadows.</p>
            <hr />
            <p><strong>Logic (DC 10):</strong><br />Diagnose grid failures and reroute energy manually.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Energy</li></ul>
            <hr />   
            <p><strong>Reaction (DC 12):</strong><br />Navigate the chaos and avoid hazards in the dark.</p>
            <ul><li><strong>Success:</strong> +2 Energy</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R412',
        title: 'Gang Skirmish',
        content: `<p><strong>Event:</strong><br />
            The distant sound of gunfire quickly becomes a brutal street clash as rival gangs bring their turf war into the open. Civilians run for cover as drones scan for threats and trigger-happy thugs shoot first, ask never. You’re in the middle—like it or not.</p>
            <hr />
            <p><strong>Strength (DC 12):</strong><br />Push through the brawl and shield others from crossfire.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Agility (DC 10):</strong><br />Dodge debris and gunfire while escaping the scene.</p>
            <ul><li><strong>Success:</strong> +2 Energy</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R413',
        title: 'System Audit',
        content: `<p><strong>Event:</strong><br />
            Unmarked corp vans roll in with men in suits and mirrored shades. It’s a spontaneous citywide audit—identity checks, data sweeps, and silence. Those with clean records walk. The rest... vanish. It’s a bad time to look suspicious.</p>
            <hr />
            <p><strong>Charisma (DC 10):</strong><br />Convince officials you’re just a harmless citizen.</p>
            <ul><li><strong>Success:</strong> -1 Heat</li><li><strong>Fail:</strong> +1 Heat</li></ul>
            <hr />
            <p><strong>Logic (DC 12):</strong><br />Forge clean credentials on the fly.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -1 Reputation</li></ul>`,
    },
    {
        id: 'R414',
        title: 'HoloMalfunction',
        content: `<p><strong>Event:</strong><br />
            Suddenly, reality bends. Public holograms glitch, flicker, and merge with corrupted ads and rogue sensory loops. People stumble, stunned by the overload. Some go into panic, others collapse. The city turns into a dizzying circus of synthetic hallucinations.</p>
            <hr />
            <p><strong>Intuition (DC 12):</strong><br />Identify a safe route through the visual chaos.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Energy</li></ul>
            <hr />
            <p><strong>Reaction (DC 10):</strong><br />React quickly to avoid running into danger.</p>
            <ul><li><strong>Success:</strong> +2 Energy</li><li><strong>Fail:</strong> -2 Health</li></ul>`,
    },
    {
        id: 'R415',
        title: 'Riot Response',
        content: `<p><strong>Event:</strong><br />
            What started as a peaceful protest explodes into full-scale unrest. Flames flicker in the distance. Armed patrols clash with rioters. Barricades rise. Drones buzz overhead. You're either part of the cleanup—or collateral.</p>
            <hr />
            <p><strong>Agility (DC 10):</strong><br />Slip through the crowds unnoticed and unharmed.</p>
            <ul><li><strong>Success:</strong> -1 Heat</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Strength (DC 12):</strong><br />Hold the line or break through violent crowds.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -2 Energy</li></ul>`,
    },
    {
        id: 'R416',
        title: 'Data Leak',
        content: `<p><strong>Event:</strong><br />
            Confidential data floods the net—blacklists, corp secrets, even underground aliases. Everyone wants a piece of it. Fixers, runners, and enforcers scramble to secure or erase traces before they’re burned by the fallout.</p>
            <hr />
            <p><strong>Intuition (DC 10):</strong><br />Locate the source and capture valuable files.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> +1 Heat</li></ul>
            <hr />
            <p><strong>Charisma (DC 8):</strong><br />Sell false leads to rival fixers.</p>
            <ul><li><strong>Success:</strong> +3.000 ¥</li><li><strong>Fail:</strong> -1 Reputation</li></ul>`,
    },
    {
        id: 'R421',
        title: 'Drone Interference',
        content: `<p><strong>Event:</strong><br />
            Surveillance drones are behaving erratically, hovering too low, scanning innocents, and occasionally crashing. The glitch might be random—or a test. Citizens are unnerved, and runners are being flagged as high-priority threats.</p>
            <hr />
            <p><strong>Reaction (DC 8):</strong><br />Evade malfunctioning drones before you're tagged.</p>
            <ul><li><strong>Success:</strong> -2 Heat</li><li><strong>Fail:</strong> +1 Heat</li></ul>
            <hr />
            <p><strong>Logic (DC 10):</strong><br />Override a drone’s routine and redirect it.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Energy</li></ul>`,
    },
    {
        id: 'R422',
        title: 'Toxic Leak',
        content: `<p><strong>Event:</strong><br />
            Alarms blare in the Industrial District. A transport truck jackknifed near a biochem depot, leaking fluorescent vapor. The air burns to breathe, and cleanup crews are late. Residents flee while looters dive in for rare salvage.</p>
            <hr />
            <p><strong>Strength (DC 12):</strong><br />Help seal the rupture using brute force and gear.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Intuition (DC 10):</strong><br />Find a clean exit before the toxin spreads.</p>
            <ul><li><strong>Success:</strong> +2 Energy</li><li><strong>Fail:</strong> -2 Health</li></ul>`,
    },
    {
        id: 'R423',
        title: 'Black Market Raid',
        content: `<p><strong>Event:</strong><br />
            Word spreads fast: authorities are raiding underground trade hubs. Smugglers ditch crates in alleys, buyers scatter. Some see it as a chance to snatch unclaimed tech—others know it’s a trap with teeth.</p>
            <hr />
            <p><strong>Agility (DC 10):</strong><br />Dash in, grab goods, and escape before backup arrives.</p>
            <ul><li><strong>Success:</strong> +3.000 ¥</li><li><strong>Fail:</strong> +1 Heat</li></ul>
            <hr />
            <p><strong>Charisma (DC 8):</strong><br />Convince raiders you’re part of the cleanup crew.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -1 Reputation</li></ul>`,
    },
    {
        id: 'R424',
        title: 'Neural Broadcast Glitch',
        content: `<p><strong>Event:</strong><br />
            All over town, neural implants start buzzing with strange pulses—random memories, thoughts, or encrypted fragments. It leaves people dizzy or worse. Someone’s testing a signal... or sending a message.</p>
            <hr />
            <p><strong>Logic (DC 10):</strong><br />Decode the pulse and stabilize your implant.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Energy</li></ul>
            <hr />
            <p><strong>Intuition (DC 12):</strong><br />Resist the mental assault and clear your head.</p>
            <ul><li><strong>Success:</strong> +2 Health</li><li><strong>Fail:</strong> -2 Health</li></ul>`,
    },
    {
        id: 'R425',
        title: 'Rogue Courier',
        content: `<p><strong>Event:</strong><br />
            A courier bot meant for secure corp deliveries has gone rogue, jetting through alleys and rooftop routes. Rumor says it’s carrying data chips worth a fortune—or an AI with secrets someone didn’t want released.</p>
            <hr />
            <p><strong>Reaction (DC 8):</strong><br />Track and intercept the bot mid-run.</p>
            <ul><li><strong>Success:</strong> +3.000 ¥</li><li><strong>Fail:</strong> -2 Energy</li></ul>
            <hr />
            <p><strong>Intuition (DC 10):</strong><br />Predict the courier’s next location.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R426',
        title: 'Street Prophet',
        content: `<p><strong>Event:</strong><br />
            A cloaked figure preaches doom at every intersection, warning of firewalls collapsing and AIs waking up. Most ignore him—until his predictions start coming true. Traffic crashes, drones dive, and digital ads flicker to static eyes.</p>
            <hr />
            <p><strong>Charisma (DC 10):</strong><br />Calm the crowd and rally them away from chaos.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -1 Reputation</li></ul>
            <hr />
            <p><strong>Intuition (DC 8):</strong><br />Piece together what the prophet truly knows.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R431',
        title: 'Night Howlers',
        content: `<p><strong>Event:</strong><br />
            As dusk falls, an unknown gang launches a blitz through the Underground District. Cyber-hacked beasts and augmented enforcers clash with patrols. Chaos spreads fast—and you're caught in the middle.</p>
            <hr />
            <p><strong>Strength (DC 10):</strong><br />Fight off an aggressive ganger blocking your escape.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Agility (DC 8):</strong><br />Slip between crossfire and vanish into the shadows.</p>
            <ul><li><strong>Success:</strong> -1 Heat</li><li><strong>Fail:</strong> -2 Energy</li></ul>`,
    },
    {
        id: 'R432',
        title: 'Encrypted Broadcast',
        content: `<p><strong>Event:</strong><br />
            A rogue signal overrides public screens, displaying cryptic messages and flickering blueprints. Corps rush to shut it down, but it’s spreading like wildfire through backchannels.</p>
            <hr />
            <p><strong>Logic (DC 10):</strong><br />Decode the stream before it gets scrubbed.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> +1 Heat</li></ul>
            <hr />
            <p><strong>Intuition (DC 8):</strong><br />Follow the hidden markers to the source.</p>
            <ul><li><strong>Success:</strong> +3.000 ¥</li><li><strong>Fail:</strong> -2 Energy</li></ul>`,
    },
    {
        id: 'R433',
        title: 'Corporate Parade',
        content: `<p><strong>Event:</strong><br />
            A major corp rolls through downtown with a flashy security showcase—drones, armored convoys, and neon-clad execs. It’s all PR, but the street is a minefield of surveillance.</p>
            <hr />
            <p><strong>Charisma (DC 10):</strong><br />Blend in with the crowd and fake a corp ID.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> +1 Heat</li></ul>
            <hr />
            <p><strong>Reaction (DC 12):</strong><br />Duck through blind spots before the scanners catch you.</p>
            <ul><li><strong>Success:</strong> +2 Energy</li><li><strong>Fail:</strong> -2 Energy</li></ul>`,
    },
    {
        id: 'R434',
        title: 'Neon Storm',
        content: `<p><strong>Event:</strong><br />
            A rare energy storm warps electronics citywide. Neon signs flicker violently, streetlights burst, and vehicles stall. The unstable surge makes neural links flare dangerously.</p>
            <hr />
            <p><strong>Logic (DC 10):</strong><br />Ground your system and save your gear from frying.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Strength (DC 8):</strong><br />Drag civilians out of a crashed tram's danger zone.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -2 Energy</li></ul>`,
    },
    {
        id: 'R435',
        title: 'Lost Shipment',
        content: `<p><strong>Event:</strong><br />
            A container marked with a restricted corp seal washed up in the city’s canal. It's half-submerged, blinking, and unguarded—for now. The question is: grab it or walk away?</p>
            <hr />
            <p><strong>Reaction (DC 12):</strong><br />Quickly recover the container before corp drones arrive.</p>
            <ul><li><strong>Success:</strong> +3.000 ¥</li><li><strong>Fail:</strong> +1 Heat</li></ul>
            <hr />
            <p><strong>Intuition (DC 10):</strong><br />Scan for traps and avoid potential setup.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Health</li></ul>`,
    },
    {
        id: 'R436',
        title: 'Echo in the Wires',
        content: `<p><strong>Event:</strong><br />
            Old net architecture beneath the city pulses online for the first time in years. Ghost code floods public terminals, and runners whisper of an AI waking from dormancy.</p>
            <hr />
            <p><strong>Logic (DC 8):</strong><br />Interface with the terminal and pull data before it fades.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> +1 Heat</li></ul>
            <hr />
            <p><strong>Charisma (DC 10):</strong><br />Convince a rival crew to share their decrypted fragment.</p>
            <ul><li><strong>Success:</strong> -1 Heat</li><li><strong>Fail:</strong> -1 Reputation</li></ul>`,
    },
    {
        id: 'R441',
        title: 'Synthetic Plague',
        content: `<p><strong>Event:</strong><br />
            A mutated bio-virus has slipped containment in a nearby lab. Streets are locked down, and drones scan for signs of infection. Runners are being blamed for the breach.</p>
            <hr />
            <p><strong>Logic (DC 10):</strong><br />Reprogram a med-drone to scan and clear you.</p>
            <ul><li><strong>Success:</strong> -1 Heat</li><li><strong>Fail:</strong> +1 Heat</li></ul>
            <hr />
            <p><strong>Agility (DC 8):</strong><br />Escape quarantine patrols before they close in.</p>
            <ul><li><strong>Success:</strong> +2 Energy</li><li><strong>Fail:</strong> -2 Health</li></ul>`,
    },
    {
        id: 'R442',
        title: 'False Broadcast',
        content: `<p><strong>Event:</strong><br />
            Someone hijacks a local media node, broadcasting a deepfake of you committing a high-profile crime. Your reputation takes a hit—unless you fix it fast.</p>
            <hr />
            <p><strong>Charisma (DC 8):</strong><br />Convince a trusted informant to discredit the footage.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -1 Reputation</li></ul>
            <hr />
            <p><strong>Intuition (DC 12):</strong><br />Track the origin of the false feed.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R443',
        title: 'Burning Skies',
        content: `<p><strong>Event:</strong><br />
            A corp zeppelin crashes into a tenement block in the Industrial District. Fires spread, alarms wail, and panic floods the street. You’re nearby—and you might be able to help.</p>
            <hr />
            <p><strong>Strength (DC 10):</strong><br />Pull survivors from debris before the fire spreads.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Reaction (DC 8):</strong><br />Dodge falling wreckage and reach the scene first.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Energy</li></ul>`,
    },
    {
        id: 'R444',
        title: 'Midnight Deal',
        content: `<p><strong>Event:</strong><br />
            You overhear a fixer negotiating a risky black-market exchange in a back alley. You could step in, assist—or walk away before things get ugly.</p>
            <hr />
            <p><strong>Charisma (DC 10):</strong><br />Mediate the deal and win both sides' trust.</p>
            <ul><li><strong>Success:</strong> +3.000 ¥</li><li><strong>Fail:</strong> -1 Reputation</li></ul>
            <hr />
            <p><strong>Intuition (DC 12):</strong><br />Notice the hidden ambush and slip out early.</p>
            <ul><li><strong>Success:</strong> -1 Heat</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R445',
        title: 'Neural Glitch',
        content: `<p><strong>Event:</strong><br />
            A new firmware patch pushes to the entire district. Those with implants experience spasms, hallucinations, and memory gaps. If you’re wired, you feel it instantly.</p>
            <hr />
            <p><strong>Logic (DC 12):</strong><br />Patch the code manually before your implants fry.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Strength (DC 10):</strong><br />Hold steady and ride out the seizures.</p>
            <ul><li><strong>Success:</strong> +2 Health</li><li><strong>Fail:</strong> -2 Energy</li></ul>`,
    },
    {
        id: 'R446',
        title: 'Encrypted Cache',
        content: `<p><strong>Event:</strong><br />
            A runner posts a cryptic location drop for an abandoned corp cache. Dozens begin the hunt, but the system guarding it is old—and dangerous.</p>
            <hr />
            <p><strong>Logic (DC 8):</strong><br />Crack the encryption before rival runners catch on.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Energy</li></ul>
            <hr />
            <p><strong>Reaction (DC 10):</strong><br />Outrun competitors and reach the cache first.</p>
            <ul><li><strong>Success:</strong> +3.000 ¥</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R451',
        title: 'Corporate Espionage',
        content: `<p><strong>Event:</strong><br />
            A rival corporation's espionage team attempts to steal sensitive data from the district. The chaos is unfolding around you. You have to decide how to get involved.</p>
            <hr />
            <p><strong>Charisma (DC 10):</strong><br />Convince a bystander to leak crucial information.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -1 Reputation</li></ul>
            <hr />
            <p><strong>Intuition (DC 12):</strong><br />Track the espionage team's movements and sabotage their plan.</p>
            <ul><li><strong>Success:</strong> -1 Heat</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R452',
        title: 'Hacker Riot',
        content: `<p><strong>Event:</strong><br />
            A local hacker group starts a riot, disrupting city-wide comms and electronics. The streets are chaotic as they demand greater freedom from corporate control.</p>
            <hr />
            <p><strong>Agility (DC 8):</strong><br />Navigate the riot safely and avoid danger.</p>
            <ul><li><strong>Success:</strong> +2 Energy</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Logic (DC 10):</strong><br />Hack into the group's system and disable their riot control equipment.</p>
            <ul><li><strong>Success:</strong> -1 Heat</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R453',
        title: 'Corruption Unveiled',
        content: `<p><strong>Event:</strong><br />
            A city councilor is publicly exposed for embezzlement, sparking protests in the streets. You can either fuel the fire or try to put out the flames.</p>
            <hr />
            <p><strong>Charisma (DC 10):</strong><br />Use your influence to calm the crowds.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -1 Reputation</li></ul>
            <hr />
            <p><strong>Intuition (DC 10):</strong><br />Investigate the situation to gather intelligence on the corrupt official.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Health</li></ul>`,
    },
    {
        id: 'R454',
        title: 'Underground Duel',
        content: `<p><strong>Event:</strong><br />
            An underground arena has just announced a high-stakes combat tournament. Crowds are gathering, and the opportunity for a quick payout is tempting. But the risks are high.</p>
            <hr />
            <p><strong>Strength (DC 10):</strong><br />Enter the tournament and fight for the prize money.</p>
            <ul><li><strong>Success:</strong> +3.000 ¥</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Reaction (DC 8):</strong><br />Bet on another fighter and avoid the fight yourself.</p>
            <ul><li><strong>Success:</strong> +3.000 ¥</li><li><strong>Fail:</strong> -2 Energy</li></ul>`,
    },
    {
        id: 'R455',
        title: 'Neon Storm',
        content: `<p><strong>Event:</strong><br />
            A massive storm has rolled in, causing disruptions to power and communication networks across the district. The neon lights flicker as the city braces for the worst.</p>
            <hr />
            <p><strong>Logic (DC 10):</strong><br />Analyze the storm's pattern to find the safest route out of the area.</p>
            <ul><li><strong>Success:</strong> +2 Energy</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Agility (DC 12):</strong><br />Dodge falling debris and move swiftly through the chaos.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Energy</li></ul>`,
    },
    {
        id: 'R456',
        title: 'Black Market Deal',
        content: `<p><strong>Event:</strong><br />
            The black market is buzzing with a high-value deal involving rare weapons tech. It's a perfect opportunity to buy, sell, or steal—if you dare.</p>
            <hr />
            <p><strong>Charisma (DC 8):</strong><br />Negotiate a better deal with the black market vendors.</p>
            <ul><li><strong>Success:</strong> +3.000 ¥</li><li><strong>Fail:</strong> -1 Reputation</li></ul>
            <hr />
            <p><strong>Strength (DC 10):</strong><br />Use force to take the weapons tech by intimidation.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -2 Health</li></ul>`,
    },
    {
        id: 'R461',
        title: 'Blackout in the District',
        content: `<p><strong>Event:</strong><br />
            A sudden power outage plunges the district into darkness. The blackout causes chaos as people scramble to figure out what happened.</p>
            <hr />
            <p><strong>Logic (DC 12):</strong><br />Investigate the cause of the blackout by accessing nearby systems.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Agility (DC 10):</strong><br />Navigate through the dark streets, avoiding dangers like looters.</p>
            <ul><li><strong>Success:</strong> +2 Energy</li><li><strong>Fail:</strong> -2 Energy</li></ul>`,
    },
    {
        id: 'R462',
        title: 'Rogue AI',
        content: `<p><strong>Event:</strong><br />
            A rogue AI has gained control of a local security system and is attacking citizens. Its influence spreads across nearby electronics, including your personal devices.</p>
            <hr />
            <p><strong>Reaction (DC 10):</strong><br />React quickly to avoid the AI's detection systems.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Logic (DC 12):</strong><br />Hack the AI to shut it down before it causes more damage.</p>
            <ul><li><strong>Success:</strong> -1 Heat</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R463',
        title: 'Gang Showdown',
        content: `<p><strong>Event:</strong><br />
            A gang war breaks out in the heart of the district. Gunfire echoes in the streets as rival factions clash over turf. You need to decide whether to get involved or avoid the chaos.</p>
            <hr />
            <p><strong>Strength (DC 10):</strong><br />Charge in and confront one of the gangs directly.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Charisma (DC 8):</strong><br />Use diplomacy to try and calm the gangs and stop the violence.</p>
            <ul><li><strong>Success:</strong> -1 Heat</li><li><strong>Fail:</strong> +2 Heat</li></ul>`,
    },
    {
        id: 'R464',
        title: 'Corporate Bribery',
        content: `<p><strong>Event:</strong><br />
            A high-ranking corporate exec is caught in a bribery scandal. The news spreads quickly, and protests begin to stir. You can either exploit the situation or help calm the tensions.</p>
            <hr />
            <p><strong>Charisma (DC 12):</strong><br />Use your social influence to sway the public opinion and calm the protesters.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -1 Reputation</li></ul>
            <hr />
            <p><strong>Intuition (DC 10):</strong><br />Investigate the scandal and uncover hidden details that could be used for leverage.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Health</li></ul>`,
    },
    {
        id: 'R465',
        title: 'Street Race',
        content: `<p><strong>Event:</strong><br />
            A street race is taking place through the district, and it’s drawing huge crowds. The potential rewards are great, but the risks are just as high. Are you in?</p>
            <hr />
            <p><strong>Agility (DC 10):</strong><br />Join the race and prove your driving skills.</p>
            <ul><li><strong>Success:</strong> +3.000 ¥</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Strength (DC 8):</strong><br />Help a racer with their vehicle to ensure they win the race.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -2 Energy</li></ul>`,
    },
    {
        id: 'R466',
        title: 'Medical Crisis',
        content: `<p><strong>Event:</strong><br />
            A viral outbreak hits the district, causing widespread panic. Medical facilities are overwhelmed, and only the most desperate are left to fend for themselves.</p>
            <hr />
            <p><strong>Logic (DC 12):</strong><br />Analyze the virus and help create a makeshift cure.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -2 Energy</li></ul>
            <hr />
            <p><strong>Charisma (DC 10):</strong><br />Rally the people to stay calm and follow safety procedures.</p>
            <ul><li><strong>Success:</strong> -1 Heat</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R471',
        title: 'System Anomaly',
        content: `<p><strong>Event:</strong><br />
            The Neural Nexus system experiences a sudden, unexplained anomaly. Screens flicker, wires spark, and the usual hum of the servers is replaced by unsettling silence. An emergency shutdown is imminent, and the whole building could crash if not stabilized quickly.</p>
            <hr />
            <p><strong>Logic (DC 12):</strong><br />Analyze the anomaly's source and implement a corrective action to stabilize the system.</p>
            <ul><li><strong>Success:</strong> +1 Temporary Logic</li><li><strong>Fail:</strong> -2 Energy</li></ul>
            <hr />
            <p><strong>Intuition (DC 10):</strong><br />Spot the hidden cause of the malfunction and anticipate the next failure point.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R472',
        title: 'Patrol Check',
        content: `<p><strong>Event:</strong><br />
            As you enter PatrolHub, you're immediately confronted by a pair of security officers. They seem suspicious and are questioning your presence in the area. It's clear they are ready to test your credentials or try to get some extra information from you.</p>
            <hr />
            <p><strong>Strength (DC 12):</strong><br />Use your strength to physically assert yourself by intimidating the officers.</p>
            <ul><li><strong>Success:</strong> +1 Temporary Strength</li><li><strong>Fail:</strong> +1 Heat</li></ul>
            <hr />
            <p><strong>Charisma (DC 10):</strong><br />Charm or persuade the officers, using your wit and presence to smooth over the situation.</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R473',
        title: 'Medical Malfunction',
        content: `<p><strong>Event:</strong><br />
            A sudden medical malfunction has put several patients in critical condition. The usual staff is overwhelmed, and BioCare’s system is struggling to prioritize the patients in need of emergency care. You’ve been called in to help, but time is running out.</p>
            <hr />
            <p><strong>Agility (DC 12):</strong><br />Use your agility to quickly navigate the chaotic environment and assist in moving patients to safety.</p>
            <ul><li><strong>Success:</strong> +1 Temporary Agility</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Strength (DC 10):</strong><br />Apply your strength to physically move patients or assist with heavy medical equipment.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R474',
        title: 'Lost Data',
        content: `<p><strong>Event:</strong><br />
            While enjoying the tranquil atmosphere of EchoGarden, a small portable data storage device is dropped nearby. Upon inspection, you realize it contains highly sensitive data, likely from a corporate leak. There are multiple ways to deal with the device, but time is running out.</p>
            <hr />
            <p><strong>Reaction (DC 12):</strong><br />React quickly to either stash the device in a safe spot or maneuver around others who might notice it.</p>
            <ul><li><strong>Success:</strong> +1 Temporary Agility</li><li><strong>Fail:</strong> -2 Energy</li></ul>
            <hr />
            <p><strong>Agility (DC 10):</strong><br />Use your agility to keep the device hidden or avoid suspicion, gaining favor from the right people.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R475',
        title: 'Dream State Disturbance',
        content: `<p><strong>Event:</strong><br />
            As you enter DreamSphere, you’re immediately submerged into a vivid, immersive virtual experience. However, something seems off. The system glitches, causing the virtual environment to destabilize.</p>
            <hr />
            <p><strong>Intuition (DC 12):</strong><br />Use your instinct and quick thinking to identify the core issue and stabilize the virtual environment.</p>
            <ul><li><strong>Success:</strong> +1 Temporary Intuition</li><li><strong>Fail:</strong> -2 Energy</li></ul>
            <hr />
            <p><strong>Reaction (DC 10):</strong><br />Move swiftly to grab a lost runner’s attention and guide them to safety.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -2 Health</li></ul>`,
    },
    {
        id: 'R476',
        title: 'The Whisper Network',
        content: `<p><strong>Event:</strong><br />
            The atmosphere in HoloLounge is electric tonight. The neon lights flash in sync with the pulsing beats, and people from all walks of life gather here. You spot an influential figure seated at the bar, surrounded by chatter.</p>            <hr />
            <p><strong>Charisma (DC 12):</strong><br />Charm your way into a conversation with the influential figure.</p>
            <ul><li><strong>Success:</strong> +1 Charisma Temporary</li><li><strong>Fail:</strong> +1 Heat</li></ul>
            <hr />
            <p><strong>Intuition (DC 10):</strong><br />Pay attention to the subtle body language and hidden cues in the conversation</p>
            <ul><li><strong>Success:</strong> +1 Intel</li><li><strong>Fail:</strong> -1 Energy</li></ul>`,
    },
    {
        id: 'R477',
        title: 'Unplanned Challenge',
        content: `<p><strong>Event:</strong><br />
            As you work out in the IronGym, a loud crash echoes across the room. A massive weight has fallen from the rack, pinning an unconscious individual beneath it. The gym is in chaos as people rush to help, but there's a delay in the emergency response.</p>
            <hr />
            <p><strong>Strength (DC 12):</strong><br />Lift the heavy weight off the person with raw strength.</p>
            <ul><li><strong>Success:</strong> +1 Temporary Strength</li><li><strong>Fail:</strong> -2 Health</li></ul>
            <hr />
            <p><strong>Reaction (DC 10):</strong><br />React fast to avoid getting caught under the wreckage or assist others in getting the person out safely.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> +1 Heat</li></ul>`,
    },
    {
        id: 'R478',
        title: 'Smuggler’s Test',
        content: `<p><strong>Event:</strong><br />
            As you step into SmugglerDen, you're immediately stopped by a group of shady individuals guarding the entrance. They give you a hard stare and ask if you’ve got the right credentials to be here. It's clear they're not going to let anyone through without proving themselves.</p>
            <hr />
            <p><strong>Agility (DC 12):</strong><br />Use your agility to slip past the guards unnoticed or avoid a confrontation with a quick dodge.</p>
            <ul><li><strong>Success:</strong> +1 Temporary Agility</li><li><strong>Fail:</strong> +1 Heat</li></ul>
            <hr />
            <p><strong>Logic (DC 10):</strong><br />Use your wit to convince the guards that you belong, citing information or reasoning that gains their trust.</p>
            <ul><li><strong>Success:</strong> +1 Reputation</li><li><strong>Fail:</strong> -2 Health</li></ul>`,
    },
    {
        id: 'R481',
        title: 'Mysterious Encounter',
        content: `<p><strong>Event:</strong><br />
            In the center of NeuralNexus, a man with glasses and a perfect haircut analyzes streams of financial data with ease. Curious, you strike up a conversation. 
            <br /><br />
            He explains a groundbreaking method for optimizing corporate finances—complex at first, but he breaks it down until you grasp the full picture. His insights reveal hidden structures you never noticed before.
            <br /><br />
            Before you can thank him, he vanishes into the crowd.</p>
            <hr />
            <p><strong>Bonus Attributes:</strong></p>
            <ul><li>+1 Logic</li></ul>`,
    },
    {
        id: 'R483',
        title: 'Mysterious Encounter',
        content: `<p><strong>Event:</strong><br />
            While in BioCare, you find yourself suffering from intense tooth pain. A beautiful woman with long black hair approaches, sensing your discomfort.
            <br /><br />
            She calmly explains the process to ease the pain, her hands steady as she demonstrates a quick, effective technique.
            <br /><br />
            Her soothing presence and clear knowledge help you understand the procedure, relieving your pain and giving you a sense of agility in both body and mind.</p>
            <hr />
            <p><strong>Bonus Attributes:</strong></p>
            <ul><li>+1 Agility</li></ul>`,
    },
    {
        id: 'R484',
        title: 'Mysterious Encounter',
        content: `<p><strong>Event:</strong><br />
            While strolling through the peaceful EchoGarden, you meet a tall man standing near a cluster of vibrant flowers.
            <br /><br />
            He seems to be in deep thought, admiring their beauty. He shares advice on how to better attune yourself to your surroundings and tap into its energy.
            <br /><br />
            His calm demeanor and deep understanding of the garden's flora put you at ease, helping you feel more composed and in tune with your surroundings.</p>
            <hr />
            <p><strong>Bonus Attributes:</strong></p>
            <ul><li>+1 Reaction</li></ul>`,
    },
    {
        id: 'R485',
        title: 'Mysterious Encounter',
        content: `<p><strong>Event:</strong><br />
            In the dim corner of the room, you notice a man sitting alone — his head clean-shaven, a long, fiery orange beard cascading down his chest. He silently sketches strange symbols and maps on a battered notepad, lost in his own world.
            <br /><br />
            A silent understanding forms between you — not of friendship, but of mutual recognition. You part ways, but the encounter sharpens your instincts and leaves you more attuned to the hidden currents of the world.</p>
            <hr />
            <p><strong>Bonus Attributes:</strong></p>
            <ul><li>+1 Intuition</li></ul>`,
    },
    {
        id: 'R486',
        title: 'Mysterious Encounter',
        content: `<p><strong>Event:</strong><br />
            Lost in thought, you sit alone in a corner of the HoloLounge. An older woman with grey hair and a slight limp approaches, offering a warm smile.
            <br /><br />
            She sits down beside you, speaking softly, encouraging you to look beyond the darkness and embrace the good in life. Her gentle words, coupled with her quiet strength, shift your perspective, offering a newfound sense of clarity and hope.</p>
            <hr />
            <p><strong>Bonus Attributes:</strong></p>
            <ul><li>+1 Charisma</li></ul>`,
    },
    {
        id: 'R487',
        title: 'Mysterious Encounter',
        content: `<p><strong>Event:</strong><br />
            The clang of metal fills IronGym, but one figure stands out — an older man, nearly bald with a thick grey beard and arms like forged steel. He lifts in silence, focused, almost meditative.
            <br /><br />
            You strike up a conversation. At first, he’s distant, but soon shares his philosophy on strength, resilience, and growth through pain.
            <br /><br />
            You leave with sore muscles — but also feeling stronger.</p>
            <hr />
            <ul><li><strong>Bonus:</strong> +1 Strength</li></ul>`,
    },
]
