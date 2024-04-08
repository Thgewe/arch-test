import React from 'react';
import cl from './studio.module.css';
import BlockName from "../BlockName/BlockName";
import {BASE_API_IMAGE_SRC} from "../../utils/constants";
import {IStudio} from "../../models/shikimoriAPI/IStudio";

interface IStudioProps {
    studios: IStudio[],
}

const Studio = ({studios}: IStudioProps) => {
    return (
        <div className={cl.studio}>
            <BlockName type={"default"} text={"СТУДИЯ"} />
            <div className={cl.images}>
                {studios.map((studio) =>
                    <img key={studio.name} src={BASE_API_IMAGE_SRC + studio.image} alt={studio.name} />)}
            </div>
        </div>
    );
};

export default Studio;