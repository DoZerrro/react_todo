import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const todoRead = async (tno) => {
    const {data} = await axios.get(`http://localhost:8080/todo/read/${tno}`)
    return data;
}

const todoDelete = async (tno) => await axios.delete(`http://localhost:8080/todo/delete/${tno}`)


const initState = {
    tno: 0,
    title: '',
    memo: '',
    dueDate: '',
    complete: false
}

function TodoRead() {

    const [todo, setTodo] = useState(initState);

    const {id} = useParams();
    const history = useHistory();
    console.log(id)
    useEffect(() => {
        todoRead(id).then((list) => {
            setTodo(list);
            console.log(todo)
        })
    }, []);

    const clickHandler = () => {
        todoDelete(id).then(() =>{
            history.replace('/todo/list')
        })
    }

    return (
        <div>
            <h1>{todo.tno}</h1>
            <h2>Title :{todo.title}</h2>
            <h2>Memo : {todo.memo}</h2>
            <h3>DueDate : {todo.dueDate}</h3>
            <h3>Complete : {todo.complete?"DONE":"NOT YET"}</h3>
            <div>
                <button onClick={clickHandler}>DELETE</button>
                <button>MODIFY</button>
            </div>


        </div>
    );
}

export default TodoRead;