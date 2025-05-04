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
            <p className="mt-3 mb-1">
                <span className="mx-1">✅</span>
                <span className="highlight font-bold">+1 Performance</span>
            </p>
            <p>
                <span className="mx-1">❌</span>
                <span className="highlight font-bold">-1 Performance</span>
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
