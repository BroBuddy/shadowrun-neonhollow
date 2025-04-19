import { Characters } from './characters'
import { Events } from './events'
import { Runners } from './runners'
import { Runs } from './runs'
import { Town } from './town'

const Data = Characters.concat(Events).concat(Runs).concat(Runners).concat(Town)

export { Data }
