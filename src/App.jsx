import { useState, useRef, useCallback, useContext } from "react";
import "./App.css";
import dayNight from "../public/dayNight.svg";
import { CounterButton } from "./components/CounterButton";
import { SearchInput } from "./components/SearchInput";
import { ItemList } from "./components/ItemList";
import { ContextTheme } from "./context/ContextTheme";

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

  const { dark, toggleTheme } = useContext(ContextTheme);

  return (
    <>
      <img src={dayNight} alt="logoDayOrNight" className="dayNightLogo" />
      <label className="switch">
        <input
          className="switch__input"
          type="checkbox"
          checked={dark}
          onChange={toggleTheme}
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
  );
}

export { App };
