import SpellModel from '../models/spell.js'

export const getSpells = async (req, res) => {
    try {
        const spell = await SpellModel.find().sort({ name: 1 })
        res.status(200).json(spell)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const addSpell = async (req, res) => {
    const spell = new SpellModel(req.body)

    try {
        await spell.save()
        res.status(201).json(spell)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}
