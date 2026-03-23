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
    { text: '[SIGNAL TRACE INITIATED…]', delay: 1000 },
    { text: '[CONNECTION ATTEMPT: FAILED]', delay: 2000 },
    { text: '"We need more power, chummer."', delay: 3000, italic: true },
    { text: '[RETRYING…]', delay: 4000 },
    { text: '"Here we go. Welcome to NeonHollow."', delay: 5000, italic: true },
    {
        text: '"You are inside a controlled simulation. Prove you belong."',
        delay: 6000,
        italic: true,
    },
    {
        text: '"Survive the trials."',
        delay: 7000,
        italic: true,
    },
    {
        text: '"The megacorp thinks it owns you. Show them otherwise."',
        delay: 8000,
        italic: true,
    },
    { text: '[SYSTEM SYNC COMPLETE]', delay: 9000 },
    { text: '[BEGIN SIMULATION]', delay: 10000, link: '/character' },
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
