import { useState } from "react";
import './App.css'

function App() {
  const initialDataOfCards = [
    {
      maintxt: "What is JSX?",
      onHvrtxt: "JSX is a shorthand for JavaScript XML"
    },
    {
      maintxt: "Who made this project?",
      onHvrtxt: "Zain-Khan"
    },
    {
      maintxt: "How to give components memory?",
      onHvrtxt: "useState Hook"
    },{
      maintxt: "How to pass data from parent to child components?",
      onHvrtxt: "through props"
    },{
      maintxt: "who build react js?",
      onHvrtxt: "Jordan Walke"
    },{
      maintxt: "What language is React based on?",
      onHvrtxt: "JSX"
    },{
      maintxt: "What's the name of the syntax we use to describe a UI in React?",
      onHvrtxt: "JSX"
    }
  ];

  const [dataofcards, setdataofcards] = useState(initialDataOfCards);

  function handleMouseOver(index) {
    const updatedData = [...dataofcards];
    updatedData[index].maintxt = dataofcards[index].onHvrtxt;
    setdataofcards(updatedData);
  }
  
  function handleMouseLeave() {
    setdataofcards(initialDataOfCards);
  }
  
  return (
    <div className="bodyofcards">
      {dataofcards.map((data, index) => (
        <div
          className="singlecard"
          key={index}
          onMouseOver={() => handleMouseOver(index)}
          onMouseLeave={handleMouseLeave}
        >
          {data.maintxt}
        </div>
      ))}
    </div>
  );
}

export default App;
