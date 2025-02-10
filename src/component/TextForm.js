import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    let clicked=(event)=>{
        settext(event.target.value);
    }
    let upper=()=>{
        let newstring=text.toUpperCase();
        settext(newstring);
        props.showalert("success","Converted to UpperCase");
    }
    let lower=()=>{
        let newstring=text.toLowerCase();
     settext(newstring);
     props.showalert("success","Converted to LowerCase");
    }
    let clear=()=>{
        settext("");
        props.showalert("success","Text was cleared");
    } 
    const copy=()=>{
        var txt=document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
        document.getSelection().removeAllRanges(); //deselect the text
        props.showalert("success","Copied to Clipboard");

    }
    let remove=()=>{
        let newtext=text.split(/[ ]+/);
         settext(newtext.join(" "));
         props.showalert("success","Extra Space was removed.");
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      }
  

    let [text,settext]=useState("")
  return (
    <>
   
    
  <div className="mb-3">
   <h1>{props.label}</h1> 
    <textarea className="form-control" id="myBox" rows="8"  value={text}onChange={clicked} placeholder='Enter Text Here '    style={{background:props.mode==="dark"?"#042740":"white",
color:props.mode==="dark"?"white":"black"}} ></textarea>
    <button className="btn btn-primary  mx-2 my-2" disabled={text.length===0} onClick={upper}>Convert to Uppercase</button>
    <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={lower}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={speak}>Listen Your Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={copy}><i className="fa fa-clone" aria-hidden="true"></i></button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clear}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={remove}>Remove extra spaces</button>
    
  </div>

  <div className="container">
    <h3>Your Text Summary</h3> 
    <p>{<b>{text.split(/\s+/).filter((element)=>{
     return element.length!=0 }).length}</b>} Words and {<b>{text.length}</b>} Characters</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Nothing to preview."}</p>
  </div>
  </>
  )
}

// TextForm.propTypes={
//     label:PropTypes.string.isRequired
// }
