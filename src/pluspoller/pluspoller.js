import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

function PlusPoller(props){
    return(
        <div className="d-flex p-2">
        <ul className="list-group">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <input type="text" className="form-control" aria-label="Text input with checkbox"/>
            </div>
            I'm a flexbox container!</div>
    )
}
const options =[{name: "Vanilla", checked: false},{name: "Chocolate, checked: false"}]
ReactDOM.render(<PlusPoller/>,document.getElementById('pluspoller'))