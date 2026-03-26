import { ResourceRoll, Resource as ResourceType } from '../types/ResourceType'
import { getIcon } from '@/lib/helper'
import useResourceStore from '../store/resourceStore'
import { Resources } from '@/feature/character/types/CharacterType'
import { getResourceByTag } from '../services/ResourceService'
import Arrow from '@/components/Arrow'
import ResourceList from './ResourceList'

type ResourceDetailProps = {
    tag?: string
}

function ResourceDetail({ tag }: ResourceDetailProps) {
    const modifyResources = useResourceStore((state) => state.modifyResources)
    
    if (!tag) {
        return <p>No resource data available.</p>
    }

    const data = getResourceByTag(tag) as ResourceType | undefined

    if (!data?.rollList?.length) {
        return <p>No resource data available.</p>
    }

    const handleModifyResources = (resources?: Resources) => {
        if (resources) modifyResources(resources)
    }

    return (
        <div className="min-w-[300px] space-y-4">
            {data.rollList.map((item: ResourceRoll) => (
                <div key={item.range} className="space-y-1">
                    <div className="flex items-center gap-1">
                        <span>{getIcon(item.result)}</span>
                        <strong
                            className="cursor-pointer highlight"
                            onClick={() => handleModifyResources(item.resources)}
                            role="button"
                            aria-label={`Modify resources for roll ${item.range}`}
                        >
                            Roll {item.range}
                        </strong>
                        <Arrow className="ml-1" />
                        <span>{item.result}</span>
                    </div>

                    {item.resources && <ResourceList resources={item.resources} />}
                </div>
            ))}
        </div>
    )
}

export default ResourceDetail