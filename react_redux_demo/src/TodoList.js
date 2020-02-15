import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'
import { connect } from "react-redux";

class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder={this.props.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.props.inputChange}
                    />
                    <Button
                        type="primary"
                    >
                        增加
                    </Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        dataSource={this.props.list}
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