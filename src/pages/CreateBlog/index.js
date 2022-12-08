import React, { useState } from 'react';
import CloudinaryUploadWidget_blog from '../../components/CloudinaryUploadWidget_blog';


export default function CreateBlog() {

    const [keyword, setKeyword] = useState('')
    const [blogText, setBlogText] = useState('')


    const [errMsg, setErrMsg] = useState('')


    // blog content submit
    const handleBlogFormSubmit = e => {
        e.preventDefault();
        console.log('handleblorgsubmit')

        // check required inputs
        if (!keyword) {
            setErrMsg('Please type in a k-pop star title');
            return;
        }
        if (!blogText) {
            setErrMsg('Please enter blog content');
            return;
        }
        setErrMsg('');    
    }

     

    return (
        <div className="createpost">
            <div className="create-container">
            <h2>Create a blog</h2>
            <form>
                <section className='inputline key'>
                    <label>Keyword:</label>
                    <input type="text" name="keyword" id="keyword" className="txtInput" placeholder='Enter a kpop star' value={keyword} onChange={e=>setKeyword(e.target.value)} />
                    <span>(Group name, artist name)</span>
                </section>
                {/* <section className='inputline type'>
                    <label>Post Type:</label>
                    <Link to="/createpost">Trivia Quiz</Link>
                    <span className={`typeBtn ${postType==='trivia'?'on':''}`} id="btnTrivia" onClick={()=>setPostType('trivia')}>Trivia Quiz</span>
                    <span className={`typeBtn ${postType==='blog'?'on':''}`} id="btnBlog" onClick={()=>setPostType('blog')}>Simple Blog</span> 
                </section> */}

                <div className='blog-input-box'>
                    <section className='inputline qImg'>
                        <label>Blog Image: </label>
                        <CloudinaryUploadWidget_blog  />
                        <img id='picture-preview' src="./images/Placeholder-Graphic-Icon.jpg"/>
                    </section>
                    <section className='inputline'>
                        <label>Blog Content</label>
                        <textarea name="blogtext" value={blogText}  className="txtInput" onChange={e=>setBlogText(e.target.value)} ></textarea> 
                    </section>
                    <button type="sumbmit" onClick={handleBlogFormSubmit}>Submit!</button>
                    <p className="errmrg">{errMsg}</p>
                </div>
                
            </form>

            </div>
        </div>    
    )
}

