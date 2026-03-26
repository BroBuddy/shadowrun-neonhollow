import FadeIn from '@/components/FadeIn'
import FadeTextItem from '@/components/FadeTextItem'
import { Text } from '@/types/Text'

const fadeTextData: Text[] = [
    { id: 'boot', text: '[SYSTEM BOOTING…]', delay: 0 },
    { id: 'trace', text: '[SIGNAL TRACE INITIATED…]', delay: 1000 },
    { id: 'fail', text: '[CONNECTION ATTEMPT: FAILED]', delay: 2000 },
    { id: 'quote1', text: '"We need more power, chummer."', delay: 3000, italic: true },
    { id: 'retry', text: '[RETRYING…]', delay: 4000 },
    { id: 'quote2', text: '"Here we go. Welcome to NeonHollow."', delay: 5000, italic: true },
    { id: 'quote3', text: '"You are inside a controlled simulation. Prove you belong."', delay: 6000, italic: true },
    { id: 'quote4', text: '"Survive the trials."', delay: 7000, italic: true },
    { id: 'quote5', text: '"The megacorp thinks it owns you. Show them otherwise."', delay: 8000, italic: true },
    { id: 'sync', text: '[SYSTEM SYNC COMPLETE]', delay: 9000 },
    { id: 'start', text: '[BEGIN SIMULATION]', delay: 10000, link: '/character' },
]

function Welcome() {
    return (
        <div className="px-5">
            {fadeTextData.map(({ id, delay, ...rest }) => (
                <FadeIn key={id} delay={delay}>
                    <FadeTextItem id={''} delay={0} {...rest} />
                </FadeIn>
            ))}
        </div>
    )
}

export default Welcome
