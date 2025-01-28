function ItemList({text}) {

    const list = [`Sasha`,`Pasha`,`Sveta`,1,2,3,4,`Kolya`,`Kirill`,`Andrey`,`Pasha`,7,5,3,1,2]

    const newList = [...list]

    const result = newList.filter((item => item == text));
    console.log(result);
    


    return(
        <>
        {
            result.length > 0 ? (
                <ul>
                    {result.map((item,index) => {
                        return (<li key={index}>
                            {item}
                        </li>)
                    })}
                </ul>
            ) : (
                <ul>
                    {list.map((item,index) => {
                        return (
                            <li key={index}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            )
        }
        </>
    )
}
export default ItemList