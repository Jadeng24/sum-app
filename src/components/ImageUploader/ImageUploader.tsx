import React, { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import AWS from 'aws-sdk';

const ImageUploader = () => {
    const [images, setImages] = useState(null);
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const S3_BUCKET = 'sum-image-upload-storage';
    const REGION = 'us-west-1';
    const isProdEnv = process.env.NODE_ENV === 'production';
    AWS.config.update({
        accessKeyId: isProdEnv
            ? process.env.AWS_ACCESS_KEY_ID
            : process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: isProdEnv
            ? process.env.AWS_SECRET_ACCESS_KEY
            : process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET },
        region: REGION,
    });

    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' };
    };

    const transformUploads = (uploads) => {
        return uploads.map((u) => ({
            original: u.imageUrl,
            thumbnail: u.thumbnailUrl,
        }));
    };

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const uploadFile = (file) => {
        console.log(file);
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
                    Math.round((uploadedFile.loaded / uploadedFile.total) * 100)
                );
            })
            .send((err) => {
                if (err) console.log(err);
            });
    };

    // const handleChangeStatus = ({ meta }, status) => {
    //     // console.log(status, meta);
    // };

    const fetchUploads = useCallback(() => {
        fetch('/api/uploads')
            .then((response) =>
                response
                    .json()
                    .then((data) => setImages(transformUploads(data)))
            )
            // eslint-disable-next-line no-console
            .catch(console.error);
    }, []);

    const handleSubmit = async (files, allFiles) => {
        console.log(allFiles);
        files.forEach((fileData) => {
            if (fileData.file) {
                uploadFile(fileData.file);
            }
        });
        console.log('successful!');
        allFiles.forEach((f) => f.remove());
    };
    // TODO: Add array of image objects / urls to boat after image upload and then
    // allow a featured image option for boat. (first in list?)

    return (
        <div>
            {/* <img
                src="https://sum-image-upload-storage.s3.us-west-1.amazonaws.com/console2.png"
                alt="sumBoat"
            /> */}
            <div>File Upload Progress is {progress}%</div>
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
                // submitButtonDisabled={false}
                // submitButtonContent=""
                // classNames={undefined}
                // addClassNames={undefined}
            />
            {/* <input type="file" onChange={handleFileInput} />
                <button type="submit" onClick={() => uploadFile(selectedFile)}>
                    Upload to S3
                </button> */}
            {images &&
                images.map((image1) => (
                    <img
                        src={image1.original}
                        alt="pic"
                        style={{ width: '100px' }}
                    />
                ))}
        </div>
    );
};
export default ImageUploader;
