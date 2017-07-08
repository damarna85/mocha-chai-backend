import express from 'express'
import usersRoutes from './users.controller'
import plansRoutes from './plans.controller'

const router = express.Router()

router.use(usersRoutes)
router.use(plansRoutes)

export default router
