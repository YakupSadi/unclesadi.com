const Folder = require('../models/folder')
const async = require('../middleware/asycn')
const { CustomError } = require('../middleware/custom_error')


const getAllFolder = async( async(req, res) => {
    const data = await Folder.find({})
    res.status(200).json({ data })
})

const createFolder = async( async(req, res) => {
    const data = await Folder.create(req.body)

    if(!data) {
        return next(new CustomError('Folder Not Found'))
    }

    res.status(201).json({ msg: 'Folder Created' })
})

const updateFolder = async( async(req, res, next) => {
    const { id: dataID } = req.params
    const data = await Folder.findOneAndUpdate({ _id: dataID }, req.body, {
        new: true,
        runValidators: true
    })

    if(!data) {
        return next(new CustomError('Folder Not Found'))
    }

    res.status(200).json({ msg: 'Folder Updated' })
})

const deleteFolder = async( async(req, res, next) => {
    const { id: dataID } = req.params
    const data = await Folder.findOneAndDelete({ _id: dataID })

    if(!data) {
        return next(CustomError('Folder Not Found'))
    }

    res.status(200).json({ msg: 'Folder Deleted' })
})


module.exports = {
    getAllFolder,
    createFolder,
    deleteFolder,
    updateFolder
}