import React from "react";

export const CounterButton = React.memo(({ func, count }) => {
  //console.log(`---CounterButton---`);

  return (
    <>
      <p>{count}</p>
      <button onClick={func}>COUNTER</button>
    </>
  );
});

//export default CounterButton;
