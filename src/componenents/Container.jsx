import React, { useState } from 'react'
import { openAICall } from '../api-client/openaiclient'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import { Select } from 'native-base';
// import api from '../api-client/azure_func/HttpTrigger1'
// import DropDownPicker from 'react-native-dropdown-picker';
export default function Container() {

  const [submitText, setSubmitText] = useState();
  const [isLoading, setisLoading] = useState(false);
  const waitFunc = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const input = e.currentTarget.children[0].value
    const input = e.target.firstChild.lastChild.outerText
    console.log(input)
    // console.log(input)
    // console.log(e.target.children[0].value)
    setisLoading(true)
    // const call = await openAICall(input)

    await waitFunc(500)

    const text = "This is a test string string This is a test string string  This is a test string string  This is a test string string  "
    setSubmitText(text);
    setisLoading(false);
    // console.log(submitText);
  }
  return (
    <div id="wrapper">
      <div>
        <h1>Welcome to lars and Peder's drinking game!</h1>
        <form className="grid grid-cols-2" onSubmit={handleSubmit}>
          <Dropdown options={["Rule", "Dilemma", "Trivia Question", "Pointing Game Question"]} />
          {/* <select name="languages" id="lang">
            <option value="Rule:">Rule:</option>
            <option value="Dilemma:">Dilemma</option>
            <option value="Trivia Question:">Trivia Question</option>
            <option value="Pointing Game Question:">Pointing Game Question</option>
          </select> */ }
          <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" />
        </form>
      </div>
      <div id="div-output">
        {isLoading ? <h2>...Loading</h2> : <h2 className="font-bold drop-shadow-lg" id="output">{submitText ? submitText : ""}</h2>}
      </div>

    </div>
  )
}
