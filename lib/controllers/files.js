const { Router } = require('express');
const FileService = require('../services/FileService');
const File = require('../models/File');


module.exports = Router()
.post('/', async(req, res, next) => {
    try {
        const file = await FileService.create(req.body);
        res.send(file);
        next(err);
    } catch (err) {
        next(err);
    }
})

.get('/', async(req, res, next) => {
    const allFiles = await File.select();
    res.send(allFiles);
})

.get('/:id', async(req, res, next) => {
    const oneFile = await File.selectId(req.params.id);
    res.send(oneFile);
})

.delete('/:id', async(req, res, next) => {
    try {
        const file = await File.deleteFile(req.params.id);
        res.send(file);
    } catch (err) {
        next(err);
    }
})

.put('/:id', async(req, res, next) => {
    const updatedFile = await File.updateFileById(req.params.id, req.body.fileName);
    res.send(updatedFile);
});
