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

    const [files, setFiles] = useState([]);

    const S3_BUCKET = 'sum-image-upload-storage';
    const REGION = 'us-west-1';

    AWS.config.update({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_ACCESS_KEY,
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

                myBucket.upload(params, (err, data) => {
                    if (err) {
                        // eslint-disable-next-line no-console
                        console.error(err);
                    } else if (data) {
                        fileNames.push(data.Location);
                    }
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

    return (
        <div>
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
