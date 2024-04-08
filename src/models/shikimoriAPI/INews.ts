import IUser from "./IUser";
import IShortAnime from "./IShortAnime";

export default interface INews {
    id: string
    topic_title: string
    body: string
    title: string
    created_at: string
    html_footer: string
    html_body: string
    user: IUser
    comments_count: number
    linked: IShortAnime | null
}