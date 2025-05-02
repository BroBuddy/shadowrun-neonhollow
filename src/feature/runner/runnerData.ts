import { Runner } from './RunnerType'

const runnerOnes: readonly Runner[] = [
    {
        id: '11',
        title: 'Blake Vance',
        description:
            'Blake, a 31-year-old male Street Samurai, stands at 185 cm and weighs 90 kg.',
        attributes: {
            Strength: 6,
            Agility: 5,
            Reaction: 4,
            Logic: 2,
            Intuition: 3,
            Charisma: 2,
        },
        background:
            'Once a corporate enforcer, Blake turned against his employers after a mission went sideways. Now he sells his muscle and instincts to the highest bidder, living by his own code of honor.',
    },
    {
        id: '12',
        title: 'Avery Rios',
        description:
            'Avery, a 28-year-old female Decker, stands at 160 cm and weighs 55 kg.',
        attributes: {
            Strength: 2,
            Agility: 3,
            Reaction: 4,
            Logic: 6,
            Intuition: 5,
            Charisma: 3,
        },
        background:
            'Avery was born into a family of hackers, quickly learning the ropes of the digital world. She now operates as a freelance Decker, infiltrating corporate networks and selling valuable data to the highest bidder.',
    },
    {
        id: '13',
        title: 'Ryder Quinn',
        description:
            'Ryder, a 35-year-old male Rigger, stands at 178 cm and weighs 85 kg.',
        attributes: {
            Strength: 4,
            Agility: 6,
            Reaction: 5,
            Logic: 3,
            Intuition: 4,
            Charisma: 2,
        },
        background:
            'Ryder has spent years behind the wheel of various vehicles, both land and air, using his skills to transport cargo and carry out missions. His Edge for precision and cool-headedness in a crisis makes him a valuable asset.',
    },
    {
        id: '14',
        title: 'Juno Devine',
        description:
            'Juno, a 27-year-old female Mage, stands at 165 cm and weighs 60 kg.',
        attributes: {
            Strength: 2,
            Agility: 4,
            Reaction: 3,
            Logic: 6,
            Intuition: 5,
            Charisma: 4,
        },
        background:
            'Juno was raised in a secluded enclave where magic flowed freely. After leaving her sheltered life, she now uses her arcane powers to assist various factions in exchange for wealth and influence.',
    },
    {
        id: '15',
        title: 'Gabriel Voss',
        description:
            'Gabriel, a 29-year-old male Face, stands at 182 cm and weighs 78 kg.',
        attributes: {
            Strength: 3,
            Agility: 4,
            Reaction: 4,
            Logic: 5,
            Intuition: 6,
            Charisma: 7,
        },
        background:
            'Gabriel is a smooth-talking negotiator who uses his charm and wit to navigate through the most hostile environments. His natural charisma has made him a sought-after Face in the corporate and criminal worlds.',
    },
    {
        id: '16',
        title: 'Seraph Nalani',
        description:
            'Seraph, a 34-year-old female Shaman, stands at 170 cm and weighs 65 kg.',
        attributes: {
            Strength: 3,
            Agility: 4,
            Reaction: 4,
            Logic: 5,
            Intuition: 6,
            Charisma: 5,
        },
        background:
            'Seraph is a deeply spiritual Shaman, drawing power from the natural world and the spirits she communes with. Her knowledge of both the arcane and the physical world makes her a valuable ally in the shadows.',
    },
]

const runnerTwos: readonly Runner[] = [
    {
        id: '21',
        title: 'Lirael Elensar',
        description:
            'Lirael, a 28-year-old female Elf Street Samurai, stands at 188 cm and weighs 67 kg.',
        attributes: {
            Strength: 5,
            Agility: 7,
            Reaction: 6,
            Logic: 3,
            Intuition: 5,
            Charisma: 2,
        },
        background:
            'Once a skilled duelist in the Elven courts, Lirael now serves as a mercenary, applying her agility and precision in combat. Despite her noble origins, she prefers the shadows, finding freedom in the chaos of the streets.',
    },
    {
        id: '22',
        title: 'Thalion Galathil',
        description:
            'Thalion, a 32-year-old male Elf Decker, stands at 193 cm and weighs 70 kg.',
        attributes: {
            Strength: 3,
            Agility: 4,
            Reaction: 5,
            Logic: 7,
            Intuition: 6,
            Charisma: 2,
        },
        background:
            'Thalion was raised in the heart of the city, but his true home lies in the Matrix. A master hacker, he has infiltrated more corporate systems than most people could dream of. His long, lithe frame is a perfect reflection of his quick thinking and nimble fingers on the keyboard.',
    },
    {
        id: '23',
        title: 'Elandriel Amastacia',
        description:
            'Elandriel, a 25-year-old female Elf Rigger, stands at 191 cm and weighs 69 kg.',
        attributes: {
            Strength: 4,
            Agility: 6,
            Reaction: 7,
            Logic: 5,
            Intuition: 4,
            Charisma: 3,
        },
        background:
            'Elandriel comes from a long line of military tacticians, and she has combined her heritage with an unparalleled skill for piloting drones and vehicles. Whether she’s zooming through the skies or working behind the scenes to control her machines, she operates with the precision of a surgeon.',
    },
    {
        id: '24',
        title: 'Aeliana Talanor',
        description:
            'Aeliana, a 30-year-old female Elf Mage, stands at 192 cm and weighs 67 kg.',
        attributes: {
            Strength: 3,
            Agility: 4,
            Reaction: 5,
            Logic: 6,
            Intuition: 7,
            Charisma: 2,
        },
        background:
            'Aeliana was once an apprentice to one of the most powerful Elven mages, but after a betrayal shattered her trust, she now walks the path of a shadowy mage for hire. She draws power from the spirits and the moon, bending magic to her will in the darkest corners of the world.',
    },
    {
        id: '25',
        title: 'Felaeris Maethoril',
        description:
            'Felaeris, a 33-year-old male Elf Face, stands at 195 cm and weighs 72 kg.',
        attributes: {
            Strength: 3,
            Agility: 5,
            Reaction: 4,
            Logic: 6,
            Intuition: 5,
            Charisma: 7,
        },
        background:
            'Felaeris is a silver-tongued diplomat, skilled at maneuvering through the intricate web of corporate politics. His height and presence make him an imposing figure, while his charisma and sharp mind help him talk his way out of the tightest situations.',
    },
    {
        id: '26',
        title: 'Rylian Aelar',
        description:
            'Rylian, a 27-year-old male Elf Shaman, stands at 189 cm and weighs 66 kg.',
        attributes: {
            Strength: 4,
            Agility: 5,
            Reaction: 5,
            Logic: 4,
            Intuition: 7,
            Charisma: 3,
        },
        background:
            'Rylian was born under the influence of the winds and the spirits of the forest. He serves as a shaman, channeling the power of nature and the elements to guide his actions. His connection with the spiritual world makes him a fierce ally to those who seek to understand the mystical forces at play in the shadows.',
    },
]

const runnerThrees: readonly Runner[] = [
    {
        id: '31',
        title: 'Finnick O’Malley',
        description:
            'Finnick, a 40-year-old male Dwarf Street Samurai, stands at 123 cm and weighs 58 kg.',
        attributes: {
            Strength: 7,
            Agility: 5,
            Reaction: 4,
            Logic: 2,
            Intuition: 3,
            Charisma: 2,
        },
        background:
            'Once a bodyguard for a powerful corporate executive, Finnick now works as a mercenary for hire. His imposing stature and unmatched strength make him a terror in close combat, but his stoic demeanor hides a tragic past that still haunts him.',
    },
    {
        id: '32',
        title: 'Kara Underhill',
        description:
            'Kara, a 32-year-old female Dwarf Decker, stands at 121 cm and weighs 52 kg.',
        attributes: {
            Strength: 2,
            Agility: 3,
            Reaction: 4,
            Logic: 6,
            Intuition: 5,
            Charisma: 3,
        },
        background:
            'Kara was raised in the digital underground, learning to hack before she could walk. Now a master Decker, she navigates the Matrix with ease, infiltrating corporate networks and pulling off heists that would make even the most seasoned deckers jealous.',
    },
    {
        id: '33',
        title: 'Garrick Thorne',
        description:
            'Garrick, a 45-year-old male Dwarf Rigger, stands at 122 cm and weighs 55 kg.',
        attributes: {
            Strength: 5,
            Agility: 6,
            Reaction: 6,
            Logic: 3,
            Intuition: 4,
            Charisma: 2,
        },
        background:
            'Garrick was a former test pilot for military drones, known for his exceptional skill in remote operation. Now, he uses his expertise to run illegal cargo and provide surveillance services for anyone willing to pay. His drones are his family, and he’s fiercely protective of them.',
    },
    {
        id: '34',
        title: 'Darragh Coppervein',
        description:
            'Darragh, a 28-year-old male Dwarf Mage, stands at 119 cm and weighs 53 kg.',
        attributes: {
            Strength: 3,
            Agility: 3,
            Reaction: 4,
            Logic: 6,
            Intuition: 5,
            Charisma: 2,
        },
        background:
            'Darragh’s life has always been tied to the ancient runes that flow through his veins. A former scholar of arcane texts, he now uses his magical prowess to manipulate the very fabric of reality, often putting himself at odds with corporate interests that want his knowledge for their own gain.',
    },
    {
        id: '35',
        title: 'Brynn Grimshot',
        description:
            'Brynn, a 37-year-old female Dwarf Face, stands at 120 cm and weighs 55 kg.',
        attributes: {
            Strength: 4,
            Agility: 4,
            Reaction: 5,
            Logic: 5,
            Intuition: 6,
            Charisma: 7,
        },
        background:
            'Brynn is a negotiator who’s never afraid to get her hands dirty. Whether it’s talking her way out of a firefight or securing a deal in a high-stakes boardroom, her presence commands respect. Her talent for reading people makes her a valuable asset to both criminals and corporations.',
    },
    {
        id: '36',
        title: 'Thorvald Ironsworn',
        description:
            'Thorvald, a 42-year-old male Dwarf Shaman, stands at 121 cm and weighs 56 kg.',
        attributes: {
            Strength: 5,
            Agility: 3,
            Reaction: 4,
            Logic: 5,
            Intuition: 6,
            Charisma: 4,
        },
        background:
            'Thorvald hails from a long line of shamans who commune with the spirits of stone and storm. His deep connection with the spirits of nature allows him to command powerful forces in the physical and magical worlds. While he seeks balance, his fiery temper sometimes causes him to act before thinking.',
    },
]

const runnerFours: readonly Runner[] = [
    {
        id: '41',
        title: 'Grim Brakkar',
        description:
            'Grim, a 30-year-old male Ork Street Samurai, stands at 193 cm and weighs 98 kg.',
        attributes: {
            Strength: 7,
            Agility: 4,
            Reaction: 6,
            Logic: 2,
            Intuition: 3,
            Charisma: 2,
        },
        background:
            'Grim was raised in the tough streets of the Ork Underground, learning how to survive and fight from a young age. His imposing size and strength make him a force to be reckoned with, and now he works as a mercenary for the highest bidder, offering muscle in exchange for nuyen.',
    },
    {
        id: '42',
        title: 'Kara Thrakaz',
        description:
            'Kara, a 27-year-old female Ork Decker, stands at 190 cm and weighs 94 kg.',
        attributes: {
            Strength: 4,
            Agility: 5,
            Reaction: 6,
            Logic: 7,
            Intuition: 4,
            Charisma: 2,
        },
        background:
            'Kara grew up in the gritty sprawl, using her brains instead of brawn to climb out of poverty. Now a skilled Decker, she infiltrates the most secure networks, selling valuable data to the highest bidder. Her physical power may be less than her intellect, but her ability to manipulate the digital world is unmatched.',
    },
    {
        id: '43',
        title: 'Drog Skarr',
        description:
            'Drog, a 35-year-old male Ork Rigger, stands at 192 cm and weighs 97 kg.',
        attributes: {
            Strength: 5,
            Agility: 6,
            Reaction: 7,
            Logic: 4,
            Intuition: 5,
            Charisma: 3,
        },
        background:
            'Drog is known for his unparalleled skills with vehicles and drones. Raised in a mercenary crew, he quickly became the go-to man for any job requiring transport or heavy firepower. Whether behind the wheel of a car or in control of a combat drone, Drog’s precision in a crisis is legendary.',
    },
    {
        id: '44',
        title: 'Zara Korr',
        description:
            'Zara, a 28-year-old female Ork Mage, stands at 188 cm and weighs 92 kg.',
        attributes: {
            Strength: 3,
            Agility: 4,
            Reaction: 5,
            Logic: 6,
            Intuition: 7,
            Charisma: 2,
        },
        background:
            'Zara’s connection with the elemental spirits runs deep, and she uses her magic to control fire and earth to devastating effect. After years of working as a mercenary mage, she’s become a feared figure in the underground world, using her powers to tip the scales in her favor.',
    },
    {
        id: '45',
        title: 'Vark Durg',
        description:
            'Vark, a 32-year-old male Ork Face, stands at 195 cm and weighs 100 kg.',
        attributes: {
            Strength: 5,
            Agility: 5,
            Reaction: 6,
            Logic: 4,
            Intuition: 3,
            Charisma: 7,
        },
        background:
            'Vark uses his imposing stature and natural charm to negotiate and manipulate situations. A former enforcer, he’s now a fixer who connects the right people for the right price. His charisma, combined with his brute strength, makes him a formidable player in the world of shadows.',
    },
    {
        id: '46',
        title: 'Rokka Ghor',
        description:
            'Rokka, a 33-year-old male Ork Shaman, stands at 191 cm and weighs 96 kg.',
        attributes: {
            Strength: 6,
            Agility: 5,
            Reaction: 4,
            Logic: 4,
            Intuition: 7,
            Charisma: 2,
        },
        background:
            'Rokka is deeply attuned to the spiritual world, often calling upon the strength of the earth and the spirits of his ancestors. He is a skilled shaman who walks the line between the physical and spiritual realms, offering his services to those in need of his unique expertise.',
    },
]

const runnerFives: readonly Runner[] = [
    {
        id: '51',
        title: 'Gorath Thog',
        description:
            'Gorath, a 34-year-old male Troll Street Samurai, stands at 255 cm and weighs 230 kg.',
        attributes: {
            Strength: 9,
            Agility: 3,
            Reaction: 4,
            Logic: 2,
            Intuition: 4,
            Charisma: 1,
        },
        background:
            'Gorath is a towering figure known for his immense strength. Raised in a clan of warrior Trolls, he now offers his brawn to various mercenary organizations. His skill with melee weapons and raw power makes him an invaluable asset on the battlefield.',
    },
    {
        id: '52',
        title: 'Lura Khar',
        description:
            'Lura, a 28-year-old female Troll Decker, stands at 248 cm and weighs 220 kg.',
        attributes: {
            Strength: 3,
            Agility: 4,
            Reaction: 5,
            Logic: 7,
            Intuition: 6,
            Charisma: 2,
        },
        background:
            'Lura was born in the harsh wastelands of the barrens, where she learned to navigate both the digital and physical world. As a Decker, her mind is sharp, and she can infiltrate the most secure networks while using her physical power to protect herself in the real world.',
    },
    {
        id: '53',
        title: 'Thorgar Durn',
        description:
            'Thorgar, a 40-year-old male Troll Rigger, stands at 252 cm and weighs 227 kg.',
        attributes: {
            Strength: 7,
            Agility: 5,
            Reaction: 6,
            Logic: 3,
            Intuition: 5,
            Charisma: 2,
        },
        background:
            'Thorgar has a natural affinity for machines, from drones to vehicles. He commands a variety of combat drones and is a master of piloting vehicles. His imposing size and agility give him the edge in combat, making him a versatile and dangerous Rigger.',
    },
    {
        id: '54',
        title: 'Ygritte Hagg',
        description:
            'Ygritte, a 30-year-old female Troll Mage, stands at 258 cm and weighs 235 kg.',
        attributes: {
            Strength: 4,
            Agility: 3,
            Reaction: 4,
            Logic: 6,
            Intuition: 7,
            Charisma: 2,
        },
        background:
            'Ygritte was born into the mystic traditions of her Troll clan. A mage with a deep connection to the elemental forces, she can summon firestorms and manipulate the elements at will. She uses her power to fight for the underdog and punish those who exploit the weak.',
    },
    {
        id: '55',
        title: 'Gruk Krog',
        description:
            'Gruk, a 36-year-old male Troll Face, stands at 250 cm and weighs 240 kg.',
        attributes: {
            Strength: 6,
            Agility: 4,
            Reaction: 5,
            Logic: 3,
            Intuition: 4,
            Charisma: 8,
        },
        background:
            'Gruk is a smooth talker with an edge for closing deals, no matter how tough the negotiations. His immense size and presence only add to his power as a Face, often intimidating others into agreement. Whether in the corporate or criminal worlds, he can manipulate situations with his size and charm.',
    },
    {
        id: '56',
        title: 'Zog Gron',
        description:
            'Zog, a 38-year-old male Troll Shaman, stands at 260 cm and weighs 245 kg.',
        attributes: {
            Strength: 7,
            Agility: 5,
            Reaction: 4,
            Logic: 5,
            Intuition: 8,
            Charisma: 2,
        },
        background:
            'Zog is a powerful Shaman with a strong spiritual connection to the natural world. He communes with spirits and draws power from the earth itself. Despite his intimidating appearance, Zog’s wisdom and spiritual guidance have made him an invaluable ally to those in need of mystical insight.',
    },
]

const runnerSixes: readonly Runner[] = [
    {
        id: '61',
        title: 'Ghost',
        description:
            'Ghost, a 32-year-old male Human Street Samurai, stands at 178 cm and weighs 70 kg.',
        attributes: {
            Strength: 5,
            Agility: 6,
            Reaction: 7,
            Logic: 4,
            Intuition: 6,
            Charisma: 3,
        },
        background:
            'Ghost is a skilled and enigmatic street samurai with a deep connection to his Amerindian heritage. Known for his precision and stealth, he operates in the shadows, taking on high-risk missions with unwavering focus.',
    },
    {
        id: '62',
        title: 'FastJack',
        description:
            'FastJack, a 76-year-old male Human Decker, stands at 180 cm and weighs 75 kg.',
        attributes: {
            Strength: 3,
            Agility: 4,
            Reaction: 7,
            Logic: 8,
            Intuition: 8,
            Charisma: 6,
        },
        background:
            'FastJack started exploring the Matrix at a young age, honing his skills to become the best decker to ever live. A survivor of the second Matrix Crash and founder of the Jackpoint network, he has become a central figure in the shadowrunning community.',
    },
    {
        id: '63',
        title: 'Dodger',
        description:
            'Dodger, a 35-year-old male Elf Decker, stands at 175 cm and weighs 68 kg.',
        attributes: {
            Strength: 3,
            Agility: 4,
            Reaction: 6,
            Logic: 7,
            Intuition: 6,
            Charisma: 5,
        },
        background:
            'Dodger is a legendary elven decker known for his dramatic flair and romantic connection to the AI Morgan/Megaera. He has been a key figure in the Matrix, battling against Renraku and Deus while striving to restore Megaera.',
    },
    {
        id: '64',
        title: 'Captain Chaos',
        description:
            'Captain Chaos, a 70-year-old male Human Decker, stands at 175 cm and weighs 72 kg.',
        attributes: {
            Strength: 3,
            Agility: 4,
            Reaction: 6,
            Logic: 7,
            Intuition: 6,
            Charisma: 5,
        },
        background:
            'Captain Chaos was the legendary SysOp of the Shadowland BBS, a vital resource for the shadowrunning community. Known for his neo-anarchist ideals and dedication to the Matrix, he played a pivotal role during the Crash of 2064, sacrificing himself to protect the Shadowland network.',
    },
    {
        id: '65',
        title: 'Sally Tsung',
        description:
            'Sally Tsung, a 30-year-old female Human Mage, stands at 170 cm and weighs 65 kg.',
        attributes: {
            Strength: 3,
            Agility: 4,
            Reaction: 5,
            Logic: 6,
            Intuition: 7,
            Charisma: 6,
        },
        background:
            'Sally Tsung is a skilled mage and shadowrunner based in Seattle. Known for her hermetic magical abilities and her involvement in high-stakes missions, she has worked alongside notable runners like Dodger and Ghost-Who-Walks-Inside.',
    },
    {
        id: '66',
        title: 'Harlequin',
        description:
            'Harlequin, an immortal male Elf Magician, stands at 178 cm and weighs 70 kg.',
        attributes: {
            Strength: 2,
            Agility: 5,
            Reaction: 6,
            Logic: 7,
            Intuition: 8,
            Charisma: 8,
        },
        background:
            'Harlequin, also known as Har’lea’quinn, is one of the most powerful and enigmatic figures in the Sixth World. As an immortal elf, he has fought against the Horrors for centuries, striving to protect metahumanity.',
    },
]

const runnerData: readonly Runner[] = [
    ...runnerOnes,
    ...runnerTwos,
    ...runnerThrees,
    ...runnerFours,
    ...runnerFives,
    ...runnerSixes,
]

const runnerMap = new Map(
    runnerData.map((runner: Runner) => [runner.id, runner])
)

const getRunnerById = (id: string): Runner | undefined => {
    return runnerMap.get(id)
}

export { getRunnerById }
