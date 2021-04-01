const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const File = require('../lib/models/File');
const FileService = require('../lib/services/FileService');

describe('04-review routes', () => {

  beforeEach(() => {
    return setup(pool);
  });
  let file;
  beforeEach(async () => {
    file = await FileService.create({keyName: 'first-test.txt'});
  });
  
    it('POST creates a new file in file database and uploads it to aws', async () => {
    const res = await request(app)
      .post('/api/v1/files')
      .send({ keyName: 'first-test.txt' });

    expect(res.body).toEqual({
      "id": "2",
      "fileName": "https://04-review.s3-us-west-2.amazonaws.com/first-test.txt"});

    });

    it('GET it should get all files in the files database', async () => {
      const res = await request(app)
      .get('/api/v1/files');
      expect(res.body).toEqual([{
        "id": "1",
        "fileName": "https://04-review.s3-us-west-2.amazonaws.com/first-test.txt"
    }])
    })

    it('GET it should get one file by id in the files database', async () => {
      const res = await request(app)
      .get('/api/v1/files/1');
      expect(res.body).toEqual({
        "id": "1",
        "fileName": "https://04-review.s3-us-west-2.amazonaws.com/first-test.txt"})
    });

    it('DELETE it deletes a file from the database by id', async () => {
      const res = await request(app)
      .delete('/api/v1/files/1');
      expect(res.body).toEqual({
        "id": "1",
        "fileName": "https://04-review.s3-us-west-2.amazonaws.com/first-test.txt"});
    });

    it('UPDATE one file name from first-test to second test', async () => {
      const res = await request(app)
      .put('/api/v1/files/1')
      .send({fileName: 'second-test.txt'})
      expect(res.body).toEqual({
        "id": "1",
        "fileName": "second-test.txt"});
      });
    });

