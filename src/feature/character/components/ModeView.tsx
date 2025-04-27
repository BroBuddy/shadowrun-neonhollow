import Card from '@/components/Card'
import { Mode as ModeType } from '../CharacterType'
import { getCharacterModes } from '../characterData'
import { useMemo } from 'react'

function ModeView() {
    const modes = useMemo(() => getCharacterModes(), [])

    return (
        <Card>
            <p>
                <strong className="highlight">Mode:</strong>
            </p>
            <p>The mode grants you starting resources:</p>
            <ul className="list-margin">
                {modes.map((mode: ModeType, index: number) => (
                    <li key={index}>
                        <strong>{mode.name}:</strong>
                        <ul>
                            {mode.attributes.map(
                                (attribute: string, attrIndex: number) => (
                                    <li key={attrIndex}>{attribute}</li>
                                )
                            )}
                        </ul>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default ModeView
