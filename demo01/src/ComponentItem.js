import React, { Component } from 'react';

class ComponentItem extends Component {
    render() {
        return (
            <div>
                <li>{this.props.content}</li>
            </div>
        );
    }
}

export default ComponentItem;