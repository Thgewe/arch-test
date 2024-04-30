import IUser from "./IUser";

export interface IComment {
    id: string,
    user_id: string,
    commentable_id: string,
    commentable_type: string,
    body: string,
    html_body: string,
    created_at: string,
    updated_at: string,
    is_offtopic: boolean,
    is_summary: boolean,
    can_be_edited: boolean,
    user: IUser,
}