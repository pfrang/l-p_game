import React, {useState} from 'react'
import {openAICall} from '../api-client/openaiclient'
// import api from '../api-client/azure_func/HttpTrigger1'
export default function Container() {

  const [submitText, setSubmitText] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = e.currentTarget.children[0].value
    // console.log(input)
    // console.log(e.target.children[0].value)

    const call = await openAICall(input)
    setSubmitText(call);
    // console.log(submitText);
  }
  return (
    <div className='h-screen'>
      <h1>Welcome to lars and Peder's drinking game!</h1>

      <form onSubmit={handleSubmit}>
        <select name="languages" id="lang">
          <option value="Rule:">Rule:</option>
          <option value="Dilemma:">Dilemma</option>
          <option value="Trivia Question:">Trivia Question</option>
          <option value="Pointing Game Question:">Pointing Game Question</option>
        </select>

        {/* <input className="border-2" onChange= {onChange} type="text" /> */}
        <input className="border-2" type="submit" />
      </form>

      <h2>{submitText ? submitText : ""}</h2>
      </div>
  )
}
