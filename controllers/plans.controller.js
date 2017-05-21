import express from 'express'
import {
  findPlans,
} from '../models/plans.model'

const router = express.Router()
router.get('/api/plans', (req, res) => {
  findPlans().then(result => {
    res.json({
      results: result,
      total: 'pepote'
    })
  }).catch(error => res.send(error))
})


export default router
