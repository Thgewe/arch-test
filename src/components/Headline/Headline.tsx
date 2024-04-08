import React from 'react';
import cl from "./headline.module.css";

interface IHeadlineProps {
    text: string
    color?: "default" | "orange"
}

const Headline = ({text, color = "default"}: IHeadlineProps) => {

    let className = "";

    switch (color) {
        case "orange":
            className = cl.line + ' ' + (cl.orange);
            break;
        default:
            className = cl.line;
    }

    return (
        <div className={className}>
            {text}
        </div>
    );
};

export default Headline;