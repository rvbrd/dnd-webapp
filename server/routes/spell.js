import express from 'express'
import { getSpells, addSpell } from '../controllers/spell.js'

const router = express.Router()

router.get('/', getSpells)
router.post('/', addSpell)

export default router
