import { create } from 'zustand'

const MAX_VALUES: Record<string, number> = {
    Health: 10,
    Energy: 10,
    Edge: 6,
    Intel: 6,
    Heat: 6,
}

type StatState = {
    stats: Record<string, number>
    setStats: (newStats: Record<string, number>) => void
    modifyStats: (modStats: Record<string, number>) => void
}

const useStatStore = create<StatState>((set) => ({
    stats: {
        Nuyen: 0,
        Health: 0,
        Energy: 0,
        Edge: 0,
        Intel: 0,
        Heat: 0,
    },
    setStats: (newStats) => {
        set((state) => {
            const updatedStats = { ...state.stats }

            Object.entries(newStats).forEach(([key, value]) => {
                if (updatedStats[key] !== undefined) {
                    updatedStats[key] = Math.max(0, value)
                }
            })

            return { stats: updatedStats }
        })
    },
    modifyStats: (modStats) => {
        set((state) => {
            const updatedStats = { ...state.stats }

            Object.entries(modStats).forEach(([key, value]) => {
                if (updatedStats[key] !== undefined) {
                    const newValue = updatedStats[key] + value

                    updatedStats[key] = Math.max(
                        0,
                        Math.min(MAX_VALUES[key] || Infinity, newValue)
                    )
                }
            })

            return { stats: updatedStats }
        })
    },
}))

export default useStatStore
