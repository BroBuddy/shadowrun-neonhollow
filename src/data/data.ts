import { Rules } from './rules'
import { Character } from './character'
import { Events } from './matrixEvents'
import { Runners } from './matrixRunners'
import { Backgrounds } from './matrixBackgrounds'
import { Runs } from './runs'
import { Town } from './town'
import { Outcomes } from './outcomes'

const Data = Rules.concat(Character)
    .concat(Town)
    .concat(Outcomes)
    .concat(Events)
    .concat(Runners)
    .concat(Runs)
    .concat(Backgrounds)

export { Data }
