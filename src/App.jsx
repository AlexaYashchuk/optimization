import { useState, useRef } from 'react'
import './App.css'
import CounterButton from './components/CounterButton'
import SearchInput from './components/SearchInput'
import ItemList from './components/ItemList'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((count) => count+1)

  const [text,setText] = useState(``)
  const searchWord = (event) => {
    setText(event.target.value)
  }

  const textInput = useRef(null)
  const textInputFocus = () => {
    textInput.current.focus()
  }

  //console.log(text);
  



  return (
    <>
    <CounterButton func={increment} count = {count}/>
    <SearchInput func = {searchWord} value = {text} textInput={textInput} textInputFocus= {textInputFocus}/>
    <ItemList text = {text}/>
    </>
  )
}

export default App





