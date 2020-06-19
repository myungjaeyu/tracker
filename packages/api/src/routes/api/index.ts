import { Router } from 'express'

import tracker from './tracker'

const api = Router()

api.use('/tracker', tracker)

export default api
