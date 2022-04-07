import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import AWS from 'aws-sdk';

import './ImageUploader.scss';

interface ImageUploaderProps {
    onUpload: (images: string[]) => void;
    // formSubmitted: boolean;
}
const ImageUploader = (props: ImageUploaderProps) => {
    const { onUpload } = props;

    const [progress, setProgress] = useState(0);
    const [files, setFiles] = useState([]);

    const S3_BUCKET = 'sum-image-upload-storage';
    const REGION = 'us-west-1';

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

    const uploadFiles = (allFiles): Promise<string[]> => {
        return new Promise((resolve, reject) => {
            const fileNames = [];

            allFiles.forEach((fileData) => {
                const { file } = fileData;
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
                        const url = `https://sum-image-upload-storage.s3.us-west-1.amazonaws.com/${fileData.file.name}`;
                        fileNames.push(url);
                    });
            });
            resolve(fileNames);
        });
    };

    const handleChange = (status, allFiles) => {
        if (status === 'done') {
            setTimeout(() => {
                setFiles(allFiles);
            }, 500);
        }
    };

    const uploadImages = (allFiles) => {
        const fileUrls = [];
        allFiles.forEach((fileData) => {
            const url = `https://sum-image-upload-storage.s3.us-west-1.amazonaws.com/${fileData.file.name}`;
            fileUrls.push(url);
        });

        onUpload(fileUrls);
        uploadFiles(allFiles).then(() => {
            allFiles.forEach((f) => f.remove());
        });
    };

    // useEffect(() => {
    //     if (files?.length) {
    //         console.log(formSubmitted);
    //         uploadImages(files);
    //     }
    // }, [formSubmitted]);
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
            {/* files: {files && files.map((file) => <div>{file}</div>)} */}
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={(file, status, allFiles) =>
                    handleChange(status, allFiles)
                }
                onSubmit={(imageFiles, allFiles) => uploadImages(allFiles)}
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
