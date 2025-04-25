import useResourceStore from './resourceStore'

function Resources() {
    const state = useResourceStore((state) => state)

    return (
        <div className="flex w-full justify-between">
            <div className="flex-4 text-center p-2">
                {state.nuyen.toLocaleString()}&nbsp;¥
            </div>
            <div className="flex-1 text-center p-2">{state.health}/10</div>
            <div className="flex-1 text-center p-2">{state.energy}/10</div>
            <div className="flex-1 text-center p-2">{state.reputation}/5</div>
            <div className="flex-1 text-center p-2">{state.intel}/5</div>
            <div className="flex-1 text-center p-2">{state.heat}/3</div>
        </div>
    )
}

export default Resources
