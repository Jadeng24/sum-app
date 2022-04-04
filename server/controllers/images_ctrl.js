/* eslint-disable no-console */
const { S3 } = require('aws-sdk');
// eslint-disable-next-line import/extensions
const pool = require('../../db.ts');

const S3_BUCKET = 'image-upload-storage';

async function uploadToS3(key, buffer, mimetype) {
    return new Promise((resolve, reject) => {
        S3.putObject(
            {
                Bucket: S3_BUCKET,
                ContentType: mimetype,
                Key: key,
                Body: buffer,
            },
            () => resolve()
        );
    });
}

module.exports = {
    async getImages(req, res) {
        // try {
        //     const allBoats = await pool.query('SELECT * FROM boats');
        //     res.json({ data: await allBoats.rows });
        // } catch (err) {
        //     console.error(err.message);
        // }
    },
    async uploadImages(req, res) {
        res.status(201).send(req.Body);
    },

    async deleteImage(req, res) {
        // delete here
    },
};
