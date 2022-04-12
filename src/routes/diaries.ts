import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Fecting all entry diaries')
})

router.post('/', (_req, res) => {
  res.send('Saving a diary')
})

export default router
