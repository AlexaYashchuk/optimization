import React from "react";

export const ItemList = React.memo(({ text }) => {
  const list = [
    `Sasha`,
    `Pasha`,
    `Sveta`,
    1,
    2,
    3,
    4,
    `Kolya`,
    `Kirill`,
    `Andrey`,
    `Pasha`,
    7,
    5,
    3,
    1,
    2,
    `Sasha`,
    `Pasha`,
    `Sveta`,
    1,
    2,
    3,
    4,
    `Kolya`,
    `Kirill`,
    `Andrey`,
    `Pasha`,
    7,
    5,
    3,
    1,
    2,
  ];

  const newList = [...list];

  const result = newList.filter((item) => item == text);
  //console.log(result);
  //console.log(`---ItemList---`);

  return (
    <>
      {result.length > 0 ? (
        <ul>
          {result.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      ) : (
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      )}
    </>
  );
});
//export default React.memo(ItemList);
