import React, { useState } from 'react';
import ImageUploader from '../../components/ImageUploader';
import "../CreatePost/style.css"
import API from '../../utils/API';

export default function CreateBlog(props) {

    // *** Blog data to be stored
    const [keyword, setKeyword] = useState('');
    const [blogText, setBlogText] = useState('');
    // blog image src address: `https://res.cloudinary.com/digyae86x/image/upload/v1670654642/${imageCloudinaryData.public_id}`
    
    // for uploading images
    const [errMsg, setErrMsg] = useState('')
    const [imageCloudinaryData, setImageCloudinaryData] = useState('');


    // blog content submit
    const handleBlogFormSubmit = e => {
        e.preventDefault();
        console.log('handleblorgsubmit')

        // check required inputs
        if (!keyword) {
            setErrMsg('Please type in a k-pop star title');
            return;
        }
        if (!imageCloudinaryData){
            setErrMsg('Please upload an image');
            return;
        }
        if (!blogText) {
            setErrMsg('Please enter blog content');
            return;
        }

        const newBlogItem = {
            title: keyword,
            description: blogText,
            picture: `https://res.cloudinary.com/digyae86x/image/upload/v1670654642/${imageCloudinaryData.public_id}`,
            username: props.userName,
            user_id: props.userId
        }
        
        console.log(newBlogItem);

        API.createBlog(newBlogItem, props.token).then(data=>{
            console.log("**blog creat called")
            console.log(data);
            setErrMsg('Your blog posting has been created!!');    
        })
        setKeyword('')
        setBlogText('')
        setImageCloudinaryData('')
    }

    const handleImgResponse = (response) => {
        setImageCloudinaryData(response.data)
    } 

    return (
        <div className="createpost">
            <div className="create-container">
            <h2>Create a blog</h2>
            <form>
                <section className='inputline key'>
                    <label>Blog title:</label>
                    <input type="text" name="keyword" id="keyword" className="txtInput" placeholder='Enter a kpop star' value={keyword} onChange={e=>setKeyword(e.target.value)} />
                    {/* <span>(Group name, artist name)</span> */}
                </section>


                <div className='blog-input-box'>
                    <section className='inputline qImg'>
                        <label>Blog Image: </label>
                        <ImageUploader 
                            imageCloudinaryData={imageCloudinaryData} 
                            handleImgResponse={handleImgResponse}/>

                    </section>
                    <section className='inputline'>
                        <label>Blog Content</label>
                        <textarea name="blogtext" value={blogText}  className="txtInput" onChange={e=>setBlogText(e.target.value)} ></textarea> 
                    </section>
                    <button type="sumbmit" className='button submit' onClick={handleBlogFormSubmit}>Create!</button>
                    <p className="errmrg">{errMsg}</p>
                </div>
                
            </form>

            </div>
        </div>    
    )
}

