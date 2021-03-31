const File = require('../models/File');
const { run } = require('../utils/aws');

module.exports = class FileService {
    static async create({ keyName, objectParams }) {
        await run(
            keyName = "hello_world.png";
            objectParams = { Bucket: bucketName, Key: keyName};
    
        )
    }
}


