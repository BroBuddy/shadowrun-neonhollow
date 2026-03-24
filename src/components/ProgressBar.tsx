import useResourceStore from '@/feature/resource/store/resourceStore'

const MAX_PROGRESS = 5

const ProgressBar = () => {
    const progress = useResourceStore((state) => state.resources.Progress)
    const isStoreEmpty = useResourceStore((state) => state.isEmptyStore())

    if (isStoreEmpty) {
        return <></>
    }

    return (
        <div className="w-full flex gap-1 px-1 py-1">
            {Array.from({ length: MAX_PROGRESS }).map((_, i) => (
                <div
                    key={i}
                    className={`flex-1 h-1 ${i < progress ? 'progress-active' : 'progress'}`}
                />
            ))}
        </div>
    )
}

export default ProgressBar