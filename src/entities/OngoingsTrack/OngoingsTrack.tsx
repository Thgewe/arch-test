import React from 'react';
import cl from "./ongoingsTrack.module.css";
import IShortAnime from "../../shared/models/shikimoriAPI/IShortAnime";
import {Link} from "react-router-dom";
import {BASE_API_IMAGE_SRC} from "../../shared/utils/constants";

interface IOngoingsTrackProps {
    list: IShortAnime[] | undefined
}

// TODO: empty data handling

const OngoingsTrack = ({list}: IOngoingsTrackProps) => {

    if (!list) return <div>Something went wrong</div>

    return (
        <div className={cl.track}>
            {list.map((anime) =>
                <Link className={cl.card} to={`/animes/${anime.id}`} key={anime.id}>
                    <div className={cl.image}>
                        <img src={BASE_API_IMAGE_SRC + anime.image.preview} alt={anime.name}/>
                    </div>
                    <div className={cl.title}>{anime.name}</div>
                </Link>)}
        </div>
    );
};

export default OngoingsTrack;