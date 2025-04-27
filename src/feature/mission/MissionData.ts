import {
    Mission,
    MissionPerformance as MissionPerformancesType,
} from './MissionType'

const missionData: Mission[] = [
    {
        id: 'R610',
        title: 'Recon the Facility',
        client: {
            name: 'Renna Thorne',
            location: 'EchoGarden',
        },
        mission_location: 'MegaCorp',
        briefing:
            'Renna Thorne from EchoGarden has gathered intel suggesting that MegaCorp is testing new surveillance equipment in a high-security facility. You are tasked with infiltrating the facility to gather vital information on the security systems and any sensitive data related to these new technologies.',
        tasks: [
            {
                id: 1,
                title: 'Infiltrate the Outer Perimeter',
                roll: '2d6',
                outcomes: [
                    {
                        range: '2–5',
                        stat: 'Agility',
                        dc: 12,
                        description: 'Sneak through the shadows.',
                    },
                    {
                        range: '6–8',
                        stat: 'Intuition',
                        dc: 10,
                        description: 'Locate an unguarded entry point.',
                    },
                    {
                        range: '9–12',
                        stat: 'Strength',
                        dc: 8,
                        description: 'Force entry through a maintenance hatch.',
                    },
                ],
                failure: {
                    redirect: 'R603',
                    performance: 'Performance 1',
                },
            },
            {
                id: 2,
                title: 'Gather Intel on Security Systems',
                roll: '2d6',
                outcomes: [
                    {
                        range: '3–6',
                        stat: 'Logic',
                        dc: 12,
                        description:
                            'Hack into the terminal to download floor plans.',
                    },
                    {
                        range: '7–9',
                        stat: 'Charisma',
                        dc: 10,
                        description: 'Convince a guard to give you access.',
                    },
                    {
                        range: '10–12',
                        stat: 'Agility',
                        dc: 8,
                        description: 'Sleight of hand to grab access cards.',
                    },
                ],
                failure: {
                    redirect: 'R603',
                    performance: 'Performance 2',
                },
            },
            {
                id: 3,
                title: 'Extract Critical Data from the Server',
                roll: '2d6',
                outcomes: [
                    {
                        range: '4–7',
                        stat: 'Reaction',
                        dc: 12,
                        description: 'Dodge incoming guards.',
                    },
                    {
                        range: '8–10',
                        stat: 'Intuition',
                        dc: 10,
                        description: 'Find a hidden network access port.',
                    },
                    {
                        range: '11–12',
                        stat: 'Charisma',
                        dc: 8,
                        description:
                            'Bluff your way through a security checkpoint.',
                    },
                ],
                failure: {
                    redirect: 'R603',
                    performance: 'Performance 3',
                },
            },
        ],
        twist: {
            description:
                'As you are extracting the data, you stumble upon a hidden compartment within the server room that seems to be connected to a covert research project.',
            options: [
                {
                    stat: 'Intuition',
                    dc: 14,
                    description: 'Spot hidden surveillance equipment.',
                },
                {
                    stat: 'Logic',
                    dc: 14,
                    description: 'Spot hidden surveillance equipment.',
                },
            ],
            failure: {
                redirect: 'R603',
                performance: 'Performance 4',
            },
            success: {
                redirect: 'R603',
                performance: 'Performance 5',
            },
        },
    },
    {
        id: 'R620',
        title: 'Crash Security Systems',
        client: {
            name: 'Silas Noor',
            location: 'DreamSphere',
        },
        mission_location: 'MegaCorp',
        briefing:
            "DreamSphere's immersive sleep tech is being hijacked—MegaCorp’s surveillance AI is tapping into user dreamscapes to manipulate behavior. Your task: breach their digital stronghold, black out the security grid, and ghost out before they realize the dream's turned against them.",
        tasks: [
            {
                id: 1,
                title: 'Overload the Firewall',
                roll: '2d6',
                outcomes: [
                    {
                        range: '2–5',
                        stat: 'Logic',
                        dc: 12,
                        description: 'Launch a deep intrusion spike.',
                    },
                    {
                        range: '6–8',
                        stat: 'Charisma',
                        dc: 10,
                        description:
                            'Con a helpdesk agent into granting deeper access.',
                    },
                    {
                        range: '9–12',
                        stat: 'Intuition',
                        dc: 8,
                        description: 'Exploit a forgotten maintenance port.',
                    },
                ],
                failure: {
                    redirect: 'R603',
                    performance: 'Performance 1',
                },
            },
            {
                id: 2,
                title: 'Disable Security Bots',
                roll: '2d6',
                outcomes: [
                    {
                        range: '3–6',
                        stat: 'Strength',
                        dc: 12,
                        description: 'Smash the control uplink.',
                    },
                    {
                        range: '7–9',
                        stat: 'Reaction',
                        dc: 10,
                        description: 'Disrupt their patrol pattern.',
                    },
                    {
                        range: '10–12',
                        stat: 'Logic',
                        dc: 8,
                        description: 'Inject a shutdown virus.',
                    },
                ],
                failure: {
                    redirect: 'R603',
                    performance: 'Performance 2',
                },
            },
            {
                id: 3,
                title: 'Take Down the AI Core',
                roll: '2d6',
                outcomes: [
                    {
                        range: '4–7',
                        stat: 'Agility',
                        dc: 12,
                        description:
                            'Slip through sensor coverage into the core.',
                    },
                    {
                        range: '8–10',
                        stat: 'Logic',
                        dc: 10,
                        description:
                            'Loop the AI’s sensory matrix into feedback.',
                    },
                    {
                        range: '11–12',
                        stat: 'Charisma',
                        dc: 8,
                        description: 'Overwhelm it with illogical paradoxes.',
                    },
                ],
                failure: {
                    redirect: 'R603',
                    performance: 'Performance 3',
                },
            },
        ],
        twist: {
            description:
                'A backup AI attempts an emergency rollback to restore the network.',
            options: [
                {
                    stat: 'Strength',
                    dc: 14,
                    description:
                        'Crash the fallback node before reboot completes.',
                },
                {
                    stat: 'Agility',
                    dc: 14,
                    description:
                        'Crash the fallback node before reboot completes.',
                },
            ],
            failure: {
                redirect: 'R603',
                performance: 'Performance 4',
            },
            success: {
                redirect: 'R603',
                performance: 'Performance 5',
            },
        },
    },
    {
        id: 'R630',
        title: 'Confront the CEO',
        client: {
            name: 'Kael Stride',
            location: 'HoloLounge',
        },
        mission_location: 'MegaCorp',
        briefing:
            'The CEO of the megacorp is planning to seize control of HoloLounge’s independent entertainment feeds, pushing brainwash protocols through immersive media. HoloLounge wants you to break into the executive floor, confront the CEO directly, and deliver a message: some minds can’t be bought.',
        tasks: [
            {
                id: 1,
                title: 'Reach the Executive Elevator',
                roll: '2d6',
                outcomes: [
                    {
                        range: '2–5',
                        stat: 'Agility',
                        dc: 12,
                        description: 'Dodge through the lobby scanners.',
                    },
                    {
                        range: '6–8',
                        stat: 'Logic',
                        dc: 10,
                        description: 'Hack the elevator’s access panel.',
                    },
                    {
                        range: '9–12',
                        stat: 'Strength',
                        dc: 8,
                        description: 'Force open the maintenance shaft.',
                    },
                ],
                failure: {
                    redirect: 'R603',
                    performance: 'Performance 1',
                },
            },
            {
                id: 2,
                title: 'Bypass CEO’s Personal Guard',
                roll: '2d6',
                outcomes: [
                    {
                        range: '3–6',
                        stat: 'Reaction',
                        dc: 12,
                        description: 'Outmaneuver their formation.',
                    },
                    {
                        range: '7–9',
                        stat: 'Intuition',
                        dc: 10,
                        description: 'Find a distraction window.',
                    },
                    {
                        range: '10–12',
                        stat: 'Charisma',
                        dc: 8,
                        description: 'Pretend you’re scheduled for a meeting.',
                    },
                ],
                failure: {
                    redirect: 'R603',
                    performance: 'Performance 2',
                },
            },
            {
                id: 3,
                title: 'Deliver the Threat',
                roll: '2d6',
                outcomes: [
                    {
                        range: '4–7',
                        stat: 'Charisma',
                        dc: 12,
                        description: 'Intimidate with presence and proof.',
                    },
                    {
                        range: '8–10',
                        stat: 'Logic',
                        dc: 10,
                        description: 'Reveal the exploit in their media plan.',
                    },
                    {
                        range: '11–12',
                        stat: 'Strength',
                        dc: 8,
                        description: 'Leave physical evidence of your power.',
                    },
                ],
                failure: {
                    redirect: 'R603',
                    performance: 'Performance 3',
                },
            },
        ],
        twist: {
            description:
                'The CEO is an advanced AI running a remote body. The real threat lies deeper.',
            options: [
                {
                    stat: 'Logic',
                    dc: 14,
                    description:
                        'Realize it’s a decoy and trace the real core.',
                },
                {
                    stat: 'Charisma',
                    dc: 14,
                    description:
                        'Realize it’s a decoy and trace the real core.',
                },
            ],
            failure: {
                redirect: 'R603',
                performance: 'Performance 4',
            },
            success: {
                redirect: 'R603',
                performance: 'Performance 5',
            },
        },
    },
    {
        id: 'R640',
        title: 'Unveil the Truth',
        client: {
            name: 'Arlo Quinn',
            location: 'EchoGarden',
        },
        mission_location: 'MegaCorp',
        briefing:
            'In this final move to topple the megacorp, you must infiltrate their most secure vault to uncover and leak their darkest secrets. Expose their illegal activities to the public and trigger a full collapse of their influence. The truth is the only weapon left — and you’re the one to wield it.',
        tasks: [
            {
                id: 1,
                title: 'Infiltrate the Vault',
                roll: '2d6',
                outcomes: [
                    {
                        range: '2–5',
                        stat: 'Agility',
                        dc: 10,
                        description:
                            'Sneak past the tight security systems and motion sensors.',
                    },
                    {
                        range: '6–8',
                        stat: 'Intuition',
                        dc: 8,
                        description:
                            'Use your senses to spot hidden guards and bypass them.',
                    },
                    {
                        range: '9–12',
                        stat: 'Strength',
                        dc: 12,
                        description:
                            'Force open the door or break through barriers that are in your way.',
                    },
                ],
                failure: {
                    redirect: 'R603',
                    performance: 'Performance 1',
                },
            },
            {
                id: 2,
                title: 'Extract the Sensitive Files',
                roll: '2d6',
                outcomes: [
                    {
                        range: '3–6',
                        stat: 'Logic',
                        dc: 12,
                        description:
                            'Hack the encrypted system to retrieve the files without leaving a trace.',
                    },
                    {
                        range: '7–9',
                        stat: 'Intuition',
                        dc: 10,
                        description:
                            'Spot the hidden vault chambers with valuable data.',
                    },
                    {
                        range: '10–12',
                        stat: 'Charisma',
                        dc: 8,
                        description:
                            'Convince an AI assistant to provide you with access to the files.',
                    },
                ],
                failure: {
                    redirect: 'R603',
                    performance: 'Performance 2',
                },
            },
            {
                id: 3,
                title: 'Leak the Files to the Public',
                roll: '2d6',
                outcomes: [
                    {
                        range: '4–7',
                        stat: 'Charisma',
                        dc: 10,
                        description:
                            'Persuade the media outlets to publish the files immediately.',
                    },
                    {
                        range: '8–10',
                        stat: 'Logic',
                        dc: 8,
                        description:
                            'Find a way to send the data securely to the right sources.',
                    },
                    {
                        range: '11–12',
                        stat: 'Strength',
                        dc: 12,
                        description:
                            'Physically remove any data-destroying countermeasures they’ve set up to erase the files.',
                    },
                ],
                failure: {
                    redirect: 'R603',
                    performance: 'Performance 3',
                },
            },
        ],
        twist: {
            description:
                'Just as the files are sent out, the megacorp activates a fail-safe protocol, trying to erase all evidence. A corporate hit team is deployed to eliminate you.',
            options: [
                {
                    stat: 'Reaction',
                    dc: 12,
                    description:
                        'Escape the hit team and secure your freedom before they can erase your presence.',
                },
            ],
            failure: {
                redirect: 'R014',
            },
            success: {
                redirect: 'R015',
            },
        },
    },
]

const MissionPerformance: MissionPerformancesType[] = [
    {
        id: 1,
        title: '🔴 Performance 1',
        level: 'Disastrous',
        effects: [{ description: '+3 Heat' }],
    },
    {
        id: 2,
        title: '🔴 Performance 2',
        level: 'Underwhelming',
        effects: [
            { description: '+2 Heat' },
            {
                description: 'Roll 2d6 → +2 → Gain Intel',
                link: '/R305',
            },
        ],
    },
    {
        id: 3,
        title: '🟡 Performance 3',
        level: 'Partial',
        effects: [
            { description: '+1 Heat' },
            {
                description: 'Roll 2d6 → +4 → Gain Intel',
                link: '/R305',
            },
            {
                description: 'Roll 2d6 → +2 → Gain Nuyen',
                link: '/R303',
            },
        ],
    },
    {
        id: 4,
        title: '🟢 Performance 4',
        level: 'Impressive',
        effects: [
            { description: 'Next Mission available' },
            {
                description: 'Roll 2d6 → +4 → Gain Nuyen',
                link: '/R303',
            },
        ],
    },
    {
        id: 5,
        title: '🟢 Performance 5',
        level: 'Exceptional',
        effects: [
            { description: 'Next Mission available' },
            {
                description: 'Roll 2d6 → +6 → Gain Nuyen',
                link: '/R303',
            },
        ],
    },
]

const getMissionById = (missionId: string): Mission => {
    return missionData.find(
        (mission: Mission) => mission.id === missionId
    ) as Mission
}

const getMissionPerformance = (): MissionPerformancesType[] => {
    return MissionPerformance
}

export { getMissionById, getMissionPerformance }
