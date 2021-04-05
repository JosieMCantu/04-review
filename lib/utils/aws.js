const env = require('dotenv/config');

const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,

} = require('@aws-sdk/client-s3');


const REGION = 'us-west-2'; // e.g., 'us-east-1'

const s3 = new S3Client({ region: REGION });

const run = async ({bucketName, keyName, file}) => {
  try {
    console.log(file);
    const results = await s3.send(new PutObjectCommand({ Bucket: bucketName, Key: keyName, ACL: 'public-read', Body: file}));
    console.log('Successfully uploaded a file to ' + bucketName + '/' + keyName);
  } catch (err) {
  } 
};

const deleteObject = async({bucketName, keyName}) => {
  try {
    const results = await s3.send(new DeleteObjectCommand({ Bucket: bucketName, Key: keyName, ACL: 'public-write'}));
    console.log('Successfully deleted a file from ' + bucketName + '/' + keyName);
  } catch (err) {
}};

module.exports = {
  run,
  deleteObject,
};
