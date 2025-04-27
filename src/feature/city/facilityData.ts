import { Facility } from './FacilityType'

const facilityData: Facility[] = [
    {
        tag: 'neuralnexus',
        title: 'NeuralNexus',
        description:
            'The digital heart of NeonHollow, where minds merge with machines and the future pulses in streams of data.',
        rollList: [
            { roll: '2', text: 'System Anomaly', link: '/R471' },
            { roll: '3-4', text: 'Illegal Trial → +1 Heat' },
            { roll: '5-6', text: 'Test Failure → -1 Health' },
            { roll: '7', text: 'No Effect' },
            { roll: '8-9', text: 'Unplanned Find → +1 Energy' },
            { roll: '10-11', text: 'Major Break → +1 Intel' },
            { roll: '12', text: 'Mysterious Encounter', link: '/R481' },
        ],
        actionList: [
            {
                title: '💡 Mind Overdrive:',
                steps: [
                    { text: 'Spend 3 Health → Roll 2d6 → Add 2' },
                    { text: 'Add Logic or Intuition' },
                    { text: 'Gain Intel', link: '/R305' },
                ],
            },
            {
                title: '🔋 Neural Sync Boost:',
                steps: [
                    { text: 'Pay 4.000 ¥ → Roll 2d6' },
                    { text: 'Add Logic or Charisma' },
                    { text: 'Gain Energy', link: '/R302' },
                ],
            },
            {
                title: '🧠 Logic Refinement:',
                steps: [
                    { text: 'Pay 2.000 ¥ per point of Logic' },
                    { text: 'Roll 2d6 → Add 10 → Subtract Logic' },
                    { text: 'Improve Attribute', link: '/R306' },
                ],
            },
        ],
    },
    {
        tag: 'patrolhub',
        title: 'PatrolHub',
        description:
            'The city`s watchful eye, where enforcers gather, drones launch, and order teeters on the edge of chaos.',
        rollList: [
            { roll: '2', text: 'Patrol Check', link: '/R472' },
            { roll: '3-4', text: 'Security Breach → +1 Heat' },
            { roll: '5-6', text: 'Blamed → -1 Reputation' },
            { roll: '7', text: 'No Effect' },
            { roll: '8-9', text: 'Backup Support → +1 Energy' },
            { roll: '10-11', text: 'Familiar Face → -1 Heat' },
            { roll: '12', text: 'Access Granted → +1 Reputation' },
        ],
        actionList: [
            {
                title: '🔥 Quiet Bribe:',
                steps: [
                    { text: 'Pay 6.000 ¥ → Roll 2d6 → Add 2' },
                    { text: 'Add Strength or Charisma' },
                    { text: 'Reduce Heat', link: '/R304' },
                ],
            },
            {
                title: '💰 Bounty Pursuit:',
                steps: [
                    { text: 'Spend 3 Health → Roll 2d6 → Add 2' },
                    { text: 'Add Strength or Intuition' },
                    { text: 'Gain Nuyen', link: '/R303' },
                ],
            },
        ],
    },
    {
        tag: 'biocare',
        title: 'BioCare',
        description:
            'Pioneers of life, healing the city’s wounds and unlocking the secrets of humanity — at a price.',
        rollList: [
            { roll: '2', text: 'Medical Malfunction', link: '/R473' },
            { roll: '3-4', text: 'Defiant Case → +1 Heat' },
            { roll: '5-6', text: 'Grim Report → -1 Health' },
            { roll: '7', text: 'No Effect' },
            { roll: '8-9', text: 'Energy Boost → +1 Energy' },
            { roll: '10-11', text: 'Civic Aid → +1 Reputation' },
            { roll: '12', text: 'Mysterious Encounter', link: '/R483' },
        ],
        actionList: [
            {
                title: '❤️ Nano Restoration:',
                steps: [
                    { text: 'Pay 6.000 ¥ → Roll 2d6 → Add 2' },
                    { text: 'Add Strength or Agility' },
                    { text: 'Gain Health', link: '/R301' },
                ],
            },
            {
                title: '💰 Donate Plasma:',
                steps: [
                    { text: 'Spend 2 Health → Roll 2d6' },
                    { text: 'Add Agility or Reaction' },
                    { text: 'Gain Nuyen', link: '/R303' },
                ],
            },
            {
                title: '💪 Agility Recalibration:',
                steps: [
                    { text: 'Pay 2.000 ¥ per point of Agility' },
                    { text: 'Roll 2d6 → Add 10 → Subtract Agility' },
                    { text: 'Improve Attribute', link: '/R306' },
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
            { roll: '2', text: 'Lost Data', link: '/R474' },
            { roll: '3-4', text: 'Plant Harvest → +1 Heat' },
            { roll: '5-6', text: 'Toxic Fungal → -1 Health' },
            { roll: '7', text: 'No Effect' },
            { roll: '8-9', text: 'Friendly Chat → +1 Energy' },
            { roll: '10-11', text: 'Solar Soak → +1 Health' },
            { roll: '12', text: 'Mysterious Encounter', link: '/R484' },
        ],
        actionList: [
            {
                title: '🔋 Vital Rejuvenation:',
                steps: [
                    { text: 'Spend 1 Health → Roll 2d6 → Subtract 2' },
                    { text: 'Add Agility or Reaction' },
                    { text: 'Gain Energy', link: '/R302' },
                ],
            },
            {
                title: '🔥 Meditative Escape:',
                steps: [
                    { text: 'Pay 4.000 ¥ → Roll 2d6' },
                    { text: 'Add Reaction or Logic' },
                    { text: 'Reduce Heat', link: '/R304' },
                ],
            },
            {
                title: '💪 Reaction Sharpening:',
                steps: [
                    { text: 'Pay 1.000 ¥ per point of Reaction' },
                    { text: 'Roll 2d6 → Add 10 → Subtract Reaction' },
                    { text: 'Improve Attribute', link: '/R306' },
                ],
            },
        ],
    },
    {
        tag: 'dreamsphere',
        title: 'DreamSphere',
        description:
            'An immersive realm where fantasies awaken and reality bends under layers of shimmering light.',
        rollList: [
            { roll: '2', text: 'Dream Glitch', link: '/R475' },
            { roll: '3-4', text: 'Shady Moves → +1 Heat' },
            { roll: '5-6', text: 'Price Jump → -2.000 ¥' },
            { roll: '7', text: 'No Effect' },
            { roll: '8-9', text: 'Massage Chair → +1 Energy' },
            { roll: '10-11', text: 'Social Pulse → +1 Reputation' },
            { roll: '12', text: 'Mysterious Encounter', link: '/R485' },
        ],
        actionList: [
            {
                title: '🔋 Energetic Reboot:',
                steps: [
                    { text: 'Pay 6.000 ¥ → Roll 2d6 → Add 2' },
                    { text: 'Add Reaction or Intuition' },
                    { text: 'Gain Energy', link: '/R302' },
                ],
            },
            {
                title: '💰 Memory Extraction:',
                steps: [
                    { text: 'Spend 2 Energy → Roll 2d6' },
                    { text: 'Add Logic or Intuition' },
                    { text: 'Gain Nuyen', link: '/R303' },
                ],
            },
            {
                title: '🧠 Intuition Awareness:',
                steps: [
                    { text: 'Pay 1.000 ¥ per point of Intuition' },
                    { text: 'Roll 2d6 → Add 10 → Subtract Intuition' },
                    { text: 'Improve Attribute', link: '/R306' },
                ],
            },
        ],
    },
    {
        tag: 'hololounge',
        title: 'HoloLounge',
        description:
            'The city`s pulse made tangible — a kaleidoscope of holograms, music, and endless possibilities.',
        rollList: [
            { roll: '2', text: 'The Whisper Network', link: '/R476' },
            { roll: '3-4', text: 'Drunk and Disorderly → +1 Heat' },
            { roll: '5-6', text: 'Toxic Cocktail → -1 Health' },
            { roll: '7', text: 'No Effect' },
            { roll: '8-9', text: 'Nutritious Snack → +1 Energy' },
            { roll: '10-11', text: 'Winning Bet → +2.000 ¥' },
            { roll: '12', text: 'Mysterious Encounter', link: '/R486' },
        ],
        actionList: [
            {
                title: '💰 Gambling Table:',
                steps: [
                    { text: 'Pay 4.000 ¥ → Roll 2d6' },
                    { text: 'Add Reaction or Charisma' },
                    { text: 'Gain Nuyen', link: '/R303' },
                ],
            },
            {
                title: '💡 Pay the Insider:',
                steps: [
                    { text: 'Spend 2 Energy → Roll 2d6' },
                    { text: 'Add Intuition or Charisma' },
                    { text: 'Gain Intel', link: '/R305' },
                ],
            },
            {
                title: '🧠 Charisma Negotiation:',
                steps: [
                    { text: 'Pay 2.000 ¥ per point of Charisma' },
                    { text: 'Roll 2d6 → Add 10 → Subtract Charisma' },
                    { text: 'Improve Attribute', link: '/R306' },
                ],
            },
        ],
    },
    {
        tag: 'irongym',
        title: 'IronGym',
        description:
            '"Where sweat forges strength, and every clang of metal echoes the determination to rise above.',
        rollList: [
            { roll: '2', text: 'Unplanned Challenge', link: '/R477' },
            { roll: '3-4', text: 'Wrong Locker Room → +1 Heat' },
            { roll: '5-6', text: 'Unpaid Membership → -2.000 ¥' },
            { roll: '7', text: 'No Effect' },
            { roll: '8-9', text: 'Promo Energy Bar → +1 Energy' },
            { roll: '10-11', text: 'Perfect Form → +1 Reputation' },
            { roll: '12', text: 'Mysterious Encounter', link: '/R487' },
        ],
        actionList: [
            {
                title: '❤️ Massage Therapy:',
                steps: [
                    { text: 'Pay 4.000 ¥ → Roll 2d6' },
                    { text: 'Add Strength or Reaction' },
                    { text: 'Gain Health', link: '/R301' },
                ],
            },
            {
                title: '💰 Nutritional Experiments:',
                steps: [
                    { text: 'Spend 2 Health → Roll 2d6' },
                    { text: 'Add Strength or Agility' },
                    { text: 'Gain Nuyen', link: '/R303' },
                ],
            },
            {
                title: '💪 Strength Conditioning:',
                steps: [
                    { text: 'Pay 1.000 ¥ per point of Strength' },
                    { text: 'Roll 2d6 → Add 10 → Subtract Strength' },
                    { text: 'Improve Attribute', link: '/R306' },
                ],
            },
        ],
    },
    {
        tag: 'zerozone',
        title: 'ZeroZone',
        description:
            'The epicenter of icy calm and calculated precision—a space where sharp minds outmatch the chaos.',
        rollList: [],
        actionList: [
            {
                title: 'Recruit a Runner:',
                steps: [
                    { text: 'Roll On the Runner Matrix' },
                    { text: 'Remember The two highest attributes' },
                    { text: 'Pay 10.000 ¥ → Roll 2d6 → Add Charisma' },
                    { text: 'Hire Runner', link: '/R307' },
                ],
            },
            {
                title: 'Challenge a Runner:',
                steps: [
                    { text: 'Combine Your two highest attributes' },
                    { text: 'Roll On the Runner Matrix' },
                    { text: 'Add Opponent’s corresponding values' },
                    { text: 'You lost? → Lose Health equal to the gap' },
                    { text: 'Add 10 to the gap' },
                    { text: 'Gain Nuyen', link: '/R303' },
                ],
            },
        ],
    },
    {
        tag: 'smugglerden',
        title: 'SmugglerDen',
        description:
            'A shadowy refuge for the bold, where secrets are currency, and fortune favors the daring.',
        rollList: [
            { roll: '2', text: 'Smuggler’s Test', link: '/R478' },
            { roll: '3-4', text: 'Police Raid → +1 Heat' },
            { roll: '5-6', text: 'Knife Fight → -1 Health' },
            { roll: '7', text: 'No Effect' },
            { roll: '8-9', text: 'Discount Promotion → +2.000 ¥' },
            { roll: '10-11', text: 'Thief Caught → +1 Reputation' },
            { roll: '12', text: 'Prestigious Contact → +1 Intel' },
        ],
        actionList: [
            {
                title: '💰 Fence Hot Goods:',
                steps: [
                    { text: 'Spend 1 Health → Roll 2d6 → Subtract 2' },
                    { text: 'Add Agility or Logic' },
                    { text: 'Gain Nuyen', link: '/R303' },
                ],
            },
            {
                title: '💡 Corrupted Files:',
                steps: [
                    { text: 'Pay 2.000 ¥ → Roll 2d6 → Subtract 2' },
                    { text: 'Add Agility or Intuition' },
                    { text: 'Gain Intel', link: '/R305' },
                ],
            },
        ],
    },
    {
        tag: 'safehouse',
        title: 'SafeHouse',
        description:
            'An impenetrable sanctuary where the world’s troubles melt away, leaving only peace and security.',
        rollList: [],
        actionList: [
            {
                title: '❤️ Stimulant Injection:',
                steps: [
                    { text: 'Spend 1 Energy → Roll 2d6 → Subtract 2' },
                    { text: 'Add Strength or Logic' },
                    { text: 'Gain Health', link: '/R301' },
                ],
            },
            {
                title: '🔥 False Credentials:',
                steps: [
                    { text: 'Pay 2.000 ¥ → Roll 2d6 → Subtract 2' },
                    { text: 'Add Agility or Charisma' },
                    { text: 'Reduce Heat', link: '/R304' },
                ],
            },
        ],
    },
    {
        tag: 'megacorp',
        title: 'MegaCorp',
        description:
            'A towering empire of ambition, where innovation meets dominance in the pursuit of global influence.',
        rollList: [],
        actionList: [
            {
                title: '🚀 Incite Rebellion:',
                steps: [{ text: 'Spend 5 Reputation → +2 Heat' }],
            },
            {
                title: '🚀 Propaganda Campaign:',
                steps: [{ text: 'Pay 30.000 ¥ → +2 Heat' }],
            },
        ],
    },
]

const getFacilityByTag = (tagId: string): Facility => {
    return facilityData.find(
        (facility: Facility) => facility.tag === tagId
    ) as Facility
}

export { getFacilityByTag }
