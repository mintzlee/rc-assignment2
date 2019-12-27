import React, {useState} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

const App = (props) => {
  const [inputTextState, setInputTextState] = useState({text: "", length: 0})

  const inputTextHandler = (event) => {
      setInputTextState({
        text: event.target.value,
        length: event.target.value.length
      })
  }

  const deleteCharHandler = (index) => {

    const charsArr = inputTextState.text.split('')
    charsArr.splice(index, 1)
    const newChars = charsArr.join('')
    
    setInputTextState({
      text: newChars,
      length: newChars.length
    })
  }

 
  const chars = inputTextState.text.split('').map((char, index) => {
      return <CharComponent 
        char={char}
        click={() => deleteCharHandler(index)}
        key={index} />
  })
  

  return (
    <div className="App">
      <input onChange={(event) => inputTextHandler(event)}/>
      <p onChange={inputTextHandler}>{inputTextState.length}</p>
      <ValidationComponent length={inputTextState.length} />
      {chars}
    </div>
  )
}

export default App;
