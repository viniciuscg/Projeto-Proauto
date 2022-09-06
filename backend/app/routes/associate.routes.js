import { Router } from 'express'
import { AssociateController } from '../controllers/associate.controller.js'

const associateRoutes = Router()

associateRoutes.post('/associate/authenticate', AssociateController.authenticate)
associateRoutes.put('/associate', AssociateController.editAddress)

export { associateRoutes }