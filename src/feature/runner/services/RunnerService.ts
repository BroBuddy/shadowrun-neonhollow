import { runnerData } from "../data/runnerData"
import { Runner } from "../types/RunnerType"

const runnerMap = new Map(
    runnerData.map((runner: Runner) => [runner.id, runner])
)

const getRunnerById = (id: string): Runner | undefined => {
    return runnerMap.get(id)
}

export { getRunnerById }