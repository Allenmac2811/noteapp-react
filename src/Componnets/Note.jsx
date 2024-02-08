import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Note = (props)=>{

    const deleteNote = ()=>{
        props.onDelete(props.id);
    }

    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={deleteNote}>
            <DeleteForeverIcon />
        </button>
    </div>
}

export default Note;