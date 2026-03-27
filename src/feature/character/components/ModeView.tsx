import useResourceStore from '@/feature/resource/store/resourceStore'
import Card from '@/components/Card'
import { Mode } from '../types/CharacterType'
import { getCharacterModes } from '../services/CharacterService'

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
                        <li>
                            {Object.entries(item.resources).map(
                                ([resource, value], resourceIndex) => (
                                    <>
                                        {resourceIndex >= 1 ? ', ' : ''}
                                        {resource}:{' '}
                                        {resource === 'Nuyen' ? `${value}k` : value}
                                    </>
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
