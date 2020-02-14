import React, { Component } from 'react';
import './style.css';
import ComponentItem from './ComponentItem';

/**
 * 组件外层包裹原则
 * 如果布局中不需要最外层标签可以使用<Fragment>标签替代，该标签需要引入import {Fragment} from 'react'
 */
class Component01 extends Component {
    /**
     * 生命周期
     * @param {*} props 
     */
    componentWillMount() {
        console.log('componentWillMount  ---  组件将要挂载到页面')
    }

    componentDidMount() {
        console.log('componentDidMount  ---  组件将要挂载完成')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate  ---  组件需要更新')

        return true;
    }

    /**
     * 构造函数初始化数据
     * @param {*} props 
     */
    constructor(props) {
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
        this.state = {
            inputValue: 'Service Add',
            list: ['Service 1', 'Service 2']
        }
    }

    render() {
        console.log('render --- 组件挂载中')

        return (
            <div>
                <div>
                    {/*增加注释 */}
                    <input
                        className="inputBorder"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)/**事件绑定this */}
                        ref={(input) => { this.input = input }}
                    />
                    <button onClick={this.addService.bind(this)}> Add Service </button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <ComponentItem
                                    content={item}
                                    key={item + index}
                                    index={index}
                                    deleteItem={this.deleteItem}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    /**
     * 删除节点
     * @param {*} index 
     */
    deleteItem(index) {
        console.log('delete index is ' + index)

        /**
         * React 禁止直接对state中数据进行直接操作，避免性能漏洞。
         * 正常情况下，使用局部变量进行更新后，将局部变量重新赋值。
         */
        let list = this.state.list

        list.splice(index, 1)

        this.setState({
            list: list
        })
    }

    /**
     * 增加方法
     * @param {*} inputValue 
     */
    addService(inputValue) {
        /*异步方法 -- 虚拟DOM */
        this.setState({
            /** ...扩展运算符，相当于已有元素复制 */
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            /*因为setState属于异步操作，输出存在错误。基于setState回调函数急性展示 */
            console.log(this.ul.querySelectorAll('li').length)
        })
    }

    /**
     * e 默认传参参数
     * @param {e} e 
     */
    inputChange() {
        this.setState({
            inputValue: this.input.value
        })
    }
}

export default Component01;

/**
 * 响应式设计
 * React以数据为驱动，不建议直接操作DOM。React根据数据的变化，会自动更新DOM。
 * 因而，只需关注数据操作，不需要关注DOM。
 */