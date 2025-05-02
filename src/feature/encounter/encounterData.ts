import { Encounter } from './EncounterType'

const encounterCyberLab: readonly Encounter[] = [
    {
        tag: 'cyberlab1',
        title: 'Muscle Sync Suit',
        description:
            'A tech asks you to test a prototype that boosts body strength via artificial muscle alignment.',
        options: [
            {
                title: 'Wear the suit and run diagnostics.',
                reward: ['+1 Temporary Strength', '-2 Health'],
            },
            {
                title: 'Help with the software config.',
                reward: ['+1 Edge', '-2 Energy'],
            },
        ],
    },
    {
        tag: 'cyberlab2',
        title: 'Kinetic Reflex Module',
        description:
            'A new mobility enhancer aims to push agility to new limits. Trial candidates wanted.',
        options: [
            {
                title: 'Monitor movement data for improvements.',
                reward: ['+1 Intel', '-2 Energy'],
            },
            {
                title: 'Sprint through an obstacle course.',
                reward: ['+1 Temporary Agility', '-2 Health'],
            },
        ],
    },
    {
        tag: 'cyberlab3',
        title: 'Mirror Neuron Trial',
        description:
            'A new interface claims to enhance reflexes using neural mirroring. Volunteers needed.',
        options: [
            {
                title: 'Step in and test it yourself.',
                reward: ['+1 Temporary Reaction', '-2 Health'],
            },
            {
                title: 'Assist with the calibration remotely.',
                reward: ['+3.000 ¥', '-1 Edge'],
            },
        ],
    },
    {
        tag: 'cyberlab4',
        title: 'Project ORBITAL',
        description:
            'You find access to a restricted data vault full of fragmented experiment logs.',
        options: [
            {
                title: 'Dive deep into the files.',
                reward: ['+1 Temporary Logic', '-2 Energy'],
            },
            {
                title: 'Extract keywords and sell them.',
                reward: ['+3.000 ¥', '+1 Heat'],
            },
        ],
    },
    {
        tag: 'cyberlab5',
        title: 'Optical Drift',
        description:
            'A subject reports visual distortions after a retinal implant upgrade. Tech is unsure why.',
        options: [
            {
                title: 'Roll back the update manually.',
                reward: ['+1 Edge', '-3.000 ¥'],
            },
            {
                title: 'Try it on yourself to verify.',
                reward: ['+1 Temporary Intuition', '-2 Health'],
            },
        ],
    },
    {
        tag: 'cyberlab6',
        title: 'Persuasion Algorithm',
        description:
            'A prototype AI predicts speech patterns to enhance negotiation tactics.',
        options: [
            {
                title: 'Optimize its persuasive parameters.',
                reward: ['+3.000 ¥', '+1 Heat'],
            },
            {
                title: 'Test its dialogue models.',
                reward: ['+1 Temporary Charisma', '-1 Intel'],
            },
        ],
    },
]

const encounterVitalClinic: readonly Encounter[] = [
    {
        tag: 'vitalclinic1',
        title: 'Unidentified Virus',
        description:
            'A highly contagious illness spreads rapidly among VitalClinic’s patients. Quick intervention is needed.',
        options: [
            {
                title: 'Assist in isolating infected patients.',
                reward: ['+1 Temporary Strength', '-2 Health'],
            },
            {
                title: 'Analyze medical samples for a cure.',
                reward: ['+1 Edge', '-1 Intel'],
            },
        ],
    },
    {
        tag: 'vitalclinic2',
        title: 'Experimental Biotech Implant',
        description:
            'A new cybernetic implant designed to enhance endurance is undergoing human trials. Early adopters sought for testing.',
        options: [
            {
                title: 'Observe and provide feedback.',
                reward: ['+1 Edge', '-2 Energy'],
            },
            {
                title: 'Receive the implant.',
                reward: ['+1 Temporary Agility', '+1 Heat'],
            },
        ],
    },
    {
        tag: 'vitalclinic3',
        title: 'Smuggled Goods',
        description:
            'An underground smuggling ring is using the clinic to move illegal medical supplies. The source needs to be uncovered.',
        options: [
            {
                title: 'Track down the smugglers.',
                reward: ['+1 Temporary Reaction', '+1 Heat'],
            },
            {
                title: 'Confiscate the supplies for personal use.',
                reward: ['+3.000 ¥', '-2 Energy'],
            },
        ],
    },
    {
        tag: 'vitalclinic4',
        title: 'Rogue AI Malfunction',
        description:
            'VitalClinic’s automated diagnostic system begins issuing dangerously incorrect medical orders. Immediate action required.',
        options: [
            {
                title: 'Attempt to hack and override the AI.',
                reward: ['+1 Intel', '-1 Edge'],
            },
            {
                title: 'Physically disable the system.',
                reward: ['+1 Temporary Logic', '-3.000 ¥'],
            },
        ],
    },
    {
        tag: 'vitalclinic5',
        title: 'Overloaded ER',
        description:
            'An influx of patients from a nearby accident threatens to overwhelm VitalClinic’s staff. Volunteers needed to help stabilize the situation.',
        options: [
            {
                title: 'Step in and assist with triage.',
                reward: ['+1 Temporary Intuition', '-1 Edge'],
            },
            {
                title: 'Secure supplies from storage.',
                reward: ['+3.000 ¥', '-2 Health'],
            },
        ],
    },
    {
        tag: 'vitalclinic6',
        title: 'Disappearing Patient',
        description:
            'A patient under heavy sedation mysteriously vanishes overnight. Suspicion is mounting.',
        options: [
            {
                title: 'Question the staff and witnesses.',
                reward: ['+1 Intel', '+1 Heat'],
            },
            {
                title: 'Investigate security footage.',
                reward: ['+1 Temporary Charisma', '-2 Energy'],
            },
        ],
    },
]

const encounterSecurityHub: readonly Encounter[] = [
    {
        tag: 'securityhub1',
        title: 'Unauthorized Perimeter Breach',
        description:
            'An unknown entity has infiltrated the outer fence. Security teams are mobilizing.',
        options: [
            {
                title: 'Intercept the intruder head-on.',
                reward: ['+1 Temporary Strength', '-1 Intel'],
            },
            {
                title: 'Review surveillance footage to identify entry points.',
                reward: ['+1 Edge', '+1 Heat'],
            },
        ],
    },
    {
        tag: 'securityhub2',
        title: 'Parkour Training',
        description:
            'A security instructor offers advanced mobility training to help agents maneuver urban environments.',
        options: [
            {
                title: 'Provide feedback to improve the course.',
                reward: ['+3.000 ¥', '-2 Energy'],
            },
            {
                title: 'Participate in agility drills.',
                reward: ['+1 Temporary Agility', '+1 Heat'],
            },
        ],
    },
    {
        tag: 'securityhub3',
        title: 'High-Speed Pursuit',
        description:
            'A suspect attempts to escape on foot. Someone needs to react fast to take them down.',
        options: [
            {
                title: 'Sprint after the target through the streets.',
                reward: ['+1 Temporary Reaction', '-1 Intel'],
            },
            {
                title: 'Coordinate with nearby patrols to trap them.',
                reward: ['+1 Edge', '-3.000 ¥'],
            },
        ],
    },
    {
        tag: 'securityhub4',
        title: 'Encrypted Database Breach',
        description:
            'Hackers are attempting to infiltrate the SecurityHub’s classified archives. Countermeasures are required.',
        options: [
            {
                title: 'Manipulate their access to gain intel.',
                reward: ['+1 Intel', '+1 Heat'],
            },
            {
                title: 'Trace the signal and shut them out.',
                reward: ['+1 Temporary Logic', '-2 Energy'],
            },
        ],
    },
    {
        tag: 'securityhub5',
        title: 'Undercover Observation',
        description:
            'A mysterious individual has been frequenting the building, raising suspicion.',
        options: [
            {
                title: 'Directly question them about their presence.',
                reward: ['+1 Edge', '-3.000 ¥'],
            },
            {
                title: 'Blend in and gather information discreetly.',
                reward: ['+1 Temporary Intuition', '+1 Heat'],
            },
        ],
    },
    {
        tag: 'securityhub6',
        title: 'Diplomatic Negotiation',
        description:
            'A corporate executive is furious over denied access. Someone needs to de-escalate the situation.',
        options: [
            {
                title: 'Smooth-talk your way through the tension.',
                reward: ['+1 Temporary Charisma', '-1 Intel'],
            },
            {
                title: 'Offer them alternative solutions to calm them down.',
                reward: ['+3.000 ¥', '-1 Edge'],
            },
        ],
    },
]

const encounterPulseBar: readonly Encounter[] = [
    {
        tag: 'pulsebar1',
        title: 'Arm-Wrestling Showdown',
        description:
            'A local champion is hosting an arm-wrestling contest with big bets on the line.',
        options: [
            {
                title: 'Challenge them to prove your strength.',
                reward: ['+1 Temporary Strength', '+1 Heat'],
            },
            {
                title: 'Side bet on another contender.',
                reward: ['+1 Edge', '-1 Intel'],
            },
        ],
    },
    {
        tag: 'pulsebar2',
        title: 'Dance Floor Sprint',
        description:
            'A flash-dance battle erupts, testing speed and footwork in a chaotic show of agility.',
        options: [
            {
                title: 'Observe patterns and bet on the winner.',
                reward: ['+3.000 ¥', '-1 Edge'],
            },
            {
                title: 'Jump in and match their moves.',
                reward: ['+1 Temporary Agility', '-2 Health'],
            },
        ],
    },
    {
        tag: 'pulsebar3',
        title: 'Fast Reflex Drinking Game',
        description:
            'A bartender sets up a reaction-based drinking challenge—if you miss a beat, you lose.',
        options: [
            {
                title: 'Take on the challenge.',
                reward: ['+1 Temporary Reaction', '-2 Health'],
            },
            {
                title: 'Monitor participants for cheating.',
                reward: ['+1 Intel', '-2 Energy'],
            },
        ],
    },
    {
        tag: 'pulsebar4',
        title: 'Encrypted Bar Tab',
        description:
            'Someone left behind a complex digital receipt. Could be something valuable inside.',
        options: [
            {
                title: 'Sell the data to a fixer.',
                reward: ['+3.000 ¥', '-1 Edge'],
            },
            {
                title: 'Decode and analyze the transaction history.',
                reward: ['+1 Temporary Logic', '-2 Energy'],
            },
        ],
    },
    {
        tag: 'pulsebar5',
        title: 'Gut Instinct Wager',
        description:
            'A mysterious gambler offers a high-stakes game where intuition matters more than skill.',
        options: [
            {
                title: 'Play cautiously and gather intel.',
                reward: ['+1 Edge', '-3.000 ¥'],
            },
            {
                title: 'Trust your instincts and make a bold bet.',
                reward: ['+1 Temporary Intuition', '+1 Heat'],
            },
        ],
    },
    {
        tag: 'pulsebar6',
        title: 'Smooth Talker’s Challenge',
        description:
            'A social influencer dares you to out-charm them in a live-streamed debate.',
        options: [
            {
                title: 'Show off your charisma in the challenge.',
                reward: ['+1 Temporary Charisma', '-1 Intel'],
            },
            {
                title: 'Sponsor the event to gain influence.',
                reward: ['+3.000 ¥', '-1 Edge'],
            },
        ],
    },
]

const encounterDreamHaven: readonly Encounter[] = [
    {
        tag: 'dreamhaven1',
        title: 'Brawler’s Pit',
        description:
            'A group of fighters is hosting a no-rules sparring contest in a hidden corner of DreamHaven.',
        options: [
            {
                title: 'Observe and place bets on the strongest fighter.',
                reward: ['+1 Edge', '-1 Intel'],
            },
            {
                title: 'Step into the ring and test your might.',
                reward: ['+1 Temporary Strength', '-2 Health'],
            },
        ],
    },
    {
        tag: 'dreamhaven2',
        title: 'Neon Rooftop Chase',
        description:
            'A rogue courier is being pursued across the rooftops of DreamHaven. Join the chase or watch from below.',
        options: [
            {
                title: 'Sprint across neon-lit rooftops to intercept them.',
                reward: ['+1 Temporary Agility', '-2 Energy'],
            },
            {
                title: 'Track their movements and signal their location.',
                reward: ['+1 Intel', '+1 Heat'],
            },
        ],
    },
    {
        tag: 'dreamhaven3',
        title: 'Reflex Arcade Showdown',
        description:
            'A high-speed, reflex-based arcade game is running a tournament. Reaction time is everything.',
        options: [
            {
                title: 'Hack the machine and manipulate the scoreboard.',
                reward: ['+3.000 ¥', '-1 Edge'],
            },
            {
                title: 'Compete in the tournament and prove your reflexes.',
                reward: ['+1 Temporary Reaction', '+1 Heat'],
            },
        ],
    },
    {
        tag: 'dreamhaven4',
        title: 'Encrypted Dream Archive',
        description:
            'A strange terminal in DreamHaven grants access to fragmented memories encoded in data streams.',
        options: [
            {
                title: 'Decipher the encrypted fragments.',
                reward: ['+1 Temporary Logic', '-1 Intel'],
            },
            {
                title: 'Sell the data to an interested party.',
                reward: ['+3.000 ¥', '+1 Heat'],
            },
        ],
    },
    {
        tag: 'dreamhaven5',
        title: 'The Mirage Gamble',
        description:
            'A shimmering anomaly appears in DreamHaven—a visual distortion rumored to predict fortunes.',
        options: [
            {
                title: 'Trust the vision and make a daring wager.',
                reward: ['+1 Temporary Intuition', '-1 Edge'],
            },
            {
                title: 'Study the anomaly for scientific insight.',
                reward: ['+1 Intel', '-3.000 ¥'],
            },
        ],
    },
    {
        tag: 'dreamhaven6',
        title: 'The Silver Tongue Show',
        description:
            'A legendary speaker is hosting an improv persuasion contest. The crowd awaits clever words.',
        options: [
            {
                title: 'Sponsor the event for influence.',
                reward: ['+3.000 ¥', '-1 Edge'],
            },
            {
                title: 'Step up and deliver your most convincing argument.',
                reward: ['+1 Temporary Charisma', '-1 Intel'],
            },
        ],
    },
]

const encounterEchoGarden: readonly Encounter[] = [
    {
        tag: 'echogarden1',
        title: 'Roots of Resilience',
        description:
            'An ancient tree stands in the middle of EchoGarden. Legends say it only bows to true strength.',
        options: [
            {
                title: 'Study its structure to understand its resilience.',
                reward: ['+1 Edge', '-1 Intel'],
            },
            {
                title: 'Test your might against its unyielding bark.',
                reward: ['+1 Temporary Strength', '-2 Health'],
            },
        ],
    },
    {
        tag: 'echogarden2',
        title: "Mist Runner's Path",
        description:
            'A winding trail vanishes into thick fog—only the fastest can navigate it before the mist settles.',
        options: [
            {
                title: 'Map the terrain to help future runners.',
                reward: ['+1 Intel', '+1 Heat'],
            },
            {
                title: 'Dash through the path at full speed.',
                reward: ['+1 Temporary Agility', '-2 Energy'],
            },
        ],
    },
    {
        tag: 'echogarden3',
        title: 'The Reflex Dance',
        description:
            'Bioluminescent plants pulse in complex patterns, creating a mesmerizing test of reaction time.',
        options: [
            {
                title: 'Sync your movements with the shifting lights.',
                reward: ['+1 Temporary Reaction', '-2 Energy'],
            },
            {
                title: 'Observe the pattern and predict the next pulses.',
                reward: ['+3.000 ¥', '-1 Edge'],
            },
        ],
    },
    {
        tag: 'echogarden4',
        title: 'Encrypted Seed Vault',
        description:
            'A hidden botanical research site holds genetic data of rare plants—someone is trying to crack it open.',
        options: [
            {
                title: 'Attempt to decrypt the vault’s security.',
                reward: ['+1 Temporary Logic', '-1 Intel'],
            },
            {
                title: 'Sell the access codes to a collector.',
                reward: ['+3.000 ¥', '+1 Heat'],
            },
        ],
    },
    {
        tag: 'echogarden5',
        title: 'Whispering Blooms',
        description:
            'Some flowers in EchoGarden are said to predict the future in their rustling petals—if you listen closely.',
        options: [
            {
                title: 'Analyze the airflow to understand the phenomenon.',
                reward: ['+1 Intel', '-2 Energy'],
            },
            {
                title: 'Trust the whispers and follow their guidance.',
                reward: ['+1 Temporary Intuition', '-1 Edge'],
            },
        ],
    },
    {
        tag: 'echogarden6',
        title: 'The Hidden Negotiation',
        description:
            'A quiet dispute between rival factions is unfolding in EchoGarden. A skilled negotiator could settle it.',
        options: [
            {
                title: 'Step in and mediate with confidence.',
                reward: ['+1 Temporary Charisma', '-1 Intel'],
            },
            {
                title: 'Fund a private deal to tip the scales.',
                reward: ['+3.000 ¥', '-1 Edge'],
            },
        ],
    },
]

const encounterIronGym: readonly Encounter[] = [
    {
        tag: 'irongym1',
        title: 'Heavy Lifting Challenge',
        description:
            'A gym veteran dares you to test your raw power against their personal record.',
        options: [
            {
                title: 'Spot for them and learn their technique.',
                reward: ['+1 Edge', '-1 Intel'],
            },
            {
                title: 'Push yourself beyond your limits.',
                reward: ['+1 Temporary Strength', '-2 Health'],
            },
        ],
    },
    {
        tag: 'irongym2',
        title: 'Speed Bag Drill',
        description:
            'A trainer challenges you to keep perfect rhythm on the speed bag without losing tempo.',
        options: [
            {
                title: 'Watch and analyze their technique for efficiency.',
                reward: ['+3.000 ¥', '-2 Energy'],
            },
            {
                title: 'Take the challenge and sharpen your reflexes.',
                reward: ['+1 Temporary Agility', '-1 Heat'],
            },
        ],
    },
    {
        tag: 'irongym3',
        title: 'Reaction Test Sparring',
        description:
            'A sparring session is underway to assess who has the fastest reflexes under pressure.',
        options: [
            {
                title: 'Step into the ring and test your reaction speed.',
                reward: ['+1 Temporary Reaction', '-1 Heat'],
            },
            {
                title: 'Coach someone from the sidelines with strategic advice.',
                reward: ['+1 Intel', '-1 Edge'],
            },
        ],
    },
    {
        tag: 'irongym4',
        title: 'Fitness Tracker Hack',
        description:
            'Someone suspects their gym data is being tampered with—can you uncover the truth?',
        options: [
            {
                title: 'Sell the data to an interested third party.',
                reward: ['+3.000 ¥', '+1 Heat'],
            },
            {
                title: 'Investigate the tracker and fix its anomalies.',
                reward: ['+1 Temporary Logic', '-1 Intel'],
            },
        ],
    },
    {
        tag: 'irongym5',
        title: 'Mindful Lifting',
        description:
            'An instructor preaches that true strength comes from mental awareness, not just muscle.',
        options: [
            {
                title: 'Focus on deep intuition during your workout.',
                reward: ['+1 Temporary Intuition', '-1 Edge'],
            },
            {
                title: 'Study their philosophy to understand their approach.',
                reward: ['+1 Intel', '-2 Energy'],
            },
        ],
    },
    {
        tag: 'irongym6',
        title: 'Gym Influencer Promotion',
        description:
            'A social media fitness influencer is filming content—this could be your moment.',
        options: [
            {
                title: 'Step into the spotlight and show your charisma.',
                reward: ['+1 Temporary Charisma', '+1 Heat'],
            },
            {
                title: 'Sponsor the event to gain exposure.',
                reward: ['+1 Edge', '-3.000 ¥'],
            },
        ],
    },
]

const encounterZeroZone: readonly Encounter[] = [
    {
        tag: 'zerozone1',
        title: 'Power Grid Lockdown',
        description:
            'A sudden blackout hits ZeroZone. Security teams scramble to restore power while others take advantage of the chaos.',
        options: [
            {
                title: 'Force open the emergency generators manually.',
                reward: ['+1 Temporary Strength', '-2 Health'],
            },
            {
                title: 'Override the system using technical expertise.',
                reward: ['+1 Edge', '-1 Intel'],
            },
        ],
    },
    {
        tag: 'zerozone2',
        title: "Void Runner's Gauntlet",
        description:
            'A deadly obstacle course in ZeroZone tests agility and reflexes, attracting daredevils and risk-takers.',
        options: [
            {
                title: 'Run the gauntlet at full speed.',
                reward: ['+1 Temporary Agility', '+1 Heat'],
            },
            {
                title: 'Study the course and plan an optimized route.',
                reward: ['+1 Intel', '-2 Energy'],
            },
        ],
    },
    {
        tag: 'zerozone3',
        title: 'Reflex Override Test',
        description:
            'A rogue AI is challenging participants to beat its reaction speed in a high-stakes contest.',
        options: [
            {
                title: 'Accept the challenge and go head-to-head.',
                reward: ['+1 Temporary Reaction', '+1 Heat'],
            },
            {
                title: 'Analyze its programming to discover weaknesses.',
                reward: ['+1 Intel', '-1 Edge'],
            },
        ],
    },
    {
        tag: 'zerozone4',
        title: 'Encrypted Market Exchange',
        description:
            'A secret data marketplace is operating in ZeroZone—hidden deals for those who can crack the system.',
        options: [
            {
                title: 'Sell insider knowledge to a fixer.',
                reward: ['+3.000 ¥', '-2 Energy'],
            },
            {
                title: 'Break into the encryption and access the files.',
                reward: ['+1 Temporary Logic', '-1 Intel'],
            },
        ],
    },
    {
        tag: 'zerozone5',
        title: 'Instinct Rush',
        description:
            'ZeroZone’s underground betting ring thrives on gut-feeling wagers—uncertainty is part of the thrill.',
        options: [
            {
                title: 'Play it cautiously and collect intelligence.',
                reward: ['+3.000 ¥', '-1 Intel'],
            },
            {
                title: 'Trust your instincts and make a bold bet.',
                reward: ['+1 Temporary Intuition', '-1 Edge'],
            },
        ],
    },
    {
        tag: 'zerozone6',
        title: 'Underground Negotiation',
        description:
            'An elite trade deal is happening in the deepest levels of ZeroZone—sharp words can make or break fortunes.',
        options: [
            {
                title: 'Fund a private arrangement for influence.',
                reward: ['+1 Edge', '-3.000 ¥'],
            },
            {
                title: 'Step in and secure the best possible deal.',
                reward: ['+1 Temporary Charisma', '-1 Intel'],
            },
        ],
    },
]

const encounterSmugglerDen: readonly Encounter[] = [
    {
        tag: 'smugglerden1',
        title: 'Black Market Brawl',
        description:
            'Tensions rise as two rival smugglers dispute over stolen cargo. A fight is about to break out.',
        options: [
            {
                title: 'Step in and settle it with brute force.',
                reward: ['+1 Temporary Strength', '-2 Health'],
            },
            {
                title: 'Negotiate a deal to split the goods.',
                reward: ['+3.000 ¥', '-1 Edge'],
            },
        ],
    },
    {
        tag: 'smugglerden2',
        title: 'Underground Escape Route',
        description:
            'A secret passage is closing fast—only the quickest can make it out before it’s locked down.',
        options: [
            {
                title: 'Sprint through the narrow tunnels before they seal.',
                reward: ['+1 Temporary Agility', '+1 Heat'],
            },
            {
                title: 'Find an alternate way and secure an exit plan.',
                reward: ['+1 Edge', '-2 Energy'],
            },
        ],
    },
    {
        tag: 'smugglerden3',
        title: 'Split-Second Drop',
        description:
            'A contraband delivery is scheduled to arrive—timing is crucial to snatch it before security does.',
        options: [
            {
                title: 'Distract security to buy extra time.',
                reward: ['+1 Intel', '-1 Edge'],
            },
            {
                title: 'React instantly and grab the goods.',
                reward: ['+1 Temporary Reaction', '+1 Heat'],
            },
        ],
    },
    {
        tag: 'smugglerden4',
        title: 'Encrypted Supply Ledger',
        description:
            'A list of hidden supplier routes is locked behind complex encryption—breaking it could be lucrative.',
        options: [
            {
                title: 'Decode the files and gain access.',
                reward: ['+1 Temporary Logic', '-1 Intel'],
            },
            {
                title: 'Sell the encrypted data to an interested party.',
                reward: ['+3.000 ¥', '-2 Energy'],
            },
        ],
    },
    {
        tag: 'smugglerden5',
        title: 'Gut Instinct Trade',
        description:
            'A mystery package arrives with no details—only intuition will reveal if it’s valuable or dangerous.',
        options: [
            {
                title: 'Investigate its origins before taking action.',
                reward: ['+1 Intel', '-3.000 ¥'],
            },
            {
                title: 'Trust your instincts and claim it.',
                reward: ['+1 Temporary Intuition', '-1 Edge'],
            },
        ],
    },
    {
        tag: 'smugglerden6',
        title: 'Silver-Tongue Smuggler',
        description:
            'A seasoned smuggler boasts about their connections, but they may need convincing to share their secrets.',
        options: [
            {
                title: 'Persuade them with your charisma.',
                reward: ['+1 Temporary Charisma', '-1 Intel'],
            },
            {
                title: 'Offer them a cut in exchange for information.',
                reward: ['+3.000 ¥', '-1 Edge'],
            },
        ],
    },
]

const encounterData: readonly Encounter[] = [
    ...encounterCyberLab,
    ...encounterVitalClinic,
    ...encounterSecurityHub,
    ...encounterPulseBar,
    ...encounterDreamHaven,
    ...encounterEchoGarden,
    ...encounterIronGym,
    ...encounterZeroZone,
    ...encounterSmugglerDen,
]

const encounterMap = new Map(
    encounterData.map((encounter: Encounter) => [encounter.tag, encounter])
)

const getEncounterByTag = (tag: string): Encounter | undefined => {
    return encounterMap.get(tag)
}

export { getEncounterByTag }
