import React from 'react';
import cl from "./topic.module.css";

interface ITopicProps {
    text: string,
    type?: 'news' | 'default',
}

const Topic = ({text, type}: ITopicProps) => {
    return (
        <div className={type === "default" ? cl.topic : cl.topic + ' ' + cl.orange}>
            {text}
        </div>
    );
};

export default Topic;