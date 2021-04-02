const { text } = require('express');
const File = require('../models/File');
const { run, deleteObject } = require('../utils/aws');
const {deleteFile} = require('../models/File');

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
    static async delete(id) {
        const bucketName = '04-Review';

        const { fileName } = await File.deleteFile(id);
        const fileSplit = fileName.split('/');
        console.log(fileSplit[fileSplit.length-1]);
        await deleteObject({
            keyName: fileSplit[fileSplit.length-1],
            bucketName
        })
    }
}

