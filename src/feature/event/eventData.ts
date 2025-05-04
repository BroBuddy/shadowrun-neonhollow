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
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 12,
                description:
                    'Navigate the chaos and avoid hazards in the dark.',
                success: { text: '+2 Energy', resource: { Energy: +2 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
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
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 10,
                description:
                    'Dodge debris and gunfire while escaping the scene.',
                success: { text: '+2 Energy', resource: { Energy: +2 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
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
                success: { text: '-1 Heat', resource: { Heat: -1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 12,
                description: 'Forge clean credentials on the fly.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-1 Edge', resource: { Edge: -1 } },
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
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 10,
                description: 'React quickly to avoid running into danger.',
                success: { text: '+2 Energy', resource: { Energy: +2 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
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
                success: { text: '-1 Heat', resource: { Heat: -1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 12,
                description: 'Hold the line or break through violent crowds.',
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
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
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 8,
                description: 'Sell false leads to rival fixers.',
                success: { text: '+3.000 ¥', resource: { Nuyen: +3 } },
                fail: { text: '-1 Edge', resource: { Edge: -1 } },
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
                success: { text: '-2 Heat', resource: { Heat: -2 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description: 'Override a drone’s routine and redirect it.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
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
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description: 'Find a clean exit before the toxin spreads.',
                success: { text: '+2 Energy', resource: { Energy: +2 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
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
                success: { text: '+3.000 ¥', resource: { Nuyen: +3 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 8,
                description:
                    'Convince raiders you’re part of the cleanup crew.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-1 Edge', resource: { Edge: -1 } },
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
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 12,
                description: 'Resist the mental assault and clear your head.',
                success: { text: '+2 Health', resource: { Health: +2 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
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
                success: { text: '+3.000 ¥', resource: { Nuyen: +3 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description: 'Predict the courier’s next location.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
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
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-1 Edge', resource: { Edge: -1 } },
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 8,
                description: 'Piece together what the prophet truly knows.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
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
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 8,
                description:
                    'Slip between crossfire and vanish into the shadows.',
                success: { text: '-1 Heat', resource: { Heat: -1 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
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
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 8,
                description: 'Follow the hidden markers to the source.',
                success: { text: '+3.000 ¥', resource: { Nuyen: +3 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
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
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 12,
                description:
                    'Duck through blind spots before the scanners catch you.',
                success: { text: '+2 Energy', resource: { Energy: +2 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
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
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 8,
                description:
                    "Drag civilians out of a crashed tram's danger zone.",
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
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
                success: { text: '+3.000 ¥', resource: { Nuyen: +3 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description: 'Scan for traps and avoid potential setup.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
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
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description:
                    'Convince a fellow runner to share the hidden cache.',
                success: { text: '+3.000 ¥', resource: { Nuyen: +3 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
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
                success: { text: '-1 Heat', resource: { Heat: -1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 8,
                description: 'Escape quarantine patrols before they close in.',
                success: { text: '+2 Energy', resource: { Energy: +2 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
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
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-1 Edge', resource: { Edge: -1 } },
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 12,
                description: 'Track the origin of the false feed.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
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
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 8,
                description:
                    'Dodge falling wreckage and reach the scene first.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
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
                success: { text: '+3.000 ¥', resource: { Nuyen: +3 } },
                fail: { text: '-1 Edge', resource: { Edge: -1 } },
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 12,
                description: 'Notice the hidden ambush and slip out early.',
                success: { text: '-1 Heat', resource: { Heat: -1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
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
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 10,
                description: 'Hold steady and ride out the seizures.',
                success: { text: '+2 Health', resource: { Health: +2 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
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
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 10,
                description: 'Outrun competitors and reach the cache first.',
                success: { text: '+3.000 ¥', resource: { Nuyen: +3 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
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
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-1 Edge', resource: { Edge: -1 } },
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 12,
                description:
                    "Track the team's movements and sabotage their plan.",
                success: { text: '-1 Heat', resource: { Heat: -1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
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
                success: { text: '+2 Energy', resource: { Energy: +2 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description:
                    'Hack into their systems and disable riot controls.',
                success: { text: '-1 Heat', resource: { Heat: -1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
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
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-1 Edge', resource: { Edge: -1 } },
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description:
                    'Investigate for more intelligence on the official.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
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
                success: { text: '+3.000 ¥', resource: { Nuyen: +3 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 8,
                description: 'Bet on another fighter and avoid the fight.',
                success: { text: '+3.000 ¥', resource: { Nuyen: +3 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
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
                success: { text: '+2 Energy', resource: { Energy: +2 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 12,
                description: 'Dodge debris and move swiftly through the chaos.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
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
                success: { text: '+3.000 ¥', resource: { Nuyen: +3 } },
                fail: { text: '-1 Edge', resource: { Edge: -1 } },
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 10,
                description: 'Take the weapons by intimidation.',
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
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
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 10,
                description:
                    'Navigate dark streets, avoiding looters and hazards.',
                success: { text: '+2 Energy', resource: { Energy: +2 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
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
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 12,
                description:
                    'Hack the AI to shut it down before it causes more damage.',
                success: { text: '-1 Heat', resource: { Heat: -1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
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
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 8,
                description:
                    'Use diplomacy to calm the gangs and stop the violence.',
                success: { text: '-1 Heat', resource: { Heat: -1 } },
                fail: { text: '+2 Heat', resource: { Heat: +2 } },
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
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-1 Edge', resource: { Edge: -1 } },
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description: 'Investigate the scandal for leverage.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
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
                success: { text: '+3.000 ¥', resource: { Nuyen: +3 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 8,
                description:
                    'Help a racer with their vehicle to ensure they win.',
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
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
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description:
                    'Rally people to stay calm and follow safety procedures.',
                success: { text: '-1 Heat', resource: { Heat: -1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
        ],
    },
]

const eventFacility: readonly Event[] = [
    {
        id: '71',
        title: 'System Anomaly',
        description:
            'The CyberLab system glitches, sparking wires and eerie silence. Emergency shutdown looms unless stabilized quickly.',
        skillChecks: [
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 12,
                description:
                    'Analyze the source of the anomaly and implement corrective actions.',
                success: {
                    text: '+1 Temporary Logic',
                    resource: { Logic: +1 },
                },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description:
                    'Spot the hidden cause and anticipate the next failure point.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
        ],
    },
    {
        id: '72',
        title: 'Security Check',
        description:
            'Security officers confront you at SecurityHub, suspicious of your presence. Smooth the encounter or stand your ground.',
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 12,
                description: 'Use strength to intimidate the officers.',
                success: {
                    text: '+1 Temporary Strength',
                    resource: { Strength: +1 },
                },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 10,
                description:
                    'Charm or persuade the officers to smooth over the situation.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
        ],
    },
    {
        id: '73',
        title: 'Medical Malfunction',
        description:
            'Critical patients overwhelm VitalClinic systems. Time is running out to assist in the chaotic environment.',
        skillChecks: [
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 12,
                description:
                    'Quickly navigate the chaos and assist patients to safety.',
                success: {
                    text: '+1 Temporary Agility',
                    resource: { Agility: +1 },
                },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 10,
                description:
                    'Move patients or assist with heavy equipment using strength.',
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
        ],
    },
    {
        id: '74',
        title: 'Lost Data',
        description:
            'A portable device with sensitive data is found at EchoGarden. How you handle it could have consequences.',
        skillChecks: [
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 12,
                description:
                    'React quickly to stash or maneuver around others.',
                success: {
                    text: '+1 Temporary Agility',
                    resource: { Agility: +1 },
                },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
            },
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 10,
                description: 'Keep the device hidden or avoid suspicion.',
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
        ],
    },
    {
        id: '75',
        title: 'Dream Glitch',
        description:
            'Entering DreamHaven, you’re submerged into a virtual reality glitch that destabilizes the environment.',
        skillChecks: [
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 12,
                description:
                    'Identify the core issue and stabilize the virtual environment.',
                success: {
                    text: '+1 Temporary Intuition',
                    resource: { Intuition: +1 },
                },
                fail: { text: '-2 Energy', resource: { Energy: -2 } },
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 10,
                description: 'Guide a lost runner to safety during the chaos.',
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
        ],
    },
    {
        id: '76',
        title: 'The Whisper Network',
        description:
            'PulseBar is electric, and a powerful figure sits at the bar surrounded by chatter. Make your move.',
        skillChecks: [
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 12,
                description:
                    'Charm your way into conversation with the figure.',
                success: {
                    text: '+1 Temporary Charisma',
                    resource: { Charisma: +1 },
                },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
            {
                attribute: 'Intuition',
                icon: '🧠',
                dc: 10,
                description: 'Spot subtle cues in the conversation.',
                success: { text: '+1 Intel', resource: { Intel: +1 } },
                fail: { text: '-1 Energy', resource: { Energy: -1 } },
            },
        ],
    },
    {
        id: '77',
        title: 'Unplanned Challenge',
        description:
            'A fallen weight traps someone at IronGym. Chaos erupts as the emergency response is delayed.',
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 12,
                description: 'Lift the heavy weight off the person.',
                success: {
                    text: '+1 Temporary Strength',
                    resource: { Strength: +1 },
                },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Reaction',
                icon: '💪',
                dc: 10,
                description:
                    'Assist in freeing the person or avoid further danger.',
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
        ],
    },
    {
        id: '78',
        title: 'Smuggler’s Test',
        description:
            'At SmugglerDen, shady guards test your credentials. Prove yourself or slip through unnoticed.',
        skillChecks: [
            {
                attribute: 'Agility',
                icon: '💪',
                dc: 12,
                description: 'Slip past the guards or dodge confrontation.',
                success: {
                    text: '+1 Temporary Agility',
                    resource: { Agility: +1 },
                },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
            {
                attribute: 'Logic',
                icon: '🧠',
                dc: 10,
                description: 'Convince the guards that you belong.',
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
        ],
    },
    {
        id: '80',
        title: 'Old Rival Spotted',
        description:
            'In the Zerozone ruins, your old rival surfaces. The confrontation is inevitable—how will you handle it?',
        skillChecks: [
            {
                attribute: 'Strength',
                icon: '💪',
                dc: 15,
                description: 'Overpower your rival in a physical showdown.',
                success: {
                    text: '+1 Temporary Strength',
                    resource: { Strength: +1 },
                },
                fail: { text: '-2 Health', resource: { Health: -2 } },
            },
            {
                attribute: 'Charisma',
                icon: '🧠',
                dc: 12,
                description: 'Defuse tension and earn reluctant respect.',
                success: { text: '+1 Edge', resource: { Edge: +1 } },
                fail: { text: '+1 Heat', resource: { Heat: +1 } },
            },
        ],
    },
]

const eventEncounter: readonly Event[] = [
    {
        id: '81',
        title: 'Mysterious Runner',
        description:
            'At CyberLab, a man explains groundbreaking methods for optimizing finances, revealing hidden structures. Before you thank him, he vanishes.',
        bonus: '+1 Logic',
    },
    {
        id: '83',
        title: 'Mysterious Runner',
        description:
            'At VitalClinic, a woman helps ease your tooth pain with calm expertise, leaving you feeling agile in both body and mind.',
        bonus: '+1 Agility',
    },
    {
        id: '84',
        title: 'Mysterious Runner',
        description:
            'In EchoGarden, a man shares advice on attuning to your surroundings, leaving you composed and in sync with the world.',
        bonus: '+1 Reaction',
    },
    {
        id: '85',
        title: 'Mysterious Runner',
        description:
            'A man with a fiery orange beard sketches symbols in a corner. The encounter sharpens your instincts and attunes you to hidden currents.',
        bonus: '+1 Intuition',
    },
    {
        id: '86',
        title: 'Mysterious Runner',
        description:
            'At PulseBar, a gentle older woman shifts your perspective, offering clarity and hope with her quiet strength.',
        bonus: '+1 Charisma',
    },
    {
        id: '87',
        title: 'Mysterious Runner',
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
