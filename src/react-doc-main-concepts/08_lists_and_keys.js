import React from 'react';
import ReactDOM from 'react-dom';


const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
);

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

// correct key usage
function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}

function NumberList2(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

// with deletion
function ListItem3(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}
    <button onClick={props.onClick}>Delete Row</button></li>
}

class NumberList3 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            numbers: [1, 2, 3, 4, 5, 6]
        };
        // This binding is necessary to make `this` work in the callback
        this.deleteRow = this.deleteRow.bind(this)
    }
    deleteRow(id,e){
        this.setState({numbers: this.state.numbers.slice(id,1)})
        console.log("deleteRow: "+id)
    }
    tick(){
        this.setState({date: new Date()})
    }
    render () {
        const listItems = numbers.map((number) =>
            // Correct! Key should be specified inside the array.
            <ListItem3 key={number.toString()} value={number}
                       onClick={this.deleteRow(number)}/>
        );
        return (
            <div>
                <p>NumberList 3 at {this.state.date.toLocaleTimeString()}.</p>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
    componentDidMount(){
       // this.timerID = setInterval(
       //     () => this.tick(),
       //     10000
       // );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}


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
ReactDOM.render(<div>
    <ul>{listItems}</ul>
    <hr/>
    <NumberList numbers={numbers} />
    <NumberList2 numbers = {numbers} />
    <Clock2  />
</div>,document.getElementById('08_lists_and_keys'))