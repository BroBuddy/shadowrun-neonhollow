import { Background } from "../types/ArchetypeType"

const backgroundStreetSamurai: readonly Background[] = [
    {
        id: '11',
        title: 'Ex-Corp Mercenary',
        description:
            'You were top tier corporate muscle until they burned you on a black op. Now you run the shadows alone, hunting payback and something worth fighting for.',
        attributes: {
            Strength: 1,
            Charisma: 1,
        },
    },
    {
        id: '12',
        title: 'Nomadic Fighter',
        description:
            'You grew up swinging fists in illegal arenas just to eat. The streets made you fast, cold and ruthless. Trust is a luxury you never learned to afford.',
        attributes: {
            Strength: 1,
            Logic: 1,
        },
    },
    {
        id: '13',
        title: 'Street Protector',
        description:
            'You saw what corps do to the weak and swore it would stop with you. A vigilante with a code, but that tunnel vision has cost you more than a few friends.',
        attributes: {
            Reaction: 1,
            Charisma: 1,
        },
    },
    {
        id: '14',
        title: 'Cybernetic Rebel',
        description:
            'You chrome up to survive and now you are more machine than meat. Superior in a fight, but somewhere along the way you lost the thread back to humanity.',
        attributes: {
            Agility: 1,
            Intuition: 1,
        },
    },
    {
        id: '15',
        title: "Bounty Hunter's Legacy",
        description:
            'Your mentor was a legend. You trained under them, carried on the work and now carry the weight. Laser focused on the target, blind to everything else.',
        attributes: {
            Strength: 1,
            Intuition: 1,
        },
    },
    {
        id: '16',
        title: 'Corporate Test Subject',
        description:
            'They wired you up, ran their tests and tossed you out. You survived their experiments and became something they never intended. Hard to fight, harder to trust.',
        attributes: {
            Reaction: 1,
            Logic: 1,
        },
    },
]

const backgroundDecker: readonly Background[] = [
    {
        id: '21',
        title: 'Corporate Insider',
        description:
            'You built their systems from the inside. When they stabbed you in the back, you walked out with every secret they had. Now you sell to the highest bidder.',
        attributes: {
            Logic: 1,
            Strength: 1,
        },
    },
    {
        id: '22',
        title: 'Black Hat Hacker',
        description:
            'You crack corporate ice for sport and profit. Your rep in the underground is solid, but authority of any kind makes your trigger finger itch.',
        attributes: {
            Logic: 1,
            Charisma: 1,
        },
    },
    {
        id: '23',
        title: 'Tech Salvager',
        description:
            'You learned code by ripping apart dead tech in the gutter. Old security protocols have no secrets from you, and neither does anything else people throw away.',
        attributes: {
            Logic: 1,
            Reaction: 1,
        },
    },
    {
        id: '24',
        title: 'Digital Ghost',
        description:
            'You do not exist on any network and that is exactly how you like it. A phantom in the system, but face to face you are about as smooth as broken glass.',
        attributes: {
            Intuition: 1,
            Charisma: 1,
        },
    },
    {
        id: '25',
        title: 'Data Smuggler',
        description:
            'Hot data moves through you like contraband through a border town. You know every digital back alley, but the people you work with are never quite trustworthy.',
        attributes: {
            Logic: 1,
            Intuition: 1,
        },
    },
    {
        id: '26',
        title: 'Cyber Detective',
        description:
            'You traded the trenchcoat for a deck and never looked back. Sharp eyes, sharper instincts and a talent for finding dirt people buried deep.',
        attributes: {
            Intuition: 1,
            Strength: 1,
        },
    },
]

const backgroundRigger: readonly Background[] = [
    {
        id: '31',
        title: 'Mechanic Prodigy',
        description:
            'Machines made more sense to you than people ever did. You freelance your drone fleet to anyone who pays and you rarely need to say a word to get the job done.',
        attributes: {
            Agility: 1,
            Charisma: 1,
        },
    },
    {
        id: '32',
        title: 'Ex-Military Pilot',
        description:
            'Special forces trained you to run drones in hot zones. Civilian life never quite stuck, so you brought the skills to the shadows. Cold, precise and effective.',
        attributes: {
            Reaction: 1,
            Charisma: 1,
        },
    },
    {
        id: '33',
        title: 'Drone Junkie',
        description:
            'Your drones are your family. You sleep with them, think about them and would rather jack in than talk to a real person. Unmatched control, zero social graces.',
        attributes: {
            Reaction: 1,
            Strength: 1,
        },
    },
    {
        id: '34',
        title: 'Street Mechanic',
        description:
            'You can fix anything with duct tape and spite. Hands on, street smart and invaluable when things break down. Just do not ask you to read the manual.',
        attributes: {
            Agility: 1,
            Logic: 1,
        },
    },
    {
        id: '35',
        title: 'Corporate Test Pilot',
        description:
            'You pushed experimental rigs to the limit until one of them pushed back. The corp cut you loose. Now you freelance with scars and inside knowledge they wish you did not have.',
        attributes: {
            Intuition: 1,
            Logic: 1,
        },
    },
    {
        id: '36',
        title: 'Tech Scavenger',
        description:
            'You build your rigs from whatever you can find and somehow they always fly. Improvised, unpredictable and surprisingly effective. Corporate engineers hate you.',
        attributes: {
            Agility: 1,
            Intuition: 1,
        },
    },
]

const backgroundMage: readonly Background[] = [
    {
        id: '41',
        title: 'Arcane Scholar',
        description:
            'You have read every text, cracked every theory and know more about magic than most mages twice your age. Getting it to work under fire is another story.',
        attributes: {
            Logic: 1,
            Strength: 1,
        },
    },
    {
        id: '42',
        title: 'Street Shaman',
        description:
            'No academy, no mentor. You learned magic from the spirits haunting your block. Raw, unpredictable and powerful, but sometimes way too powerful to control.',
        attributes: {
            Intuition: 1,
            Charisma: 1,
        },
    },
    {
        id: '43',
        title: 'Corporate Magician',
        description:
            'You ran espionage and psyops for a megacorp until they burned you. Now the magic works for you and the betrayal keeps you sharp.',
        attributes: {
            Charisma: 1,
            Intuition: 1,
        },
    },
    {
        id: '44',
        title: 'Occult Investigator',
        description:
            'You dig into the paranormal and the astral leaves trails others cannot see. Sought after for the hard cases, but sometimes what you uncover cannot be unlearned.',
        attributes: {
            Intuition: 1,
            Reaction: 1,
        },
    },
    {
        id: '45',
        title: 'Spellbound Outlaw',
        description:
            'Magic kept you a step ahead of the law for years. You run outside every system and like it that way, even when it puts a target on your back.',
        attributes: {
            Charisma: 1,
            Logic: 1,
        },
    },
    {
        id: '46',
        title: 'Mystic Healer',
        description:
            'You patch up the wounded with spells where medicine fails. Your empathy runs deep, maybe too deep. You put everyone else first and yourself last.',
        attributes: {
            Logic: 1,
            Strength: 1,
        },
    },
]

const backgroundFace: readonly Background[] = [
    {
        id: '51',
        title: 'Corporate Negotiator',
        description:
            'You brokered deals and buried scandals for a megacorp until the lies got too heavy. The charm still works. The guilt is just background noise now.',
        attributes: {
            Charisma: 1,
            Strength: 1,
        },
    },
    {
        id: '52',
        title: 'Street Hustler',
        description:
            'You talked your way out of everything the streets threw at you. Silver tongue, quick hands and zero patience for anyone who plays it straight.',
        attributes: {
            Charisma: 1,
            Logic: 1,
        },
    },
    {
        id: '53',
        title: 'Public Relations Specialist',
        description:
            'You built images, killed stories and made people believe anything. Powerful connections, but after years behind a mask you are not sure who you are without one.',
        attributes: {
            Charisma: 1,
            Intuition: 1,
        },
    },
    {
        id: '54',
        title: 'Smooth-Talking Fixer',
        description:
            'You pull strings, broker favors and talk circles around everyone in the room. Words do the heavy lifting. Good thing, because your fists do not.',
        attributes: {
            Charisma: 1,
            Strength: 1,
        },
    },
    {
        id: '55',
        title: 'Political Operator',
        description:
            'You know how power moves and how to move with it. A master of social chess, but the constant scheming has made people wary of you and with good reason.',
        attributes: {
            Charisma: 1,
            Reaction: 1,
        },
    },
    {
        id: '56',
        title: 'Media Manipulator',
        description:
            'You shaped public reality for a living. People believe what you want them to believe. Just do not ask you to tell you what is actually true anymore.',
        attributes: {
            Charisma: 1,
            Intuition: 1,
        },
    },
]

const backgroundShaman: readonly Background[] = [
    {
        id: '61',
        title: 'Urban Spirit Whisperer',
        description:
            'The city is alive with spirits and you speak their language. Street entities trust you more than most people do. Their voices are constant and sometimes too loud.',
        attributes: {
            Intuition: 1,
            Charisma: 1,
        },
    },
    {
        id: '62',
        title: 'Wilderness Mystic',
        description:
            'You were raised by the wild and the spirits that live in it. Deep connection to nature, but the concrete jungle still feels like foreign territory.',
        attributes: {
            Intuition: 1,
            Logic: 1,
        },
    },
    {
        id: '63',
        title: 'Ritualistic Shaman',
        description:
            'Ceremony and ritual are how you channel real power. Ancient and precise, but when things move fast and there is no time to prepare you tend to fall behind.',
        attributes: {
            Intuition: 1,
            Strength: 1,
        },
    },
    {
        id: '64',
        title: 'Shamanic Healer',
        description:
            'Spirits guide your hands and you have pulled people back from the edge more than once. You give everything to others and rarely leave anything for yourself.',
        attributes: {
            Intuition: 1,
            Reaction: 1,
        },
    },
    {
        id: '65',
        title: 'Totemic Shaman',
        description:
            'You bonded with animal spirits and carry their strength. Fierce, instinctive and loyal to your totem above all else, even when it complicates things.',
        attributes: {
            Intuition: 1,
            Charisma: 1,
        },
    },
    {
        id: '66',
        title: 'Astrological Shaman',
        description:
            'The stars tell you things others cannot hear. Cosmic patterns guide your path, but when the moment demands fast action the stars are not always quick to answer.',
        attributes: {
            Intuition: 1,
            Agility: 1,
        },
    },
]

export const backgroundData: readonly Background[] = [
    ...backgroundStreetSamurai,
    ...backgroundDecker,
    ...backgroundRigger,
    ...backgroundMage,
    ...backgroundFace,
    ...backgroundShaman,
]