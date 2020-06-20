import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
function Option(props){
    return(
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <div className="input-group-text">
                <input type="checkbox"   />
            </div>
        </div>
        <input type="text" className="form-control"  value = {props.option.label} readOnly = {props.readOnly}/>
    </div>
)
}

function PlusPoller(props){
    const newOption = {checked: false}
    return(
        <div className="container">
            <h2>{props.poll.question}</h2>
            { props.poll.options.map((option) => {
                     return(<Option key={option.name} option = {option} readOnly={true} />)
            })
            }
            <Option key="newOption" option = {newOption} readOnly={false} />
        </div>
    )
}
// poll:
const poll =
{ question: 'Please choose an icecream flavor!',
    options:[{name: "rumraisin", label: "Rum-Raisin", checked: false},
             {name: "vanilla", label: "Vanilla", checked: false},
             {name: "chocolate", label: "Chocolate", checked: false},
             {name: "pistachio", label: "Pistachio", checked: false}
    ]}

ReactDOM.render(<PlusPoller poll={poll}/>,document.getElementById('pluspoll'))