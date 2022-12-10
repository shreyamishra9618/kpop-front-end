import React, { useState } from 'react';
import "./style.css"
import Axios from 'axios';
import { Image } from "cloudinary-react";

export default function ImageUploader({imageCloudinaryData, handleImgResponse}) {
    const [imageSelected, setImageSelected] = useState('');

    const uploadImage = (files) => {
        const formData = new FormData;
        formData.append("file", imageSelected);
        formData.append("upload_preset", "krn6mgfw");
        Axios.post(
            "https://api.cloudinary.com/v1_1/digyae86x/image/upload", formData)
        .then((response)=>{
            console.log(response);
            handleImgResponse(response)
        });
    };

  return (
    <div className="image-uploader">
        <input type="file" name="file" onChange={(event)=>{setImageSelected(event.target.files[0])}} />
        <button type="button" onClick={uploadImage} className="uploadbtn">Upload Image</button>
        <div className='preview-constainer'>
            {imageCloudinaryData && <Image cloudName = "digyae86x" publicId={`https://res.cloudinary.com/digyae86x/image/upload/v1670654642/${imageCloudinaryData.public_id}`} /> }
        </div>
    </div>
  )
}
