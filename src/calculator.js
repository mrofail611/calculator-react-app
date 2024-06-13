import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if (value === "=") {
            calculate();
        } else if (value === "C") {
            setInput('');
        } else {
            setInput(input + value);
        }
    };

    const calculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="calculator">
            <Display input={input} />
            <div className="buttons">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((value, index) => (
                    <Button key={index} value={value} handleClick={handleClick} />
                ))}
            </div>
        </div>
    );
};

const Display = ({ input }) => {
    return (
        <div className="display">
            {input}
        </div>
    );
};

const Button = ({ value, handleClick }) => {
    return (
        <button onClick={() => handleClick(value)}>
            {value}
        </button>
    );
};

export default Calculator;