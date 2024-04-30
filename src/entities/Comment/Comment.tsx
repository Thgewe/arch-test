import React, {useEffect, useState} from 'react';
import cl from "./comment.module.css";
import IUser from "../../shared/models/shikimoriAPI/IUser";
import {timeElapsed} from "../../shared/utils/getTimeElapsed";

interface ICommentProps {
    body: string,
    updated_at: string,
    created_at: string,
    user: IUser,
    commentable_id: string,
    reply_to: {
        nickname: string,
        id: string,
    },
}
interface ICommentBody {
    text: string,
    to: string | null,
    replies: string[],
}

const Comment = ({
                     body,
                     updated_at,
                     created_at,
                     user,
                     commentable_id,
                     reply_to,
}: ICommentProps) => {

    const [comment, setComment] = useState<ICommentBody>({
        text: '',
        to: null,
        replies: [],
    });

    useEffect(() => {
        setComment({
            text: body
                .replace(/\[comment=\d+;\d+]/, '')
                .replace(/\[replies=.+]/, ''),
            to: body.match(/(?<=\[comment=\d*;)\d*/) ? body.match(/(?<=\[comment=\d*;)\d*/)![0] : null,
            replies: body.match(/(?<=\[replies=)\d*|(?<=\d*,)\d+/g)
                ? body.match(/(?<=\[replies=)\d*|(?<=\d*,)\d+/g)!
                : [],
        });
    }, [])

    if (!comment.text) return <></>

    return (
        <div className={cl.comment}>
            <div className={cl.user}>
                <img className={cl.avatar} src={user.avatar} alt={''}></img>
                <div className={cl.nickname}>{user.nickname}</div>
                <div className={cl.created}>{timeElapsed(created_at)}</div>
            </div>
            <div className={cl.text}>
                <span className={cl.appeal}>{comment.to ? '@' + reply_to.nickname : ''}</span>
                {comment.text}
            </div>
        </div>
    );
};

export default Comment;