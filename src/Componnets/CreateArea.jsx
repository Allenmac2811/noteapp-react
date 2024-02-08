import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBoxIcon from '@mui/icons-material/AddBox';

const CreateArea = (props)=>{

  const [note, setNote] = useState({
    title:"",
    content:""
  });

  const noteChange = (event)=>{
   const {name, value} = event.target;
  // console.log([name]);
   setNote((prevValue)=>{ //setNotes saves prevValue  
    //console.log(prevValue);
    return {
      ...prevValue,
      [name]:value //[] is used to ???
    }
   })
  }

  const submitNote = (event)=>{
    if(note.title !== "" || note.content !== "")
    props.onAdd(note);
  setNote({
    title:"",
    content:""
  });
    event.preventDefault();
  }

  
  
    return(
    <div>
      <form>
        <input onChange={noteChange} value={note.title}  
        name="title" 
        placeholder="Title" 
        />
        <textarea onChange={noteChange} value={note.content} 
        name="content" 
        placeholder="Take a note..." 
        rows="3" />
        <button onClick={submitNote} >
          <AddBoxIcon />
        </button>
      </form>
    </div>
    ); 
}

export default CreateArea;