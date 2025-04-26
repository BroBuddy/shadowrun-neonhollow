import { Rules } from './rules'
import { Character } from './character'
import { Events } from './matrixEvents'
import { Runners } from './matrixRunners'
import { Backgrounds } from './matrixBackgrounds'
import { Town } from './town'
import { Outcomes } from './outcomes'

const Data = Rules.concat(Character)
    .concat(Town)
    .concat(Outcomes)
    .concat(Events)
    .concat(Runners)
    .concat(Backgrounds)

export { Data }
