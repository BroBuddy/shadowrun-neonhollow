type ObstacleProgressProps = {
    missionProgress: number
    index: number
    onHandleProgress: (progress: number) => void
}

const ObstacleProgress = ({
    missionProgress,
    index,
    onHandleProgress,
}: ObstacleProgressProps) => {
    return (
        <>
            <p className="mt-3">
                ✅ &#8594; +1 Performance
                <br />❌ &#8594; -1 Performance
            </p>

            {missionProgress === index && (
                <div
                    className="mb-5 flex justify-center items-center cursor-pointer highlight"
                    onClick={() => onHandleProgress(index + 1)}
                >
                    <span className="text-2xl mr-2">&#8595;</span>
                    <strong className="mt-1">
                        {index < 2 ? 'Next' : 'Twist'}
                    </strong>
                </div>
            )}
        </>
    )
}

export default ObstacleProgress
