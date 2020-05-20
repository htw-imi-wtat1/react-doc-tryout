import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

ReactDOM.render(
    element,
    document.getElementById('04_components_and_props')
);

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('04_components_and_props_a')
);

