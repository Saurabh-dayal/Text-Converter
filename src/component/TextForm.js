import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
       
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");

    }

    const handleLoClick = () => {
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");

    }

    const handleClearClick = () => {
        
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");

    }
    const handleCopy = () => {
        
     
        navigator.clipboard.writeText(text);
       
        props.showAlert("Text Copied!", "success");
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces are removed!", "success");
    }

    const handleOnChange = (event) => {
        
        setText(event.target.value)

    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color :props.mode ==='dark' ? 'white' : '#042743' }}>
            <h1 className='mb-4'>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode ==='dark' ? '#13466e' : 'white', color : props.mode ==='dark' ? 'white' : 'black' }}id="myBox" rows="8"></textarea>
            </div>
            <button disabled = {text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled = {text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled = {text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
            <button disabled = {text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
            <button disabled = {text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style={{color :props.mode ==='dark' ? 'white' : '#042743' }} >
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes Read</p>
            <h2>Preveiw</h2>
            <p>{text.length>0?text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
