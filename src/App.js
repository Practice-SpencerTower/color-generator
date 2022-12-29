import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
    const [color, setColor] = useState('');
    const [error, setError] = useState('');
    // start with a default value to show what user can expect
    const [list, setList] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const colors = new Values(color).all(10);
        console.log(colors);
    };

    return (
        <>
            <section className="container">
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="#f15025"
                        className={`${error ? 'error' : null}`}
                    />
                    <button className="btn" type="submit">
                        submit
                    </button>
                </form>
            </section>
            <section className="colors">
                <h4>list of colors goes here</h4>
            </section>
        </>
    );
}

export default App;
