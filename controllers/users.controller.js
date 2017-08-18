import express from 'express'
import {
  findUsers,
  createUser,
  updateUser,
  getUserGraphQL,
} from '../models/users.model'

const router = express.Router()
router.get('/api/users', (req, res) => {
  findUsers().then(result => {
    res.json({
      results: result,
      total: result.length
    })
  }).catch(error => res.send(error))
})

router.post('/api/users', (req, res) => {
  createUser(req.body).then(
    result => res.json(result)).catch(error => res.send(error)
  )
})

router.put('/api/users', (req, res) => {
  updateUser(req.body).then(
    result => res.json(result)).catch(error => res.send(error)
  )
})

export default router
