import { useState, useRef, useCallback } from "react";
import "./App.css";
import dayNight from "../public/dayNight.svg";
import { CounterButton } from "./components/CounterButton";
import { SearchInput } from "./components/SearchInput";
import { ItemList } from "./components/ItemList";
import { ContextTheme } from "./context/ContextTheme";
import { ProviderTheme } from "./context/ProviderTheme";

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((count) => count + 1), []);

  const [text, setText] = useState(``);

  const searchWord = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const textInput = useRef(null);

  const textInputFocus = useCallback(() => {
    textInput.current.focus();
  }, []);

  return (
    <>
      <ProviderTheme>
        <ContextTheme.Consumer>
          {({ dark, toggleTheme }) => (
            <>
              <img
                src={dayNight}
                alt="logoDayOrNight"
                className="dayNightLogo"
              />
              <label className="switch">
                <input
                  className="switch__input"
                  type="checkbox"
                  checked={dark}
                  onChange={toggleTheme} //ф-я из контекста
                />
                <span className="switch__slider"></span>
              </label>

              <div className={`contexTheme ${dark ? "dark" : "light"}`}>
                <CounterButton func={increment} count={count} />
                <hr />
                <SearchInput
                  func={searchWord}
                  value={text}
                  textInput={textInput}
                  textInputFocus={textInputFocus}
                />
                <ItemList text={text} />
              </div>
            </>
          )}
        </ContextTheme.Consumer>
      </ProviderTheme>
    </>
  );
}

export default App;
