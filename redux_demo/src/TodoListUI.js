import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder={this.props.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}

                        onChange={this.props.changeInputValue}
                    />
                    <Button
                        type="primary"
                        onClick={this.props.clickButton}
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
                                onClick={() => { this.props.deleteItem(index) }}
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

export default TodoListUI;