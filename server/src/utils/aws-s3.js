const AWS = require('aws-sdk');
const fs = require('fs')
const mime = require('mime')

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY_ACCESS
});

exports.uploadFile = (fileName, key, fileType) => {
    const fileContent = fs.readFileSync(fileName);

    const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: `${key}.${mime.getExtension(fileType)}`,
        Body: fileContent,
        ContentType: fileType
    };

    return s3.upload(params).promise()
};