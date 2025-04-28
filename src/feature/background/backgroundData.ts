import { Background } from './BackgroundType'

const backgroundData: Background[] = [
    {
        id: 'R711',
        title: 'Ex-Corp Mercenary',
        description:
            "Once a top-tier mercenary in a megacorp's elite security division, you were betrayed during a covert operation and discarded. Now, you're a lone warrior in the shadows of the city, seeking vengeance and a purpose beyond corporate greed.",
        attributes: ['+1 Strength', '-1 Charisma'],
    },
    {
        id: 'R712',
        title: 'Nomadic Fighter',
        description:
            'Growing up on the streets, you were forced to fight in illegal arenas to survive. The constant need for combat honed your reflexes and made you cold, calculating, and ruthless. Though you excel at combat, you find it hard to trust anyone.',
        attributes: ['+1 Strength', '-1 Logic'],
    },
    {
        id: 'R713',
        title: 'Street Protector',
        description:
            'You took a vow to protect the weak after witnessing the horrors of unchecked corporate power. Operating as a vigilante, you combine your combat prowess with a sense of justice. However, your single-minded pursuit of your mission has made you somewhat disconnected from the social fabric of the city.',
        attributes: ['+1 Reaction', '-1 Charisma'],
    },
    {
        id: 'R714',
        title: 'Cybernetic Rebel',
        description:
            "Having undergone extreme cybernetic enhancements to survive the harsh world, you're a walking weapon. While your cyberware gives you superior combat abilities, it's also a constant reminder of your dependence on technology, leading to a sense of detachment from humanity.",
        attributes: ['+1 Agility', '-1 Intuition'],
    },
    {
        id: 'R715',
        title: "Bounty Hunter's Legacy",
        description:
            'Following in the footsteps of a legendary bounty hunter, you were trained in the art of tracking and eliminating targets. Now, you carry the weight of that legacy, striving to live up to the Edge your mentor left behind. Your focused nature often leads you to overlook more subtle aspects of situations.',
        attributes: ['+1 Strength', '-1 Intuition'],
    },
    {
        id: 'R716',
        title: 'Corporate Test Subject',
        description:
            "Your cybernetic enhancements were once part of a corporate experimentation project. Now, you're a product of their greed and manipulation. Though you're a formidable fighter, your distrust of corporations and technology runs deep, leaving you isolated from others.",
        attributes: ['+1 Reaction', '-1 Logic'],
    },
    {
        id: 'R721',
        title: 'Corporate Insider',
        description:
            'You once worked as a lead developer for a powerful megacorp, creating cutting-edge software. But when the corporation betrayed you, you took your knowledge and skills to the shadows, selling secrets to the highest bidder.',
        attributes: ['+1 Logic', '-1 Strength'],
    },
    {
        id: 'R722',
        title: 'Black Hat Hacker',
        description:
            'A notorious figure in the underground world of hacking, you specialize in infiltrating high-security systems and exposing corporate corruption. Your expertise in coding and bypassing digital defenses is unmatched, but your rebellious nature makes it difficult for you to work with authority.',
        attributes: ['+1 Logic', '-1 Charisma'],
    },
    {
        id: 'R723',
        title: 'Tech Salvager',
        description:
            "You grew up scavenging old tech and learning how to repair, reprogram, and repurpose it. Now, you're a master at breaking into digital systems, reworking old security protocols, and stealing valuable data from the ruins of the past.",
        attributes: ['+1 Logic', '-1 Reaction'],
    },
    {
        id: 'R724',
        title: 'Digital Ghost',
        description:
            "After years of living off the grid, you became an expert in digital anonymity. No one can trace you through the networks, and you're a ghost in the system. However, this lifestyle has left you disconnected from the physical world, and you're not great at face-to-face interactions.",
        attributes: ['+1 Intuition', '-1 Charisma'],
    },
    {
        id: 'R725',
        title: 'Data Smuggler',
        description:
            'You specialize in transporting sensitive data across dangerous virtual and physical territories. Your knowledge of digital security and evasive tactics is unrivaled, but your constant dealings with shady individuals make it hard to trust anyone in your line of work.',
        attributes: ['+1 Logic', '-1 Intuition'],
    },
    {
        id: 'R726',
        title: 'Cyber Detective',
        description:
            'Once a private investigator, you now solve cases by delving deep into the digital world. With a sharp eye for detail and a mastery of investigative software, you dig into the dark corners of the internet, finding information others would never dream of.',
        attributes: ['+1 Intuition', '-1 Strength'],
    },
    {
        id: 'R731',
        title: 'Mechanic Prodigy',
        description:
            'Growing up around machines and drones, you quickly became a master at understanding their inner workings. From tinkering with simple tools to controlling sophisticated machinery, you`ve honed your skills and now use them to command a fleet of drones, making your living as a freelancer.',
        attributes: ['+1 Agility', '-1 Charisma'],
    },
    {
        id: 'R732',
        title: 'Ex-Military Pilot',
        description:
            'Once part of a special forces team, you were trained to command advanced drones in combat situations. After leaving the military, you took your skills to the streets, offering your drone expertise to those who need precision and power on their missions. However, your military discipline can sometimes make you seem distant and cold.',
        attributes: ['+1 Reaction', '-1 Charisma'],
    },
    {
        id: 'R733',
        title: 'Drone Junkie',
        description:
            'Your obsession with drones started early, spending hours disassembling and reassembling them until you perfected the craft. You`re now a Rigger with an unholy bond to your drones, spending more time with them than with actual people. This obsession has given you unparalleled control, but it has also distanced you from the rest of humanity.',
        attributes: ['+1 Reaction', '-1 Strength'],
    },
    {
        id: 'R734',
        title: 'Street Mechanic',
        description:
            'Working on vehicles and drones in the streets, you have a Edge for fixing anything that`s broken. Your hands-on knowledge makes you an invaluable asset when things go wrong. While you`re a genius with machines, your lack of formal training means you sometimes miss the finer details of more complicated systems.',
        attributes: ['+1 Agility', '-1 Logic'],
    },
    {
        id: 'R735',
        title: 'Corporate Test Pilot',
        description:
            'Once employed by a megacorp to test new drones and vehicles, you were the first to push the limits of experimental tech. After an accident during a test flight, you were let go, but now you use your expertise to freelance. Your inside knowledge makes you a dangerous asset, but it also leaves you haunted by past failures.',
        attributes: ['+1 Intuition', '-1 Logic'],
    },
    {
        id: 'R736',
        title: 'Tech Scavenger',
        description:
            'You`ve spent years scavenging for parts, taking what you can from abandoned tech and making it your own. This DIY approach to Rigger work means you`re always improvising, sometimes putting together drones from mismatched parts. Your unconventional methods make you unpredictable, but also highly resourceful.',
        attributes: ['+1 Agility', '-1 Intuition'],
    },
    {
        id: 'R741',
        title: 'Arcane Scholar',
        description:
            'Once a student of ancient magical texts, you immersed yourself in the arcane arts, learning the hidden secrets of the mystical world. Your knowledge is vast, but sometimes your focus on theory leaves you unprepared for practical use in the field.',
        attributes: ['+1 Logic', '-1 Strength'],
    },
    {
        id: 'R742',
        title: 'Street Shaman',
        description:
            'Raised in the slums, you learned magic not from books, but from the spirits that roam the streets. Your connection to the metaphysical world is raw and untamed, but your skills in magic can be unpredictable, especially when you push too far.',
        attributes: ['+1 Intuition', '-1 Charisma'],
    },
    {
        id: 'R743',
        title: 'Corporate Magician',
        description:
            'Once you worked for a powerful megacorp, using your magical abilities to assist in corporate espionage, security, and psychological manipulation. But when the corp turned its back on you, you found yourself on the streets. Now, you use your magical expertise for personal gain, though you still feel the weight of the betrayal.',
        attributes: ['+1 Charisma', '-1 Intuition'],
    },
    {
        id: 'R744',
        title: 'Occult Investigator',
        description:
            'You started your career investigating the paranormal, using magic to unravel mysteries that others couldn`t. Your sharp mind and connection to the supernatural world have made you a sought-after consultant, though sometimes your investigations reveal more than you bargained for.',
        attributes: ['+1 Intuition', '-1 Reaction'],
    },
    {
        id: 'R745',
        title: 'Spellbound Outlaw',
        description:
            'Once a fugitive from the law, you turned to magic to stay one step ahead of the authorities. Your rogue nature and magical prowess make you a formidable force, but your tendency to operate outside the law often leads to dangerous consequences.',
        attributes: ['+1 Charisma', '-1 Logic'],
    },
    {
        id: 'R746',
        title: 'Mystic Healer',
        description:
            'Focused on using your magical abilities to heal and protect others, you’ve developed a deep empathy for those in need. You’ve used your powers to mend the sick and wounded, but sometimes your compassion leads you to put others before yourself, putting you at a disadvantage.',
        attributes: ['+1 Logic', '-1 Strength'],
    },
    {
        id: 'R751',
        title: 'Corporate Negotiator',
        description:
            "You were once the corporate mouthpiece for a powerful megacorp, using your charm and persuasion to broker deals, smooth over conflicts, and handle difficult clients. Now that you're out of the corporate world, your skills still serve you well, but you’re haunted by the corporate lies and betrayals you helped cover up.",
        attributes: ['+1 Charisma', '-1 Strength'],
    },
    {
        id: 'R752',
        title: 'Street Hustler',
        description:
            'Growing up in the underbelly of the city, you learned to talk your way out of trouble and manipulate those around you. Your ability to charm, deceive, and bargain makes you a force to be reckoned with, but your street-smart ways sometimes clash with more refined methods of negotiation.',
        attributes: ['+1 Charisma', '-1 Logic'],
    },
    {
        id: 'R753',
        title: 'Public Relations Specialist',
        description:
            'You’ve spent your career crafting public personas and smoothing over scandals. People believe in the image you create, and that has earned you connections and influence. However, constantly living behind a facade makes you sometimes forget who you truly are and what you believe in.',
        attributes: ['+1 Charisma', '-1 Intuition'],
    },
    {
        id: 'R754',
        title: 'Smooth-Talking Fixer',
        description:
            "You specialize in getting things done by using your charisma and your extensive network of contacts. Whether you're pulling strings for the rich and powerful or making shady deals on the side, your ability to talk your way through almost any situation is unmatched. However, your reliance on your charm means you might lack the physical abilities to back up your words.",
        attributes: ['+1 Charisma', '-1 Strength'],
    },
    {
        id: 'R755',
        title: 'Political Operator',
        description:
            'With a background in politics, you know how to work the system, leverage power, and gain influence. Your experience in the political arena has taught you how to navigate complex social dynamics, but the constant scheming can sometimes leave you isolated and distrusted by others.',
        attributes: ['+1 Charisma', '-1 Reaction'],
    },
    {
        id: 'R756',
        title: 'Media Manipulator',
        description:
            'Your past in the media industry has given you a deep understanding of how to control public perception. You can make people believe almost anything, but your focus on shaping reality through words sometimes causes you to overlook the raw, unvarnished truth.',
        attributes: ['+1 Charisma', '-1 Intuition'],
    },
    {
        id: 'R761',
        title: 'Urban Spirit Whisperer',
        description:
            'You’ve spent years in the cities, learning to commune with the spirits that haunt the streets and alleyways. You’ve forged strong bonds with urban entities and have learned how to tap into their power for guidance and protection. However, the constant exposure to the restless spirits sometimes clouds your own judgment.',
        attributes: ['+1 Intuition', '-1 Charisma'],
    },
    {
        id: 'R762',
        title: 'Wilderness Mystic',
        description:
            'Raised deep in the wilds, you learned the ancient ways of nature and the spirits that dwell within it. Whether meditating beneath the trees or speaking to the winds, you are deeply connected to the forces of the natural world. But this connection sometimes makes it hard for you to adapt to urban life.',
        attributes: ['+1 Intuition', '-1 Logic'],
    },
    {
        id: 'R763',
        title: 'Ritualistic Shaman',
        description:
            'Your life has been shaped by ancient rituals and spiritual ceremonies, drawing on the power of the earth and the astral realm. Through your elaborate ceremonies, you channel powerful spirits, but your reliance on ritual can make it difficult to think on your feet in more modern situations.',
        attributes: ['+1 Intuition', '-1 Strength'],
    },
    {
        id: 'R764',
        title: 'Shamanic Healer',
        description:
            'Your connection to the spirits has allowed you to tap into their power to heal and protect others. You’ve saved countless lives with your spiritual abilities, but your dedication to others sometimes means you neglect your own well-being or personal growth.',
        attributes: ['+1 Intuition', '-1 Reaction'],
    },
    {
        id: 'R765',
        title: 'Totemic Shaman',
        description:
            'With a deep reverence for animal spirits and totemic power, you’ve bonded with creatures of the wild to gain their strength.',
        attributes: ['+1 Intuition', '-1 Charisma'],
    },
    {
        id: 'R766',
        title: 'Astrological Shaman',
        description:
            'You’ve long studied the stars and celestial forces, interpreting their movements to guide your decisions. Your spiritual connection to the cosmos allows you to read signs and foresee events, but your reliance on fate and cosmic wisdom sometimes makes you slow to act in the face of immediate challenges.',
        attributes: ['+1 Intuition', '-1 Agility'],
    },
]

const getBackgroundById = (id: string): Background => {
    return backgroundData.find(
        (item: Background) => item.id === id
    ) as Background
}

export { getBackgroundById }
