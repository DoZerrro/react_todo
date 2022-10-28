import React, {useEffect, useState} from 'react';
import Layout from "../layout/Layout";
import axios from "axios";

const todoList = async () => {
    const {data} = await axios.get(`http://localhost:8080/todo/list`);
    return data;
}

function TodoList(props) {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoList().then(data => {
            setTodos(data);
        })
    }, [])

    return (
        <Layout>
            <ul>
                {todos?.map(({tno, title, memo, dueDate, complete}) => <li key={tno}>[{title}] -- {memo} ({dueDate} | {complete ? "DONE" : "NOT YET"}</li>)}
            </ul>
        </Layout>
    );
}

export default TodoList;