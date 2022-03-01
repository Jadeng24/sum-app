import React from 'react';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';

const ImageUploader = () => {
    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' };
    };

    const handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta);
    };

    const handleSubmit = (files, allFiles) => {
        console.log(files.map((f) => f.meta));
        allFiles.forEach((f) => f.remove());
    };

    return (
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            styles={{
                dropzone: {
                    minHeight: 140,
                    maxHeight: 250,
                    margin: '4px 0px 25px',
                },
            }}
        />
    );
};
export default ImageUploader;
