import { create } from 'zustand'

type StatState = {
    stats: Record<string, number>
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
    modifyStats: (modStats) => {
        set((state) => {
            const updatedStats = { ...state.stats }

            Object.entries(modStats).forEach(([key, value]) => {
                if (updatedStats[key] !== undefined) {
                    updatedStats[key] = Math.max(0, updatedStats[key] + value)
                }
            })

            return { stats: updatedStats }
        })
    },
}))

export default useStatStore
