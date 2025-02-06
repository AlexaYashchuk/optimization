import React from "react";

export const CounterButton = React.memo(({ func, count }) => {
  return (
    <>
      <p>{count}</p>
      <button onClick={func}>COUNTER</button>
    </>
  );
});
