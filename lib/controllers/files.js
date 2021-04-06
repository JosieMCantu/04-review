const { Router } = require('express');
const FileService = require('../services/FileService');
const File = require('../models/File');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()});


module.exports = Router()
.post('/', upload.single('file'), async(req, res, next) => {
    try {
        const file = await FileService.create({keyName: req.file.originalname, file: req.file.buffer});
        res.send(file);
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
