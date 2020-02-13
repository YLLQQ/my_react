import React, { Component } from 'react';

class ComponentItem extends Component {
    constructor(props) {
        super(props)
        /*使用构造函数绑定 */
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <div>
                {
                    /*
                    React 不允许子组件向父组件传值
                    类似功能需要如下方案实现
                     */
                }
                <li onClick={this.handleClick}>{this.props.content}</li>
            </div>
        );
    }

    handleClick() {
        console.log('delete item, index is ' + this.props.index)

        this.props.deleteItem(this.props.index);
    }
}

export default ComponentItem;