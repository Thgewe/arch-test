import React from 'react';
import {useParams} from "react-router-dom";
import {useGetNewsItemByIdQuery} from "../../services/shikimoriAPI";
import cl from "./newsPage.module.css";
import {timeElapsed} from "../../utils/getTimeElapsed";
import Topic from "../../components/Topic/Topic";
import PageHeadline from "../../components/PageHeadline/PageHeadline";
import CommentsList from "../../components/CommentsList/CommentsList";

// TODO: error, loading, no data handling
//       images and slider
//       comments

const NewsPage = () => {
    const { id } = useParams<{id: string}>() as {id: string}
    const { data, isLoading, isError } = useGetNewsItemByIdQuery(id);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    if (!data) return <div>Something went wrong</div>

    const formatText = () => {
        let str: string = data.html_body;
        let newStr = str.replace(/(?<=class=")bubbled b-link"/g, 'default-link"');
        newStr = newStr.replace(/(?<=class=")quote-content"/g, cl.quote + '"');
        newStr = newStr.replace(/(?<=class=")b-link"/g, 'default-link"');
        newStr = newStr.replace(/class="name-en"/g, 'class=' + cl.nameEn);
        newStr = newStr.replace(
            /(?<=class=")c-video b-video unprocessed youtube {2}fixed"/g,
            cl.video + ' ' + cl.youtube + '"'
        );
        newStr = newStr.replace(/https:\/\/shikimori.one/g, '');
        return newStr;
    };


    return (
        <>
            <PageHeadline titleRu={data.topic_title}/>
            <div className={cl.author}>
                <div className={cl.avatar}>
                    <img className={cl.image} src={data.user.avatar}     alt="user avatar"/>
                </div>
                <div className={cl.info}>
                    <Topic text={"новость"} type={"news"} />
                    <div className={cl.nickname}><span>{data.user.nickname}</span> {' о ' + data.linked?.name}</div>
                    <div className={cl.bottom}>
                        <div className={cl.commentsCounter}>{data.comments_count}</div>
                        <time className={cl.time} dateTime={data.created_at}>{timeElapsed(data.created_at)}</time>
                    </div>
                </div>
            </div>
            <div className={cl.text} dangerouslySetInnerHTML={{__html: formatText()}}></div>
            <CommentsList commentable_id={data.id} />
        </>
    );
};

export default NewsPage;