import logo from './logo.svg';
import './App.css';
import InputPage from './components/InputPage';
import React, {useEffect, useState} from 'react'


function App() {
  const [input, setInput] = useState(false)
  const [arrayInp, setArrayInp] = useState(false)
  
  return (
    <InputPage input={input} setInput={setInput} arrayInp={arrayInp} setArrayInp={setArrayInp}/>
  );
}

export default App;
