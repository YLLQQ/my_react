import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import List from "./pages/List";

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
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/123">列表</Link></li>
            </ul>
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

        </Router >
    )
}

export default AppRouter;