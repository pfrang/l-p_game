import React, { useState, useEffect } from 'react'
import { openAICall } from '../api-client/openaiclient'
import GameDone from './GameDone';
import 'react-dropdown/style.css';
import Header from './Header';
import Dropdown from 'react-dropdown';
import GameStart from './GameStart';
import Button from '../Buttons/button';
import Form from './Forms/form';
import { useDropdown, useDisplayForm } from '../context/context';
import { DropDownOptions } from '../interface/Typing';
import { useDisplayGame, useDisplayMysteriousGame } from '../context/context';
import { dbCall } from '../api-client/supabaseclient';
import DropdownMenu from './DropdownMenu';


export default function Container() {

  const [response, setResponse] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionIncrementer, setQuestionIncrementer] = useState(0);
  const [gameDone, setGameDone] = useState(false);
  // const [gameStart, setGameStart] = useState(true);
  // const [displayForm, setDisplsyForm] = useState(false);

  const { dropdownChoice, setDropDownChoice } = useDropdown();
  const { showFormState, showForm, hideForm } = useDisplayForm();
  const { gameStart, setGame, endGame } = useDisplayGame();
  const { gameMystStart, setMystGame, endMystGame } = useDisplayMysteriousGame();


  // useEffect(() => {
  //   setDilemma()
  // },[dropdown])

  const handlePriorQuestion = async () => {
    if (questionIncrementer === 0 || questionIncrementer === 1) {
      return
    }
    setResponse(questions[questionIncrementer - 2]);
    setQuestionIncrementer(questionIncrementer - 1);
  }

  const restartGame = (res, gameDone, qIncrement, q) => {
    setResponse(res);
    setGameDone(gameDone);
    setQuestionIncrementer(qIncrement);
    setQuestions(q);
    endGame();
    endMystGame();
  }

  const handleNextQuestion = async () => {
    if (!dropdownChoice) {
      return alert("Please select an option from the dropdown menu!")
    }
    if (isLoading) {
      return
    }
    if (questionIncrementer >= 15) {
      setGameDone(true)
      return
    }
    setGame();
    setisLoading(true)
    // Uncomment below for testing and comment two lines above
    if (questions.length === questionIncrementer) {
      let call;
      if (gameMystStart) {
        call = await dbCall({type:dropdownChoice})
      } else {
        call = await openAICall(dropdownChoice)
      }
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
          <div id="main" className=''>
            <div className='my-20'>
            <DropdownMenu />
              {showFormState ? <Form/> : !gameStart ? <GameStart onClick={handleNextQuestion} /> :
                <div id="wrapper">
                  {isLoading ? <h2>...Loading</h2> : <h2 className="font-bold drop-shadow-lg" id="output">{response ? response : ""}</h2>}
                  <div onClick={handlePriorQuestion}>
                  </div>
                  <div onClick={handleNextQuestion}>
                  </div >
                </div>
              }
              </div>
          </div>
        </>
      }
    </>
  )
}
