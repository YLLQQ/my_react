import React, { useState } from 'react';

function Example2() {
    // useState语句不能用在条件语句中
    const [age, setAge] = useState(18)
    const [sex, setSex] = useState('男')
    const [work, setWork] = useState('程序员')

    return (
        <div>
            <p>{age}</p>
            <p>{sex}</p>
            <p>{work}</p>
        </div>
    )
}

export default Example2