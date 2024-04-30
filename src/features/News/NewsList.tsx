import React, {FC} from 'react';
import cl from "./newsList.module.css";
import INews from "../../shared/models/shikimoriAPI/INews";
import NewsListItem from "../../entities/NewsListItem/NewsListItem";

interface INewsListProps {
    list: INews[]
}

const NewsList: FC<INewsListProps> = ({list}) => {
    return (
        <div className={cl.list}>
            {list.map((el) => <NewsListItem item={el} key={el.id}/>)}
        </div>
    );
};

export default NewsList;