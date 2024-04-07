import React, {FC, useState} from 'react';
import cl from "./newsList.module.css";
import INews from "../../models/shikimoriAPI/INews";
import NewsListItem from "../NewsListItem/NewsListItem";

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