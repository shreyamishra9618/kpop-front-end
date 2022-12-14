import React, { useState, useEffect } from 'react';
import ImageUploader from '../ImageUploader';

export default function QuestionSet({   
        currentQIdx, 
        item, 
        handleQuestionSetChange, 
        removeQuestion, 
        handleImageSrc, 
        deleteImageSrc,
        imageCloudinaryData, 
        setImageCloudinaryData}) {
  
    
  
    const handleImgResponse = (response) => {
        setImageCloudinaryData(response.data);

    }

    useEffect(() => {
        // to prevent this function is called on page load
        if ( imageCloudinaryData !== '') {
            console.log("**"+imageCloudinaryData.public_id);
            handleImageSrc(imageCloudinaryData.public_id)
        } else return;
    },[imageCloudinaryData]);

    return (
    <div className='qInputSet' >
        <h4>Question {currentQIdx+1} </h4>
        <section className='inputline qImg'>
            <label>Image:</label> 
            {item.imageUrl ? (
                <>
                <img src={item.imageUrl} alt="quiz image"/>
                <button type="button" onClick={()=>{deleteImageSrc()}}>Delete</button>
                </>
            ): (<ImageUploader 
                imageCloudinaryData={imageCloudinaryData} 
                handleImgResponse={handleImgResponse}/>) 
            }
        </section>
        <section className='inputline qQ'>
            <label>Q:</label>
            <input type="text" className="txtInput" name="questionText" value={item.questionText || ""} onChange={e => handleQuestionSetChange(e)}/>
        </section>
        <section className='inputline qA'>
            <div class="a">
            <label>Choice 1:</label>
            <input type="text" className="txtInput" name="a1" value={item.answerOptions[0] || ""} onChange={e => handleQuestionSetChange(e)}/>
            </div>
            <div class="a">
            <label>Choice 2:</label>
            <input type="text" className="txtInput" name="a2" value={item.answerOptions[1] || ""} onChange={e => handleQuestionSetChange(e)}/>
            </div>
        </section>
        <section className='inputline qA'>
         <div class="a">
            <label>Choice 3:</label>
            <input type="text" className="txtInput" name="a3" value={item.answerOptions[2] || ""} onChange={e => handleQuestionSetChange(e)}/>
            </div> 
            <div class="a">
            <label>Choice 4:</label>
            <input type="text" className="txtInput" name="a4" value={item.answerOptions[3] || ""} onChange={e => handleQuestionSetChange(e)}/>
            </div>
        </section>
        <section className='inputline corrA'>
            <label>Correct Answer:</label>
            <select name="correctIndex" value={item.correctIndex} onChange={e => handleQuestionSetChange(e)}>
                <option value="">Select..</option>
                <option value="0">Choice 1</option>
                <option value="1">Choice 2</option>
                <option value="2">Choice 3</option>
                <option value="3">Choice 4</option>
            </select>
        </section>
        {
        currentQIdx>0 ? 
        <button type="button"  className="button remove" onClick={removeQuestion}>✕</button> 
        : null
        }
    </div>
  )
}