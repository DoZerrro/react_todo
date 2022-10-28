import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

const todoInsert = async (todo) => {
    const {data} = await axios.post('http://localhost:8080/todo/insert', todo)
    return data;
}

const initState = {
    title: '',
    memo: '',
    dueDate: ''
}

function TodoInsert() {

    const [todo, setTodo] = useState(initState);
    const history = useHistory();

    const changeHandler = (name, value) => {
        todo[name] = value;
        setTodo({...todo})
        console.log(todo)
    }

    const clickHandler = () => {
        todoInsert(todo).then(() => {
            history.push('/todo/list')
        })
    }

    return (
        <>
            <div>
                Title : <input type={'text'} name={'title'} onChange={(e) => {changeHandler('title', e.target.value)}}/>
            </div>
            <div>
                Memo : <input type={'text'} name={'memo'} onChange={(e) => {changeHandler('memo', e.target.value)}}/>
            </div>
            <div>
                DueDate : <input type={'date'} name={'dueDate'} onChange={(e) => {changeHandler('dueDate', e.target.value)}}/>
            </div>
            <div>
                <button onClick={clickHandler}>INSERT</button>
            </div>
        </>
    );
}

export default TodoInsert;