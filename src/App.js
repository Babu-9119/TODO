import React, { createContext,useState } from 'react';

import './App.css';
import Todo from './Todo';

export const todoContext = createContext();

function App() {

  const [text,setText] = useState("");
    const [list,setList] = useState([]);

    const handleChange = ({target}) => {
        setText(target.value)
    }
   
    const handleSubmit = (event) => {
        event.preventDefault();
        setList([...list,text])
        setText("");
    }

    const deleteTodo = (index) => {
        list.splice(index,1);
        console.log(list);
        setList([...list]);
    }

  return (
    <todoContext.Provider value={{text,list,handleChange,handleSubmit,deleteTodo}}>
      <div className="App">
        <Todo />
      </div>
    </todoContext.Provider>
    
  );
}

export default App;
