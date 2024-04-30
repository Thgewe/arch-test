import IShortAnime from "./IShortAnime";
import {IStudio} from "./IStudio";
import {IVideo} from "./IVideo";
import {IScreenshot} from "./IScreenshot";
import {IGenre} from "./IGenre";
import {IRatesStats} from "./IRatesStats";

export interface IAnime extends IShortAnime {
    rating: string,
    english: string[],
    japanese: string[],
    synonyms: string[],
    licensors: string[],
    license_name_ru: null | string,
    duration: string,
    description: string | null,
    description_html: string,
    description_source: string | null,
    franchise: string,
    favoured: boolean,
    ongoing: boolean,
    anons: boolean,
    thread_id: string,
    topic_id: string,
    myanimelist_id: string,
    rates_scores_stats: IRatesStats[],
    rates_statuses_stats: IRatesStats[],
    updated_at: string,
    next_episode_at: null | string,
    genres: IGenre[],
    studios: IStudio[],
    videos: IVideo[],
    screenshots: IScreenshot[],
    user_rate: null | string,
}