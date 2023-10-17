import React from "react";
// import { Component } from "react";
import { Button } from './Button.js';
import { Display } from './Display.js';
import './Calculator.css';

export class Calculator extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            currentOutput : 0
        };

        this.calculate = this.handleClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

    }

    calculate() {

    }

    render() {
        return (
            <div id="calculator">
                <Display id="display" />
                <div id="ui">
                    <Button className="button" symbol="C" id="clear" />
                    <Button className="button" symbol="/" id="divide" />
                    <Button className="button" symbol="*" id="multiply" />
                    <Button className="button" symbol="-" id="subtract" />
                    <Button className="button" symbol="7" id="seven" />
                    <Button className="button" symbol="8" id="eight" />
                    <Button className="button" symbol="9" id="nine" />
                    <Button className="button" symbol="+" id="add" />
                    <Button className="button" symbol="4" id="four" />
                    <Button className="button" symbol="5" id="five" />
                    <Button className="button" symbol="6" id="six" />
                    <Button className="button" symbol="1" id="one" />
                    <Button className="button" symbol="2" id="two" />
                    <Button className="button" symbol="3" id="three" />
                    <Button className="button" symbol="=" id="equals" />
                    <Button className="button" symbol="0" id="zero" />
                    <Button className="button" symbol="." id="decimal" />
                </div>

            </div>
        );
    }
}

export default Calculator;