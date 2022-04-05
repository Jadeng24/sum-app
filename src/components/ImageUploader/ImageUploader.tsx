import React, { useCallback, useEffect, useState } from 'react';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import AWS from 'aws-sdk';

import './ImageUploader.scss';

interface ImageUploaderProps {
    onSubmit: boolean;
}
const ImageUploader = (props: ImageUploaderProps) => {
    const { onSubmit } = props;

    const [progress, setProgress] = useState(0);

    const S3_BUCKET = 'sum-image-upload-storage';
    const REGION = 'us-west-1';
    const isProdEnv = process.env.NODE_ENV === 'production';
    AWS.config.update({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET },
        region: REGION,
    });

    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' };
    };

    // const handleFileInput = (e) => {
    //     setSelectedFile(e.target.files[0]);
    // };

    const uploadFile = (file): Promise<string> => {
        return new Promise((resolve, reject) => {
            const params = {
                ACL: 'public-read',
                Body: file,
                Bucket: S3_BUCKET,
                Key: file.name,
            };

            myBucket
                .putObject(params)
                .on('httpUploadProgress', (uploadedFile) => {
                    setProgress(
                        Math.round(
                            (uploadedFile.loaded / uploadedFile.total) * 100
                        )
                    );
                })
                .send((err) => {
                    if (err) reject(err);
                    resolve(file.name);
                });
        });
    };

    // const transformUploads = (uploads) => {
    //     return uploads.map((u) => ({
    //         original: u.imageUrl,
    //         thumbnail: u.thumbnailUrl,
    //     }));
    // };

    // const handleChangeStatus = ({ meta }, status) => {
    //     console.log(status, meta);
    // };

    // const fetchUploads = useCallback(() => {
    //     fetch('/api/uploads')
    //         .then((response) =>
    //             response
    //                 .json()
    //                 .then((data) => setImages(transformUploads(data)))
    //         )
    //         // eslint-disable-next-line no-console
    //         .catch(console.error);
    // }, []);

    // useEffect(() => {
    //     console.log(onSubmit);
    //     if (onSubmit) {
    //         console.log(getUploadParams());
    //     }
    // }, [onSubmit]);

    const handleSubmit = async (files, allFiles) => {
        const fileNames = [];
        files.forEach((fileData) => {
            if (fileData.file) {
                uploadFile(fileData.file).then((successful) => {
                    console.log(successful);
                    if (successful) fileNames.push(fileData.file.name);
                });
            }
        });
        console.log(fileNames);
        allFiles.forEach((f) => f.remove());
    };
    // TODO: Add array of image objects / urls to boat after image upload and then
    // allow a featured image option for boat. (first in list?)
    // set AWS credentials in node.
    return (
        <div>
            {/* <img
                src="https://sum-image-upload-storage.s3.us-west-1.amazonaws.com/console2.png"
                alt="sumBoat"
            /> */}
            {progress !== 0 && <div>Progress: {progress}%</div>}
            <Dropzone
                getUploadParams={getUploadParams}
                // onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                styles={{
                    dropzone: {
                        minHeight: 140,
                        maxHeight: 250,
                        margin: '4px 0px 25px',
                    },
                }}
                // accept=""
                // multiple={false}
                // minSizeBytes={0}
                // maxSizeBytes={0}
                // maxFiles={0}
                // autoUpload={false}
                // disabled={false}
                // canCancel={false}
                // canRemove={false}
                // canRestart={false}
                // inputContent=""
                // inputWithFilesContent=""
                // submitButtonDisabled
                // submitButtonContent=""
                // classNames={undefined}
                // addClassNames={undefined}
            />
            {/* <input type="file" onChange={handleFileInput} />
                <button type="submit" onClick={() => uploadFile(selectedFile)}>
                    Upload to S3
                </button> */}
        </div>
    );
};
export default ImageUploader;
