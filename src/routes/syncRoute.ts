import express from 'express'
import { pushChanges, pullChanges } from '../controllers/syncController'

const router = express.Router()

router.get('/push', pushChanges)
router.post('/pull', pullChanges)

export default router