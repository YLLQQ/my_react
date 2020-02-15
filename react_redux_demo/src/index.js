import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from "react-redux";
import store from "./store";

/**
 * Provider，被Provider包裹的组件都可以获得store状态
 */
const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

