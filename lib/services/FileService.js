const { text } = require('express');
const File = require('../models/File');
const { run } = require('../utils/aws');

module.exports = class FileService {
    static async create({ keyName, bucketName = '04-review' }) {

        const [s3res, fileName] = await Promise.all([
            run({
                keyName,
                bucketName
            }),
            File.insert('https://04-review.s3-us-west-2.amazonaws.com/'+keyName)
            
        ])
        return fileName;
    } 
}
// File.deleteFile(keyName);
