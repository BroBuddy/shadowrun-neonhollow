import { Name } from '../types/NameType'

const streetsamuraiNames: Name = {
    tag: 'streetsamurai',
    title: 'Names for a Street Samurai',
    firstNames: [
        'Kaito','Rin','Jax','Takeda','Ryu','Akira','Zero','Vex','Kane','Shiro',
        'Raiden','Hiro','Kuro','Shin','Taro','Blaze','Onyx','Drake'
    ],
    lastNames: [
        'Steel','Blade','Edge','Ronin','Ghost','Katana','Chrome','Breaker','Fang','Strike',
        'Reaver','Slash','Razor','Bullet','Iron','Fury','Vanguard','Hunter'
    ],
}

const deckerNames: Name = {
    tag: 'decker',
    title: 'Names for a Decker',
    firstNames: [
        'Nova','Cipher','Glitch','Hex','Byte','Nyx','Echo','Proxy','Zero','Link',
        'Cache','Bit','Pulse','Trace','Node','Ghost','Loop','Ping'
    ],
    lastNames: [
        'Protocol','Grid','Overclock','Datastream','Firewall','Circuit','Backdoor','Pulse','Override','Kernel',
        'Encrypt','Exploit','Stack','Daemon','Script','Matrix','Signal','Code'
    ],
}

const riggerNames: Name = {
    tag: 'rigger',
    title: 'Names for a Rigger',
    firstNames: [
        'Torque','Rust','Juno','Axel','Diesel','Nova','Crash','Bolt','Gear','Clutch',
        'Rivet','Wrench','Piston','Drift','Skid','Vandal','Switch','Nitro'
    ],
    lastNames: [
        'Drive','Switch','Overdrive','Pilot','Mechanic','Throttle','Wheels','Engine','Rotor','Track',
        'Gearbox','Fuel','Chassis','Vector','Drivetrain','Ignition','Boost','Circuit'
    ],
}

const mageNames: Name = {
    tag: 'mage',
    title: 'Names for a Mage',
    firstNames: [
        'Nyx','Vesper','Orion','Ash','Luna','Zephyr','Nox','Sol','Astra','Eclipse',
        'Ember','Rune','Iris','Nova','Seren','Thorn','Aura','Myrr'
    ],
    lastNames: [
        'Hex','Spell','Warden','Void','Arcane','Rune','Focus','Astral','Sigil','Channel',
        'Glyph','Veil','Charm','Ward','Flux','Echo','Bind','Shroud'
    ],
}

const faceNames: Name = {
    tag: 'face',
    title: 'Names for a Face',
    firstNames: [
        'Rio','Ava','Zara','Lux','Damon','Vera','Silk','Jett','Nico','Ivy',
        'Luna','Kane','Mira','Zane','Rico','Sable','Nash','Vex'
    ],
    lastNames: [
        'Silver','Charm','Velvet','Vibe','Bliss','Glare','Echo','Flash','Style','Whisper',
        'Smile','Shade','Allure','Drift','Grace','Neon','Finesse','Halo'
    ],
}

const shamanNames: Name = {
    tag: 'shaman',
    title: 'Names for a Shaman',
    firstNames: [
        'Tala','Soren','Naya','Kael','Mira','Zane','Ayla','Riven','Skye','Bram',
        'Kira','Orin','Tarin','Lior','Zuri','Eran','Syla','Noa'
    ],
    lastNames: [
        'Spirit','Wolf','Storm','Wind','Sky','Shadow','Totem','Earth','Raven','Mist',
        'River','Stone','Flame','Root','Ash','Leaf','Moon','Dawn'
    ],
}

export const nameData: Name[] = [
    streetsamuraiNames,
    deckerNames,
    riggerNames,
    mageNames,
    faceNames,
    shamanNames,
]