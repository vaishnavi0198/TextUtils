import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
      <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'} }>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" 
                style={{backgroundColor: props.mode ==='dark'?'grey':'white' , 
                color:props.mode ==='dark'?'white':'#042743'} }
                onChange= {handleOnChange} id="mybox" value={text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-2" style={{color: props.mode ==='dark'?'white':'#042743'} }>
            <h2>Your text summary</h2>
            <p>{text.split(/\s/).filter((element) => {return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length } Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
      </>
    
  )
}
