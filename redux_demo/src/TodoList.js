import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index';
import { changeInputAction, addItemAction, deleteItemAction, getInitDataAction } from "./store/actionCreators";
import TodoListUI from "./TodoListUI";
import axios from "axios";

class TodoList extends Component {

    constructor(props) {
        super(props)

        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        // 订阅store更新
        store.subscribe(this.storeChange)

        this.clickButton = this.clickButton.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickButton={this.clickButton}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        );
    }

    componentDidMount() {
        axios.get('https://www.fastmock.site/mock/fa45cc84e05124ffb292d82a1b9b965f/redux/api/data')
            .then(res => {
                const data = res.data
                const action = getInitDataAction(data)

                store.dispatch(action)
            })
    }

    changeInputValue(e) {

        const action = changeInputAction(e.target.value)

        store.dispatch(action)
    }

    storeChange() {
        // 更新组件状态
        this.setState(store.getState())
    }

    clickButton() {
        const action = addItemAction()

        store.dispatch(action)
    }

    deleteItem(index) {
        const action = deleteItemAction(index)

        store.dispatch(action)
    }
}

export default TodoList;