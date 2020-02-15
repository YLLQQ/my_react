import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log('Index')

        return () => {
            console.log('index leave')
        }
    }, [])

    return <h2>Index</h2>
}

function List() {
    useEffect(() => {
        console.log('List')
    })

    return <h2>List</h2>
}

function Example3() {
    const [count, setCount] = useState(0)

    /**
     * react-hooks没有生命周期函数，使用useEffect进行替换
     * 
     * ComponentWillUnmount
     */
    useEffect(() => {
        console.log(`useEffect => you clicked ${count} times`)
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>

            <Router>
                <ul>
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/list/">List</Link></li>
                </ul>

                <Route
                    path="/"
                    exact
                    component={Index}
                />
                <Route
                    path="/list/"
                    component={List}
                />
            </Router>

        </div >
    );
}
export default Example3;