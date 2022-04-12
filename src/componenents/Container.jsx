import React, { useState, useEffect } from 'react'
import { openAICall } from '../api-client/openaiclient'
import 'react-dropdown/style.css';
import Header from './Header';
import Dropdown from 'react-dropdown';
export default function Container() {

  const [response, setResponse] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [dropdown, setDropdown] = useState('')
  const [questions, setQuestions] = useState([]);
  const [questionIncrementer, setQuestionIncrementer] = useState(0);


  const waitFunc = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const setLocalStorage = () => {
    window.sessionStorage.setItem('questions', questions);
  }

  const handleDropdown = (e) => {
    setDropdown(e.value);
  }

  const handlePriorQuestion = async () => {
    if (!dropdown) {
      return alert("Please select an option from the dropdown menu!")
    }
    if(questionIncrementer === 0 || questionIncrementer === 1 ) {
      return
    }
    console.log(questions[questionIncrementer - 1]);
    setResponse(questions[questionIncrementer - 2]);
    setQuestionIncrementer(questionIncrementer - 1);
  }

  const handleNextQuestion = async (e) => {
    if (!dropdown) {
      return alert("Please select an option from the dropdown menu!")
    }
    setisLoading(true)
    // Uncomment below for testing and comment two lines above
    if(questions.length === questionIncrementer) {
      // const call = await openAICall(dropdown)
      // setResponse(call);
      await waitFunc(500)
      const timestamp = new Date().toTimeString().split(' ')[0]
      const call = timestamp
      setResponse(call);
      setQuestions(questions => [...questions, call]);
    } else {

      setResponse(questions[questionIncrementer]);
    }
    setQuestionIncrementer(questionIncrementer + 1);
    setisLoading(false);
  }

  return (
    <>
      <Header />
      <Dropdown onChange={handleDropdown} className='w-1/4 m-auto my-4' options={["Rule", "Dilemma", "Trivia Question", "Pointing Game Question"]} />
      {isLoading ? <h2>...Loading</h2> : <h2 className="font-bold drop-shadow-lg" id="output">{response ? response : ""}</h2>}
      <div id="wrapper">
        <div onClick={handlePriorQuestion}>
        </div>
        <div onClick={handleNextQuestion}>
        </div >
      </div>
    </>
  )
}
