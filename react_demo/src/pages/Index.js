import React from 'react';
import { Link } from "react-router-dom";

const list = [
    { bid: 1, title: 'Book 1' },
    { bid: 2, title: 'Book 2' },
    { bid: 3, title: 'Book 3' },
]


const Index = () => {
    return (
        <div>
            <h2>JS-Index</h2>

            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={'/list/' + item.bid}>
                                    {item.bid} - {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div >
    )
}

export default Index;