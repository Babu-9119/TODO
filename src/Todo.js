import React, { useContext, useState } from "react";
import './Todo.css';
import { todoContext } from "./App";

function Todo() {
    // const [text,setText] = useState("");
    // const [list,setList] = useState([]);

    // const handleChange = ({target}) => {
    //     setText(target.value)
    // }
   
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setList([...list,text])
    //     setText("");
    // }

    // const deleteTodo = (index) => {
    //     list.splice(index,1);
    //     console.log(list);
    //     setList([...list]);
    // }

    // const editTodo = (index) => {
    //     console.log(index)
    //     let value = list[index]
    //     setText(value);
    // }

    //using context api

    const {text,list,handleChange,handleSubmit,deleteTodo} = useContext(todoContext)
    

    return (
        <div className="container">
           <header className="todo-header">
            <h1>Todo</h1>
           </header>
           <form onSubmit={(event) => handleSubmit(event)}>
                <label className="todo-label">what do you want to do?</label>
                <br />
                <input type="text" className="todo-text" value={text} onChange={(event) => handleChange(event)} />
                <input type="submit" value="submit" className="button" /> <br/>
                
            </form>   
            {
                list.map((value,index) => 
                value != ""&&(
                    <>
                    <div className="todo">
                        <br/>
                        <input type="checkbox"/> 
                        <label>{value}</label>
                        <button onClick={() => deleteTodo(index)}>X</button>
                        
                    </div>
                    </>
                ))
            }      
        </div>
    )
}

export default Todo;