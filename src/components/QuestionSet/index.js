import React from 'react';
import CloudinaryUploadWidget from "../CloudinaryUploadWidget";

export default function QuestionSet({index, item, handleQuestionSetChange, removeQuestion}) {
  return (
    <div className='qInputSet' key={index}>
        <h4>Question {index+1}</h4>
        <section className='inputline qImg'>
            <label>Image:</label> 
            <span id={`upload_widget${index}`} className="cloudinary-button">Upload an image</span>
            <img id={`picture-preview${index}`} src="./images/Placeholder-Graphic-Icon.jpg"/>
        </section>
        <section className='inputline qQ'>
            <label>Q:</label>
            <input type="text" className="txtInput" name="questionText" value={item.questionText || ""} onChange={e => handleQuestionSetChange(index, e)}/>
        </section>
        <section className='inputline qA'>
            <label>Choice 1:</label>
            <input type="text" className="txtInput" name="a1" value={item.answerOptions[0] || ""} onChange={e => handleQuestionSetChange(index, e)}/>
            <label>Choice 2:</label>
            <input type="text" className="txtInput" name="a2" value={item.answerOptions[1] || ""} onChange={e => handleQuestionSetChange(index, e)}/>
        </section>
        <section className='inputline qA'>
            <label>Choice 3:</label>
            <input type="text" className="txtInput" name="a3" value={item.answerOptions[2] || ""} onChange={e => handleQuestionSetChange(index, e)}/>
            <label>Choice 4:</label>
            <input type="text" className="txtInput" name="a4" value={item.answerOptions[3] || ""} onChange={e => handleQuestionSetChange(index, e)}/>
        </section>
        <section className='inputline corrA'>
            <label>Correct Answer:</label>
            <select name="correctIndex" value={item.correctIndex} onChange={e => handleQuestionSetChange(index, e)}>
                <option value="">Select..</option>
                <option value="0">Choice 1</option>
                <option value="1">Choice 2</option>
                <option value="2">Choice 3</option>
                <option value="3">Choice 4</option>
            </select>
        </section>
        {
        index ? 
        <button type="button"  className="button remove" onClick={() => removeQuestion(index)}>✕</button> 
        : null
        }
    </div>
  )
}