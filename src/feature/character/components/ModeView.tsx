import Card from '@/components/Card'
import { Mode as ModeType } from '../CharacterType'
import { getCharacterModes } from '../characterData'
import { useMemo } from 'react'
import FadeIn from '@/components/FadeIn'

function ModeView() {
    const modes = useMemo(() => getCharacterModes(), [])

    return (
        <Card>
            <FadeIn>
                <p>
                    <strong className="highlight">Mode:</strong>
                </p>
                <p>The mode grants you starting resources:</p>
                <ul className="list-margin">
                    {modes.map((item: ModeType, index: number) => (
                        <li key={index}>
                            <strong>{item.name}:</strong>
                            <ul>
                                {item.resources.map(
                                    (resource: string, attrIndex: number) => (
                                        <li key={attrIndex}>{resource}</li>
                                    )
                                )}
                            </ul>
                        </li>
                    ))}
                </ul>
            </FadeIn>
        </Card>
    )
}

export default ModeView
