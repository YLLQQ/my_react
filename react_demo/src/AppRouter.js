import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";
import List from "./pages/List";
import Home from "./pages/Home";

/**
 * 传值步骤
 *  1，设置规则
 *  2，传递值
 *  3，接收值
 *  4，显示内容
 */

function AppRouter() {
    return (
        <Router>
            <Route
                path="/"
                /*精确匹配 */
                exact
                component={Index}
            />
            <Route
                /*点击列表页，必须设置值 */
                path="/list/:id"
                component={List}
            />
            <Route
                path="/home"
                component={Home}
            />

        </Router >
    )
}

export default AppRouter;