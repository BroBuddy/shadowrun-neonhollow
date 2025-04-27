import { Rules } from './rules'
import { Character } from './character'
import { Events } from './matrixEvents'
import { Runners } from './matrixRunners'
import { Backgrounds } from './matrixBackgrounds'

const Data = Rules.concat(Character)
    .concat(Events)
    .concat(Runners)
    .concat(Backgrounds)

export { Data }
