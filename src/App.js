import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
    const [color, setColor] = useState('');
    const [error, setError] = useState('');
    // start with a default value to show what user can expect
    const [list, setList] = useState(new Values('#f15025').all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const colors = new Values(color).all(10);
            setList(colors);
            console.log(colors);
        } catch (e) {
            setError(true);
            console.log('ERROR', e);
        }
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
                {list.map((color, idx) => {
                    console.log(color);
                    return (
                        <SingleColor
                            key={idx}
                            {...color}
                            idx={idx}
                            hexColor={color.hex}
                        />
                    );
                })}
            </section>
        </>
    );
}

export default App;
