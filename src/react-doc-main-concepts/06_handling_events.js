import React from 'react';
import ReactDOM from 'react-dom';



function Button(props){
    return(<button onClick = {activateLasers} >
             Activate Lasers
          </button>)
}

function activateLasers(){}
function Link(props){
    return (<a href="https://google.de" onClick={handleClick}>The Link</a>)
}
function handleClick(e){e.preventDefault(); console.log("ouch");}
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

function Table(props){
    const numbers = [1, 2, 3, 4, 5, 6]
    return(
        <table><tbody>{
            numbers.map((id) => {
                return (<tr key={id.toString()}>
                    <td>No. {id}</td>
                </tr>)
            })
        }</tbody></table>)
}
class Table2 extends React.Component{
    constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.deleteRow = this.deleteRow.bind(this);
}
    deleteRow(id,e){
        console.log("deleteRow: "+id)
    }
    render (){
        const numbers = [1, 2, 3, 4, 5, 6]
        return(
            <table><tbody>{
                numbers.map((id) => {
                    return (<tr key={id.toString()}>
                        <td>Line. {id}</td>
                        <td><button onClick={this.deleteRow.bind(this, id)}>Delete Row</button></td>
                    </tr>)
                })
            }</tbody></table>)
    }
}

    ReactDOM.render(
        <div><Button /><Link/><Toggle/><Table/><Table2/></div>,
    document.getElementById('06_handling_events'));
