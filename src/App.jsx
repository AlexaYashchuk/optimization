import { useState, useRef, useCallback } from 'react'
import './App.css'
import CounterButton from './components/CounterButton'
import SearchInput from './components/SearchInput'
import ItemList from './components/ItemList'

function App() {

  const [count, setCount] = useState(0)

  const increment = useCallback(() => setCount((count) => count+1),[]);



  const [text,setText] = useState(``)

  const searchWord = useCallback((event) => {
    setText(event.target.value)
  },[]);



  const textInput = useRef(null)

  const textInputFocus = useCallback(() => {
    textInput.current.focus()
  },[]);

  console.log(`---App---`);
  



  return (
    <>
    <CounterButton func={increment} count = {count}/>
    <hr/>
    <SearchInput func = {searchWord} value = {text} textInput={textInput} textInputFocus= {textInputFocus}/>
    <ItemList text = {text}/>
    </>
  )
}

export default App





