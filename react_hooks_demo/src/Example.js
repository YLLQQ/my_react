import React, { useState } from 'react';

function Example() {
    // ES6数组解构
    const [count, setCount] = useState(0)

    /**
     * 上述代码等价于
     * let _useState = useState(0) 
     * let count = _useState[0] 
     * let setState = _useState[1]
     */

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>
        </div >
    );
}
export default Example;