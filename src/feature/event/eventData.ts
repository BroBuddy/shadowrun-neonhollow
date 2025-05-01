import { Event } from './EventType'

const eventOnes: readonly Event[] = [
    {
        id: '11',
        title: 'Power Surge',
        description:
            'In the blink of an eye, lights across the district flicker out. Emergency backups hum weakly, but critical systems are down. Doors won’t open, elevators stall, and neon signs die, leaving the streets eerily dark. People panic while others see opportunity in the shadows.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description:
                    'Diagnose grid failures and reroute energy manually.',
                success: '+1 Intel',
                fail: '-2 Energy',
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 12,
                description:
                    'Navigate the chaos and avoid hazards in the dark.',
                success: '+2 Energy',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '12',
        title: 'Gang Skirmish',
        description:
            'The distant sound of gunfire quickly becomes a brutal street clash as rival gangs bring their turf war into the open. Civilians run for cover as drones scan for threats and trigger-happy thugs shoot first, ask never. You’re in the middle—like it or not.',
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 12,
                description:
                    'Push through the brawl and shield others from crossfire.',
                success: '+1 Edge',
                fail: '-2 Health',
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 10,
                description:
                    'Dodge debris and gunfire while escaping the scene.',
                success: '+2 Energy',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '13',
        title: 'System Audit',
        description:
            'Unmarked corp vans roll in with men in suits and mirrored shades. It’s a spontaneous citywide audit—identity checks, data sweeps, and silence. Those with clean records walk. The rest... vanish. It’s a bad time to look suspicious.',
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description:
                    'Convince officials you’re just a harmless citizen.',
                success: '-1 Heat',
                fail: '+1 Heat',
            },
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 12,
                description: 'Forge clean credentials on the fly.',
                success: '+1 Intel',
                fail: '-1 Edge',
            },
        ],
    },
    {
        id: '14',
        title: 'HoloMalfunction',
        description:
            'Suddenly, reality bends. Public holograms glitch, flicker, and merge with corrupted ads and rogue sensory loops. People stumble, stunned by the overload. Some go into panic, others collapse. The city turns into a dizzying circus of synthetic hallucinations.',
        skillChecks: [
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 12,
                description: 'Identify a safe route through the visual chaos.',
                success: '+1 Intel',
                fail: '-2 Energy',
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 10,
                description: 'React quickly to avoid running into danger.',
                success: '+2 Energy',
                fail: '-2 Health',
            },
        ],
    },
    {
        id: '15',
        title: 'Riot Response',
        description:
            "What started as a peaceful protest explodes into full-scale unrest. Flames flicker in the distance. Armed patrols clash with rioters. Barricades rise. Drones buzz overhead. You're either part of the cleanup—or collateral.",
        skillChecks: [
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 10,
                description: 'Slip through the crowds unnoticed and unharmed.',
                success: '-1 Heat',
                fail: '-2 Health',
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 12,
                description: 'Hold the line or break through violent crowds.',
                success: '+1 Edge',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '16',
        title: 'Data Leak',
        description:
            'Confidential data floods the net—blacklists, corp secrets, even underground aliases. Everyone wants a piece of it. Fixers, runners, and enforcers scramble to secure or erase traces before they’re burned by the fallout.',
        skillChecks: [
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description: 'Locate the source and capture valuable files.',
                success: '+1 Intel',
                fail: '+1 Heat',
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 8,
                description: 'Sell false leads to rival fixers.',
                success: '+3.000 ¥',
                fail: '-1 Edge',
            },
        ],
    },
]

const eventTwos: readonly Event[] = [
    {
        id: '21',
        title: 'Drone Interference',
        description:
            'Surveillance drones are behaving erratically, hovering too low, scanning innocents, and occasionally crashing. The glitch might be random—or a test. Citizens are unnerved, and runners are being flagged as high-priority threats.',
        skillChecks: [
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 8,
                description:
                    "Evade malfunctioning drones before you're tagged.",
                success: '-2 Heat',
                fail: '+1 Heat',
            },
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description: 'Override a drone’s routine and redirect it.',
                success: '+1 Intel',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '22',
        title: 'Toxic Leak',
        description:
            'Alarms blare in the Industrial District. A transport truck jackknifed near a biochem depot, leaking fluorescent vapor. The air burns to breathe, and cleanup crews are late. Residents flee while looters dive in for rare salvage.',
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 12,
                description:
                    'Help seal the rupture using brute force and gear.',
                success: '+1 Edge',
                fail: '-2 Health',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description: 'Find a clean exit before the toxin spreads.',
                success: '+2 Energy',
                fail: '-2 Health',
            },
        ],
    },
    {
        id: '23',
        title: 'Black Market Raid',
        description:
            'Word spreads fast: authorities are raiding underground trade hubs. Smugglers ditch crates in alleys, buyers scatter. Some see it as a chance to snatch unclaimed tech—others know it’s a trap with teeth.',
        skillChecks: [
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 10,
                description:
                    'Dash in, grab goods, and escape before backup arrives.',
                success: '+3.000 ¥',
                fail: '+1 Heat',
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 8,
                description:
                    'Convince raiders you’re part of the cleanup crew.',
                success: '+1 Intel',
                fail: '-1 Edge',
            },
        ],
    },
    {
        id: '24',
        title: 'Neural Broadcast Glitch',
        description:
            'All over town, neural implants start buzzing with strange pulses—random memories, thoughts, or encrypted fragments. It leaves people dizzy or worse. Someone’s testing a signal... or sending a message.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description: 'Decode the pulse and stabilize your implant.',
                success: '+1 Intel',
                fail: '-2 Energy',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 12,
                description: 'Resist the mental assault and clear your head.',
                success: '+2 Health',
                fail: '-2 Health',
            },
        ],
    },
    {
        id: '25',
        title: 'Rogue Courier',
        description:
            'A courier bot meant for secure corp deliveries has gone rogue, jetting through alleys and rooftop routes. Rumor says it’s carrying data chips worth a fortune—or an AI with secrets someone didn’t want released.',
        skillChecks: [
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 8,
                description: 'Track and intercept the bot mid-run.',
                success: '+3.000 ¥',
                fail: '-2 Energy',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description: 'Predict the courier’s next location.',
                success: '+1 Intel',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '26',
        title: 'Street Prophet',
        description:
            'A cloaked figure preaches doom at every intersection, warning of firewalls collapsing and AIs waking up. Most ignore him—until his predictions start coming true. Traffic crashes, drones dive, and digital ads flicker to static eyes.',
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description: 'Calm the crowd and rally them away from chaos.',
                success: '+1 Edge',
                fail: '-1 Edge',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 8,
                description: 'Piece together what the prophet truly knows.',
                success: '+1 Intel',
                fail: '+1 Heat',
            },
        ],
    },
]

const eventThrees: readonly Event[] = [
    {
        id: '31',
        title: 'Night Howlers',
        description:
            "As dusk falls, an unknown gang launches a blitz through the Underground District. Cyber-hacked beasts and augmented enforcers clash with patrols. Chaos spreads fast—and you're caught in the middle.",
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 10,
                description:
                    'Fight off an aggressive ganger blocking your escape.',
                success: '+1 Edge',
                fail: '-2 Health',
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 8,
                description:
                    'Slip between crossfire and vanish into the shadows.',
                success: '-1 Heat',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '32',
        title: 'Encrypted Broadcast',
        description:
            'A rogue signal overrides public screens, displaying cryptic messages and flickering blueprints. Corps rush to shut it down, but it’s spreading like wildfire through backchannels.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description: 'Decode the stream before it gets scrubbed.',
                success: '+1 Intel',
                fail: '+1 Heat',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 8,
                description: 'Follow the hidden markers to the source.',
                success: '+3.000 ¥',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '33',
        title: 'Corporate Parade',
        description:
            'A major corp rolls through downtown with a flashy security showcase—drones, armored convoys, and neon-clad execs. It’s all PR, but the street is a minefield of surveillance.',
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description: 'Blend in with the crowd and fake a corp ID.',
                success: '+1 Edge',
                fail: '+1 Heat',
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 12,
                description:
                    'Duck through blind spots before the scanners catch you.',
                success: '+2 Energy',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '34',
        title: 'Neon Storm',
        description:
            'A rare energy storm warps electronics citywide. Neon signs flicker violently, streetlights burst, and vehicles stall. The unstable surge makes neural links flare dangerously.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description:
                    'Ground your system and save your gear from frying.',
                success: '+1 Intel',
                fail: '-2 Health',
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 8,
                description:
                    "Drag civilians out of a crashed tram's danger zone.",
                success: '+1 Edge',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '35',
        title: 'Lost Shipment',
        description:
            "A container marked with a restricted corp seal washed up in the city’s canal. It's half-submerged, blinking, and unguarded—for now. The question is: grab it or walk away?",
        skillChecks: [
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 12,
                description:
                    'Quickly recover the container before corp drones arrive.',
                success: '+3.000 ¥',
                fail: '+1 Heat',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description: 'Scan for traps and avoid potential setup.',
                success: '+1 Intel',
                fail: '-2 Health',
            },
        ],
    },
    {
        id: '36',
        title: 'Echo in the Wires',
        description:
            'Old net architecture beneath the city pulses online for the first time in years. Ghost code floods public terminals, and runners whisper of an AI waking from dormancy.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 8,
                description:
                    'Interface with the terminal and pull data before it fades.',
                success: '+1 Intel',
                fail: '+1 Heat',
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description:
                    'Convince a fellow runner to share the hidden cache.',
                success: '+3.000 ¥',
                fail: '-2 Energy',
            },
        ],
    },
]

const eventFours: readonly Event[] = [
    {
        id: '41',
        title: 'Synthetic Plague',
        description:
            'A mutated bio-virus has slipped containment in a nearby lab. Streets are locked down, and drones scan for signs of infection. Runners are being blamed for the breach.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description: 'Reprogram a med-drone to scan and clear you.',
                success: '-1 Heat',
                fail: '+1 Heat',
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 8,
                description: 'Escape quarantine patrols before they close in.',
                success: '+2 Energy',
                fail: '-2 Health',
            },
        ],
    },
    {
        id: '42',
        title: 'False Broadcast',
        description:
            'Someone hijacks a local media node, broadcasting a deepfake of you committing a high-profile crime. Your Edge takes a hit—unless you fix it fast.',
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 8,
                description:
                    'Convince a trusted informant to discredit the footage.',
                success: '+1 Edge',
                fail: '-1 Edge',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 12,
                description: 'Track the origin of the false feed.',
                success: '+1 Intel',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '43',
        title: 'Burning Skies',
        description:
            'A corp zeppelin crashes into a tenement block in the Industrial District. Fires spread, alarms wail, and panic floods the street. You’re nearby—and you might be able to help.',
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 10,
                description:
                    'Pull survivors from debris before the fire spreads.',
                success: '+1 Edge',
                fail: '-2 Health',
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 8,
                description:
                    'Dodge falling wreckage and reach the scene first.',
                success: '+1 Intel',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '44',
        title: 'Midnight Deal',
        description:
            'You overhear a fixer negotiating a risky black-market exchange in a back alley. You could step in, assist—or walk away before things get ugly.',
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description: "Mediate the deal and win both sides' trust.",
                success: '+3.000 ¥',
                fail: '-1 Edge',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 12,
                description: 'Notice the hidden ambush and slip out early.',
                success: '-1 Heat',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '45',
        title: 'Neural Glitch',
        description:
            'A new firmware patch pushes to the entire district. Those with implants experience spasms, hallucinations, and memory gaps. If you’re wired, you feel it instantly.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 12,
                description:
                    'Patch the code manually before your implants fry.',
                success: '+1 Intel',
                fail: '-2 Health',
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 10,
                description: 'Hold steady and ride out the seizures.',
                success: '+2 Health',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '46',
        title: 'Encrypted Cache',
        description:
            'A runner posts a cryptic location drop for an abandoned corp cache. Dozens begin the hunt, but the system guarding it is old—and dangerous.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 8,
                description:
                    'Crack the encryption before rival runners catch on.',
                success: '+1 Intel',
                fail: '-2 Energy',
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 10,
                description: 'Outrun competitors and reach the cache first.',
                success: '+3.000 ¥',
                fail: '+1 Heat',
            },
        ],
    },
]

const eventFives: readonly Event[] = [
    {
        id: '51',
        title: 'Corporate Espionage',
        description:
            "A rival corporation's espionage team attempts to steal sensitive data from the district. The chaos is unfolding around you. You have to decide how to get involved.",
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description:
                    'Convince a bystander to leak crucial information.',
                success: '+1 Intel',
                fail: '-1 Edge',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 12,
                description:
                    "Track the espionage team's movements and sabotage their plan.",
                success: '-1 Heat',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '52',
        title: 'Hacker Riot',
        description:
            'A local hacker group starts a riot, disrupting city-wide comms and electronics. The streets are chaotic as they demand greater freedom from corporate control.',
        skillChecks: [
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 8,
                description: 'Navigate the riot safely and avoid danger.',
                success: '+2 Energy',
                fail: '-2 Health',
            },
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description:
                    "Hack into the group's system and disable their riot control equipment.",
                success: '-1 Heat',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '53',
        title: 'Corruption Unveiled',
        description:
            'A city councilor is publicly exposed for embezzlement, sparking protests in the streets. You can either fuel the fire or try to put out the flames.',
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description: 'Use your influence to calm the crowds.',
                success: '+1 Edge',
                fail: '-1 Edge',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description:
                    'Investigate the situation to gather intelligence on the corrupt official.',
                success: '+1 Intel',
                fail: '-2 Health',
            },
        ],
    },
    {
        id: '54',
        title: 'Underground Duel',
        description:
            'An underground arena has just announced a high-stakes combat tournament. Crowds are gathering, and the opportunity for a quick payout is tempting. But the risks are high.',
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 10,
                description:
                    'Enter the tournament and fight for the prize money.',
                success: '+3.000 ¥',
                fail: '-2 Health',
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 8,
                description:
                    'Bet on another fighter and avoid the fight yourself.',
                success: '+3.000 ¥',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '55',
        title: 'Neon Storm',
        description:
            'A massive storm has rolled in, causing disruptions to power and communication networks across the district. The neon lights flicker as the city braces for the worst.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description:
                    "Analyze the storm's pattern to find the safest route out of the area.",
                success: '+2 Energy',
                fail: '-2 Health',
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 12,
                description:
                    'Dodge falling debris and move swiftly through the chaos.',
                success: '+1 Intel',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '56',
        title: 'Black Market Deal',
        description:
            "The black market is buzzing with a high-value deal involving rare weapons tech. It's a perfect opportunity to buy, sell, or steal—if you dare.",
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 8,
                description:
                    'Negotiate a better deal with the black market vendors.',
                success: '+3.000 ¥',
                fail: '-1 Edge',
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 10,
                description:
                    'Use force to take the weapons tech by intimidation.',
                success: '+1 Edge',
                fail: '-2 Health',
            },
        ],
    },
]

const eventSixes: readonly Event[] = [
    {
        id: '61',
        title: 'Blackout in the District',
        description:
            'A sudden power outage plunges the district into darkness. The blackout causes chaos as people scramble to figure out what happened.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 12,
                description:
                    'Investigate the cause of the blackout by accessing nearby systems.',
                success: '+1 Intel',
                fail: '-2 Health',
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 10,
                description:
                    'Navigate through the dark streets, avoiding dangers like looters.',
                success: '+2 Energy',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '62',
        title: 'Rogue AI',
        description:
            'A rogue AI has gained control of a local security system and is attacking citizens. Its influence spreads across nearby electronics, including your personal devices.',
        skillChecks: [
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 10,
                description:
                    "React quickly to avoid the AI's detection systems.",
                success: '+1 Edge',
                fail: '-2 Health',
            },
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 12,
                description:
                    'Hack the AI to shut it down before it causes more damage.',
                success: '-1 Heat',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '63',
        title: 'Gang Showdown',
        description:
            'A gang war breaks out in the heart of the district. Gunfire echoes in the streets as rival factions clash over turf. You need to decide whether to get involved or avoid the chaos.',
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 10,
                description:
                    'Charge in and confront one of the gangs directly.',
                success: '+1 Edge',
                fail: '-2 Health',
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 8,
                description:
                    'Use diplomacy to try and calm the gangs and stop the violence.',
                success: '-1 Heat',
                fail: '+2 Heat',
            },
        ],
    },
    {
        id: '64',
        title: 'Corporate Bribery',
        description:
            'A high-ranking corporate exec is caught in a bribery scandal. The news spreads quickly, and protests begin to stir. You can either exploit the situation or help calm the tensions.',
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 12,
                description:
                    'Use your social influence to sway the public opinion and calm the protesters.',
                success: '+1 Edge',
                fail: '-1 Edge',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description:
                    'Investigate the scandal and uncover hidden details that could be used for leverage.',
                success: '+1 Intel',
                fail: '-2 Health',
            },
        ],
    },
    {
        id: '65',
        title: 'Street Race',
        description:
            'A street race is taking place through the district, and it’s drawing huge crowds. The potential rewards are great, but the risks are just as high. Are you in?',
        skillChecks: [
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 10,
                description: 'Join the race and prove your driving skills.',
                success: '+3.000 ¥',
                fail: '-2 Health',
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 8,
                description:
                    'Help a racer with their vehicle to ensure they win the race.',
                success: '+1 Edge',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '66',
        title: 'Medical Crisis',
        description:
            'A viral outbreak hits the district, causing widespread panic. Medical facilities are overwhelmed, and only the most desperate are left to fend for themselves.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 12,
                description:
                    'Analyze the virus and help create a makeshift cure.',
                success: '+1 Intel',
                fail: '-2 Energy',
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description:
                    'Rally the people to stay calm and follow safety procedures.',
                success: '-1 Heat',
                fail: '+1 Heat',
            },
        ],
    },
]

const eventFacility: readonly Event[] = [
    {
        id: '71',
        title: 'System Anomaly',
        description:
            'The Neural Nexus system experiences a sudden, unexplained anomaly. Screens flicker, wires spark, and the usual hum of the servers is replaced by unsettling silence. An emergency shutdown is imminent, and the whole building could crash if not stabilized quickly.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 12,
                description:
                    "Analyze the anomaly's source and implement a corrective action to stabilize the system.",
                success: '+1 Temporary Logic',
                fail: '-2 Energy',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description:
                    'Spot the hidden cause of the malfunction and anticipate the next failure point.',
                success: '+1 Intel',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '72',
        title: 'Patrol Check',
        description:
            "As you enter PatrolHub, you're immediately confronted by a pair of security officers. They seem suspicious and are questioning your presence in the area. It's clear they are ready to test your credentials or try to get some extra information from you.",
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 12,
                description:
                    'Use your strength to physically assert yourself by intimidating the officers.',
                success: '+1 Temporary Strength',
                fail: '+1 Heat',
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description:
                    'Charm or persuade the officers, using your wit and presence to smooth over the situation.',
                success: '+1 Intel',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '73',
        title: 'Medical Malfunction',
        description:
            'A sudden medical malfunction has put several patients in critical condition. The usual staff is overwhelmed, and BioCare’s system is struggling to prioritize the patients in need of emergency care. You’ve been called in to help, but time is running out.',
        skillChecks: [
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 12,
                description:
                    'Use your agility to quickly navigate the chaotic environment and assist in moving patients to safety.',
                success: '+1 Temporary Agility',
                fail: '-2 Health',
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 10,
                description:
                    'Apply your strength to physically move patients or assist with heavy medical equipment.',
                success: '+1 Edge',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '74',
        title: 'Lost Data',
        description:
            'While enjoying the tranquil atmosphere of EchoGarden, a small portable data storage device is dropped nearby. Upon inspection, you realize it contains highly sensitive data, likely from a corporate leak. There are multiple ways to deal with the device, but time is running out.',
        skillChecks: [
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 12,
                description:
                    'React quickly to either stash the device in a safe spot or maneuver around others who might notice it.',
                success: '+1 Temporary Agility',
                fail: '-2 Energy',
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 10,
                description:
                    'Use your agility to keep the device hidden or avoid suspicion, gaining favor from the right people.',
                success: '+1 Edge',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '75',
        title: 'Dream Glitch',
        description:
            'As you enter DreamSphere, you’re immediately submerged into a vivid, immersive virtual experience. However, something seems off. The system glitches, causing the virtual environment to destabilize.',
        skillChecks: [
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 12,
                description:
                    'Use your instinct and quick thinking to identify the core issue and stabilize the virtual environment.',
                success: '+1 Temporary Intuition',
                fail: '-2 Energy',
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 10,
                description:
                    'Move swiftly to grab a lost runner’s attention and guide them to safety.',
                success: '+1 Edge',
                fail: '-2 Health',
            },
        ],
    },
    {
        id: '76',
        title: 'The Whisper Network',
        description:
            'The atmosphere in HoloLounge is electric tonight. The neon lights flash in sync with the pulsing beats, and people from all walks of life gather here. You spot an influential figure seated at the bar, surrounded by chatter.',
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 12,
                description:
                    'Charm your way into a conversation with the influential figure.',
                success: '+1 Temporary Charisma',
                fail: '+1 Heat',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description:
                    'Pay attention to the subtle body language and hidden cues in the conversation.',
                success: '+1 Intel',
                fail: '-1 Energy',
            },
        ],
    },
    {
        id: '77',
        title: 'Unplanned Challenge',
        description:
            "As you work out in the IronGym, a loud crash echoes across the room. A massive weight has fallen from the rack, pinning an unconscious individual beneath it. The gym is in chaos as people rush to help, but there's a delay in the emergency response.",
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 12,
                description:
                    'Lift the heavy weight off the person with raw strength.',
                success: '+1 Temporary Strength',
                fail: '-2 Health',
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 10,
                description:
                    'React fast to avoid getting caught under the wreckage or assist others in getting the person out safely.',
                success: '+1 Edge',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '78',
        title: 'Smuggler’s Test',
        description:
            "As you step into SmugglerDen, you're immediately stopped by a group of shady individuals guarding the entrance. They give you a hard stare and ask if you’ve got the right credentials to be here. It's clear they're not going to let anyone through without proving themselves.",
        skillChecks: [
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 12,
                description:
                    'Use your agility to slip past the guards unnoticed or avoid a confrontation with a quick dodge.',
                success: '+1 Temporary Agility',
                fail: '+1 Heat',
            },
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description:
                    'Use your wit to convince the guards that you belong, citing information or reasoning that gains their trust.',
                success: '+1 Edge',
                fail: '-2 Health',
            },
        ],
    },
    {
        id: '80',
        title: 'Old Rival Spotted',
        description:
            'Walking through the ruins of the Zerozone, you catch sight of an all-too-familiar figure: your old rival, a hardened individual with whom you share a bitter history. They notice you too, and their expression says it all—they’re not here for pleasantries. It’s time to settle the score.',
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 15,
                description:
                    'Attempt to overpower your rival in a physical showdown, using sheer force to gain the upper hand.',
                success: '+1 Temporary Strength',
                fail: '-2 Health',
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 12,
                description:
                    'Use your charm or wit to defuse the tension and gain the rival’s reluctant respect, avoiding violence.',
                success: '+1 Edge',
                fail: '+1 Heat',
            },
        ],
    },
]

const eventEncounter: readonly Event[] = [
    {
        id: '81',
        title: 'Mysterious Encounter',
        description:
            'In the center of NeuralNexus, a man with glasses and a perfect haircut analyzes streams of financial data with ease. Curious, you strike up a conversation. He explains a groundbreaking method for optimizing corporate finances—complex at first, but he breaks it down until you grasp the full picture. His insights reveal hidden structures you never noticed before. Before you can thank him, he vanishes into the crowd.',
        bonus: '+1 Logic',
    },
    {
        id: '83',
        title: 'Mysterious Encounter',
        description:
            'While in BioCare, you find yourself suffering from intense tooth pain. A beautiful woman with long black hair approaches, sensing your discomfort. She calmly explains the process to ease the pain, her hands steady as she demonstrates a quick, effective technique. Her soothing presence and clear knowledge help you understand the procedure, relieving your pain and giving you a sense of agility in both body and mind.',
        bonus: '+1 Agility',
    },
    {
        id: '84',
        title: 'Mysterious Encounter',
        description:
            "While strolling through the peaceful EchoGarden, you meet a tall man standing near a cluster of vibrant flowers. He seems to be in deep thought, admiring their beauty. He shares advice on how to better attune yourself to your surroundings and tap into its energy. His calm demeanor and deep understanding of the garden's flora put you at ease, helping you feel more composed and in tune with your surroundings.",
        bonus: '+1 Reaction',
    },
    {
        id: '85',
        title: 'Mysterious Encounter',
        description:
            'In the dim corner of the room, you notice a man sitting alone — his head clean-shaven, a long, fiery orange beard cascading down his chest. He silently sketches strange symbols and maps on a battered notepad, lost in his own world. A silent understanding forms between you — not of friendship, but of mutual recognition. You part ways, but the encounter sharpens your instincts and leaves you more attuned to the hidden currents of the world.',
        bonus: '+1 Intuition',
    },
    {
        id: '86',
        title: 'Mysterious Encounter',
        description:
            'Lost in thought, you sit alone in a corner of the HoloLounge. An older woman with grey hair and a slight limp approaches, offering a warm smile. She sits down beside you, speaking softly, encouraging you to look beyond the darkness and embrace the good in life. Her gentle words, coupled with her quiet strength, shift your perspective, offering a newfound sense of clarity and hope.',
        bonus: '+1 Charisma',
    },
    {
        id: '87',
        title: 'Mysterious Encounter',
        description:
            'The clang of metal fills IronGym, but one figure stands out — an older man, nearly bald with a thick grey beard and arms like forged steel. He lifts in silence, focused, almost meditative. You strike up a conversation. At first, he’s distant, but soon shares his philosophy on strength, resilience, and growth through pain. You leave with sore muscles — but also feeling stronger.',
        bonus: '+1 Strength',
    },
]

const eventData: readonly Event[] = [
    ...eventOnes,
    ...eventTwos,
    ...eventThrees,
    ...eventFours,
    ...eventFives,
    ...eventSixes,
    ...eventFacility,
    ...eventEncounter,
]

const eventMap = new Map(eventData.map((event: Event) => [event.id, event]))

const getEventById = (id: string): Event | undefined => {
    return eventMap.get(id)
}

export { getEventById }
