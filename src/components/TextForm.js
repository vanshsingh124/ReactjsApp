import React, { useState } from 'react'



function TextForm(props) {

    let handleUpClick = () => {
        // console.log("UpperCase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase", "Success")
    }
    let handleOnChange = (event) => {
        // console.log("On click")
        setText(event.target.value)


    }
    let handleLowClick = () => {
        let newLower = text.toLowerCase()
        setText(newLower)
        props.showAlert("Converted to LowerCase", "Success")
    }
    let handleClear = () => {
        setText("")
        props.showAlert("Text is Cleared", "Success")
    }

    let handleCopy = () => {
      
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges()
        props.showAlert("Copied to Clipboard", "Success")
    }
    let handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces is Removed", "Success")
    }


    let [text, setText] = useState("")
    //text = "new state" //Wrong way to change the state 
    //setText = "new state" //Correct way to change the state 

    return (
        <>
            <div className='container'   >
                <div className="mb-3" >
                    <h2 className='my-2 mb-3'>{props.heading}</h2>

                    <textarea className="form-control hii" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>

                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((elem)=>{return elem.length!==0}).length}Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>

    )
}

TextForm.defaultProps = {
    heading: "Set the Heading",

};

export default TextForm;