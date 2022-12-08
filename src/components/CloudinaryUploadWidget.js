import React, { Component } from "react";

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    var myWidget0 = window.cloudinary.createUploadWidget(
      {
        cloudName: 'digyae86x', 
        uploadPreset: 'prjdz6ga'
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          console.log(result.info.secure_url)
          const previewImg = document.querySelector("#picture-preview0");
            previewImg.setAttribute('src', result.info.secure_url);
        }
      }
    );
    var myWidget1 = window.cloudinary.createUploadWidget(
        {
          cloudName: 'digyae86x', 
          uploadPreset: 'prjdz6ga'
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            console.log(result.info.secure_url)
            const previewImg = document.querySelector("#picture-preview1");
              previewImg.setAttribute('src', result.info.secure_url);
          }
        }
      );
    var myWidget2 = window.cloudinary.createUploadWidget(
        {
          cloudName: 'digyae86x', 
          uploadPreset: 'prjdz6ga'
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            console.log(result.info.secure_url)
            const previewImg = document.querySelector("#picture-preview2");
              previewImg.setAttribute('src', result.info.secure_url);
          }
        }
      );
      var myWidget3 = window.cloudinary.createUploadWidget(
        {
          cloudName: 'digyae86x', 
          uploadPreset: 'prjdz6ga'
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            console.log(result.info.secure_url)
            const previewImg = document.querySelector("#picture-preview3");
              previewImg.setAttribute('src', result.info.secure_url);
          }
        }
      );
      var myWidget4 = window.cloudinary.createUploadWidget(
        {
          cloudName: 'digyae86x', 
          uploadPreset: 'prjdz6ga'
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            console.log(result.info.secure_url)
            const previewImg = document.querySelector("#picture-preview4");
              previewImg.setAttribute('src', result.info.secure_url);
          }
        }
      );
      var myWidget5 = window.cloudinary.createUploadWidget(
        {
          cloudName: 'digyae86x', 
          uploadPreset: 'prjdz6ga'
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            console.log(result.info.secure_url)
            const previewImg = document.querySelector("#picture-preview5");
              previewImg.setAttribute('src', result.info.secure_url);
          }
        }
      );

      var myWidget6 = window.cloudinary.createUploadWidget(
        {
          cloudName: 'digyae86x', 
          uploadPreset: 'prjdz6ga'
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            console.log(result.info.secure_url)
            const previewImg = document.querySelector("#picture-preview6");
              previewImg.setAttribute('src', result.info.secure_url);
          }
        }
      );
      var myWidget7 = window.cloudinary.createUploadWidget(
        {
          cloudName: 'digyae86x', 
          uploadPreset: 'prjdz6ga'
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            console.log(result.info.secure_url)
            const previewImg = document.querySelector("#picture-preview7");
              previewImg.setAttribute('src', result.info.secure_url);
          }
        }
      );
      var myWidget8 = window.cloudinary.createUploadWidget(
        {
          cloudName: 'digyae86x', 
          uploadPreset: 'prjdz6ga'
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            console.log(result.info.secure_url)
            const previewImg = document.querySelector("#picture-preview8");
              previewImg.setAttribute('src', result.info.secure_url);
          }
        }
      );
      var myWidget9 = window.cloudinary.createUploadWidget(
        {
          cloudName: 'digyae86x', 
          uploadPreset: 'prjdz6ga'
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            console.log(result.info.secure_url)
            const previewImg = document.querySelector("#picture-preview9");
              previewImg.setAttribute('src', result.info.secure_url);
          }
        }
      );


        document.getElementById("upload_widget0").addEventListener("click", function () {myWidget0.open();},false);

        document.getElementById("upload_widget1").addEventListener("click", function () {myWidget1.open();},false);

        document.getElementById("upload_widget2").addEventListener("click", function () {myWidget2.open();},false);

        document.getElementById("upload_widget3").addEventListener("click", function () {myWidget3.open();},false);

        document.getElementById("upload_widget4").addEventListener("click", function () {myWidget4.open();},false);

        document.getElementById("upload_widget5").addEventListener("click", function () {myWidget5.open();},false);

        document.getElementById("upload_widget6").addEventListener("click", function () {myWidget6.open();},false);

        document.getElementById("upload_widget7").addEventListener("click", function () {myWidget7.open();},false);
 
        document.getElementById("upload_widget8").addEventListener("click", function () {myWidget8.open();},false);

        document.getElementById("upload_widget9").addEventListener("click", function () {myWidget9.open();},false);

  }

  render() {
    return (
        <p className="uploader">uploader...</p>
    );
  }
}

export default CloudinaryUploadWidget;
