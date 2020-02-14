import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

ComponentItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

export default ComponentItem;

/**
 * React单向数据流，不能直接对父组件传递数据对象进行直接操作。
 * 如需操作，父组件需要把相关操作进行传递。
 */