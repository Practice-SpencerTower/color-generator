import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, idx, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    // const hex = rgbToHex(...rgb);
    const handleClick = () => {
        console.log('alert', alert);
        setAlert(true);
        navigator.clipboard.writeText(`#${hexColor}`);
    };
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [alert]);

    return (
        <article
            // color-light changes text to white as tile color becomes darker
            className={`color ${idx > 7 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={() => {
                handleClick();
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hexColor}</p>
            {alert && <p className="alert">copied to clipboard</p>}
        </article>
    );
};

export default SingleColor;
