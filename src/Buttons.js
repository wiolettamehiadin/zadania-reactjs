import React from 'react';

function Buttons (props) {

    return (
        <div className="buttons">
            <button onClick={() => {props.newHeading('Dzien dobry');}}>Zmien tytul</button>
            <button onClick={() => {props.newHeading('Do widzenia');}}>Zmien tytul</button></div>
    );
}

export default Buttons;