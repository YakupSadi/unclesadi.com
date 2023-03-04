const express = require('express')
const Folder = express.Router()

const { 
    getFolder,
    getAllFolder,
    createFolder,
    deleteFolder,
    updateFolder

} = require('../controller/folder')

Folder.route('/folder').get(getAllFolder)
Folder.route('/folder/createFolder').post(createFolder)

Folder.route('/folder/:id')
    .put(updateFolder)
    .delete(deleteFolder)

module.exports = Folder