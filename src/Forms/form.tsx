import React, { useState } from 'react';
import { dbCall } from '../api-client/supabaseclient';
import { useDropdown, useDisplayForm } from '../context/dropdown'

function Form(props) {
  const { dropdownChoice, setDropdownChoice } = useDropdown();
  const { formState, showForm, hideForm } = useDisplayForm();
  const [content, setContent] = useState('')
  const [wordCounter, setWordCounter] = useState(0)

  const handleRule = (e) => {
    e.preventDefault()
    hideForm()
    dbCall({ type: dropdownChoice, content: content });
  }

  return (
    <form onSubmit={handleRule} >
        <p>Now creating a {dropdownChoice}</p>
        <textarea autoFocus className='p-2 h-28 w-56' rows="4" type="text" onChange={(e) => setContent(e.target.value)} maxLength="50" placeholder='Change the dropdown menu at the top to give us the desired question for the respective category' />
        <div>
        <input className='bg-purple-500 hover:bg-purple-400 border-b-4 border-r-4 border-purple-700 hover:border-purple-500 text-black text-center py-6 px-16 rounded' type="submit" />
        </div>
    </form>
  );
}

export default Form;
