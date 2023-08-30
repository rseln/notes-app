import { MdDelete, MdEdit} from 'react-icons/md';
import { TextField } from '@material-ui/core';
import { useState } from 'react';

//destructure note prop so we can access without prefix
const Note = ({id, text, date, handleDeleteNote, handleEditNote}) => {
    const [isDisabled, setIsDisabled] = useState(true);

    return (
        <div className='note'> 
            <TextField
                disabled={isDisabled}
                id="outlined-basic"
                defaultValue={text}
                multiline
                maxRows={6}
                variant="standard"
                InputProps={{disableUnderline: true}}
                />
            <div className='note-footer'>
                <small>{date}</small>
                <div className='note-footer-icons'>
                    <MdEdit 
                        className ='edit-icon' 
                        size='1.5em'
                        onClick={()=>setIsDisabled(false)}
                    />
                    <MdDelete  
                        className ='delete-icon' 
                        size='1.5em'
                        onClick={()=> handleDeleteNote(id)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Note;