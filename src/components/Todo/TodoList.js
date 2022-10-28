import React, {useEffect, useState} from 'react';
import Layout from "../layout/Layout";
import axios from "axios";
import {useHistory} from "react-router-dom";

const todoList = async () => {
    const {data} = await axios.get(`http://localhost:8080/todo/list`);
    return data;
}

function TodoList(props) {

    const [todos, setTodos] = useState([]);
    const history = useHistory();

    useEffect(() => {
        todoList().then(data => {
            setTodos(data);
        })
    }, [])

    const clickHandler = () => {
        history.push('/todo/insert')
    }

    const readHandler = (tno) => {
        history.push(`/todo/read/${tno}`)
    }


    return (
        <Layout>
            <ul>
                {todos?.map(({tno, title, memo, dueDate, complete}) =>
                    <li key={tno}>[{title}] -- {memo} ({dueDate} | {complete ? "DONE" : "NOT YET"}
                        <button onClick={ () => readHandler(tno) }>READ</button> </li>)
                }
            </ul>
            <div>
                <button onClick={clickHandler}>INSERT</button>
            </div>
        </Layout>
    );
}

export default TodoList;