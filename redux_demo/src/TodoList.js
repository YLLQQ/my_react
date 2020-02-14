import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const data = [
    '数据一',
    '数据二',
    '数据三'
]

class TodoList extends Component {
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder='Write Something'
                        style={{ width: '250px', marginRight: '10px' }}
                    />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        dataSource={data}
                        bordered
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;