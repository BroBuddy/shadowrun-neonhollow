import { Event } from './EventType'

const eventOnes: readonly Event[] = [
    {
        id: '11',
        title: 'Power Surge',
        description:
            'Lights across the district flicker out, leaving critical systems down and streets in eerie darkness. Panic spreads, while some exploit the chaos.',
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
            'Gunfire turns into a turf war between gangs, spilling into the streets. Civilians scatter for cover, but you’re caught in the fray.',
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
            'Men in suits roll out citywide audits with identity checks and data sweeps. Clean records walk free; others vanish into the system.',
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
            'Public holograms glitch and overload senses, causing chaos. Panic and hallucinations leave the city in a surreal, dangerous state.',
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
            'A peaceful protest becomes full-blown unrest. Armed patrols clash with rioters, barricades rise, and drones monitor the chaos.',
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
            'Confidential data floods the net. Fixers and runners scramble to secure valuable intel before it’s lost—or weaponized.',
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
            'Surveillance drones act erratically, scanning innocents and crashing. Citizens are on edge, and runners face high-priority flags.',
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
            'A transport truck near a biochem depot leaks vapor, burning the air. Residents flee, but looters dive in for salvage.',
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
            'Authorities raid underground trade hubs. Smugglers scatter while some take the chance to grab tech amidst the chaos.',
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
            'Neural implants buzz with strange pulses, triggering random thoughts and leaving people dizzy or worse.',
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
            'A rogue courier bot jets through alleys, rumored to carry valuable data chips or secret AI intel.',
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
            'A cloaked figure warns of AI doom and collapsing systems. His predictions start causing chaos throughout the streets.',
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
            'An unknown gang launches a blitz with hacked beasts and enforcers. Chaos spreads fast, and you’re caught in the middle.',
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
            'A rogue signal displays cryptic messages and blueprints, spreading through backchannels. Corps scramble to shut it down.',
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
            'A corp showcases drones, convoys, and execs downtown. Surveillance fills the area, making it dangerous to move unnoticed.',
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
            'A rare energy storm warps electronics. Neon lights flicker, vehicles stall, and neural links spark dangerously.',
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
            'A corp-marked container washes up in the city canal, half-submerged and blinking. Grab it or walk away?',
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
            'Old net architecture awakens, flooding terminals with ghost code. Runners suspect an AI stirring from dormancy.',
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
            'A mutated bio-virus escapes containment. Streets are locked down, with drones scanning for infection as runners are blamed.',
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
            'A media node broadcasts a deepfake of you committing a crime. Fix it before your reputation takes a hit.',
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
            'A corp zeppelin crashes into a block. Fires spread, alarms wail, and panic ensues. You’re nearby and might be able to help.',
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
            'A fixer negotiates a risky black-market deal in an alley. Step in to help or leave before things get ugly.',
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
            'A firmware patch leaves implant users with spasms, hallucinations, and memory gaps. Wired individuals feel it instantly.',
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
            'A cryptic drop hints at an abandoned corp cache. Rival runners begin hunting, but the system guarding it is dangerous.',
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
            "A rival corp's team tries to steal data, creating chaos. Decide how you'll get involved.",
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
                    "Track the team's movements and sabotage their plan.",
                success: '-1 Heat',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '52',
        title: 'Hacker Riot',
        description:
            'A hacker group disrupts comms and electronics, creating chaos in the streets.',
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
                    'Hack into their systems and disable riot controls.',
                success: '-1 Heat',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '53',
        title: 'Corruption Unveiled',
        description:
            'A councilor’s corruption is exposed, sparking protests. You can calm or stoke the flames.',
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
                    'Investigate for more intelligence on the official.',
                success: '+1 Intel',
                fail: '-2 Health',
            },
        ],
    },
    {
        id: '54',
        title: 'Underground Duel',
        description:
            'A high-stakes combat tournament offers a tempting payday, but it’s not without risk.',
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 10,
                description: 'Enter the tournament and fight for the prize.',
                success: '+3.000 ¥',
                fail: '-2 Health',
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 8,
                description: 'Bet on another fighter and avoid the fight.',
                success: '+3.000 ¥',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '55',
        title: 'Neon Storm',
        description:
            'A massive storm disrupts power and comms, as neon lights flicker and chaos ensues.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description: 'Analyze the storm to find the safest route out.',
                success: '+2 Energy',
                fail: '-2 Health',
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 12,
                description: 'Dodge debris and move swiftly through the chaos.',
                success: '+1 Intel',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '56',
        title: 'Black Market Deal',
        description:
            'The black market buzzes with a high-value trade involving rare weapons tech.',
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 8,
                description: 'Negotiate a better deal with vendors.',
                success: '+3.000 ¥',
                fail: '-1 Edge',
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 10,
                description: 'Take the weapons by intimidation.',
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
            'A sudden outage plunges the district into darkness, causing chaos as people scramble for answers.',
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
                    'Navigate dark streets, avoiding looters and hazards.',
                success: '+2 Energy',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '62',
        title: 'Rogue AI',
        description:
            'A rogue AI attacks citizens, spreading its control across nearby electronics, including your devices.',
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
            'A gang war breaks out, with gunfire echoing as rival factions clash. You must choose to engage or escape.',
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
                    'Use diplomacy to calm the gangs and stop the violence.',
                success: '-1 Heat',
                fail: '+2 Heat',
            },
        ],
    },
    {
        id: '64',
        title: 'Corporate Bribery',
        description:
            'A corporate exec is caught in a bribery scandal, sparking protests. Exploit or calm the situation.',
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 12,
                description: 'Sway public opinion and calm the protesters.',
                success: '+1 Edge',
                fail: '-1 Edge',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description: 'Investigate the scandal for leverage.',
                success: '+1 Intel',
                fail: '-2 Health',
            },
        ],
    },
    {
        id: '65',
        title: 'Street Race',
        description:
            'A high-stakes street race draws huge crowds. The rewards are tempting, but the risks are high.',
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
                    'Help a racer with their vehicle to ensure they win.',
                success: '+1 Edge',
                fail: '-2 Energy',
            },
        ],
    },
    {
        id: '66',
        title: 'Medical Crisis',
        description:
            'A viral outbreak overwhelms medical facilities. Panic spreads as people fend for themselves.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 12,
                description: 'Analyze the virus and create a makeshift cure.',
                success: '+1 Intel',
                fail: '-2 Energy',
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description:
                    'Rally people to stay calm and follow safety procedures.',
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
        location: 'CyberLab',
        description:
            'The CyberLab system glitches, sparking wires and eerie silence. Emergency shutdown looms unless stabilized quickly.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 12,
                description:
                    'Analyze the source of the anomaly and implement corrective actions.',
                success: '+1 Temporary Logic',
                fail: '-2 Energy',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description:
                    'Spot the hidden cause and anticipate the next failure point.',
                success: '+1 Intel',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '72',
        title: 'Security Check',
        location: 'SecurityHub',
        description:
            'Security officers confront you at PatrolHub, suspicious of your presence. Smooth the encounter or stand your ground.',
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 12,
                description: 'Use strength to intimidate the officers.',
                success: '+1 Temporary Strength',
                fail: '+1 Heat',
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description:
                    'Charm or persuade the officers to smooth over the situation.',
                success: '+1 Intel',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '73',
        title: 'Medical Malfunction',
        location: 'VitalClinic',
        description:
            'Critical patients overwhelm BioCare systems. Time is running out to assist in the chaotic environment.',
        skillChecks: [
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 12,
                description:
                    'Quickly navigate the chaos and assist patients to safety.',
                success: '+1 Temporary Agility',
                fail: '-2 Health',
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 10,
                description:
                    'Move patients or assist with heavy equipment using strength.',
                success: '+1 Edge',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '74',
        title: 'Lost Data',
        location: 'EchoGarden',
        description:
            'A portable device with sensitive data is found at EchoGarden. How you handle it could have consequences.',
        skillChecks: [
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 12,
                description:
                    'React quickly to stash or maneuver around others.',
                success: '+1 Temporary Agility',
                fail: '-2 Energy',
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 10,
                description: 'Keep the device hidden or avoid suspicion.',
                success: '+1 Edge',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '75',
        title: 'Dream Glitch',
        location: 'DreamHaven',
        description:
            'Entering DreamHaven, you’re submerged into a virtual reality glitch that destabilizes the environment.',
        skillChecks: [
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 12,
                description:
                    'Identify the core issue and stabilize the virtual environment.',
                success: '+1 Temporary Intuition',
                fail: '-2 Energy',
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 10,
                description: 'Guide a lost runner to safety during the chaos.',
                success: '+1 Edge',
                fail: '-2 Health',
            },
        ],
    },
    {
        id: '76',
        title: 'The Whisper Network',
        location: 'PulseBar',
        description:
            'PulseBar is electric, and a powerful figure sits at the bar surrounded by chatter. Make your move.',
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 12,
                description:
                    'Charm your way into conversation with the figure.',
                success: '+1 Temporary Charisma',
                fail: '+1 Heat',
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description: 'Spot subtle cues in the conversation.',
                success: '+1 Intel',
                fail: '-1 Energy',
            },
        ],
    },
    {
        id: '77',
        title: 'Unplanned Challenge',
        location: 'IronGym',
        description:
            'A fallen weight traps someone at IronGym. Chaos erupts as the emergency response is delayed.',
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 12,
                description: 'Lift the heavy weight off the person.',
                success: '+1 Temporary Strength',
                fail: '-2 Health',
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 10,
                description:
                    'Assist in freeing the person or avoid further danger.',
                success: '+1 Edge',
                fail: '+1 Heat',
            },
        ],
    },
    {
        id: '78',
        title: 'Smuggler’s Test',
        location: 'SmugglerDen',
        description:
            'At SmugglerDen, shady guards test your credentials. Prove yourself or slip through unnoticed.',
        skillChecks: [
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 12,
                description: 'Slip past the guards or dodge confrontation.',
                success: '+1 Temporary Agility',
                fail: '+1 Heat',
            },
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description: 'Convince the guards that you belong.',
                success: '+1 Edge',
                fail: '-2 Health',
            },
        ],
    },
    {
        id: '80',
        title: 'Old Rival Spotted',
        location: 'ZeroZone',
        description:
            'In the Zerozone ruins, your old rival surfaces. The confrontation is inevitable—how will you handle it?',
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 15,
                description: 'Overpower your rival in a physical showdown.',
                success: '+1 Temporary Strength',
                fail: '-2 Health',
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 12,
                description: 'Defuse tension and earn reluctant respect.',
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
        location: 'CyberLab',
        description:
            'At CyberLab, a man explains groundbreaking methods for optimizing finances, revealing hidden structures. Before you thank him, he vanishes.',
        bonus: '+1 Logic',
    },
    {
        id: '83',
        title: 'Mysterious Encounter',
        location: 'VitalClinic',
        description:
            'At VitalClinic, a woman helps ease your tooth pain with calm expertise, leaving you feeling agile in both body and mind.',
        bonus: '+1 Agility',
    },
    {
        id: '84',
        title: 'Mysterious Encounter',
        location: 'EchoGarden',
        description:
            'In EchoGarden, a man shares advice on attuning to your surroundings, leaving you composed and in sync with the world.',
        bonus: '+1 Reaction',
    },
    {
        id: '85',
        title: 'Mysterious Encounter',
        location: 'DreamHaven',
        description:
            'A man with a fiery orange beard sketches symbols in a corner. The encounter sharpens your instincts and attunes you to hidden currents.',
        bonus: '+1 Intuition',
    },
    {
        id: '86',
        title: 'Mysterious Encounter',
        location: 'PulseBar',
        description:
            'At PulseBar, a gentle older woman shifts your perspective, offering clarity and hope with her quiet strength.',
        bonus: '+1 Charisma',
    },
    {
        id: '87',
        title: 'Mysterious Encounter',
        location: 'IronGym',
        description:
            'At IronGym, an older man shares a philosophy of growth through pain. You leave sore but stronger.',
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
