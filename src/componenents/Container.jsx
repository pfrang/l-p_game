import React, { useState } from 'react'
import { openAICall } from '../api-client/openaiclient'
import 'react-dropdown/style.css';
import Header from './Header';
import Dropdown from 'react-dropdown';
// import api from '../api-client/azure_func/HttpTrigger1'
export default function Container() {

  const [response, setResponse] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [dropdown, setDropdown] = useState('')
  const waitFunc = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleDropdown = (e) => {
    setDropdown(e.value);
  }

  const handleSubmit = async (e) => {
    if(!dropdown) {
      return alert("Please select an option from the dropdown menu!")
    }
    setisLoading(true)
    // const call = await openAICall(dropdown)
    // setResponse(call);
    // Uncomment below for testing and comment two lines above
    await waitFunc(500)
    const call = "This is a test string string This is a test string string  This is a test string string  This is a test string string  "
    setResponse(call);
    setisLoading(false);
  }
  return (
    <>
    <Header/>
    <Dropdown onChange={handleDropdown} className='w-1/4 m-auto my-4' options={["Rule", "Dilemma", "Trivia Question", "Pointing Game Question"]} />
    <div id="wrapper" className='flex justify-center items-center' onClick={handleSubmit}>
        {isLoading ? <h2>...Loading</h2> : <h2 className="font-bold drop-shadow-lg" id="output">{response ? response : ""}</h2>}
    </div>
    </>
  )
}
