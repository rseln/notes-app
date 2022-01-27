import { MdDelete } from 'react-icons/md';

//destructure note prop so we can access without prefix
const Note = ({id, text, date, handleDeleteNote}) => {
    return (
        <div className='note'> 
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDelete  
                    className ='delete-icon' 
                    size='1.5em'
                    onClick={()=> handleDeleteNote(id)}
                />
            </div>
        </div>
    );
};

export default Note;