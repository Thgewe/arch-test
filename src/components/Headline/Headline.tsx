import React from 'react';
import cl from "./headline.module.css";

interface IHeadlineProps {
    text: string
    color: "orange"
}

const Headline = ({text, color}: IHeadlineProps) => {

    let className = cl.line;

    switch (color) {
        case "orange":
            className = cl.line + ' ' + (cl.orange);
            break;
        default:
    }

    return (
        <div className={className}>
            {text}
        </div>
    );
};

export default Headline;