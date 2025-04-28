import { Rules } from './rules'
import { Events } from './matrixEvents'
import { Runners } from './matrixRunners'
import { Backgrounds } from './matrixBackgrounds'

const Data = Rules.concat(Events).concat(Runners).concat(Backgrounds)

export { Data }
