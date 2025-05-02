import PopUp from '@/components/Popup'
import EncounterDetail from '../pages/EncounterDetail'
import { rollDice } from '@/lib/helper'
import { useState } from 'react'
import { Encounter } from '../EncounterType'
import { getEncounterByTag } from '../encounterData'
import { useParams } from 'react-router-dom'

function EncounterView() {
    const { tag } = useParams()
    const [randomEncounter, setRandomEncounter] = useState<Encounter | null>(
        null
    )

    const onRandomEncounter = () => {
        const firstRoll = rollDice(1)
        const result = `${tag}${firstRoll}`
        setRandomEncounter(getEncounterByTag(result as string) as Encounter)
    }
    return (
        <>
            {!randomEncounter && (
                <a className="cursor-pointer" onClick={onRandomEncounter}>
                    Encounter
                </a>
            )}

            {randomEncounter && (
                <>
                    <PopUp title={randomEncounter.title}>
                        <EncounterDetail tag={randomEncounter.tag} />
                    </PopUp>
                </>
            )}
        </>
    )
}

export default EncounterView
