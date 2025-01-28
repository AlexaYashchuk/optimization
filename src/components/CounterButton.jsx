function CounterButton ({func,count}) {

    return (
        <>
        <p>{count}</p>
         <button onClick={func}>COUNTER</button>
        </>
    )

}

export default CounterButton