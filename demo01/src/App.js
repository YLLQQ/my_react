// 解构赋值
import React, { Component } from 'react';
/**
 * 相当于
 * import React from 'react';
 * const Component = React.Component;
 */

class App extends Component {
    render() {
        return (
            /**
             * JSX语法 javascript xml
             */
            <ul className="my-list">
                <li>{false ? 'List 1' : 'List one'}</li>
                <li>List 2</li>
            </ul>
        )
    }
}

export default App;