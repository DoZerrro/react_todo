import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import TodoList from "./TodoList";

function Index(props) {
    return (
        <>
            <Switch>
                <Route path={"/todo/list"} component={TodoList}></Route>
                <Route path={"/todo/insert"}></Route>
                <Route path={"/todo/mod/:id"}></Route>
                <Route path={"/todo/read/:id"}></Route>
                <Route path={"/"}>
                    <Redirect to={"/todo/list"}></Redirect>
                </Route>
            </Switch>
        </>
    );
}

export default Index;