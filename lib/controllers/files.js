const { Router } = require('express');
const FileService = require('../services/FileService');
const File = require('../models/File');
const env = require('')

module.exports = Router()
.post('/', async(req, res, next) => {
    try {
        const order = await FileService.create(req.body);
        res.send(file);
        next(err);
    }
})

.get('/', async(req, res, next) => {
    const allFiles = await File.select();
    res.send(allFiles);
})
