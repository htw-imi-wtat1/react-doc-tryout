import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
    const element = (
        <div>
            <h1>This clock is an immutable and completely replaced component.</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('03_rendering_elements'));
}

setInterval(tick, 2*1000);