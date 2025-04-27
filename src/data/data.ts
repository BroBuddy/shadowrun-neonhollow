import { Rules } from './rules'
import { Character } from './character'
import { Events } from './matrixEvents'
import { Runners } from './matrixRunners'
import { Backgrounds } from './matrixBackgrounds'
import { Outcomes } from './outcomes'

const Data = Rules.concat(Character)
    .concat(Outcomes)
    .concat(Events)
    .concat(Runners)
    .concat(Backgrounds)

export { Data }
