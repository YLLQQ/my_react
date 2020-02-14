import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';

class TodoList extends Component {

    constructor(props) {
        super(props)

        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        // 订阅store更新
        store.subscribe(this.storeChange)

        this.clickButton = this.clickButton.bind(this)
    }

    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}

                        onChange={this.changeInputValue}
                    />
                    <Button
                        type="primary"
                        onClick={this.clickButton}
                    >
                        增加
                        </Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        dataSource={this.state.list}
                        bordered
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }

    changeInputValue(e) {

        const action = {
            // 相当于给action起名字
            type: 'changeInput',
            // 改变后的值
            value: e.target.value
        }

        store.dispatch(action)
    }

    storeChange() {
        // 更新组件状态
        this.setState(store.getState())
    }

    clickButton() {
        const action = {
            type: 'addItem',
        }

        store.dispatch(action)
    }
}

export default TodoList;