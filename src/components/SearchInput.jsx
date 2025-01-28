function SearchInput({func,value, textInput, textInputFocus}) {

    //console.log(value);
    

    return (
        <input value = {value} onChange={func} placeholder="SEARCH..." ref={textInput} onMouseOver={textInputFocus}></input>
    )
}

export default SearchInput;