import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

/**
 * 无状态组件
 * @param {*} props 
 */
const TodoListUI = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}

                    onChange={props.changeInputValue}
                />
                <Button
                    type="primary"
                    onClick={props.clickButton}
                >
                    增加
                    </Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    dataSource={props.list}
                    bordered
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={() => { props.deleteItem(index) }}
                        >
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default TodoListUI;