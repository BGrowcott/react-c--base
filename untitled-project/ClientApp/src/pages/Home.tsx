import React from 'react';
import { useState } from 'react'

function Home() {


    const [count, setCount] = useState(0);

    function incrementCount() {
        const newCount = count + 1;
        setCount(newCount);
    }

    return (
        <main>
            <h2>Whoop</h2>
            <p>{count}</p>
            <button onClick={incrementCount}>Click</button>
        </main>
    );
};

export default Home;