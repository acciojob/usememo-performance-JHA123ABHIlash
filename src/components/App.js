
import React, { useMemo, useState } from "react";
import './../styles/App.css';
import Navbar from "./Navbar";
import TodoList from "./TodoList";

const data= [
  { id: 1, text: "Todo 1", completed: true },
  { id: 2, text: "Todo 2", completed: false },
  { id: 3, text: "Todo 3", completed: true },
  { id: 4, text: "Todo 4", completed: false },
  { id: 5, text: "Todo 5", completed: true },
  { id: 6, text: "Todo 6", completed: false },
  { id: 7, text: "Todo 7", completed: true },
  { id: 8, text: "Todo 8", completed: false },
  { id: 9, text: "Todo 9", completed: true },
  { id: 10, text: "Todo 10", completed: false },
  { id: 11, text: "Todo 11", completed: true },
  { id: 12, text: "Todo 12", completed: false },
  { id: 13, text: "Todo 13", completed: true },
  { id: 14, text: "Todo 14", completed: false },
  { id: 15, text: "Todo 15", completed: true },
  { id: 16, text: "Todo 16", completed: false },
  { id: 17, text: "Todo 17", completed: true },
  { id: 18, text: "Todo 18", completed: false },
  { id: 19, text: "Todo 19", completed: true },
  { id: 20, text: "Todo 20", completed: false },
  { id: 21, text: "Todo 21", completed: true },
  { id: 22, text: "Todo 22", completed: false },
  { id: 23, text: "Todo 23", completed: true },
  { id: 24, text: "Todo 24", completed: false },
  { id: 25, text: "Todo 25", completed: true },
  { id: 26, text: "Todo 26", completed: false },
  { id: 27, text: "Todo 27", completed: true },
  { id: 28, text: "Todo 28", completed: false },
  { id: 29, text: "Todo 29", completed: true },
  { id: 30, text: "Todo 30", completed: false },
  { id: 31, text: "Todo 31", completed: true },
  { id: 32, text: "Todo 32", completed: false },
  { id: 33, text: "Todo 33", completed: true },
  { id: 34, text: "Todo 34", completed: false },
  { id: 35, text: "Todo 35", completed: true },
  { id: 36, text: "Todo 36", completed: false },
  { id: 37, text: "Todo 37", completed: true },
  { id: 38, text: "Todo 38", completed: false },
  { id: 39, text: "Todo 39", completed: true },
  { id: 40, text: "Todo 40", completed: false },
  { id: 41, text: "Todo 41", completed: true },
  { id: 42, text: "Todo 42", completed: false },
  { id: 43, text: "Todo 43", completed: true },
  { id: 44, text: "Todo 44", completed: false },
  { id: 45, text: "Todo 45", completed: true },
  { id: 46, text: "Todo 46", completed: false },
  { id: 47, text: "Todo 47", completed: true },
  { id: 48, text: "Todo 48", completed: false },
  { id: 49, text: "Todo 49", completed: true },
  { id: 50, text: "Todo 50", completed: false },
]

// console.log(data.length);

const App = () => {
  const [tab,setTab]=useState('All');

  function handleTab(value){
    setTab(value);
    console.log(value);
  }

  const filterData=useMemo(()=>{
    if(tab==='All'){
      return data
    }

    if (tab === "Active") {
      return data.filter((el) => !el.completed);
    }

  if (tab === "Completed") {
    return data.filter((el) => el.completed);
  }
  return data;
  },[tab])

  return (
    <div>
      <Navbar handleTab={handleTab}/>

    <TodoList todos={filterData} />
    </div>
  )
}

export default App
