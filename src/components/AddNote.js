import { useState } from 'react';

//destructure note prop so we can access without prefix
const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const charLimit = 250;

    const handleChange = (event) => {
        if(charLimit - event.target.value.length >=0){
            setNoteText(event.target.value);
        } 
    };

    const handleSave = (event) => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (
        <div className='new note'> 
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}

            ></textarea>
            <div className='note-footer'>
                <small>{charLimit - noteText.length} remaining</small>
                <button className='save' onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;