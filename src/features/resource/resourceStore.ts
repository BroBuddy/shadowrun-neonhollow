import { create, StoreApi, UseBoundStore } from 'zustand'

declare global {
    interface Window {
        resources: UseBoundStore<StoreApi<State & Actions>>
    }
}

type State = {
    nuyen: number
    health: number
    energy: number
    heat: number
    reputation: number
    intel: number
}

type Actions = {
    updateResource: (resource: string) => void
}

const attributeRanges: { [key: string]: [number, number] } = {
    heat: [0, 3],
    reputation: [0, 5],
    intel: [0, 5],
    health: [0, 10],
    energy: [0, 10],
}

const useResourceStore = create<State & Actions>((set) => ({
    nuyen: 0,
    health: 0,
    energy: 0,
    reputation: 0,
    heat: 0,
    intel: 0,
    updateResource: (resource: string) => {
        const nuyenMatch = resource.match(/^([+-])(\d+)\s*¥$/)

        if (nuyenMatch) {
            const sign = nuyenMatch[1]
            const amount = parseInt(nuyenMatch[2], 10)
            set((state) => ({
                nuyen:
                    sign === '+' ? state.nuyen + amount : state.nuyen - amount,
            }))
        }

        const matchAttribute = (attribute: keyof State) => {
            const regex = new RegExp(
                `^([+-])(\\d+)\\s*${attribute.charAt(0).toUpperCase() + attribute.slice(1)}$`
            )
            const attributeMatch = resource.match(regex)

            if (attributeMatch) {
                const sign = attributeMatch[1]
                const amount = parseInt(attributeMatch[2], 10)

                set((state) => {
                    let updatedValue =
                        sign === '+'
                            ? state[attribute] + amount
                            : state[attribute] - amount

                    if (attributeRanges[attribute]) {
                        const [min, max] = attributeRanges[attribute]
                        updatedValue = Math.max(
                            min,
                            Math.min(updatedValue, max)
                        )
                    }

                    return {
                        [attribute]: updatedValue,
                    }
                })
            }
        }

        const attributeList: (keyof State)[] = [
            'health',
            'energy',
            'heat',
            'reputation',
            'intel',
        ]

        attributeList.forEach((attribute) => matchAttribute(attribute))
    },
}))

window.resources = useResourceStore
export default useResourceStore
