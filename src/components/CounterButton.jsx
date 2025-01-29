import React from "react";

const CounterButton = React.memo(({func,count}) => {

console.log(`---CounterButton---`);
    

    return (
        <>
        <p>{count}</p>
         <button onClick={func}>COUNTER</button>
        </>
    )

})

export default CounterButton;