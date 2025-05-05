import { create } from 'zustand'

const MAX_VALUES: Record<string, number> = {
    Health: 10,
    Energy: 10,
    Edge: 6,
    Intel: 6,
    Heat: 6,
}

type ResourceState = {
    resources: Record<string, number>
    setResources: (newResources: Record<string, number>) => void
    modifyResources: (modResources: Record<string, number>) => void
    isEmptyStore: () => boolean
}

const useResourceStore = create<ResourceState>((set, get) => ({
    resources: {
        Nuyen: 0,
        Health: 0,
        Energy: 0,
        Edge: 0,
        Intel: 0,
        Heat: 0,
    },
    setResources: (newResources) => {
        set((state) => {
            const updatedResources = { ...state.resources }

            Object.entries(newResources).forEach(([key, value]) => {
                if (updatedResources[key] !== undefined) {
                    updatedResources[key] = Math.max(0, value)
                }
            })

            return { resources: updatedResources }
        })
    },
    modifyResources: (modResources) => {
        set((state) => {
            const updatedResources = { ...state.resources }

            Object.entries(modResources).forEach(([key, value]) => {
                if (updatedResources[key] !== undefined) {
                    const newValue = updatedResources[key] + value

                    updatedResources[key] = Math.max(
                        0,
                        Math.min(MAX_VALUES[key] || Infinity, newValue)
                    )
                }
            })

            return { resources: updatedResources }
        })
    },
    isEmptyStore: () => {
        const resources = get().resources
        const total = Object.values(resources).reduce(
            (sum, value) => sum + value,
            0
        )
        return total === 0
    },
}))

export default useResourceStore
