import { Attributes } from '@/feature/metatype/MetatypeType'
import { create } from 'zustand'

type AttributeState = {
    attributes: Record<string, [number, number]>
    setAttributes: (newAttributes: Attributes) => void
    modifyAttributes: (
        modAttributes: Record<string, number>,
        isTemporary?: boolean
    ) => void
}

const useAttributeStore = create<AttributeState>((set) => ({
    attributes: {
        Strength: [0, 0],
        Agility: [0, 0],
        Reaction: [0, 0],
        Logic: [0, 0],
        Intuition: [0, 0],
        Charisma: [0, 0],
    },
    setAttributes: (newAttributes) => {
        set((state) => {
            const updated = { ...state.attributes }

            Object.entries(newAttributes).forEach(([key, value]) => {
                if (updated[key]) {
                    updated[key] = [value, updated[key][1] ?? 0]
                } else {
                    updated[key] = [value, 0]
                }
            })

            return { attributes: updated }
        })
    },

    modifyAttributes: (modAttributes, isTemporary = false) => {
        set((state) => {
            const updated = { ...state.attributes }

            Object.entries(modAttributes).forEach(([key, value]) => {
                if (updated[key]) {
                    updated[key][isTemporary ? 1 : 0] = Math.max(
                        0,
                        Math.min(6, updated[key][isTemporary ? 1 : 0] + value)
                    )
                }
            })

            return { attributes: updated }
        })
    },
}))

export default useAttributeStore
