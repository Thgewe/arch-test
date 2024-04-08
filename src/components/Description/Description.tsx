import React from 'react';
import cl from "./description.module.css";
import BlockName from "../BlockName/BlockName";

interface IDescriptionProps {
    description: string | null
}

const Description = ({description}: IDescriptionProps) => {
    return (
        <div className={cl.description}>
            <BlockName type={'default'} text={'ОПИСАНИЕ'} />
            <div className={cl.text}>{description ? description : 'Нет описания'}</div>
        </div>
    );
};

export default Description;