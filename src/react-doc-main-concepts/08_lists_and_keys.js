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


ReactDOM.render(<div>
    <ul>{listItems}</ul>
    <hr/>
    <NumberList numbers={numbers} />
    <NumberList2 numbers = {numbers} />
</div>,document.getElementById('08_lists_and_keys'))