import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
    return <h2>JS-Index</h2>
}

function List() {
    return <h2>JS-List</h2>
}

function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list">列表</Link></li>
            </ul>
            <Route
                path="/"
                exact
                component={Index}
            />
            <Route
                path="/list/"
                exact
                component={List}
            />

        </Router >
    )
}

export default AppRouter;