import React, {useEffect, useState} from 'react';
import cl from "./commentsList.module.css";
import BlockName from "../../entities/BlockName/BlockName";
import Comment from "../../entities/Comment/Comment";
import {useGetCommentsByIdAndTopicQuery} from "../../shared/api/shikimoriAPI";

interface ICommentsListProps {
    commentable_id: string,
}
interface IReplyUser {
    [index: number]: string,
    [index: string]: string,
}

const CommentsList = ({commentable_id}: ICommentsListProps) => {

    const { data, isLoading, isError } = useGetCommentsByIdAndTopicQuery(commentable_id);

    const [users, setUsers] = useState<IReplyUser>({});

    useEffect(() => {
        const obj: IReplyUser = {};
        if (data)
            data.forEach((comment) => {
                obj[comment.user.id] = comment.user.nickname
                obj[comment.user.nickname] = comment.user.id + ''
            setUsers(obj);
        });
    }, [data])

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    if (!data) return <div>Something went wrong</div>

    return (
        <div className={cl.comments}>
            <BlockName type={"comments"} />
            {data.map((comment) =>
                <Comment
                    key={comment.id}
                    body={comment.body}
                    updated_at={comment.updated_at}
                    created_at={comment.created_at}
                    user={comment.user}
                    commentable_id={comment.commentable_id}
                    reply_to={{
                        nickname: users[comment.body.match(/(?<=\[comment=\d*;)\d*/) ? +comment.body.match(/(?<=\[comment=\d*;)\d*/)![0] : ''],
                        id: users[users[comment.body.match(/(?<=\[comment=\d*;)\d*/) ? +comment.body.match(/(?<=\[comment=\d*;)\d*/)![0] : '']]
                    }}
                />
            )}
        </div>
    );
};

export default CommentsList;