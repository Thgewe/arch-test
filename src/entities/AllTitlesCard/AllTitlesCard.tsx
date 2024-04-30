import React from 'react';
import cl from "./allTitlesCard.module.css";
import {Link} from "react-router-dom";
import {BASE_API_IMAGE_SRC} from "../../shared/utils/constants";
import {whatKind} from "../../shared/utils/whatKind";
import TShikimoriKind from "../../shared/models/shikimoriAPI/TShikimoriKind";

interface IAllTitlesCardProps {
    id: string,
    title: string,
    kind: TShikimoriKind,
    aired_on: string | null,
    image: string,
    path: string,
}


const AllTitlesCard = ({
                           title,
                           kind,
                           aired_on,
                           image,
                           path,
                           id
}: IAllTitlesCardProps) => {
    return (
        <Link to={path + id} className={cl.card} title={title}>
            <div className={cl.image_wrapper}>
                <img src={BASE_API_IMAGE_SRC + image} alt={title} className={cl.image}/>
            </div>
            <div className={cl.title}>{title}</div>
            <div className={cl.bottom}>
                <div className={cl.kind}>{whatKind(kind)}</div>
                {aired_on ? <div className={cl.year}>{new Date(aired_on).getFullYear()}</div> : null}
            </div>
        </Link>
    );
};

export default AllTitlesCard;