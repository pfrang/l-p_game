import React, { useState, useEffect } from 'react'
import { openAICall } from '../api-client/openaiclient'
import GameDone from './GameDone';
import 'react-dropdown/style.css';
import Header from './Header';
import Dropdown from 'react-dropdown';
import GameStart from './GameStart';

enum Options {
  Rule = "Rule",
  Dilemma = "Dilemma",
  Pointing = "Pointing Game Question",
  Trivia = "Trivia Question"
}


export default function Container() {

  const [response, setResponse] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [dropdown, setDropdown] = useState('Rule')
  const [questions, setQuestions] = useState([]);
  const [questionIncrementer, setQuestionIncrementer] = useState(0);
  const [gameDone, setGameDone] = useState(false);
  const [gameStart, setGameStart] = useState(true);

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
    if (questionIncrementer === 0 || questionIncrementer === 1) {
      return
    }
    setResponse(questions[questionIncrementer - 2]);
    setQuestionIncrementer(questionIncrementer - 1);
  }

  const handleClick = () => {
    setGameStart(false)
    handleNextQuestion()
  }

  const restartGame = (res, gameDone, qIncrement, q) => {
    setResponse(res);
    setGameDone(gameDone);
    setDropdown('Rule')
    setQuestionIncrementer(qIncrement);
    setQuestions(q)
  }

  const handleNextQuestion = async () => {
    if (!dropdown) {
      return alert("Please select an option from the dropdown menu!")
    }
    if (isLoading) {
      return
    }
    if (questionIncrementer >= 15) {
      setGameDone(true)
      return
    }
    setGameStart(false)
    setisLoading(true)
    // Uncomment below for testing and comment two lines above
    if (questions.length === questionIncrementer) {
      const call = await openAICall(dropdown)
      // await waitFunc(200)
      // const timestamp = new Date().toTimeString().split(' ')[0]
      // const call = timestamp
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
      {gameDone ? <GameDone inc={restartGame} /> :
        <>
          <Header />
          <Dropdown onChange={handleDropdown} className='w-1/4 m-auto my-4' placeholder={Options.Rule} options={[Options.Rule, Options.Dilemma, Options.Trivia, Options.Pointing]} />
          <>
            {gameStart ? <GameStart onClick={handleNextQuestion} /> :
              <div id="wrapper">
                {isLoading ? <h2>...Loading</h2> : <h2 className="font-bold drop-shadow-lg" id="output">{response ? response : ""}</h2>}
                <div onClick={handlePriorQuestion}>
                </div>
                <div onClick={handleNextQuestion}>
                </div >
              </div>
            }
          </>
        </>
      }
    </>
  )
}
