const env = require('dotenv/config');


// Import required AWS SDK clients and commands for Node.js
const {
  S3Client,
  PutObjectCommand,
  CreateBucketCommand
} = require("@aws-sdk/client-s3");

// Set the AWS region
const REGION = "us-west-2"; // e.g., "us-east-1"


const s3 = new S3Client({ region: REGION });

const run = async ({bucketName, keyName}) => {
  try {
    
    const results = await s3.send(new PutObjectCommand({ Bucket: bucketName, Key: keyName}));
    console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
  } catch (err) {
    
  }
  
};

module.exports = {
  run,
}








// Set the bucket parameters
// const bucketName = "04-review";
// const bucketParams = { Bucket: bucketName };

// Create name for uploaded object key
// const keyName = "hi.png";
// const objectParams = { Bucket: bucketName, Key: keyName};

// Create an S3 client service object
//this command is needed inorder for the run() function to see the .env file 
// node -r dotenv/config lib/utils/aws.js