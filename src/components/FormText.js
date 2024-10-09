import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

export default function Form1(props) {
  const [text, setText] = useState("");

  const handleUpcase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  }
  
  const handleLocase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  }
  
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been Cleared", "success")
  }
  
  const handleCapital = () => {
    let newText = text.split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" ");
    setText(newText);
    props.showAlert("Text has been capitalised", "success")
  }
  
  const handleSpace = () => {
    let newText= text.split(" ").join("");
    setText(newText);
    props.showAlert("Removed spaces", "success")
  }

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <div className={`container text-${props.mode === "light"?"dark":"light"}`}>
        <Form.Group className="my-4" controlId="exampleForm.ControlTextarea1">
          <h2>Enter text below to analysis</h2>
          <Form.Control as="textarea" value={text} placeholder='Enter the text here' onChange={handleOnChange} rows={8} style={{backgroundColor: props.mode === "dark"?"#252424":"white", color: props.mode === "dark"?"white":"black"}} />
        </Form.Group>

        <button className="btn btn-primary m-2" onClick={handleUpcase}>Convert to Uppercase</button>
        <button className="btn btn-primary m-2" onClick={handleLocase}>Convert to Lowercase</button>
        <button className="btn btn-primary m-2" onClick={handleCapital}>Capitalise</button>
        <button className="btn btn-primary m-2" onClick={handleSpace}>Remove Spaces</button>
        <button className="btn btn-primary m-2" onClick={handleClear}>Clear All</button>

        <div className="summary my-4">
          <h3>Your text summary</h3>
          <p>{text === ""? 0: text.trim().split(" ").length} Words {text.length} Characters</p>
          <p>{0.008 * (text === ""? 0: text.trim().split(" ").length)} Minutest to read</p>
          <h3>Preview</h3>
          <p>{text.length === 0?`Enter text above to preview`:text}</p>
        </div>
      </div>
    </>
  )
}
