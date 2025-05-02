import { Link } from 'react-router-dom'
import FadeIn from '@/components/FadeIn'

type Text = {
    text: string
    delay: number
    italic?: boolean
    link?: string
}

const fadeTextData: Text[] = [
    { text: '[SYSTEM BOOTING…]', delay: 0 },
    { text: '[SIGNAL TRACE INITIATED…]', delay: 1500 },
    { text: '[CONNECTION ATTEMPT: FAILED]', delay: 3000 },
    { text: '"We need more power, chummer."', delay: 4500, italic: true },
    { text: '[RETRYING…]', delay: 6500 },
    { text: '"Here we go. Welcome to NeonHollow."', delay: 8000, italic: true },
    {
        text: '"You are inside a controlled simulation. A test—crafted by rogue deckers and ex-corp AIs. Every sight, every sound, every action—engineered to measure your limits."',
        delay: 10000,
        italic: true,
    },
    {
        text: '"The megacorp thinks it owns you. The simulation says otherwise. Prove you belong. Survive the trials. Make your mark."',
        delay: 13000,
        italic: true,
    },
    {
        text: '"NeonHollow waits. Step in. Rewrite the script."',
        delay: 16000,
        italic: true,
    },
    { text: '[SYSTEM SYNC COMPLETE]', delay: 17500 },
    { text: '[BEGIN SIMULATION]', delay: 19000, link: '/rules' },
]

function Welcome() {
    return (
        <div className="px-5">
            {fadeTextData.map(
                ({ text, delay, italic, link }, index: number) => (
                    <FadeIn key={index} delay={delay}>
                        <p>
                            {link ? (
                                <Link
                                    to={link}
                                    style={{
                                        color: '#09eae1',
                                        textDecoration: 'none',
                                        textAlign: 'right',
                                        display: 'block',
                                    }}
                                >
                                    {text}
                                </Link>
                            ) : italic ? (
                                <em>{text}</em>
                            ) : (
                                <strong
                                    style={{
                                        textAlign: 'right',
                                        display: 'block',
                                    }}
                                >
                                    {text}
                                </strong>
                            )}
                        </p>
                    </FadeIn>
                )
            )}
        </div>
    )
}

export default Welcome
