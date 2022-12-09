import React, {useState, useEffect} from 'react';
export default function UploadImages() {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect( ()=> {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }
    return (
        <>
            <input type="file" multiple accept="image/*" onChange={onImageChange} />
        </>
    )
}