import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import { connect } from "react-redux";

const TodoList = (props) => {
    // 解构函数
    let { inputValue, list, inputChange } = props

    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={inputChange}
                />
                <Button
                    type="primary"
                >
                    增加
            </Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    dataSource={list}
                    bordered
                    renderItem={(item, index) => (
                        <List.Item
                        >
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );

}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'changeInput',
                value: e.target.value
            }

            dispatch(action)
        }
    }
}

/**
 * xxx，映射关系。将TodoList里面的值进行映射，将state映射为属性
 */
export default connect(stateToProps, dispatchToProps)(TodoList);