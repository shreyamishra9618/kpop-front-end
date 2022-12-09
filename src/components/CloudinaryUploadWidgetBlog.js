import React, { Component } from "react";

class CloudinaryUploadWidget_blog extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'digyae86x', 
        uploadPreset: 'prjdz6ga'
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          console.log(result.info.secure_url)
          const previewImg = document.querySelector("#picture-preview");
            previewImg.setAttribute('src', result.info.secure_url);
        }
      }
    );

    document.getElementById("upload_widget").addEventListener("click", function () {myWidget.open();},false);

  }

  render() {
    return (
      <span id='upload_widget' className="cloudinary-button">
        Upload
      </span>
    );
  }
}

export default CloudinaryUploadWidget_blog;
