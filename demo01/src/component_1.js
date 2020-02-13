import React, { Component } from 'react';

/**
 * 组件外层包裹原则
 * 如果布局中不需要最外层标签可以使用<Fragment>标签替代，该标签需要引入import {Fragment} from 'react'
 */
class Component01 extends Component {
    render() {
        return (
            <div>
                <div><input /> <button> Add Service </button></div>
                <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                </ul>
            </div>
        )
    }
}

export default Component01;