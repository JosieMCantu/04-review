const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const File = require('../lib/models/File');
const FileService = require('../lib/services/FileService');

describe('', () => {
    beforeEach(() => {
    return setup(pool);
    });
    let file;
    beforeEach(async () => {
    file = await FileService.create({keyName: 'first-test.txt'});
    });

    
    it('POST creates a new file in files database and uploads it to aws', async () => {
        const res = await request(app)
        .post('/api/v1/files')
        .send({keyName: 'first-test.txt'});

    expect(res.body).toEqual({
        "id": "2",
        "fileName": "https://04-review.s3-us-west-2.amazonaws.com/first-test.txt"
    });
    });
});