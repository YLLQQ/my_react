import React, { Component } from 'react';

/**
 * 组件外层包裹原则
 * 如果布局中不需要最外层标签可以使用<Fragment>标签替代，该标签需要引入import {Fragment} from 'react'
 */
class Component01 extends Component {
    /**
     * 构造函数初始化数据
     * @param {*} props 
     */
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'Service Add',
            list: ['Service 1', 'Service 2']
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)/**事件绑定this */} />
                    <button onClick={this.addService.bind(this)}> Add Service </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index + item}>{item} - {index}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    /**
     * 增加方法
     * @param {*} inputValue 
     */
    addService(inputValue) {
        this.setState({
            /** ...扩展运算符，相当于已有元素复制 */
            list: [...this.state.list, this.state.inputValue],
            inputValue:''
        })
    }

    /**
     * e 默认传参参数
     * @param {e} e 
     */
    inputChange(e) {
        console.log('input value is ' + e.target.value)

        this.setState({
            inputValue: e.target.value
        })
    }
}

export default Component01;

/**
 * 响应式设计
 * React以数据为驱动，不建议直接操作DOM。React根据数据的变化，会自动更新DOM。
 * 因而，只需关注数据操作，不需要关注DOM。
 */