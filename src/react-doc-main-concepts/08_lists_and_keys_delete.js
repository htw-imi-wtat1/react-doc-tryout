import React from 'react';
import ReactDOM from 'react-dom';



// with deletion
function ListItem3(props) {
    // Correct! There is no need to specify the key here:
    console.log(JSON.stringify(props))
    return <li>{props.value}
    <button onClick={props.onClick}>Delete Row</button></li>
}

class NumberList3 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            numbers: props.listItems
        };
        // This binding is necessary to make `this` work in the callback
        this.deleteRow = this.deleteRow.bind(this)
    }
    deleteRow(id,e){
        console.log("deleteRow: "+id.toString())
        const newItems = this.state.numbers.splice(id,1)
        console.log(newItems)
        this.setState({numbers: this.state.numbers})

    }
    tick(){
        this.setState({date: new Date()})
    }
    render () {
        const listItems = this.state.numbers.map((listItem,i) =>
            // Correct! Key should be specified inside the array.
            <ListItem3 key={i.toString()} id = {i.toString()} value={listItem}
                       onClick={() => this.deleteRow(i)}/>
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



const initialNumbers = [1, 2, 3, 4, 5,6];
const listItems = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

ReactDOM.render(<div>

    <NumberList3 listItems = {listItems} />
</div>,document.getElementById('08_lists_and_keys_delete'))