import React, { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';

const ImageUploader = () => {
    const [images, setImages] = useState(null);

    const getUploadParams = ({ file }) => {
        const body = new FormData();
        body.append('image', file);
        return {
            url: '/api/uploads',
            body,
        };
    };

    const transformUploads = (uploads) => {
        return uploads.map((u) => ({
            original: u.imageUrl,
            thumbnail: u.thumbnailUrl,
        }));
    };

    const handleChangeStatus = ({ meta }, status) => {
        // console.log(status, meta);
    };

    const handleSubmit = (files, allFiles) => {
        // console.log(files.map((f) => f.meta));
        allFiles.forEach((f) => f.remove());
    };

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

    return (
        <div>
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
            {images &&
                images.map((image) => (
                    <img
                        src={image.original}
                        alt="pic"
                        style={{ width: '100px' }}
                    />
                ))}
        </div>
    );
};
export default ImageUploader;
