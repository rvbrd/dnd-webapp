import mongoose from 'mongoose'

const spellSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        limit: 50,
    },
    level: {
        type: String,
        required: true,
        limit: 7,
    },
    school: {
        type: String,
        required: true,
        limit: 14,
    },
    casting: {
        type: String,
        required: true,
        limit: 18,
        components: {
            type: [String],
            required: true,
            limit: 3,
        },
    },
    materials: String,
    range: {
        type: String,
        required: true,
        limit: 9,
        distance: {
            type: String,
            required: true,
        },
    },
    duration: {
        type: String,
        required: true,
        time: {
            type: Number,
            required: true,
        },
    },
    description: {
        type: String,
        required: true,
    },
    ritual: Boolean,
    higher: Boolean,
})

const spell = mongoose.model('Spell', spellSchema)
export default spell
