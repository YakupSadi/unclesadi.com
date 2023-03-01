const mongoose = require('mongoose')

const FolderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    background: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'admin',
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model('Folder', FolderSchema)