import useResourceStore from '@/feature/resource/store/resourceStore'
import Card from '@/components/Card'
import { Mode } from '../types/CharacterType'
import { getCharacterModes } from '../services/CharacterService'
import React from 'react'

function ModeView() {
    const modes = getCharacterModes()
    const setStats = useResourceStore((state) => state.setResources)

    const handleModeSelect = (stats: Record<string, number>) => {
        setStats(stats)
    }

    return (
        <Card>
            <p><strong>Mode Selection:</strong></p>
            <p>The mode grants you starting resources.</p>
            
            {modes.map((item: Mode, index: number) => (
                <div key={index}>
                    <strong
                        className="cursor-pointer highlight"
                        onClick={() => handleModeSelect(item.resources)}
                    >
                        {item.icon} {item.name}:
                    </strong>
                    
                    <ul className="list-margin">
                        <li key={item.name}>
                            {Object.entries(item.resources).map(
                                ([resource, value], resourceIndex) => (
                                    <React.Fragment key={resourceIndex}>
                                        {resourceIndex >= 1 ? ', ' : ''}
                                        {resource}:{' '}
                                        {resource === 'Nuyen' ? `${value}k` : value}
                                    </React.Fragment>
                                )
                            )}
                        </li>
                    </ul>
                </div>
            ))}
        </Card>
    )
}

export default ModeView
