import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";
import TodoRead from "./TodoRead";
import TodoMod from "./TodoMod";

function Index() {
    return (
        <>
            <Switch>
                <Route path={"/todo/list"} component={TodoList}></Route>
                <Route path={"/todo/insert"} component={TodoInsert}></Route>
                <Route path={"/todo/mod/:id"} component={TodoMod}></Route>
                <Route path={"/todo/read/:id"} component={TodoRead}></Route>
                <Route path={"/"}>
                    <Redirect to={"/todo/list"}></Redirect>
                </Route>
            </Switch>
        </>
    );
}

export default Index;