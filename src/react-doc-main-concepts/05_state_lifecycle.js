import React from 'react';
import ReactDOM from 'react-dom';

// Clock with props

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('05_states_lifecycle')
    );
}

setInterval(tick, 1000);

//State is similar to props, but it is private and fully controlled by the component.

// make a class out of the function

class Clock2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        return (
            <div>
                <h1>Hello, stateless World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
    tick(){
        this.setState({date: new Date()})
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}

    ReactDOM.render(
        <Clock2  />,
        document.getElementById('05_states_lifecycle_2')
    );


