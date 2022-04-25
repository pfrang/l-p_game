import React, { useState } from 'react';
import { dbCall } from '../api-client/supabaseclient';
import { useDropdown, useDisplayForm } from '../context/dropdown'
import Button from '../Buttons/button';

function Form(props) {
  const { dropdownChoice, setDropdownChoice } = useDropdown();
  const { showFormState, showForm, hideForm } = useDisplayForm();
  const [content, setContent] = useState('')
  const [wordCounter, setWordCounter] = useState(0)

  const handleBack = () => {

  }

  const handleRule = (e) => {
    e.preventDefault()
    hideForm()
    dbCall({ type: dropdownChoice, content: content });
  }

  return (
    <form onSubmit={handleRule} >
      <div id="form-div" className='m-auto w-1/5'>
        <p className='bg-white border-b-4 border-r-4 text-black text-center mb-2'>Send inn <br></br>{dropdownChoice}</p>
      </div>
      <textarea autoFocus className='p-2 h-28 w-72' rows="4" type="text" onChange={(e) => setContent(e.target.value)} maxLength="50" placeholder='Endre på nedtrekksmenyen over for å sende inn et spm til den respektive kategorien valgt' />
      <div>
        <Button onClick={() => hideForm()} text='Back' />
        <Button onClick={(e) => handleRule(e)} text='Submit' />
        {/* <input className='bg-purple-500 hover:bg-purple-400 border-b-4 border-r-4 border-purple-700 hover:border-purple-500 text-black text-center py-6 px-16 rounded' type="submit" /> */}
      </div>
    </form>
  );
}

export default Form;
