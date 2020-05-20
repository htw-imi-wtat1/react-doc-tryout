import React from 'react';
import ReactDOM from 'react-dom';


const name = 'Barne';
const element = <div><small>02</small><h1>Hello, {name}!</h1></div>;

ReactDOM.render(
    element,
    document.getElementById('02_introducing_jsx')
);

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Barne',
    lastName: 'Kleinen'
};

const element2 = (
    <div>
        <small>02 a</small>
    <h1>
        Hello, {formatName(user)}!
    </h1>
    </div>
);

ReactDOM.render(
    element2,
    document.getElementById('02_introducing_jsx_a')
);