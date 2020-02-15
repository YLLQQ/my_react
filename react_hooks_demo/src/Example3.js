import React, { useState, useEffect } from 'react';

function Example3() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`useEffect => you clicked ${count} times`)
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>
        </div >
    );
}
export default Example3;