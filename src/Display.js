import React from "react";
import './Display.css';

export class Display extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            output : ''
        };
    }

    render() {
        return (
            <div id="display">Temp</div>
        );
    }

}

export default Display;