import { Facility } from './FacilityType'

const facilityData: Facility[] = [
    {
        id: 1,
        tag: 'megacorp',
        title: 'MegaCorp',
        description:
            'A towering empire of ambition, where innovation meets dominance in the pursuit of global influence.',
        rollList: [],
        actionList: [
            {
                title: '🚷 Incite Rebellion:',
                steps: [
                    {
                        text: 'Spend 3 Edge',
                        resource: { Edge: -3 }
                    },
                    {
                        text: '+3 Heat',
                        resource: { Heat: +3 }
                    },
                    {
                        text: '+2 Progress',
                    },
                ],
            },
            {
                title: '📢 Propaganda Campaign:',
                steps: [
                    {
                        text: 'Pay 20.000 ¥',
                        resource: { Nuyen: -20 },
                    },
                    {
                        text: '+3 Heat',
                        resource: { Heat: +3 },
                    },
                    {
                        text: '+2 Progress',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        tag: 'cyberlab',
        title: 'CyberLab',
        description:
            'The digital heart of NeonHollow, where minds merge with machines and the future pulses in streams of data.',
        rollList: [
            { roll: '2', text: 'System Anomaly', id: '71' },
            {
                roll: '3-4',
                text: 'Illegal Trial → +1 Heat',
                resource: { Heat: +1 },
            },
            {
                roll: '5-6',
                text: 'Test Failure → -1 Health',
                resource: { Health: -1 },
            },
            { roll: '7', text: 'Random Encounter' },
            {
                roll: '8-9',
                text: 'Unplanned Find → +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Major Break → +1 Intel',
                resource: { Intel: +1 },
            },
            { roll: '12', text: 'Mysterious Runner', id: '81' },
        ],
        actionList: [
            {
                title: '💡 Mind Overdrive:',
                steps: [
                    {
                        text: 'Spend 3 Health',
                        resource: { Health: -3 },
                    },
                    { text: 'Roll 2d6 + Logic or Intuition + 2' },
                    { text: 'Gain Intel', tag: 'intel' },
                ],
            },
            {
                title: '🔋 Neural Sync Boost:',
                steps: [
                    { text: 'Pay 4.000 ¥', resource: { Nuyen: -4 } },
                    { text: 'Roll 2d6 + Logic or Charisma' },
                    { text: 'Gain Energy', tag: 'energy' },
                ],
            },
            {
                title: '🧠 Logic Refinement:',
                steps: [
                    {
                        text: 'Pay 2.000 ¥ per point of Logic',
                        resource: { Nuyen: -2 },
                    },
                    { text: 'Roll 2d6 + 7 - Logic' },
                    { text: 'Improve Logic', tag: 'attribute' },
                ],
            },
        ],
    },
    {
        id: 3,
        tag: 'vitalclinic',
        title: 'VitalClinic',
        description:
            'Pioneers of life, healing the city’s wounds and unlocking the secrets of humanity — at a price.',
        rollList: [
            { roll: '2', text: 'Medical Malfunction', id: '73' },
            {
                roll: '3-4',
                text: 'Defiant Case → +1 Heat',
                resource: { Heat: +1 },
            },
            {
                roll: '5-6',
                text: 'Grim Report → -1 Health',
                resource: { Health: -1 },
            },
            { roll: '7', text: 'Random Encounter' },
            {
                roll: '8-9',
                text: 'Energy Boost → +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Civic Aid → +1 Edge',
                resource: { Edge: +1 },
            },
            { roll: '12', text: 'Mysterious Runner', id: '83' },
        ],
        actionList: [
            {
                title: '❤️ Nano Restoration:',
                steps: [
                    { text: 'Pay 6.000 ¥', resource: { Nuyen: -6 } },
                    { text: 'Roll 2d6 + Strength or Agility + 2' },
                    { text: 'Gain Health', tag: 'health' },
                ],
            },
            {
                title: '💰 Donate Plasma:',
                steps: [
                    { text: 'Spend 2 Health', resource: { Health: -2 } },
                    { text: 'Roll 2d6 + Agility or Reaction' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
            {
                title: '💪 Agility Recalibration:',
                steps: [
                    {
                        text: 'Pay 2.000 ¥ per point of Agility',
                        resource: { Nuyen: -2 },
                    },
                    { text: 'Roll 2d6 + 7 - Agility' },
                    { text: 'Improve Agility', tag: 'attribute' },
                ],
            },
        ],
    },
    {
        id: 4,
        tag: 'securityhub',
        title: 'SecurityHub',
        description:
            'The city`s watchful eye, where enforcers gather, drones launch, and order teeters on the edge of chaos.',
        rollList: [
            { roll: '2', text: 'Security Check', id: '72' },
            {
                roll: '3-4',
                text: 'Security Breach → +1 Heat',
                resource: { Heat: +1 },
            },
            { roll: '5-6', text: 'Blamed → -1 Edge', resource: { Edge: -1 } },
            { roll: '7', text: 'Random Encounter' },
            {
                roll: '8-9',
                text: 'Backup Support → +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Familiar Face → -1 Heat',
                resource: { Heat: -1 },
            },
            { roll: '12', text: 'Access Granted → +1 Edge' },
        ],
        actionList: [
            {
                title: '🔥 Quiet Bribe:',
                steps: [
                    { text: 'Pay 6.000 ¥', resource: { Nuyen: -6 } },
                    { text: 'Roll 2d6 + Strength or Charisma + 2' },
                    { text: 'Reduce Heat', tag: 'heat' },
                ],
            },
            {
                title: '💰 Bounty Pursuit:',
                steps: [
                    { text: 'Spend 3 Energy', resource: { Energy: -3 } },
                    { text: 'Roll 2d6 + Strength or Intuition + 2' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
        ],
    },
    {
        id: 5,
        tag: 'pulsebar',
        title: 'PulseBar',
        description:
            'The city`s pulse made tangible — a kaleidoscope of holograms, music, and endless possibilities.',
        rollList: [
            { roll: '2', text: 'The Whisper Network', id: '76' },
            {
                roll: '3-4',
                text: 'Drunk and Disorderly → +1 Heat',
                resource: { Heat: +1 },
            },
            {
                roll: '5-6',
                text: 'Toxic Cocktail → -1 Health',
                resource: { Health: -1 },
            },
            { roll: '7', text: 'Random Encounter' },
            {
                roll: '8-9',
                text: 'Nutritious Snack → +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Winning Bet → +2.000 ¥',
                resource: { Nuyen: +2 },
            },
            { roll: '12', text: 'Mysterious Runner', id: '86' },
        ],
        actionList: [
            {
                title: '💰 Gambling Table:',
                steps: [
                    { text: 'Spend 2 Energy', resource: { Energy: -2 } },
                    { text: 'Roll 2d6 + Reaction or Charisma' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
            {
                title: '💡 Pay the Insider:',
                steps: [
                    { text: 'Pay 4.000 ¥', resource: { Nuyen: -4 } },
                    { text: 'Roll 2d6 + Intuition or Charisma' },
                    { text: 'Gain Intel', tag: 'intel' },
                ],
            },
            {
                title: '🧠 Charisma Negotiation:',
                steps: [
                    {
                        text: 'Pay 2.000 ¥ per point of Charisma',
                        resource: { Nuyen: -2 },
                    },
                    { text: 'Roll 2d6 + 7 - Charisma' },
                    { text: 'Improve Charisma', tag: 'attribute' },
                ],
            },
        ],
    },
    {
        id: 6,
        tag: 'dreamhaven',
        title: 'DreamHaven',
        description:
            'An immersive realm where fantasies awaken and reality bends under layers of shimmering light.',
        rollList: [
            { roll: '2', text: 'Dream Glitch', id: '75' },
            {
                roll: '3-4',
                text: 'Shady Moves → +1 Heat',
                resource: { Heat: +1 },
            },
            {
                roll: '5-6',
                text: 'Price Jump → -2.000 ¥',
                resource: { Nuyen: -2 },
            },
            { roll: '7', text: 'Random Encounter' },
            {
                roll: '8-9',
                text: 'Massage Chair → +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Social Pulse → +1 Edge',
                resource: { Edge: +1 },
            },
            { roll: '12', text: 'Mysterious Runner', id: '85' },
        ],
        actionList: [
            {
                title: '🔋 Energetic Reboot:',
                steps: [
                    { text: 'Pay 6.000 ¥', resource: { Nuyen: -6 } },
                    { text: 'Roll 2d6 + Reaction or Intuition + 2' },
                    { text: 'Gain Energy', tag: 'energy' },
                ],
            },
            {
                title: '💰 Memory Extraction:',
                steps: [
                    { text: 'Spend 2 Health', resource: { Health: -2 } },
                    { text: 'Roll 2d6 + Logic or Intuition' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
            {
                title: '🧠 Intuition Awareness:',
                steps: [
                    {
                        text: 'Pay 2.000 ¥ per point of Intuition',
                        resource: { Nuyen: -2 },
                    },
                    { text: 'Roll 2d6 + 7 - Intuition' },
                    { text: 'Improve Intuition', tag: 'attribute' },
                ],
            },
        ],
    },
    {
        id: 7,
        tag: 'echogarden',
        title: 'EchoGarden',
        description:
            'A tranquil haven where whispers of the past bloom into vibrant memories, rooted in neon dreams.',
        rollList: [
            { roll: '2', text: 'Lost Data', id: '74' },
            {
                roll: '3-4',
                text: 'Plant Harvest → +1 Heat',
                resource: { Heat: +1 },
            },
            {
                roll: '5-6',
                text: 'Toxic Fungal → -1 Health',
                resource: { Health: -1 },
            },
            { roll: '7', text: 'Random Encounter' },
            {
                roll: '8-9',
                text: 'Friendly Chat → +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Solar Soak → +1 Health',
                resource: { Health: +1 },
            },
            { roll: '12', text: 'Mysterious Runner', id: '84' },
        ],
        actionList: [
            {
                title: '🔋 Vital Rejuvenation:',
                steps: [
                    { text: 'Spend 1 Health', resource: { Health: -1 } },
                    { text: 'Roll 2d6 + Agility or Reaction - 2' },
                    { text: 'Gain Energy', tag: 'energy' },
                ],
            },
            {
                title: '🔥 Meditative Escape:',
                steps: [
                    { text: 'Pay 4.000 ¥', resource: { Nuyen: -4 } },
                    { text: 'Roll 2d6 + Reaction or Logic' },
                    { text: 'Reduce Heat', tag: 'heat' },
                ],
            },
            {
                title: '💪 Reaction Sharpening:',
                steps: [
                    {
                        text: 'Pay 2.000 ¥ per point of Reaction',
                        resource: { Nuyen: -2 },
                    },
                    { text: 'Roll 2d6 + 7 - Reaction' },
                    { text: 'Improve Reaction', tag: 'attribute' },
                ],
            },
        ],
    },
    {
        id: 8,
        tag: 'irongym',
        title: 'IronGym',
        description:
            'Where sweat forges strength, and every clang of metal echoes the determination to rise above.',
        rollList: [
            { roll: '2', text: 'Unplanned Challenge', id: '77' },
            {
                roll: '3-4',
                text: 'Wrong Locker Room → +1 Heat',
                resource: { Heat: +1 },
            },
            {
                roll: '5-6',
                text: 'Unpaid Membership → -2.000 ¥',
                resource: { Nuyen: -2 },
            },
            { roll: '7', text: 'Random Encounter' },
            {
                roll: '8-9',
                text: 'Promo Energy Bar → +1 Energy',
                resource: { Energy: +1 },
            },
            {
                roll: '10-11',
                text: 'Perfect Form → +1 Edge',
                resource: { Edge: +1 },
            },
            { roll: '12', text: 'Mysterious Runner', id: '87' },
        ],
        actionList: [
            {
                title: '❤️ Massage Therapy:',
                steps: [
                    { text: 'Pay 4.000 ¥', resource: { Nuyen: -4 } },
                    { text: 'Roll 2d6 + Strength or Reaction' },
                    { text: 'Gain Health', tag: 'health' },
                ],
            },
            {
                title: '💰 Nutritional Experiments:',
                steps: [
                    { text: 'Spend 2 Health', resource: { Health: -2 } },
                    { text: 'Roll 2d6 + Strength or Agility' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
            {
                title: '💪 Strength Conditioning:',
                steps: [
                    {
                        text: 'Pay 2.000 ¥ per point of Strength',
                        resource: { Nuyen: -2 },
                    },
                    { text: 'Roll 2d6 + 7 - Strength' },
                    { text: 'Improve Strength', tag: 'attribute' },
                ],
            },
        ],
    },
    {
        id: 9,
        tag: 'zerozone',
        title: 'ZeroZone',
        description:
            'The epicenter of icy calm and calculated precision—a space where sharp minds outmatch the chaos.',
        rollList: [
            { roll: '2', text: 'Old Rival Spotted', id: '80' },
            {
                roll: '3-4',
                text: 'Corrupt Runner → +1 Heat',
                resource: { Heat: +1 },
            },
            {
                roll: '5-6',
                text: 'Rough Night → -1 Energy',
                resource: { Energy: -1 },
            },
            { roll: '7', text: 'Random Encounter' },
            {
                roll: '8-9',
                text: 'Elixir Boost → +1 Health',
                resource: { Health: +1 },
            },
            {
                roll: '10-11',
                text: 'Secret Deal → +2.000 ¥',
                resource: { Nuyen: +2 },
            },
            {
                roll: '12',
                text: 'Hidden Message → +1 Intel',
                resource: { Intel: +1 },
            },
        ],
        actionList: [
            {
                title: '🤝 Recruit a Runner:',
                steps: [
                    { text: 'Random Runner' },
                    { text: 'Remember The two highest attributes' },
                    { text: 'Pay 10.000 ¥', resource: { Nuyen: -10 } },
                    { text: 'Roll 2d6 + Charisma' },
                    { text: 'Hire Runner', tag: 'runner' },
                ],
            },
            {
                title: '⚔️ Challenge a Runner:',
                steps: [
                    { text: 'Combine Your two highest attributes' },
                    { text: 'Random Runner' },
                    { text: 'Add Opponent’s corresponding values' },
                    { text: 'You lost? → Lose Health equal to the gap' },
                    { text: 'Add 10 to the gap' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
        ],
    },
    {
        id: 10,
        tag: 'smugglerden',
        title: 'SmugglerDen',
        description:
            'A shadowy refuge for the bold, where secrets are currency, and fortune favors the daring.',
        rollList: [
            { roll: '2', text: 'Smuggler’s Test', id: '78' },
            {
                roll: '3-4',
                text: 'Police Raid → +1 Heat',
                resource: { Heat: +1 },
            },
            {
                roll: '5-6',
                text: 'Knife Fight → -1 Health',
                resource: { Health: -1 },
            },
            { roll: '7', text: 'Random Encounter' },
            {
                roll: '8-9',
                text: 'Discount Promotion → +2.000 ¥',
                resource: { Nuyen: +2 },
            },
            {
                roll: '10-11',
                text: 'Thief Caught → +1 Edge',
                resource: { Edge: +1 },
            },
            {
                roll: '12',
                text: 'Prestigious Contact → +1 Intel',
                resource: { Intel: +1 },
            }
        ],
        actionList: [
            {
                title: '💰 Fence Hot Goods:',
                steps: [
                    { text: 'Spend 1 Energy', resource: { Energy: -1 } },
                    { text: 'Roll 2d6 + Agility or Logic - 2' },
                    { text: 'Gain Nuyen', tag: 'nuyen' },
                ],
            },
            {
                title: '💡 Corrupted Files:',
                steps: [
                    { text: 'Pay 2.000 ¥', resource: { Nuyen: -2 } },
                    {
                        text: 'Roll 2d6 + Agility or Intuition - 2',
                    },
                    { text: 'Gain Intel', tag: 'intel' },
                ],
            },
        ],
    },
    {
        id: 11,
        tag: 'safehouse',
        title: 'SafeHouse',
        description:
            'An impenetrable sanctuary where the world’s troubles melt away, leaving only peace and security.',
        rollList: [],
        actionList: [
            {
                title: '❤️ Stimulant Injection:',
                steps: [
                    { text: 'Spend 1 Energy', resource: { Energy: -1 } },
                    { text: 'Roll 2d6 + Strength or Logic - 2' },
                    { text: 'Gain Health', tag: 'health' },
                ],
            },
            {
                title: '🔥 False Credentials:',
                steps: [
                    { text: 'Pay 2.000 ¥', resource: { Nuyen: -2 } },
                    { text: 'Roll 2d6 + Agility or Charisma - 2' },
                    { text: 'Reduce Heat', tag: 'heat' },
                ],
            },
        ],
    },
]

const getFacilityByTag = (tag: string): Facility => {
    return facilityData.find((item: Facility) => item.tag === tag) as Facility
}

export { facilityData, getFacilityByTag }
