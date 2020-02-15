import React from 'react';

const List = (props) => {
    let id = props.match.params.id

    return (
        <div>
            <h2>JS-List {id}</h2>
        </div>
    )
}

export default List;