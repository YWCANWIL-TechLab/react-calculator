import React from 'react';
import './Button.css';

export class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value : props.symbol    // Value of the button
        }
    }

    handleClick() {

    }

    render() {
        return (
            <button>{this.props.symbol}</button>
        )
    }
}

export default Button;