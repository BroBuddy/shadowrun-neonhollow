import { Facility } from '../types/FacilityType'

const skylineData: Facility[] = [
        {
        tag: 'megacorp',
        title: 'MegaCorp',
        description:
            'A towering empire of ambition, where innovation meets dominance in the pursuit of global influence.',
        rollList: [],
        actionList: [
            {
                icon: '🔥',
                title: 'Incite Revolt',
                steps: [
                    {
                        text: 'Spend 3 Edge',
                        resource: { Edge: -3 }
                    },
                    {
                        text: 'Gain 3 Noto, 2 Progress',
                        resource: { Noto: +3, Progress: +2 }
                    },
                ],
            },
            {
                icon: '📢',
                title: 'Run Propaganda',
                steps: [
                    {
                        text: 'Pay 20.000 ¥',
                        resource: { Nuyen: -20 },
                    },
                    {
                        text: 'Gain 3 Noto, 2 Progress',
                        resource: { Noto: +3, Progress: +2 }
                    },
                ],
            },
        ],
    },
    {
        tag: 'cyberlab',
        title: 'CyberLab',
        description:
            'The digital heart of NeonHollow, where minds merge with machines and the future pulses in streams of data.',
        rollList: [
            { roll: '2', text: 'Instinct Disruption (-1 INT)' },
            {
                roll: '3-4',
                text: 'Illegal Trial | +1 Noto',
                resource: { Noto: +1 },
            },
            {
                roll: '5-6',
                text: 'Test Failure | -1 Health',
                resource: { Health: -1 },
            },
            { roll: '7', text: 'No Effect' },
            {
                roll: '8-9',
                text: 'Unplanned Find | +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Major Break | +1 Karma',
                resource: { Karma: +1 },
            },
            {
                roll: '12',
                text: 'Perceptive Awakening (+1 INT)',
            }
        ],
        actionList: [
            {
                icon: '🔋',
                title: 'Mind Link',
                steps: [
                    { text: 'Pay 6.000 ¥', resource: { Nuyen: -6 } },
                    { text: '2d6 + INT/STR + 3' },
                    { text: 'Gain Energy', tag: 'energy' },
                ],
            },
            {
                icon: '⭐',
                title: 'Data Rip',
                steps: [
                    {
                        text: 'Spend 4 Energy',
                        resource: { Energy: -4 },
                    },
                    { text: '2d6 + INT/AGI + 3' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
        ],
    },
    {
        tag: 'quantumvault',
        title: 'QuantumVault',
        description:
            'A high-security corporate bank where digital wealth flows faster than the neon lights. Data vaults hum with encrypted secrets.',
        rollList: [
            { roll: '2', text: 'Confidence Drop (-1 CHA)', },
            {
                roll: '3-4',
                text: 'Locked Circuit | +1 Noto',
                resource: { Noto: +1 },
            },
            {
                roll: '5-6',
                text: 'Circuit Feedback | -1 Energy',
                resource: { Energy: -1 },
            },
            { roll: '7', text: 'No Effect' },
            {
                roll: '8-9',
                text: 'Misrouted Credit | +1 Nuyen',
                resource: { Nuyen: +1 },
            },
            {
                roll: '10-11',
                text: 'Exploit Discovery | +1 Karma',
                resource: { Karma: +1 },
            },
            {
                roll: '12',
                text: 'Magnetic Presence (+1 CHA)',
            }
        ],
        actionList: [
            {
                icon: '🔋',
                title: 'Vault Breach',
                steps: [
                    { text: 'Gain 3 Noto', resource: { Noto: 3 } },
                    { text: '2d6 + CHA/LOG + 3' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
            {
                icon: '⭐',
                title: 'Pay the Snitch',
                steps: [
                    {
                        text: 'Pay 8.000 ¥',
                        resource: { Nuyen: -8 },
                    },
                    { text: '2d6 + CHA/REA + 3' },
                    { text: 'Gain Karma', tag: 'karma' },
                ],
            },
        ],
    },
]

const centralData: Facility[] = [
    {
        tag: 'securityhub',
        title: 'SecurityHub',
        description:
            'The city`s watchful eye, where enforcers gather, drones launch, and order teeters on the edge of chaos.',
        rollList: [
            { roll: '2', text: 'Coordination Disruption (-1 AGI)' },
            {
                roll: '3-4',
                text: 'Security Breach | +1 Noto',
                resource: { Noto: +1 },
            },
            { roll: '5-6', text: 'Blamed | -1 Edge', resource: { Edge: -1 } },
            { roll: '7', text: 'No Effect' },
            {
                roll: '8-9',
                text: 'Backup Support | +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Familiar Face | -1 Noto',
                resource: { Noto: -1 },
            },
            { roll: '12', text: 'Precision Boost (+1 AGI)', }
        ],
        actionList: [
            {
                icon: '💰',
                title: 'Track Target',
                steps: [
                    { text: 'Spend 2 Health', resource: { Health: -2 } },
                    { text: '2d6 + AGI/REA + 2' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
            {
                icon: '👁️',
                title: 'Pay Off Informant',
                steps: [
                    { text: 'Pay 6.000 ¥', resource: { Nuyen: -6 } },
                    { text: '2d6 + AGI/LOG + 2' },
                    { text: 'Reduce Noto', tag: 'noto' },
                ],
            },
            {
                icon: '💪',
                title: 'Agility Recalibration',
                steps: [
                    { text: 'Agility', tag: 'attribute' },
                ],
            },
        ],
    },
    {
        tag: 'vitalclinic',
        title: 'VitalClinic',
        description:
            'Pioneers of life, healing the city’s wounds and unlocking the secrets of humanity — at a price.',
        rollList: [
            { roll: '2', text: 'Distraction Pulse (-1 REA)', },
            {
                roll: '3-4',
                text: 'Defiant Case | +1 Noto',
                resource: { Noto: +1 },
            },
            {
                roll: '5-6',
                text: 'Grim Report | -1 Health',
                resource: { Health: -1 },
            },
            { roll: '7', text: 'No Effect' },
            {
                roll: '8-9',
                text: 'Energy Boost | +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Civic Aid | +1 Edge',
                resource: { Edge: +1 },
            },
            { roll: '12', text: 'Sensory Acceleration (+1 REA)', },
        ],
        actionList: [
            {
                icon: '❤️',
                title: 'Nano Heal',
                steps: [
                    { text: 'Pay 4.000 ¥', resource: { Nuyen: -4 } },
                    { text: '2d6 + REA/STR + 2' },
                    { text: 'Gain Health', tag: 'health' },
                ],
            },
            {
                icon: '💰',
                title: 'Life Tap',
                steps: [
                    { text: 'Spend 3 Health', resource: { Health: -3 } },
                    { text: '2d6 + REA/INT + 2' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
            {
                icon: '💪',
                title: 'Reaction Sharpening',
                steps: [
                    { text: 'Reaction', tag: 'attribute' },
                ],
            },
        ],
    },
    {
        tag: 'dreamhaven',
        title: 'DreamHaven',
        description:
            'An immersive realm where fantasies awaken and reality bends under layers of shimmering light.',
        rollList: [
            { roll: '2', text: 'Cognitive Fog (-1 LOG)', },
            {
                roll: '3-4',
                text: 'Shady Moves | +1 Noto',
                resource: { Noto: +1 },
            },
            {
                roll: '5-6',
                text: 'Price Jump | -2.000 ¥',
                resource: { Nuyen: -2 },
            },
            { roll: '7', text: 'No Effect' },
            {
                roll: '8-9',
                text: 'Massage Chair | +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Social Pulse | +1 Edge',
                resource: { Edge: +1 },
            },
            { roll: '12', text: 'Analytical Breakthrough (+1 LOG)', },
        ],
        actionList: [
            {
                icon: '🔋',
                title: 'Mind Recharge',
                steps: [
                    { text: 'Gain 2 Noto', resource: { Noto: 2 } },
                    { text: '2d6 + LOG/CHA + 2' },
                    { text: 'Gain Energy', tag: 'energy' },
                ],
            },
            {
                icon: '⭐',
                title: 'Brain Surge',
                steps: [
                    { text: 'Spend 2 Energy', resource: { Energy: -2 } },
                    { text: '2d6 + LOG/AGI + 2' },
                    { text: 'Gain Karma', tag: 'karma' },
                ],
            },
            {
                icon: '🧠',
                title: 'Logic Refinement',
                steps: [
                    { text: 'Logic', tag: 'attribute' },
                ],
            },
        ],
    },
]

const quarterData: Facility[] = [
    {
        tag: 'pulsebar',
        title: 'PulseBar',
        description:
            'The city`s pulse made tangible — a kaleidoscope of holograms, music, and endless possibilities.',
        rollList: [
            { roll: '2', text: 'Confidence Drop (-1 CHA)', },
            {
                roll: '3-4',
                text: 'Drunk and Disorderly | +1 Noto',
                resource: { Noto: +1 },
            },
            {
                roll: '5-6',
                text: 'Toxic Cocktail | -1 Health',
                resource: { Health: -1 },
            },
            { roll: '7', text: 'No Effect' },
            {
                roll: '8-9',
                text: 'Nutritious Snack | +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Winning Bet | +2.000 ¥',
                resource: { Nuyen: +2 },
            },
            {
                roll: '12',
                text: 'Magnetic Presence (+1 CHA)',
            }
        ],
        actionList: [
            {
                icon: '💰',
                title: 'High Stakes',
                steps: [
                    { text: 'Spend 1 Energy', resource: { Energy: -1 } },
                    { text: '2d6 + CHA/INT + 1' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
            {
                icon: '⭐',
                title: 'Shadow Deal',
                steps: [
                    { text: 'Pay 4.000 ¥', resource: { Nuyen: -4 } },
                    { text: '2d6 + CHA/LOG + 1' },
                    { text: 'Gain Karma', tag: 'karma' },
                ],
            },
            {
                icon: '🧠',
                title: 'Charisma Networking',
                steps: [
                    { text: 'Charisma', tag: 'attribute' },
                ],
            },
        ],
    },
     {
        tag: 'echogarden',
        title: 'EchoGarden',
        description:
            'A tranquil haven where whispers of the past bloom into vibrant memories, rooted in neon dreams.',
        rollList: [
            { roll: '2', text: 'Instinct Disruption (-1 INT)' },
            {
                roll: '3-4',
                text: 'Plant Harvest | +1 Noto',
                resource: { Noto: +1 },
            },
            {
                roll: '5-6',
                text: 'Toxic Fungal | -1 Health',
                resource: { Health: -1 },
            },
            { roll: '7', text: 'No Effect' },
            {
                roll: '8-9',
                text: 'Friendly Chat | +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Solar Soak | +1 Health',
                resource: { Health: +1 },
            },
            {
                roll: '12',
                text: 'Perceptive Awakening (+1 INT)',
            }
        ],
        actionList: [
            {
                icon: '🔋',
                title: 'Holospring Relax',
                steps: [
                    { text: 'Pay 2.000 ¥', resource: { Nuyen: -1 } },
                    { text: '2d6 + INT/LOG + 1' },
                    { text: 'Gain Energy', tag: 'energy' },
                ],
            },
            {
                icon: '👁️',
                title: 'Meditative Escape',
                steps: [
                    { text: 'Spend 2 Energy', resource: { Energy: -2 } },
                    { text: '2d6 + INT/REA + 1' },
                    { text: 'Reduce Noto', tag: 'noto' },
                ],
            },
            {
                icon: '🧠',
                title: 'Intuition Calibration',
                steps: [
                    { text: 'Intuition', tag: 'attribute' },
                ],
            },
        ],
    },
    {
        tag: 'irongym',
        title: 'IronGym',
        description:
            'Where sweat forges STR, and every clang of metal echoes the determination to rise above.',
        rollList: [
            { roll: '2', text: 'Muscle Strain (-1 STR)' },
            {
                roll: '3-4',
                text: 'Wrong Locker Room | +1 Noto',
                resource: { Noto: +1 },
            },
            {
                roll: '5-6',
                text: 'Unpaid Membership | -2.000 ¥',
                resource: { Nuyen: -2 },
            },
            { roll: '7', text: 'No Effect' },
            {
                roll: '8-9',
                text: 'Promo Energy Bar | +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Perfect Form | +1 Edge',
                resource: { Edge: +1 },
            },
            { roll: '12', text: 'Force Amplification (+1 STR)' },
        ],
        actionList: [
            {
                icon: '❤️',
                title: 'Rogue Mods',
                steps: [
                    { text: 'Gain 1 Noto', resource: { Noto: 1 } },
                    { text: '2d6 + STR/AGI + 1' },
                    { text: 'Gain Health', tag: 'health' },
                ],
            },
            {
                icon: '💰',
                title: 'Chem Boost',
                steps: [
                    { text: 'Spend 2 Health', resource: { Health: -2 } },
                    { text: '2d6 + STR/CHA + 1' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
            {
                icon: '💪',
                title: 'Strength Conditioning',
                steps: [
                    { text: 'Strength', tag: 'attribute' },
                ],
            },
        ],
    },
]

const depthsData: Facility[] = [
    {
        tag: 'zerozone',
        title: 'ZeroZone',
        description:
            'The epicenter of icy calm and calculated precision—a space where sharp minds outmatch the chaos.',
        rollList: [],
        actionList: [
            {
                icon: '❤️',
                title: 'Jury-Rig',
                steps: [
                    { text: 'Pay 0 ¥', resource: { Nuyen: 0 } },
                    { text: '2d6 + REA/INT' },
                    { text: 'Gain Health', tag: 'health' },
                ],
            },
            {
                icon: '💰',
                title: 'Fight Night',
                steps: [
                    { text: 'Spend 1 Health', resource: { Health: -1 } },
                    { text: '2d6 + REA/STR' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
        ],
    },
    {
        tag: 'smugglerden',
        title: 'SmugglerDen',
        description:
            'A shadowy refuge for the bold, where secrets are currency, and fortune favors the daring.',
        rollList: [],
        actionList: [
            {
                icon: '💰',
                title: 'Hot Trade',
                steps: [
                    { text: 'Spend 0 Energy', resource: { Energy: 0 } },
                    { text: '2d6 + AGI/LOG' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
            {
                icon: '⭐',
                title: 'Fake ID',
                steps: [
                    { text: 'Pay 2.000 ¥', resource: { Nuyen: -1 } },
                    { text: '2d6 + AGI/CHA', },
                    { text: 'Gain Karma', tag: 'karma' },
                ],
            },
        ],
    },
    {
        tag: 'safehouse',
        title: 'SafeHouse',
        description:
            'An impenetrable sanctuary where the world\'s troubles melt away, leaving only peace and security.',
        rollList: [],
        actionList: [
            {
                icon: '❤️',
                title: 'Stim Shoot',
                steps: [
                    { text: 'Spend 0 Health', resource: { Health: 0 } },
                    { text: '2d6 + STR/REA' },
                    { text: 'Gain Energy', tag: 'energy' },
                ],
            },
            {
                icon: '👁️',
                title: 'Hide Out',
                steps: [
                    { text: 'Spend 1 Energy', resource: { Energy: -1 } },
                    { text: '2d6 + STR/LOG' },
                    { text: 'Reduce Noto', tag: 'noto' },
                ],
            },
        ],
    },
]

export const facilityData: Facility[] = [
    ...skylineData,
    ...centralData,
    ...quarterData,
    ...depthsData
]