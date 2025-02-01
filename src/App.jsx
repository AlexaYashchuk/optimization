import { useState, useRef, useCallback } from 'react'
import './App.css'
import CounterButton from './components/CounterButton'
import SearchInput from './components/SearchInput'
import ItemList from './components/ItemList'
import MyContex from './context/MyContex'
import MyContextProvider from './context/MyContextProvider'

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
  


  const [isChecked, setIsChecked] = useState(false);

  const checkboxChange = () => {
    setIsChecked(prevState => !prevState);
};


  return (
    <>
       <MyContextProvider>
            <MyContex.Consumer>
                {({ dark, toggleTheme }) => (
                    <>
                        <p>Сменить тему</p>
                        <input
                            type='checkbox'
                            checked={dark}
                            onChange={toggleTheme} // Используем функцию из контекста
                        />
                        <div className={`contexTheme ${dark ? 'dark' : 'light'}`}>
                            <CounterButton func={increment} count={count} />
                            <hr />
                            <SearchInput func={searchWord} value={text} textInput={textInput} textInputFocus={textInputFocus} />
                            <ItemList text={text} />
                        </div>
                    </>
                )}
            </MyContex.Consumer>
        </MyContextProvider>

    </>

  )
}

export default App





