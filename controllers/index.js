import express from 'express'
import usersRoutes from './users.controller'
import plansRoutes from './plans.controller'

const router = express.Router()

router.use(usersRoutes)
router.use(plansRoutes)
router.get('/', (req, res) => {
  res.send('Hello World!')
})

export default router
