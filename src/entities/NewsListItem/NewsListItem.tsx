import React, {FC} from 'react';
import cl from "./newsListItem.module.css";
import INews from "../../shared/models/shikimoriAPI/INews";
import {Link} from "react-router-dom";
import {timeElapsed} from "../../shared/utils/getTimeElapsed";

interface INewsListItemProps {
    item: INews
}

const NewsListItem: FC<INewsListItemProps> = ({item}) => {

    const src = item.html_footer.match(/(?<=src=").*?(?=")|(?<=src=\\").*?(?=\\")/)
        ? item.html_footer.match(/(?<=src=").*?(?=")|(?<=src=\\").*?(?=\\")/)![0]
        : null

    return (
        <Link className={cl.item} to={"/news/" + item.id}>
            <div className={cl.thumbnail} style={{backgroundImage: "url(" + src + ")"}}>
            </div>
            <div className={cl.status}>
                {timeElapsed(item.created_at)}
            </div>
            <div className={cl.title}>
                {item.topic_title}
            </div>
        </Link>
    );
};

export default NewsListItem;