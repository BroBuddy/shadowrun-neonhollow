import { Rules } from './rules'
import { Events } from './events'
import { Runners } from './runners'
import { Runs } from './runs'
import { Town } from './town'

const Data = Rules.concat(Town).concat(Events).concat(Runners).concat(Runs)

export { Data }
