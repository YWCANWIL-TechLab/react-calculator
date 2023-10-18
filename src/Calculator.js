import { React, useState } from "react";
import { Button } from './Button.js';
import './Calculator.css';

export function Calculator() {

    // TODO ADD OPERATOR VARIABLE TO EACH OBJECT
    const buttons = [
        {
            id : "zero",
            value : 0
        },
        {
            id: "one",
            value : 1
        }, 
        {
            id : "two",
            value : 2
        }, 
        {
            id : "three",
            value : 3
        },
        {
            id : "four",
            value : 4
        },
        {
            id : "five",
            value : 5
        }, 
        {
            id : "six",
            value : 6
        },
        {
            id : "seven",
            value : 7
        },
        {
            id : "eight",
            value : 8
        },
        {
            id : "nine",
            value : 9
        },
        {
            id : "add",
            value : "+"
        },
        {
            id : "subtract",
            value : "-",
        },
        {
            id : "multiply",
            value : "*"
        },
        {
            id : "divide",
            value : "/"
        },
        {
            id : "decimal",
            value : "."
        }, 
        {
            id : "clear",
            value : "C"
        },
        {
            id : "equals",
            value : "="
        }
    ];

    const [ output, setOutput ] = useState('');

    // Handle Clicks
    const updateDisplay = (value) => {
        // setOutput(...prev += value);
        // console.log('A click has occurred');
        if(output === undefined || output === 'Error') {
            setOutput(value);
        }
        else {
            setOutput((prevValue) => (prevValue + value).toString());
        }
        console.log('Updated display');
    } 

    // Handle Equals
    const calculate = () => {
        const expression = output.toString();
        
    }

    // Handle Clear
    const clear = () => {
        setOutput('');
        console.log('Output Cleared!');
    }

    return (
        <>
            <div id="calculator">
                <div id="display">{output}</div>
                <div id="ui">
                    {
                        buttons.map((btn) => (
                            <Button key={btn.id} id={btn.id} value={btn.value}  clickHandler={updateDisplay} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Calculator;