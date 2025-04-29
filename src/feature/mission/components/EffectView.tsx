import { Link } from 'react-router-dom'
import { MissionEffect } from '../MissionType'

type MissionEffectProps = {
    effect: MissionEffect
}

const EffectView = ({ effect }: MissionEffectProps) => {
    return (
        <li>
            {effect.link ? (
                <>
                    {effect.description.split(' → ')[0]} &#8594;{' '}
                    {effect.description.split(' → ')[1]} &#8594;{' '}
                    <Link to={`/resource${effect.link}`}>
                        {effect.description.split(' → ')[2]}
                    </Link>
                </>
            ) : (
                effect.description
            )}
        </li>
    )
}

export default EffectView
