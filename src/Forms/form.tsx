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
    dbCall({type: dropdownChoice, content: content});
  }

  return (
    <form onSubmit={handleRule} >
      <textarea className='h-28 w-100'  type="text" onChange={(e) => setContent(e.target.value)} maxLength="10" />
      <input type="submit" />

    </form>
  );
}

export default Form;
