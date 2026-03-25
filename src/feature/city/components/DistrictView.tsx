import { Link } from 'react-router-dom'
import { District as DistrictType, FacilityType } from '../types/CityType'

type DistrictProps = {
    district: DistrictType
    isOpen: boolean
    isLocked: boolean
    onToggle: () => void
}

function DistrictView({ district, isOpen, isLocked, onToggle }: DistrictProps) {
    if (!district.facilities || district.facilities.length === 0) {
        return <p>No facilities available in this district.</p>
    }

    return (
        <div className={`mb-2 ${isLocked ? 'opacity-50' : ''}`}>
            <button
                onClick={onToggle}
                disabled={isLocked}
                className="w-full text-left flex justify-between items-center py-2"
            >
                <strong>
                    {district.icon} {district.name}
                </strong>
                <span>{isLocked ? '🔒' : isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
                <div className="grid grid-cols-3 gap-4 mb-3">
                    {district.facilities.map((facility: FacilityType) => (
                        <div
                            key={facility.name}
                            className="text-center"
                        >
                            <Link to={facility.link}>
                                <figure>
                                    <figcaption>{facility.name}</figcaption>
                                    <img
                                        src={`/images/city/${facility.name}.jpg`}
                                        alt={`${facility.name}`}
                                        loading="lazy"
                                        className="w-full aspect-square object-cover"
                                    />
                                </figure>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DistrictView