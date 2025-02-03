import React from "react";

export const SearchInput = React.memo(
  ({ func, value, textInput, textInputFocus }) => {
    //console.log(`---SearchInput---`);

    return (
      <input
        value={value}
        onChange={func}
        placeholder="SEARCH..."
        ref={textInput}
        onMouseOver={textInputFocus}
      ></input>
    );
  }
);

//export default React.memo(SearchInput);
